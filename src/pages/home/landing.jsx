
  export default function Example({saludo}) {
  
    return (
  
      <div class="bg-white dark:bg-black rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <img src="https://img.icons8.com/officel/16/000000/start.png"/>
        </span>
      </div>4
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm ">
       yonatan {saludo}
      </p>

      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <button  class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg" onClick={() => modoDark()} >Cambiar Dark</button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg" onClick={() => modoLigth()} >Cambiar Ligth</button>
            </div>
          </div>
    </div>
    
    )
  }
  