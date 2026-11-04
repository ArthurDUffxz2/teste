import { useState } from "react";
import "./index.scss";
import Cabecalho from "../../components/cabecalho";

export default function Açai() {
  const [qtd, setQtd] = useState(1);
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [tamanho, setTamanho] = useState("pequeno");


  let precoBase = 0;
  if (tamanho === "pequeno") precoBase = 10;
  else if (tamanho === "medio") precoBase = 15;
  else if (tamanho === "grande") precoBase = 20;
  const [resultado, setResultado] = useState(0);

  let total = Number(qtd) * precoBase;

 
  if (meia === true) {
    total = total / 2;
  }

  const cupomFormatado = cupom.toUpperCase();
  if (cupomFormatado === "DESCONTO") {
    total = total * 0.5;
  } else if (cupomFormatado === "DESCONTO20") {
    total = total * 0.8;
  }

  const mudarTamanho = (event) => {
    if (!event || !event.target) return;
    setTamanho(event.target.value);
  };

  function calcularTotal() {
    let precoBase = 0;
    if (tamanho === "pequeno") precoBase = 10;
    else if (tamanho === "medio") precoBase = 15;
    else if (tamanho === "grande") precoBase = 20;

    let total = Number(qtd) * precoBase;

    if (meia === true) {
      total = total / 2;
    }

    const cupomFormatado = cupom.toUpperCase();
    
    if (cupomFormatado === "DESCONTO") {
      total = total * 0.5;
    } else if (cupomFormatado === "DESCONTO20") {
      total = total * 0.8;
    }


    setResultado(total);
  }

  return (
    <div className="ACAI">
      <Cabecalho />
      <div className="card">
        <div className="encima">
          <div className="INputs">

            <p>Tamanho do Açai:</p>
            <div className="input">
              <input type="radio" id="tamanho-pequeno" name="escolher" value="pequeno" checked={tamanho === "pequeno"}
                onChange={mudarTamanho}
              />
              <label htmlFor="tamanho-pequeno">Pequeno - R$ 10</label>
            </div>
            <div className="input">
              <input type="radio" id="tamanho-medio" name="escolher" value="medio" checked={tamanho === "medio"}
                onChange={mudarTamanho}
              />
              <label htmlFor="tamanho-medio">Médio - R$ 15</label>
            </div>
            <div className="input">
              <input type="radio" id="tamanho-grande" name="escolher" value="grande" checked={tamanho === "grande"}
                onChange={mudarTamanho}
              />
              <label>Grande - R$ 20</label>
            </div>
          </div>

          <div className="ponta">
            <label>Quantidade:</label>
            <input
              type="number"
              min="0"
              value={qtd}
              onChange={(e) => setQtd(e.target.value)}
            />
          </div>

          <div className="ponta">
            <label>Cupom de entrada:</label>
            <input type="checkbox" checked={meia}
              onChange={(e) => setMeia(e.target.checked)}
            />
          </div>

          <div className="ponta">
            <label>Cupom:</label>
            <input type="text" value={cupom}
              onChange={(e) => setCupom(e.target.value)}
            />
          </div>

          <button className="total" onClick={calcularTotal}>
            Ver Total: R$ {resultado}
          </button>
        </div>
      </div>
    </div>
  );
}
