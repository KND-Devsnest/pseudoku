import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Howtoplay from "./components/Howtoplay";
import { data } from "./data/sudoku.json";
const randomElement = data[Math.floor(Math.random() * data.length)];
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main randomElement={randomElement} />
      <Howtoplay />
      <Footer />
    </div>
  );
};

export default App;
