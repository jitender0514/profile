import { useCallback, useEffect, useState } from "react";
import "./App.css";

import { ThemeProvider } from "./contexts/theme";
import Btn from "./components/ui/Btn";
import ActiveSectionContextProvider from "./contexts/acitve-section";
import Header from "./components/Layout/Header";
import Profile from "./pages/Profile";
import { allThemesOptions } from "./lib/data";

function App() {
  const [theme, setTheme] = useState("blue");

  const toggleThemeMode = useCallback(
    (mode) => {
      const availableModes = allThemesOptions;
      if (!availableModes.includes(mode)) return;

      setTheme(mode);

      document.body.classList.remove(...availableModes);
      document.body.classList.add(mode);
    },
    []
  );

  useEffect(() => { 
    toggleThemeMode(theme);
   }, [theme, toggleThemeMode]);

  return (
    <ActiveSectionContextProvider>
      <ThemeProvider value={{ themeMode: theme, toggleMode: toggleThemeMode }}>
        <div
          className="flex flex-col min-h-screen w-full 
    bg-gradient-to-r
    from-slate-100 via-white to-slate-100
    dark:from-gray-900 dark:via-gray-950  dark:to-gray-900

     yellow:from-yellow-800 yellow:via-yellow-700  yellow:to-yellow-800
    blue:from-sky-900 blue:via-sky-950  blue:to-sky-900
    red:from-red-300 red:via-red-200  red:to-red-300    
    "
        >
          <Header />

          <Profile />

          <div className="fixed sm:left-0 sm:bottom-0 sm:top-auto sm:right-auto top-0 left-0 sm:m-4 my-5 mx-4 z-[99]">
            <Btn />
          </div>
        </div>
      </ThemeProvider>
    </ActiveSectionContextProvider>
  );
}

export default App;
