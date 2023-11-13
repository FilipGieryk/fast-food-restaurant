import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/common/header";
import MainInfo from "./components/mainPage/main-info";
import WhatsNew from "./components/mainPage/whats-new";
import Donwloadapp from "./components/mainPage/donwload-app";
import ComeToOurWorld from "./components/mainPage/come-to-our-world";
import Footer from "./components/common/footer";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainInfo />
      <WhatsNew />
      <Donwloadapp />
      <ComeToOurWorld />
      <Footer></Footer>
    </div>
  );
}

export default App;
