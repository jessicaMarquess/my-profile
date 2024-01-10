export default function App() {
  return (
    <div className='w-screen h-screen bg-slate-700 flex justify-center '>
      <div className="mt-40 mx-4 w-full flex flex-col items-center">
        <img src="https://media.tenor.com/mhLPO2VldCkAAAAM/0001.gif" className=" w-80 h-80 pb-6" />
        <h1 className="text-slate-300 font-sans text-3xl">Oi! Meu nome é <strong className="text-purple-500 pb-2">Jessica 🙃</strong></h1>

        <p className="text-slate-300 text-center">Esta página ainda está em desenvolvimento ⚒️. <br />Enquanto isso, que tal olhar meus repositórios no <a className='font-bold text-purple-400 hover:underline ' href="https://github.com/jessicaMarquess" target="_blank"> github</a>??</p>
      </div>
    </div>
  )
}