const menu = document.querySelector<HTMLButtonElement>('#menu-toggle')
const navigation = document.querySelector<HTMLElement>('#main-navigation')
const header = menu?.closest<HTMLElement>('.site-header')
const mobile = window.matchMedia('(max-width: 1100px)')

function setMenu(open: boolean) {
  if (!menu || !navigation) return
  navigation.hidden = mobile.matches && !open
  const expanded = mobile.matches && open
  header?.toggleAttribute('data-menu-open', expanded)
  document.documentElement.classList.toggle('mobile-menu-open', expanded)
  menu.setAttribute('aria-expanded', String(open))
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
}
function syncMenu() {
  if (menu) menu.hidden = !mobile.matches
  setMenu(!mobile.matches)
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'))
navigation?.addEventListener('click', event => {
  if ((event.target as HTMLElement).closest('a') && mobile.matches) {
    setMenu(false)
    menu?.focus({ preventScroll: true })
  }
})
document.addEventListener('focusin', event => {
  if (mobile.matches && event.target instanceof Node && !header?.contains(event.target)) setMenu(false)
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && menu?.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    menu.focus()
  }
})
mobile.addEventListener('change', syncMenu)
syncMenu()

const sections = [...document.querySelectorAll<HTMLElement>('section[id]')]
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-section]')]
function activate(id: string) {
  links.forEach(link => {
    if (link.dataset.section === id) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  })
}
if (sections.length) {
  const updateActiveSection = () => {
    const offset = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
    const current = atBottom
      ? sections[sections.length - 1]
      : sections.filter(section => section.getBoundingClientRect().top <= offset + 1).at(-1)
    activate(current?.id || sections[0].id)
  }

  let scheduled = false
  const scheduleUpdate = () => {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      updateActiveSection()
    })
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate)
  window.addEventListener('hashchange', scheduleUpdate)
  updateActiveSection()
}
