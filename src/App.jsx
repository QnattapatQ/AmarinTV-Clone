import AutomotiveNews from "./components/AutomotiveNews/AutomotiveNews.jsx";
import CelebrityNews from "./components/CelebrityNews/CelebrityNews.jsx";
import DramasSection from "./components/Dramas/DramasSection.jsx";
import LatestNews from "./components/LatestNews/LatestNews.jsx";
import LifeStyle from "./components/LifeStyle/LifeStyle.jsx";
import LiveSteamSection from "./components/LiveSteamSection/LiveSteamSection"
import LongpungSection from "./components/LongpungSection/LongpungSection.jsx";
import LotterySection from "./components/LotterySection/LotterySection.jsx";
import NavBar from "./components/NavBar/NavBar"
import OlympicNews from "./components/OlympicNews/OlympicNews.jsx";
import PopularNews from "./components/PopularNews/PopularNews.jsx";
import SpotlightNews from "./components/SpotlightNews/SpotlightNews.jsx";
import VarietyNews from "./components/VarietyNews/VarietyNews.jsx";
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
                <LifeStyle/>
                <AutomotiveNews/>
                <VarietyNews/>
                <LongpungSection/>
                <PopularNews/>
            </div>
        </ScreenWidthProvider>
    )
}

export default App
