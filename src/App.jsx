import LatestNews from "./components/LatestNews/LatestNews"
import LiveSteamSection from "./components/LiveSteamSection/LiveSteamSection"
import NavBar from "./components/NavBar/NavBar"

function App() {
  
    return (
        <div className="h-[200vh]">
            <NavBar/>
            <LiveSteamSection/>
            <LatestNews/>
        </div>
    )
}

export default App
