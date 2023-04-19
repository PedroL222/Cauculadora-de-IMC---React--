import { useState } from "react";

function CalculadoraNormal() {

    const [valorTela,setValorTela]= useState("");
    const [resultado,setResultado]= useState(0);
    const [acumulador,setAcumulador]= useState(0);
    const [operado,setOperado]= useState(false);
    const [veriOperador,setVeriOperador] = useState(true);
    const [pontoOperador,setPontoOperador] = useState(true);

    //Componentes

    const Tela=(valor,res)=>{
        return(
            <div style={cssTela}>
                <span style={cssTelaOper}>{valor}</span>
                <span style={cssTelaRes}>{res}</span>
            </div>
        )
    }

    const Btn=(label,onClick)=>{
        return(
            <button style={cssBtn} onClick={onClick}> {label} </button>
        )
    }

    //Componentes

    //Funções

    const addDigitoTela=(d)=>{
        if((d == '+' || d == '-' || d == '/' || d == '*') && operado){
            setOperado(false);
            setValorTela(resultado+d);
            setVeriOperador(false);
            return
        }else{
            setVeriOperador(true);
        }

        if(operado){
            setValorTela(d);
            setOperado(false);
            setVeriOperador(true);
            return
        }

        const valorDigitadoTela=valorTela+d;
        setValorTela(valorDigitadoTela);

    }

    const limparMemoria =()=>{
        setOperado(false);
        setValorTela("");
        setResultado(0);
        setAcumulador(0);
        setVeriOperador(false);
        return 
    }

    const Operacao =(oper)=>{
        if(oper == 'bs'){
            let vtela=valorTela;
            vtela=vtela.substring(0,(vtela.length-1));
            setValorTela(vtela);
            setOperado(false);

                if(veriOperador){
                    setVeriOperador(false);
                }

            return
        }
        try{
            const r=eval(valorTela);
            setAcumulador(r);
            setResultado(r);
            setOperado(true);
        }catch{
            setResultado('ERRO')
        }
    }

    // Estilos

    const cssContainer={
        display:'flex',
        justifyContent:'flex-start',
        alingnItems:'center',
        flexDirection:'column',
        width:324,
        border:'2px solid #000',
        textAlign:'center'
    }

    const cssBotoes={
        flexDirection:'row',
        flexWrap:'wrap'
    }

    const cssTela={
        display:'flex',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
        alingnItems:'flex-start',
        backgroundColor:'#444',
        flexDirection:'row',
        width: 320
    }

    const cssTelaOper={
        fontSize:25,
        color:'#fff',
        height:20
    }

    const cssTelaRes={
        fontSize:50,
        color:'#fff',
    }

    const cssBtn={
        fontSize:30,
        height:60,
        width:80,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        borderColor:'#000',
        textAlign:'center',
        outline:'none'
    }

    return (

        <>
        
        <div style={cssContainer}>
            <h3 style={{margin:"10px"}}>Calculadora Matemática Simples</h3>
            {Tela(valorTela,resultado)}
            <div style={cssBotoes}>
                {Btn('AC',limparMemoria)}
                {Btn('(',()=>addDigitoTela('('))}
                {Btn(')',()=>addDigitoTela(')'))}
                {Btn('/',()=>{ if(veriOperador == true){addDigitoTela('/')
            setVeriOperador(false)}})}
                {Btn('7',()=>addDigitoTela('7'))}
                {Btn('8',()=>addDigitoTela('8'))}
                {Btn('9',()=>addDigitoTela('9'))}
                {Btn('*',()=>{ if(veriOperador == true){addDigitoTela('*')
            setVeriOperador(false)}})}
                {Btn('4',()=>addDigitoTela('4'))}
                {Btn('5',()=>addDigitoTela('5'))}
                {Btn('6',()=>addDigitoTela('6'))}
                {Btn('-',()=>{ if(veriOperador == true){addDigitoTela('-')
            setVeriOperador(false)}})}
                {Btn('1',()=>addDigitoTela('1'))}
                {Btn('2',()=>addDigitoTela('2'))}
                {Btn('3',()=>addDigitoTela('3'))}
                {Btn('+',()=>{ if(veriOperador == true){addDigitoTela('+')
            setVeriOperador(false)}})}
                {Btn('0',()=>addDigitoTela('0'))}
                {Btn('.',()=>addDigitoTela('.'))}
                {Btn('<-',()=>Operacao('bs'))}
                {Btn('=',()=>Operacao('='))}
            </div>
        </div>
        
        </>

    );
  }
  
  export default CalculadoraNormal;
  