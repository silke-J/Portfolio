import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/footer/Footer";
import Navigation from "./Components/Navigation";
import WordPressFigma from "./Pages/wordPressFigma";




function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "#skills" },
    { path: "#portfolio" },
    { path: "#about" },
    { path: "#contact"},
    {path: "#top"},
    { path: "/figma", element: <WordPressFigma /> },
    
  ]);

  return (
    <div className="app">
      <Navigation/>
      <div className="content">{routes}</div>
    <Footer/>
    </div>
  );
}

export default App;
