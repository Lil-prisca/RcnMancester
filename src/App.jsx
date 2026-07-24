import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approuters from "./routes/Approuters";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Approuters></Approuters>
    </BrowserRouter>
  );
}

export default App;
