export default function Layout  ({children}) {
    const modoDark = () => {
      
        localStorage.theme = 'dark';
       
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
  
      }
      const modoLigth = () => {
        
        localStorage.theme = 'light';
       if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  }

return (
<>
  {children}
</>

) 
}