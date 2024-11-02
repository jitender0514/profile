
import { useState, createContext, useContext } from 'react'

export const ActiveSectionContext = createContext(
    { 
        activeSection: "home", 
        setActiveSection: () => {},
        timeOfLastClick: 0,
        setTimeOfLastClick: () => {}
    }
)

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}

// eslint-disable-next-line react/prop-types
const ActiveSectionContextProvider = ({children})  => {
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider


