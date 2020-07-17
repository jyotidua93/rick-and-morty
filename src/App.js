import React, { Component } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import './style.scss';
import Filters from './components/Filters';
import Search from './components/Search';
import Sort from './components/Sort';

class App extends Component {

  state = {
    characters: [],
    loading: false,
    characterList: [],
    selectedCharacters: [],
    checkedFilters : []
  }
  constructor(props) {
    super(props);
    this.selectedGender = "";
    this.selectedSpecies = "";
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading:true });
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    this.setState({ characters: res.data.results , loading: false , characterList: res.data.results});    
  }


  searchCharacters = text => this.setState({ text, loading: true }, this.fetchCharacters)

  fetchCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.text}`)
        .then(res => res.json())
        .then(data => this.setState({
            characters: data.results,
            loading: false
        }))
}

  sortCharacters = (sortBy) => {
    if(!sortBy) return;
    (sortBy === 'asc') ?
    this.setState({ characters: this.state.characters.sort((a,b) => a.id - b.id )}) :
    this.setState({ characters: this.state.characters.sort((a,b) => b.id - a.id )});
  }

  filterCharacters = (e) => {
      if (e.target.checked) {     
            this.setState({checkedFilters : e.target.value});
            const name = e.target.name;
            if(name === "gender"){
              this.selectedGender = e.target.value;
              console.log(this.selectedGender);
            }
            if(name === "species"){
              this.selectedSpecies = e.target.value;
              console.log(this.selectedSpecies);
            }
            console.log('https://rickandmortyapi.com/api/character/?gender='+this.selectedGender+'&species='+this.selectedSpecies);
            fetch('https://rickandmortyapi.com/api/character/?gender='+this.selectedGender+'&species='+this.selectedSpecies)
            .then(res => res.json())
            .then(data => this.setState({
                characters: data.results,
                loading: false
            }))
        }
        if(e.target.value === "reset"){
          console.log(e.target.checked);
          this.setState({checkedFilters : ''});
          this.fetchData();
        }
  };

  render() {
    return (
      <div className="App">
        <header>
          <div class="headerWrap">
            <div class="title">Rick and Morty Characters</div>
          </div>
        </header>   
        <div className="container">
          <Filters filterCharacters={this.filterCharacters} />
          <div className="main">
              <div className="filter-secondary">
                <Search searchCharacters={this.searchCharacters}/>
                <Sort sortCharacters={this.sortCharacters}/>
              </div>
              <Characters loading={this.state.loading} characters={this.state.characters} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
