
function Resultado({r,s}){
    
    return(
        <div>
          <p>IMC: {r.toFixed(2)}</p>
          <p>Situação: {s} </p>
        </div>
      )

}

export default Resultado