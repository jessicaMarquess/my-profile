import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const dist = new URL('../dist/', import.meta.url)
const html = (path) => readFile(new URL(path, dist), 'utf8')

test('a home estática preserva projetos, âncoras, mascote e currículo', async () => {
  const home = await html('index.html')
  for (const id of ['conteudo', 'projetos', 'experiencia', 'contato']) {
    assert.ok(home.includes(`id="${id}"`), id)
    assert.ok(home.includes(`href="#${id}"`), id)
  }
  for (const project of ['Balcão', 'Ajudaé', 'Pixel Hub', 'Bookquest']) {
    assert.ok(home.includes(project), project)
  }
  assert.match(home, /pinscher preto e caramelo/)
  assert.doesNotMatch(home, /<astro-island/)
  assert.match(home, /href="\/curriculo-jessica-marques\.pdf" download/)
  await access(new URL('curriculo-jessica-marques.pdf', dist))
  await access(new URL('developers-sanctuary.webp', dist))
  await access(new URL('fonts/inter-latin.woff2', dist))
})

test('perfis têm páginas estáticas próprias e a página 404 é noindex', async () => {
  for (const route of ['perfil-pessoal', 'perfil-profissional']) {
    const profile = await html(`${route}/index.html`)
    assert.match(profile, /<main[^>]*id="conteudo"/)
    assert.match(profile, /href="\/#projetos"/)
    assert.doesNotMatch(profile, /<astro-island/)
  }
  assert.match(await html('404.html'), /name="robots" content="noindex"/)
})

test('sitemap preserva as URLs públicas e exclui a página de erro', async () => {
  const sitemap = await html('sitemap.xml')
  for (const route of ['/', '/perfil-pessoal/', '/perfil-profissional/']) {
    assert.ok(sitemap.includes(`https://www.jessicamarquesdev.com.br${route}`))
  }
  assert.doesNotMatch(sitemap, /404/)
})
