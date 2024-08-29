import React, { createContext, useState, useEffect } from 'react'

export const ScreenWidthContext = createContext();

const ScreenWidthProvider = ({ children }) => {

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);

        return () => {
            window.removeEventListener('resize', detechSize);
        }
    }, [desktopSize]);

    return (
        <ScreenWidthContext.Provider value={desktopSize}>
            { children }
        </ScreenWidthContext.Provider>
    )
}

export default ScreenWidthProvider