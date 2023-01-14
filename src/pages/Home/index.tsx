import "./style.scss";

import { useEffect, useState } from "react";
import { getMovements } from "../../api/movements";
import { NavTop } from "../../components/NavTop";
import { NavMenu } from "../../components/NavMenu";
import { TableMoviments } from "../../components/TableMoviments";
import { Card } from "../../components/Card";

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
      <NavTop/>
      
      <div className="content">
        <NavMenu/>
        <main>
          <div className="cards">
            <Card title="TOTAL ENTRADA DO MÊS" value="525.50"/>
            <Card title="TOTAL SAÍDA DO MÊS" value="400.00"/>
            <Card title="BALANÇO DO MÊS" value="125.50"/>
          </div>
          <h5> Últimas movimentações </h5>
          <TableMoviments/>
        </main>
      </div>
    </>
  );
}