const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="hidden sm:inline border border-x-0 border-b-0 border-slate-700 dark:border-slate-300 text-center p-4 fixed bottom-0 w-full text-slate-700 dark:text-slate-300 font-roboto-mono dark:bg-black bg-slate-200">
      <a
        href="https://github.com/jessicaMarquess"
        target="_blank"
        rel="noreferrer"
      >
        Jessica Marques
      </a>{' '}
      - {currentYear}
    </footer>
  )
}

export default Footer
