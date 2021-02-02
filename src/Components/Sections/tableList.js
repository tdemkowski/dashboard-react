import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

import "./Styles/tableList.scss";

const TableList = () => {
  const list = React.useMemo(
    () => [
      {
        Id: 1,
        Name: "Dakota Rice",
        Salary: "$36.738",
        Country: "Niger",
        City: "Oud-Turnhout",
      },
      {
        Id: 2,
        Name: "Minerva Hooper",
        Salary: "$23,789",
        Country: "Curaçao",
        City: "Sinaai-Waas",
      },
      {
        Id: 3,
        Name: "Sage Rodriguez",
        Salary: "$56,142",
        Country: "Netherlands",
        City: "Baileux",
      },
      {
        Id: 4,
        Name: "Philip Chaney",
        Salary: "$38,735",
        Country: "Korea, South",
        City: "Overland Park",
      },
      {
        Id: 5,
        Name: "Doris Greene",
        Salary: "$63,542",
        Country: "Malawi",
        City: "Feldkirchen in Kärnten",
      },
    ],
    []
  );




  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      tableList

    </motion.div>
  );
};

export default TableList;
