import "./style.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovements } from "../../api/movements";
import { NavbarDefault } from "../../components/Nav";

export function Home() {

  const [movements, setMovements] = useState([]);
  
  async function oi(){
    const seta = await getMovements()
    console.log(seta)
    setMovements([])    
  }
  useEffect(() => {
    oi()
  }, [movements])


  return (
     <>
      <NavbarDefault/>
      
      <div className="content">
        <nav >        
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
    </>
  );
}