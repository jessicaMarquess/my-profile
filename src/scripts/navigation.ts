const menu = document.querySelector<HTMLButtonElement>('#menu-toggle')
const navigation = document.querySelector<HTMLElement>('#main-navigation')
const mobile = window.matchMedia('(max-width: 1100px)')

function setMenu(open: boolean) {
  if (!menu || !navigation) return
  navigation.hidden = mobile.matches && !open
  menu.setAttribute('aria-expanded', String(open))
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
}
function syncMenu() {
  if (menu) menu.hidden = !mobile.matches
  setMenu(!mobile.matches)
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'))
navigation?.addEventListener('click', event => {
  if ((event.target as HTMLElement).closest('a') && mobile.matches) setMenu(false)
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
const visible = new Set<string>()
function activate(id: string) {
  links.forEach(link => {
    if (link.dataset.section === id) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  })
}
if (sections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target.id)
      else visible.delete(entry.target.id)
    })
    const current = sections.find(section => visible.has(section.id))
    if (current) activate(current.id)
  }, { rootMargin: '-90px 0px -35% 0px', threshold: 0 })
  sections.forEach(section => observer.observe(section))
  activate(location.hash.slice(1) || 'inicio')
}
