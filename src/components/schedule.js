import React from "react";


class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = props

        this.createInputField = this.createInputField.bind(this);
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
    
    render () {


      document.createElement('p');

        return (
          <main>
            {console.log(this.props.category)}
           
            <div className="weekTitle">
              <h3> {this.props.week ? "Week 1": "Week 2"}: {this.props.category}</h3>   
            </div>
            
            <div className="Main-content">


            <div className="Monday Goals">

              <div className="goalTitle">
                  <h3> Monday </h3>
                  <button> + </button>
              </div>

              <div className="Goal-box">

                  <ul>
                      <li onClick={this.createInputField}> List item 1 </li>
                      <li onClick={this.createInputField}> List item 2 </li>
                      <li onClick={this.createInputField}> List item 3 </li>
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
                    <li> List item 1 </li>
                    <li> List item 2 </li>
                    <li> List item 3 </li>
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
                    <li> List item 1 </li>
                    <li> List item 2 </li>
                    <li> List item 3 </li>
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
                      <li> List item 1 </li>
                      <li> List item 2 </li>
                      <li> List item 3 </li>
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
                    <li> List item 1 </li>
                    <li> List item 2 </li>
                    <li> List item 3 </li>
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
                    <li> List item 1 </li>
                    <li> List item 2 </li>
                    <li> List item 3 </li>
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
                    <li> List item 1 </li>
                    <li> List item 2 </li>
                    <li> List item 3 </li>
                  </ul>

                </div>

            </div>
          </div>

      </main>
            
        )
    }
}

export default Schedule