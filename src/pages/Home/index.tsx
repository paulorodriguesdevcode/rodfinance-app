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
        <nav className="nav-menu" >        
          <div className="links">
            <Link to="home" className="home-link">Home</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="settings">Settings</Link>
          </div>
        </nav>
        <main>
          <div className="cards">
            <div className="card">
              <div className="card-title">
                <span>
                  TOTAL ENTRADA DO MÊS
                </span>
              </div>
              <div className="card-body">
                <span>
                  525.50
                </span>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <span>
                  TOTAL SAÍDA DO MÊS
                </span>
              </div>
              <div className="card-body">
                <span className="body">
                  400.00
                </span>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <span>
                  BALANÇO DO MÊS
                </span>
              </div>
              <div className="card-body">
                <span className="body">
                  125.50
                </span>
              </div>
            </div>
          </div>
          <h5> Últimas movimentações </h5>
          <table>
            <thead>
              <tr>
                <th>VALOR</th>
                <th>CATEGORIA</th>
                <th>DESCRIÇÃO</th>
                <th>TIPO</th>              
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}