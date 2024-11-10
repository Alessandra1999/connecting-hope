export function Switcher() {
    function handleToggle() {
    
      const isDark = localStorage.theme === "dark";
      localStorage.theme = isDark ? "light" : "dark";
  
   
      document.documentElement.classList.toggle("dark", !isDark);
    }
  
    return (
      <>
        <button onClick={()=>handleToggle()}>TROCA TROCA BRABO</button>
      </>
    );
  }
  