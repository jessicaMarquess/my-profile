export function setupSecurity() {
  const button = document.querySelector<HTMLButtonElement>('#security-button')
  const status = document.querySelector<HTMLElement>('#security-status')
  const region = button?.closest<HTMLElement>('.security')
  if (!button || !status || !region) return
  let unlocked = false
  button.hidden = false
  const activate = () => {
    if (!unlocked) status.textContent = 'Security system activated.'
  }
  const rest = () => {
    if (!unlocked) status.textContent = ''
  }
  region.addEventListener('pointerenter', activate)
  button.addEventListener('focus', activate)
  region.addEventListener('pointerleave', () => { if (document.activeElement !== button) rest() })
  button.addEventListener('blur', () => { if (!region.matches(':hover')) rest() })
  button.addEventListener('click', () => {
    unlocked = true
    status.textContent = 'Achievement unlocked: You survived the Pinscher.'
    region.setAttribute('data-state', 'unlocked')
  })
}
