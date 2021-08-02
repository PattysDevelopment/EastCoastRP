function App() {
  const toggleMode = () => {
    if(localStorage.theme === undefined){
      localStorage.theme = 'dark';
      console.log("dark set")
    }
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      console.log("set theme to dark")
    } else {
      console.log("set theme to light")
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div className="App btn btn-block">
      <div className=" flex ">
        <button onClick={toggleMode} className=" p-2 text-white rounded ">Dark Mode</button>
      </div>
    </div>
  );
}

export default App;