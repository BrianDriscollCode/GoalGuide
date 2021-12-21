import React from 'react';
import './App.css';

//component imports
import Schedule from "./components/schedule"

class App extends React.Component {
  constructor() {
    super();

    this.state = {week: true}

    this.chooseWeek = this.chooseWeek.bind(this);
    this.chooseWeek2 = this.chooseWeek2.bind(this);
  }
  
  chooseWeek() {

    this.setState({
      week: true
    });
    console.log(this.state.week, "chooseWeek1");
  }

  chooseWeek2() {
    this.setState({
      week: false
    });

    console.log(this.state.week, "chooseWeek2");
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
                <select name="cars" id="cars">
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

      {

        <Schedule week={this.state} />
      }
      
    </div>

   
    );
  }
}

export default App;
