import CelebrityNews from "./components/CelebrityNews/CelebrityNews.jsx";
import DramasSection from "./components/Dramas/DramasSection.jsx";
import LatestNews from "./components/LatestNews/LatestNews.jsx";
import LiveSteamSection from "./components/LiveSteamSection/LiveSteamSection"
import LotterySection from "./components/LotterySection/LotterySection.jsx";
import NavBar from "./components/NavBar/NavBar"
import OlympicNews from "./components/OlympicNews/OlympicNews.jsx";
import SpotlightNews from "./components/SpotlightNews/SpotlightNews.jsx";
import ScreenWidthProvider from "./context/ScreenWidth.jsx";

function App() {
  
    return (
        <ScreenWidthProvider>
            <div className="">
                <NavBar/>
                <LiveSteamSection/>
                <LatestNews/>
                <SpotlightNews/>
                <CelebrityNews/>
                <OlympicNews/>
                <LotterySection/>
                <DramasSection/>
            </div>
        </ScreenWidthProvider>
    )
}

export default App
