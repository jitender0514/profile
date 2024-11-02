import { Square, SquareCheckBig } from 'lucide-react'
import useTheme from '../../contexts/theme'
import { allThemesOptionMap } from '../../lib/data'

const Btn = () => {
    const {toggleMode, themeMode} = useTheme()
    console.log(allThemesOptionMap);
    return (
        <>
        { allThemesOptionMap.map((theme)=> 
        (<button key={theme.theme}  className='text-white bg-blue-200 hover:bg-blue-300  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-1'  onClick={() => toggleMode(theme.theme)}> 
            {theme.theme === themeMode ? 
                <SquareCheckBig color={theme.color} size={22} strokeWidth={3} /> :
                <Square color={theme.color} size={22} strokeWidth={3} />}
            
        </button>)
        )}
        </>
    )
}

export default Btn