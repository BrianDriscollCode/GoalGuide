import React from "react";


class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {props};
    }

    
    render () {

        return (
            <main>
            {console.log(this.state.props, "hello")}
        <div className="weekTitle">
          <h3> {this.state.props ? 'Week 1': 'Week 2'} </h3>   
        </div>
         
        <div className="Main-content">


        <div className="Monday Goals">

          <div className="goalTitle">
            <h3> Monday </h3>
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