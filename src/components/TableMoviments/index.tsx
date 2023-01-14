import './style.scss'

export function TableMoviments() {
  return (
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
  );
}