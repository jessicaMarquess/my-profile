import { useSpring, animated } from 'react-spring'
interface ThemeWelcomeProps {
  theme: string
}
const Welcome: React.FC<ThemeWelcomeProps> = ({ theme }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateX(-800px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 200, friction: 80 },
  })

  return (
    <div className="flex justify-center">
      <div className="mx-4 lg:w-[67.5rem] mt-5 lg:mt-10 lg:mx-4 lg:flex justify-between items-center">
        <div>
          <animated.h1
            style={styles}
            className={`text-slate-700  dark:text-slate-300 font-roboto-mono text-6xl mb-2`}
          >
            Oi! Meu nome é <br className="hidden lg:inline" />
            <strong className="text-purple-500 pb-2">Jessica</strong>.
          </animated.h1>
          <p
            className={`text-${theme === 'dark' ? 'white' : 'slate-700'} dark:text-slate-300 text-3xl`}
          >
            Sou Desenvolvedora{' '}
            <span className="text-purple-500 pb-2"> Front-End</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
