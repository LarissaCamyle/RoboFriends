//BABEL JAVASCRIPT
import React from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox"
import './index.css';
import './App.css';
import Scroll from "./Components/Scroll"
import { robots } from "./Components/robots";
//pega todas as inf e reune

class App extends React.Component {
    constructor(){
        super()//precisa usar sempre quando usa um construtor
        this.state = {
            //recebe os nomes dos cards
            robots: [],
            //recebe as entradas do onSearchChange/SearchBox
            searchfield: ''
        }
    }

    //executa sempre que inicia o site
    componentDidMount() {
        this.setState({robots: robots})
    }

    //toda vez que ocorre uma entrada de valores diferente no searchBox envia 
    //para o construtor searchfield do App.js 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render(){
        //comunica a informação do searchBox com o CardList logo a baixo
        const filteredRobots = this.state.robots.filter(robots =>{
        //filtra os nomes dos Cards com somente oq é digitado
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //para q oq for digitado e o nome estejam ambos todos em minusculo
        //para evitar nn aparecer o nome quando digitado de maneira diferente
        })
        return(
            //SEMPRE RETORNA SOMENTE 1 ELEMENTO, TUDO DENTRO DO DIV
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>
                    
                <footer class="pv4 ph3 ph5-m ph6-l ">
                    <small class="f6 db tc">By: Larissa Camyle</small>
                </footer>
            </div>
        );
    }
}

export default App;