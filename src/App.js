import React from 'react';
import './App.css';

//component imports
import Schedule from "./components/schedule"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
      week: false,
      category: 'Business'
    }

    this.chooseWeek = this.chooseWeek.bind(this);
    this.chooseWeek2 = this.chooseWeek2.bind(this);
    this.changeCategory = this.changeCategory.bind(this); 
  }

  chooseWeek() {
    this.setState({week: true});
  }

  chooseWeek2() {
    this.setState({week: false});
  }

  changeCategory(event) {
    this.setState({category: event.target.value}); 
  }

  render() {
    return (
    <div className="App">
      <header className="App-header"> 
      
          <section className="Header"> 
              <h1 id="Goal-guide-title"> Goal Guide </h1>


              <div id="Progress-bar">
                <p>Progress Bar Section</p>
                  {/* progressbar image with updates */}
                <div id="Progress-bar-image">
                  <div id="Progress-bar-filling">

                  </div>
                </div>
              </div>
          </section>

          <section class="Sub-header">
              <div id="Category">
                <p> Category: </p>
               
                <select name="cars" id="category" onChange={this.changeCategory} value={this.state.category}>
                    <option value="Business">Business</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Pixel Art">Pixel Art</option>
                </select>
                <button> + </button>
                <button> - </button>
                {/* dropdown menu*/}
                {/* + sign */}
                {/* - sign - */}
              </div>

              <div id="Week">
                <p id="Week"> Week: </p>
                <button onClick={this.chooseWeek}> 1 </button>
                <button onClick={this.chooseWeek2}> 2 </button>
              </div>        
          </section>

      </header>
      
      
      
      <Schedule week={this.state.week} category={this.state.category} />
      
      
    </div>

   
    );
  }
}

export default App;
