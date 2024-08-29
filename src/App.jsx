import LatestNews from "./components/LatestNews/LatestNews.jsx";
import LiveSteamSection from "./components/LiveSteamSection/LiveSteamSection"
import NavBar from "./components/NavBar/NavBar"
import ScreenWidthProvider from "./context/ScreenWidth.jsx";

function App() {
  
    return (
        <ScreenWidthProvider>
            <div className="">
                <NavBar/>
                <LiveSteamSection/>
                <LatestNews/>
            </div>
        </ScreenWidthProvider>
    )
}

export default App
