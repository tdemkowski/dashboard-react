import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Dashboard from "./Sections/dashboard";
import Icons from "./Sections/icons";
import Maps from "./Sections/maps";
import Notifications from "./Sections/notifications";
import TableList from "./Sections/tableList";
import Typography from "./Sections/typography";
import UserProfile from "./Sections/userProfile";
import ReduxPlaying from './Sections/reduxPlaying';

import icons from '../loadIcons'

const Main = props => {
  const location = useLocation();
  return (
    <motion.div className="main" style={{ position: "relative" }}>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/typography">
              <Typography />
            </Route>
            <Route path="/maps">
              <Maps />
            </Route>
            <Route path="/tableList">
              <TableList />
            </Route>
            <Route path="/icons">
              <Icons icons={icons}/>
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/reduxPlaying">
              <ReduxPlaying />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </AnimatePresence>
    </motion.div>
  );
};

export default Main;
