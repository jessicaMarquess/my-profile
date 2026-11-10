export function setupJason() {
  const trigger = document.querySelector<HTMLButtonElement>('#jason-trigger')
  const panel = document.querySelector<HTMLDialogElement>('#jason-dialog')
  const close = document.querySelector<HTMLButtonElement>('#jason-close')
  const treat = document.querySelector<HTMLButtonElement>('#jason-treat')
  const status = document.querySelector<HTMLElement>('#jason-status')
  const art = document.querySelector<HTMLElement>('#jason-art')
  if (!trigger || !panel || !close || !treat || !status || !art) return

  trigger.hidden = false
  trigger.addEventListener('click', () => {
    if (panel.open) panel.close()
    else {
      panel.show()
      trigger.setAttribute('aria-expanded', 'true')
      close.focus()
    }
  })
  close.addEventListener('click', () => panel.close())
  panel.addEventListener('close', () => {
    trigger.setAttribute('aria-expanded', 'false')
    trigger.focus({ preventScroll: true })
  })
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.open) {
      event.preventDefault()
      panel.close()
    }
  })
  treat.addEventListener('click', () => {
    if (treat.disabled) return
    panel.dataset.fed = 'true'
    art.setAttribute('aria-label', 'Jason sem a máscara, sorrindo ao lado de um petisco.')
    status.textContent = 'Você sobreviveu ao Jason. Ele ganhou um petisco.'
    treat.textContent = 'Petisco entregue!'
    treat.disabled = true
    close.focus({ preventScroll: true })
  })
}
