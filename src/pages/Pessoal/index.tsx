import { useSpring, animated } from 'react-spring'

export const Pessoal = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateX(-800px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 200, friction: 80 },
  })
  return (
    <section className="mx-auto flex flex-col justify-center items-center  max-w-[800px]">
      <animated.h1
        style={styles}
        className="text-purple-400 text-4xl self-start font-roboto-mono ml-4 lg:ml-0 mt-2 lg:mt-10"
      >
        Oi, prazer! Me chamo Jessica 🙃
      </animated.h1>
      <article>
        <p className="text-slate-700 dark:text-slate-300 mx-4 lg:ml-0 mt-2 lg:mt-10 mb-40">
          Falar sobre minha vida profissional é muito mais fácil do que sobre a
          pessoal, não é curioso? Mas vou tentar ser sucinta e coerente aqui.
          <br />
          Nasci em Belém-PA no ano de 1998 (haha, achou que eu revelaria minha
          idade facilmente? Você precisa de uma calculadora para isso). Desde
          2008, moro no interior do Ceará, onde já explorei diferentes lugares e
          conheci variadas pessoas e paisagens. Aqui vão algumas curiosidades
          sobre mim:
          <ul className="mx-7 list-disc list-purple-400">
            <li>
              Tenho um amor imenso por animais, especialmente cachorros. Sou mãe
              de um cachorro chamado Pingo.
            </li>
            <li>
              Sou apaixonada por livros desde sempre. Um dos meus maiores sonhos
              é ter uma biblioteca em casa.
            </li>
            <li>
              Posso passar horas navegando na internet em busca de informações
              aleatórias, especialmente na Wikipedia.
            </li>
            <li>
              Passo o dia inteiro ouvindo música no Spotify. Aliás, se alguém da
              equipe de lá estiver lendo isso: ME CONTRATA!
            </li>
            <li>
              Meu jogo favorito é Stardew Valley, seguido de perto por Heavy
              Rain. Jogos de escolhas sempre me atraíram muito.
            </li>
            <li>
              Sou a típica <i>tia do pavê</i>. Aliás, você sabe qual é o mingau
              favorito das vacas?
            </li>
          </ul>
          Enfim, essas são algumas informações para que você possa me conhecer
          melhor. Agradeço por ter lido até aqui. 💜
        </p>
      </article>
    </section>
  )
}
