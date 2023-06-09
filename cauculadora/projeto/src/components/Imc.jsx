import {useState} from 'react';
import styles from '../styles/App.module.css';   
import Input from './Input';
import Calcular from './Calcular';
import Resultado from './Resultado';
import Tabela from './Resultado';

function Imc() {

  const [peso,setPeso] = useState("");
  const [altura,setAltura] = useState("");
  const [resultado,setResultado] = useState(0);
  const [situacao,setSituacao] = useState("");

  return (
    <>
      <section className={styles.section_container}>
        <h1>Cauculadora de IMC</h1>
        <Input n={peso} sn={setPeso} label={"Peso"} />
        <Input n={altura} sn={setAltura} label={"Altura"} />
        <Calcular p={peso} a={altura} sp={setPeso} sa={setAltura} sr={setResultado} st={setSituacao} styles={styles} />
        <Resultado r={resultado} s={situacao}/>
        <Tabela />
      </section>
    </>
  );
}

export default Imc;
