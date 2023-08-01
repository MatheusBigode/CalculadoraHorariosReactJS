import './App.css'
import {Limpar, Somar, Subtrair} from './script/calculadora'


function App() {

  return (
    <>
      <div class="title">
        <h1>Calculadora de Horas</h1>
      </div>

      <div class="inputsDiv">
        <div class="relogio">
            <input class="inputRel" type="number" id="hora1"/>
            <h4>:</h4>
            <input class="inputRel" type="number" id="min1"/>
        </div>
    
        <div class="relogio">
            <input class="inputRel" type="number" id="hora2"/>
            <h4>:</h4>
            <input class="inputRel" type="number" id="min2"/>
        </div>
      </div>

    <div class="button">
        <input class="botao" type="button" value="Somar" id='soma' onClick={Somar}/>
        <input class="botao" type="button" value="Subtrair" id='sub' onClick={Subtrair}/>
    </div>

    <div class="resultsDiv">
        <div class="relogio">
            <input class="inputRel2" type="number" id="resHora"/>
            <h4 class="h42">:</h4>
            <input class="inputRel2" type="number" id="resMin"/>

        </div>

        <input class="botao" type="button" value="Limpar" id='limp' onClick={Limpar}/>

        
    </div>
    </>
  )
}

export default App
