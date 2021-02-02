import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Sidebar from "./Components/sidebar";
import Main from "./Components/main";
import Navbar from "./Components/navbar";
import Theme from "./Components/theme";

import 'leaflet/dist/leaflet.css'

import defaultImage from './Images/image1.jpg'

function App() {
  const [image, setImage] = useState(defaultImage);
  const [color, setColor] = useState("#0000009d");

  useEffect(() => {
    const link = document.createElement('link')
    const script = document.createElement('script')

    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    link.crossorigin=""

    script.src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    script.integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    script.crossorigin=""

    document.body.appendChild(link)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="App">
      <div className="App-header"></div>
      <Sidebar logo={logo} image={image} setImage={setImage} color={color} setColor={setColor} />
      <Theme image={image} setImage={setImage} color={color} setColor={setColor} />
      <div className="main-wrapper">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
