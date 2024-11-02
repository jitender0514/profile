import useTheme from "../../contexts/theme";

const ThemeBtn = () => {
  const { toggleMode } = useTheme();
  return (
    <div className="dropdown dropdown-end fixed top-4 right-4">
      <div tabIndex={0} role="button" className="border-8 border-zinc-400">
        <div
          className=" bg-white 
    text-black dark:bg-black 
    dark:text-white 
    blue:bg-sky-950 blue:text-white
    yellow:bg-yellow-800 yellow:text-white
    red:bg-red-200 red:text-black h-4 w-4"
        ></div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <button onClick={() => toggleMode("light")}>Light Theme</button>
        </li>
        <li>
          <button onClick={() => toggleMode("dark")}>Dark Theme</button>
        </li>
        <li>
          <button onClick={() => toggleMode("red")}>Red Theme</button>
        </li>
        <li>
          <button onClick={() => toggleMode("yellow")}>Yellow Theme</button>
        </li>
        <li>
          <button onClick={() => toggleMode("blue")}>Blue Theme</button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeBtn;
