import { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      nomeMissao:'',
      numeroJogadores:'',
      descricaoMissao:'',
      dificuldade:'',
      local:'',
      recompensa:'',
    }
    this.armazenarNome = this.armazenarNome.bind(this)
    this.armazenarNumeros = this.armazenarNumeros.bind(this)
    this.armazenarDescricao = this.armazenarDescricao.bind(this)
    this.armazenarDificuldade = this.armazenarDificuldade.bind(this)
    this.armazenarLocal = this.armazenarLocal.bind(this)
    this.armazenasRecompensa = this.armazenasRecompensa.bind(this)
    this.submit = this.submit.bind(this)
  }

  armazenarNome(e){
    let nomeInserido = e.target.value;
    this.setState({nomeMissao:nomeInserido})
  }

  armazenarNumeros(a){
    let numeroInserido = a.target.value;
    this.setState({numeroJogadores: numeroInserido})
  }

  armazenarDescricao(b){
    let descricaoInserida = b.target.value;
    this.setState({descricaoMissao: descricaoInserida})
  }

  armazenarDificuldade(c){
    let dificuldadeSelecionada = c.target.value;
    this.setState({dificuldade: dificuldadeSelecionada})
  }

  armazenarLocal(d){
    let localInserido = d.target.value;
    this.setState({local: localInserido})
  }

  armazenasRecompensa(f){
    let recompensaInserida = f.target.value;
    this.setState({recompensa: recompensaInserida})
  }

  submit(){
    // var missaoExport = []
    // missaoExport.push({
    //   NomeMissa: this.state.nomeMissao,
    //   NumeroDeJogadores: this.state.numeroJogadores,
    //   Dificuldade: this.state.dificuldade,
    //   Local: this.state.local,
    //   Descricao: this.state.descricaoMissao      
    // })
    let dificuldade = this.state.dificuldade
    let nome = document.getElementById("Nome")
    let numero = document.getElementById("Numero")
    let dificuldadeE = document.getElementById("Dificuldade")
    let descricao = document.getElementById("Descricao")
    let local = document.getElementById("Local")
    let exibicao = document.getElementById("exibicao")
    let Recompensa = document.getElementById("Recompensa")
    if(dificuldade === "Fácil"){
      exibicao.style = "display:flex"
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiros`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
      Recompensa.innerHTML =`Recompensa: ${this.state.recompensa}`
    }
    else if(dificuldade === "Média"){
      exibicao.style = "display:flex"
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiros`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
      Recompensa.innerHTML =`Recompensa: ${this.state.recompensa}`;
    }
    else if(dificuldade === "Difícil"){
      exibicao.style = "display:flex"
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiros`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
      Recompensa.innerHTML =`Recompensa: ${this.state.recompensa}`
    }
    if(dificuldade === "Difícil" && this.state.numeroJogadores < 3 || dificuldade === "Difícil" && this.state.numeroJogadores > 6){
      alert("Número de jogadores diferente do que o recomendado, indicado de 3 a 6 jogadores")
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiros`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
    }
    if(dificuldade === "Média" && this.state.numeroJogadores > 4 || dificuldade === "Média" && this.state.numeroJogadores < 2){
      alert("Número de jogadores maior do que o recomendado, indicado de 2 a 4 jogadores")
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
    }
    if(dificuldade === "Fácil" && this.state.numeroJogadores < 2 || dificuldade === "Fácil" && this.state.numeroJogadores > 4){
      alert("Número de jogadores diferente do que o recomendado, indicado de 2 a 4 jogadores")
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiros`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
    }
    if(this.state.numeroJogadores === 1){
      alert("Número de jogadores diferente do que o recomendado, indicado de 2 a 4 jogadores para missões faceis e médias e 3 a 6 para missões difíceis")
      nome.innerHTML = `${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores} aventureiro`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao;
    }
  }

  render(){
    return(
      <div className='container'>      
          <div className='containerMissao'>
            <label htmlFor="">Nome da missão:</label>
            <input type="text" value={this.state.nomeMissao} onChange={this.armazenarNome} />
            <label htmlFor="">Número de aventureiros</label>
            <input type="number"  value={this.state.numeroJogadores} onChange={this.armazenarNumeros} />
            <label htmlFor="">Local da missão</label>
            <input type="text" value={this.state.local} onChange={this.armazenarLocal} />
            <label htmlFor="Descrição da missão">Descrição da missão</label>
            <textarea cols="30" rows="7" value={this.state.descricaoMissao} onChange={this.armazenarDescricao} ></textarea>
            <label htmlFor="">Dificuldade da missão</label>
            <select name="" id="" value={this.state.dificuldade} onChange={this.armazenarDificuldade} >
              <option></option>
              <option value="Fácil">Fácil</option>
              <option value="Média">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
            <label htmlFor="">Recompensa</label>
            <input type="text" value={this.state.recompensa} onChange={this.armazenasRecompensa}/>
            <input type="submit" onClick={this.submit} id="btnSubmit"/>
          </div>
          <div id='exibicao'>
            <p id='Nome'></p>
            <p id='Dificuldade'></p>
            <p id='Numero'></p>
            <p id='Local'></p>
            <p id='Descricao'></p>
            <p id='Recompensa'></p>
          </div>
        </div>


    )
  }
}

export default App
