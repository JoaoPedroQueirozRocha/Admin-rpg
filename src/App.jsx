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
    }
    this.armazenarNome = this.armazenarNome.bind(this)
    this.armazenarNumeros = this.armazenarNumeros.bind(this)
    this.armazenarDescricao = this.armazenarDescricao.bind(this)
    this.armazenarDificuldade = this.armazenarDificuldade.bind(this)
    this.armazenarLocal = this.armazenarLocal.bind(this)
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

  submit(){
    let dificuldade = this.state.dificuldade
    let nome = document.getElementById("Nome")
    let numero = document.getElementById("Numero")
    let dificuldadeE = document.getElementById("Dificuldade")
    let descricao = document.getElementById("Descricao")
    let local = document.getElementById("Local")
    let exibicao = document.getElementById("exibicao")
    if(dificuldade === "Facil"){
      exibicao.style = "display:flex"
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:green";
      numero.style = "color:green";
      dificuldadeE.style = "color:green";
      local.style = "color:green";
      descricao.style = "color:green";

      console.log("funciona")
    }
    else if(dificuldade === "Medio"){
      exibicao.style = "display:flex"
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:blue";
      numero.style = "color:blue";
      dificuldadeE.style = "color:blue";
      local.style = "color:blue";
      descricao.style = "color:blue";
    }
    else if(dificuldade === "Dificil"){
      exibicao.style = "display:flex"
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:red";
      numero.style = "color:red";
      dificuldadeE.style = "color:red";
      local.style = "color:red";
      descricao.style = "color:red";
    }
    if(dificuldade === "Dificil" && this.state.numeroJogadores < 3 || dificuldade === "Dificil" && this.state.numeroJogadores > 6){
      alert("Número de jogadores menor do que o recomendado, indicado de 3 a 6 jogadores")
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:red";
      numero.style = "color:red";
      dificuldadeE.style = "color:red";
      local.style = "color:red";
      descricao.style = "color:red";
    }
    if(dificuldade === "Medio" && this.state.numeroJogadores > 4 || dificuldade === "Medio" && this.state.numeroJogadores < 2){
      alert("Número de jogadores maior do que o recomendado, indicado de 2 a 4 jogadores")
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:blue";
      numero.style = "color:blue";
      dificuldadeE.style = "color:blue";
      local.style = "color:blue";
      descricao.style = "color:blue";
    }
    if(dificuldade === "Facil" && this.state.numeroJogadores < 2 || dificuldade === "Facil" && this.state.numeroJogadores > 4){
      alert("Número de jogadores menor do que o recomendado, indicado de 2 a 4 jogadores")
      nome.innerHTML = `Nome da missão: ${this.state.nomeMissao}`;
      numero.innerHTML = `Grupo: ${this.state.numeroJogadores}`;
      dificuldadeE.innerHTML = `Dificuldade: ${this.state.dificuldade}`;
      local.innerHTML = `Local: ${this.state.local}`
      descricao.innerHTML = this.state.descricaoMissao
      nome.style = "color:green";
      numero.style = "color:green";
      dificuldadeE.style = "color:green";
      local.style = "color:green";
      descricao.style = "color:green";
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
            <textarea cols="5" rows="7" value={this.state.descricaoMissao} onChange={this.armazenarDescricao} ></textarea>
            <label htmlFor="">Dificuldade da missão</label>
            <select name="" id="" value={this.state.dificuldade} onChange={this.armazenarDificuldade} >
              <option></option>
              <option value="Facil">Fácil</option>
              <option value="Medio">Médio</option>
              <option value="Dificil">Difícil</option>
            </select>
            <input type="submit" onClick={this.submit} id="btnSubmit"/>
          </div>
          <div id='exibicao'>
            <p id='Nome'></p>
            <p id='Dificuldade'></p>
            <p id='Numero'></p>
            <p id='Local'></p>
            <p id='Descricao'></p>
          </div>
        </div>


    )
  }
}

export default App
