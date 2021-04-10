import React, { useState } from "react";
import { motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";
import searchIcon from "../../Images/Icons/search.svg";

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
      className="tablelist-wrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Table list={list} string={"plain"} />
      <Table list={list} string={"striped"} />
      <Table list={list} string={"zebra"} />
    </motion.div>
  );
};

const Table = props => {
  const [search, setSearch] = useState("");
  const list = props.list.filter(
    obj =>
      obj.Id.toString().includes(search) ||
      obj.Name.toLowerCase().includes(search.toLowerCase()) ||
      obj.Salary.toLowerCase().includes(search.toLowerCase()) ||
      obj.Country.toLowerCase().includes(search.toLowerCase()) ||
      obj.City.toLowerCase().includes(search.toLowerCase())
  );
  const string = props.string;
  const h2String = props.string === 'plain' ? 'Simple plain table' : props.string === 'striped' ? 'Simple striped table' : 'Amazing zebra table'
  const pString = props.string === 'plain' ? 'Has a filter tho' : props.string === 'striped' ? 'Has stripes, okay?' : 'Table with white background'
  return (
    <div className={"table-wrapper " + string}>
      <div className="table-top">
        <div className="table-top-text">
          <h2 style={{textAlign: 'left'}}>{h2String}</h2>
          <p className="muted-text" style={{textAlign: 'left'}}>
            {pString}
          </p>
        </div>
        <div className="search-table">
          <input
            type="text"
            placeholder="Search table"
            onChange={e => setSearch(e.target.value)}
          />
          <div className="search-icon-wrapper">
            <img src={searchIcon} alt="search icon" className="search-icon"/>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Country</th>
          <th>City</th>
        </tr>
        {list.length > 0
          ? list.map((item, index) => {
              return (
                <tr key={index} className="table-row">
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Salary}</td>
                  <td>{item.Country}</td>
                  <td>{item.City}</td>
                </tr>
              );
            })
          : null}
      </table>
      {list.length === 0 ? <p>No element matching the query is found</p> : null}
    </div>
  );
};

export default TableList;
