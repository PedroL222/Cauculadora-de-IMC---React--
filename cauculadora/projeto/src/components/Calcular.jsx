function Calcular({p,a,sp,sa,sr,st,styles}){
    
    const calc =()=>{
        sr(p/(a*a));
        sp("");
        sa("");

        const veriSituacao = () =>{

          let r = p/(a*a);
          
          if(r > 18.5 && r <24.9){
            st("Peso Normal");
          }else if(r > 25 && r <29.9){
            st("Sobrepeso");
          }
          else if(r > 30 && r <34.9){
            st("Obesidade Grau 1");
          }
          else if(r > 35 && r <39.9){
            st("Obesidade Grau 2");
          }
          else if(r > 40){
            st("Obesidade Grau 3 ou Mórbida");
          }
        }

        veriSituacao();

      }

      return(
        <div className={styles.div_button}>
          <button onClick={calc}>Caucular</button>
        </div>
      )
}

export default Calcular