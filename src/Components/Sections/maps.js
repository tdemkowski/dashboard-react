import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";
import L from 'leaflet'

import "./Styles/map.scss";

const Maps = () => {
  useEffect(() => {
    const sydneyCoordinates = {latitude: -33.8559799094, longitude: 151.20666584}
    let mymap = L.map("mapid").setView([sydneyCoordinates.latitude, sydneyCoordinates.longitude], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoidGRlbWs5NiIsImEiOiJja2J6NnYycmEwaWoyMnNsbTdqc2EwMnV5In0.Ku0nePVvd39pCiZd8Ntq6A",
      }
    ).addTo(mymap);
  }, [])

  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="map-window"
    >
      <div id="mapid"></div>
    </motion.div>
  );
};

export default Maps;
