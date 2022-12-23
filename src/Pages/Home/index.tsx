import "./style.scss";

import {BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovements } from "../../api/movements";

export function Home() {

  const [menuIsActive, setMenuIsActive] = useState(true)
  const [movements, setMovements] = useState([]);
  
  async function oi(){
    const seta = await getMovements()
    console.log(seta)    
  }
  

  useEffect(() => {
    oi()
  }, [movements])


  return (
    <div className="nav-header">
      <header>
        <h3>RODRENT</h3>
        <BiUserCircle size={30}/>
      </header>
      
      <div className="envolve">
      <p className="arrow" onClick={() => setMenuIsActive(!menuIsActive)}>&rarr;</p> 
        <nav className={menuIsActive ? ('nave-active'):('nav-inactive')} >        
          <div className="links">
            <Link to="home" className="home-link">Home</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="settings">Settings</Link>
          </div>
        </nav>
        <main>
          <h4>
            Last movements
          </h4>
          <table>
            <tr className="header">
              <th>Value</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>              
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>              
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Alfreds Futterkiste</td>
            </tr>
          </table>
        </main>
      </div>
    </div>
  );
}