function Tabela(){
    return(
        <table border={"1"} style={{borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th>Classificação</th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peso normal</td>
              <td>Entre 18,5 e 24,9</td>
            </tr>
            <tr>
              <td>Sobrepeso</td>
              <td>Entre 25 e 29,9</td>
            </tr>
            <tr>
              <td>Obesidade grau 1</td>
              <td>Entre 30 e 34,9</td>
            </tr>
            <tr>
              <td>Obesidade grau 2</td>
              <td>Entre 35 e 39,9</td>
            </tr>
            <tr>
              <td>Obesidade grau 3 ou Mórbida</td>
              <td>Mais que 40</td>
            </tr>
          </tbody>
        </table>
      )
}

export default Tabela