import React from "react";


class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          weekItems: [
            {type: "week1", name: "product1",  isEditing: false},
            {type: "week1", name: "product2",  isEditing: false},
            {type: "week2", name: "product3",  isEditing: false},
            {type: "week2", name: "product4",  isEditing: false},
            {type: "week2", name: "product5",  isEditing: false},
            {type: "week2", name: "product6",  isEditing: false},
            {type: "week3", name: "product7",  isEditing: false},
            {type: "week3", name: "product8",  isEditing: false},
            {type: "week4", name: "product9",  isEditing: false},
            {type: "week4", name: "product11",  isEditing: false},
            {type: "week5", name: "product12",  isEditing: false},
            {type: "week5", name: "product13",  isEditing: false},
            {type: "week5", name: "product14",  isEditing: false},
            {type: "week5", name: "product15",  isEditing: false},
            {type: "week6", name: "product16",  isEditing: false},
            {type: "week6", name: "product17",  isEditing: false},
            {type: "week7", name: "product18",  isEditing: false},
            {type: "week7", name: "product19",  isEditing: false},            
          ]

        }

        //this.createInputField = this.createInputField.bind(this);
       
    }

    


    handleListEdit(event, name) {

      console.log(event.target);
      
      // this.setState(prevState =>  ({
      //   weekItems: {...prevState.weekItems}
      // }));

      this.setState((prevState) => ({
        weekItems: prevState.weekItems.map((item) =>
          item.name === name ? {...item, isEditing: !item.isEditing } : item
        ),
      }))
     

      console.log(this.state.weekItems)
    }

    handleOnEnter(event) {

      //console.log("ENTER", event);

      if (event.charCode === 13) {
        console.log('WOOT')
      }

    }

    
    render () {

      let listItemWeek1 = this.state.weekItems.map(items => {

        if (items.type === 'week1') {
          return <li> {items.name} </li> 
        }
      
      })

      let listItemWeek2 = this.state.weekItems.map(items => {

        if (items.type === 'week2' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week2' && items.isEditing === true) {
          return <input onKeyUp={ (e) => this.handleOnEnter(e)} defaultValue={items.name} /> 
        }
        
      })

      let listItemWeek3 = this.state.weekItems.map(items => {

        if (items.type === 'week3') {
          return <li> {items.name} </li>
        }
        
      })

      let listItemWeek4 = this.state.weekItems.map(items => {

        if (items.type === 'week4') {
          return <li> {items.name} </li>
        }
        
      })

      let listItemWeek5 = this.state.weekItems.map(items => {

        if (items.type === 'week5') {
          return <li> {items.name} </li>
        }
        
      })

      let listItemWeek6 = this.state.weekItems.map(items => {

        if (items.type === 'week6') {
          return <li> {items.name} </li>
        }
        
      })
      
      let listItemWeek7 = this.state.weekItems.map(items => {

        if (items.type === 'week7') {
          return <li> {items.name} </li>
        }
        
      })


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