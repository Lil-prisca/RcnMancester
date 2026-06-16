import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approuters from "./routes/Approuters";

function App() {
  return (
    <BrowserRouter>
      <Approuters></Approuters>
    </BrowserRouter>
  );
}

export default App;
