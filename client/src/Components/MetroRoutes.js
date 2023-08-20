import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const MetroRoutes = () => {
  const [stations, setStations] = useState([]);
  const [path, setPath] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allStation");
        setStations(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const ct = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/desiredRoute", {
      from: document.getElementById("from").value,
      to: document.getElementById("to").value,
    });
    console.log(res);
    setPath(res.data.path);
    setLoad(true);
  };

  return (
    <>
      <Sidebar />
      <div className="metro-main">
        <div className="form-div">
            <div className="from">
            <div className="label" >From:</div>
            <select id="from">
              {stations.map((st) => {
                  return <option value={`${st}`}>{st}</option>;
                })}
            </select>
                </div>
                <div className="to">
            <div className="label" >To:</div>
            <select id="to">
              {stations.map((st) => {
                  return <option value={`${st}`}>{st}</option>;
                })}
            </select>
            </div>
            <input type="submit" id="form-s" onClick={ct} value="Submit" />
        </div>
        <div className="path-div">{load && 
        <ul>
          
        {path.map((st)=>{
          return (
              <li>{st}</li>
            )
          })}
          </ul>
        }</div>
      </div>
    </>
  );
};

export default MetroRoutes;
