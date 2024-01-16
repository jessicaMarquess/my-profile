const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border border-x-0 border-b-0 border-slate-700 dark:border-slate-300 text-center p-4 fixed bottom-0 w-full text-slate-700 dark:text-slate-300 font-roboto-mono">
      Jessica Marques - {currentYear}
    </footer>
  )
}

export default Footer
