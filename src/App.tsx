import CreateNFT from "./components/create/CreateNFT";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import WeeklyNFT from "./components/weekly/WeeklyNFT";
import Footer from "./components/footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Header />
        <div className="content-container">
          <Hero />
          <WeeklyNFT />
          <CreateNFT />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
