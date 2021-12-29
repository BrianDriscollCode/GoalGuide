import React from "react";


class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          week1: ['product1', 'product2', 'product3'],
          week2: ['product12', 'product22', 'product32'],
          week3: ['product13', 'product23', 'product33'],
          week4: ['product14', 'product24', 'product34'],
          week5: ['product15', 'product25', 'product35'],
          week6: ['product16', 'product26', 'product36'],
          week7: ['product17', 'product27', 'product37'],

          
        }

        this.createInputField = this.createInputField.bind(this);
        this.addListItem = this.addListItem.bind(this);
    }

    //click on list items and change inputs
    createInputField(event) {
      let input = document.createElement("INPUT");      
      input.value = event.target.textContent;
      input.setAttribute("onkeypress", 'this.listItemInput');
      event.target.replaceWith(input);
    }

    listItemInput(event) {
      let listItem = document.createElement("LI");
      console.log('run list item input');

      // if (event.key == "Enter") {
      //   listItem.textContent = event.target.value;
      //   event.target.replaceWith(listItem);
      // }
    }

    addListItem() {
      let item = 'product4';
      console.log('test');

      this.setState({
        week1: [...this.state.week1, 'new value']
      })
    }

    
    render () {

      const listItemWeek1 = this.state.week1.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek2 = this.state.week2.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek3 = this.state.week3.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek4 = this.state.week4.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek5 = this.state.week5.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek6 = this.state.week6.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);
      const listItemWeek7 = this.state.week7.map(item => <li key={item} onClick={this.createInputField}>{item}</li>);

      document.createElement('p');

        return (
          <main>
          
            <div className="weekTitle">
              <h3> {this.props.week ? "Week 1": "Week 2"}: {this.props.category}</h3>   
            </div>
            
            <div className="Main-content">


            <div className="Monday Goals">

              <div className="goalTitle">
                  <h3> Monday </h3>
                  <button onClick={this.addListItem}> + </button>
              </div>

              <div className="Goal-box">

                  <ul>
                      {listItemWeek1}
                  </ul>

              </div>

            </div>

            <div className="Tuesday Goals">

              <div className="goalTitle">
                <h3> Tuesday </h3>
                <button> + </button>
              </div>

                <div className="Goal-box">

                  <ul>
                    {listItemWeek2}
                  </ul>

                </div>

            </div>

            <div className="Wednesday Goals">

              <div className="goalTitle">
                <h3> Wednesday </h3>
                <button> + </button>
              </div>

                <div className="Goal-box">

                  <ul>
                    {listItemWeek3}
                  </ul>

                </div>

            </div>

            <div className="Thursday Goals">

            <div className="goalTitle">
                <h3>Thursday</h3>
                <button> + </button>
            </div>

                <div className="Goal-box">

                    <ul>
                      {listItemWeek4}
                    </ul>

                </div>

              </div>

              <div className="Friday Goals">

                <div className="goalTitle">
                  <h3> Friday </h3>
                  <button> + </button>
                </div>
              

                <div className="Goal-box">

                  <ul>
                     {listItemWeek5}
                  </ul>

                </div>

            </div>

            <div className="Saturday Goals">

              <div className="goalTitle">
                <h3> Saturday </h3>
                <button> + </button>
              </div>
              

                <div className="Goal-box">

                  <ul>
                    {listItemWeek6}
                  </ul>

                </div>

            </div>

            <div className="Sunday Goals">

              <div className="goalTitle">
                <h3> Sunday </h3>
                <button> + </button>
              </div>

                <div className="Goal-box">

                  <ul>
                    {listItemWeek7}
                  </ul>

                </div>

            </div>
          </div>

      </main>
            
        )
    }
}

export default Schedule