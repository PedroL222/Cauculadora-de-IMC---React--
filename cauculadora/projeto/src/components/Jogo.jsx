import { useState } from "react";
function Jogo() {

    // Estilos

    const tabu = {
        display: 'flex',
        flexDirection: 'column'
    }

    const tabuLinha = {
        display: 'flex',
        flexDirection: 'row'
    }

    const casa = {
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        cursor: 'pointer',
        fontSize: 60,
        border: '1px solid #000'
    }

    const jogoInicial = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];
    const [jogo, setJogo] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [simbuloAtual, setSimbuloAtual] = useState('X');
    const [jogando, setJogando] = useState(true);

    const tabuleiro = (j) => {
        return (
            <div style={tabu}>
                <div style={tabuLinha}>
                    <div style={casa} data-pos='00' onClick={(e) => jogar(e)}>{j[0][0]}</div>
                    <div style={casa} data-pos='01' onClick={(e) => jogar(e)}>{j[0][1]}</div>
                    <div style={casa} data-pos='02' onClick={(e) => jogar(e)}>{j[0][2]}</div>
                </div>
                <div style={tabuLinha}>
                    <div style={casa} data-pos='10' onClick={(e) => jogar(e)}>{j[1][0]}</div>
                    <div style={casa} data-pos='11' onClick={(e) => jogar(e)}>{j[1][1]}</div>
                    <div style={casa} data-pos='12' onClick={(e) => jogar(e)}>{j[1][2]}</div>
                </div>
                <div style={tabuLinha}>
                    <div style={casa} data-pos='20' onClick={(e) => jogar(e)}>{j[2][0]}</div>
                    <div style={casa} data-pos='21' onClick={(e) => jogar(e)}>{j[2][1]}</div>
                    <div style={casa} data-pos='22' onClick={(e) => jogar(e)}>{j[2][2]}</div>
                </div>
            </div>
        )
    }

    const BtnJogarNovamente = () => {
        if (!jogando) {
            return (
                <button onClick={() => reiniciar()}>Jogar Novamente</button>
            )
        }
    }

    const verificaVitoria = () => {
        let pontos = 0;
        let vitoria = false;
        for (let l = 0; l < 3; l++) {
            pontos = 0;
            for (let c = 0; c < 3; c++) {
                if (jogo[l][c] == simbuloAtual) {
                    pontos++;
                }
            }
            if (pontos == 3) {
                vitoria = true;
                break;
                return;
            }
        }

        for (let c = 0; c < 3; c++) {
            pontos = 0;
            for (let l = 0; l < 3; l++) {
                if (jogo[l][c] == simbuloAtual) {
                    pontos++;
                }
            }
            if (pontos == 3) {
                vitoria = true;
                break;
                return;
            }
        }

        pontos = 0;
        for (let d = 0; d < 3; d++) {
            if (jogo[d][d] == simbuloAtual) {
                pontos++;
            }
            if (pontos == 3) {
                vitoria = true;
                alert('Jogador' + simbuloAtual + 'Venceu!');
                return;
            }
        }

        pontos = 0;
        let l = 0;

        for (let c = 2; c >= 0; c--) {
            if (jogo[l][c] == simbuloAtual) {
                pontos++;
            }
            l++

            if (pontos == 3) {
                vitoria = true;
                console.log(vitoria);
                alert('Jogador' + simbuloAtual + 'Venceu!');
                return;

            }
        }
        return vitoria;
    }

    const trocaJogador = () => {
        simbuloAtual == 'X' ? setSimbuloAtual('O') : setSimbuloAtual('X');
    }

    const retornaPosicao = (e) => {
        const p = e.target.getAttribute('data-pos');
        const pos = [parseInt(p.substring(0, 1)), parseInt(p.substring(1, 2))];
        return pos;
    }

    const verificaEspacoVazio = (e) => {
        if (jogo[retornaPosicao(e)[0]][retornaPosicao(e)[1]] == "") {
            return true;
        } else {
            return false;
        }
    }

    const jogar = (e) => {
        if (jogando) {
            if (verificaEspacoVazio(e)) {
                jogo[retornaPosicao(e)[0]][retornaPosicao(e)[1]] = simbuloAtual;
                trocaJogador();
                if (verificaVitoria()) {
                    alert('Jogador' + simbuloAtual + 'Venceu!');
                    setJogando(false);
                }
            } else {
                alert('Espaço ja preenchido');
            }
            if (VerificarEmpate()) {
                alert('Empate!');
                setJogando(false);
            }
        }

    }

    const VerificarEmpate = () => {
        let empate = 0;
        let resultado = false;

        for (let l = 0; l < 3; l++) {
            for (let c = 0; c < 3; c++) {
                if (jogo[l][c] != "") {
                    empate++
                }

            }
        }
        if (empate >= 9) {
            resultado = true;
        } else {
            resultado = false
        }
        return resultado
    }

    const reiniciar = () => {
        setJogando(true);
        setJogo(jogoInicial);
        setSimbuloAtual('X');
    }

    return (
        <>

            <div>
                <p>Quem joga: {simbuloAtual}</p>
            </div>
            <div>
                {tabuleiro(jogo)}
            </div>
            <div>
                {BtnJogarNovamente()}
            </div>

        </>
    );
}

export default Jogo;
