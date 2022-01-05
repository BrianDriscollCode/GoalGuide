import React from "react";

//component imports
import AddToList from "./addToList";


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
       // this.addListItem = this.addListItem.bind(this);
    }

    addListItem(event) {
      console.log(event.target)
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

    handleOnEnter(event, name) {

      //console.log("ENTER", event);

      if (event.key === 'Enter') {
        console.log(event.target);
        this.setState((prevState) => ({
          weekItems: prevState.weekItems.map((item) =>
            item.name === name ? {...item, name: event.target.value, isEditing: !item.isEditing } : item
          ),
        }))
      }

    }

    
    render () {

      let listItemWeek1 = this.state.weekItems.map(items => {

        if (items.type === 'week1' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week1' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
      
      })

      let listItemWeek2 = this.state.weekItems.map(items => {

        if (items.type === 'week2' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week2' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })

      let listItemWeek3 = this.state.weekItems.map(items => {

        if (items.type === 'week3' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week3' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })

      let listItemWeek4 = this.state.weekItems.map(items => {

        if (items.type === 'week4' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week4' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })

      let listItemWeek5 = this.state.weekItems.map(items => {

        if (items.type === 'week5' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week5' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })

      let listItemWeek6 = this.state.weekItems.map(items => {

        if (items.type === 'week6' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week6' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })
      
      let listItemWeek7 = this.state.weekItems.map(items => {

        if (items.type === 'week7' && items.isEditing === false) {
          return <li onClick={ (e) => this.handleListEdit(e, items.name) }> {items.name} </li>
        } 
        else if (items.type === 'week7' && items.isEditing === true) {
          return <input class="listInput" onKeyUp={ (e) => this.handleOnEnter(e, items.name)} defaultValue={items.name} /> 
        }
        
      })


        return (
          <main>
          
            <div className="weekTitle">
              <h3> {this.props.week ? "Week 1": "Week 2"}: {this.props.category} </h3>   
            </div>
            
            <div className="Main-content">


            <div className="Monday Goals">

              <AddToList day="Monday" handleSubmit={this.addListItem} /> 

              <div className="Goal-box">

                  <ul>
                      {listItemWeek1}
                  </ul>

              </div>

            </div>

            <div className="Tuesday Goals">

            <AddToList day="Tuesday" handleSubmit={this.addListItem} />

                <div className="Goal-box">

                  <ul>
                    {listItemWeek2}
                  </ul>

                </div>

            </div>

            <div className="Wednesday Goals">

            <AddToList day="Wednesday" handleSubmit={this.addListItem} />

                <div className="Goal-box">

                  <ul>
                    {listItemWeek3}
                  </ul>

                </div>

            </div>

            <div className="Thursday Goals">

            <AddToList day="Thursday" handleSubmit={this.addListItem} />

                <div className="Goal-box">

                    <ul>
                      {listItemWeek4}
                    </ul>

                </div>

              </div>

              <div className="Friday Goals" handleSubmit={this.addListItem}>

              <AddToList day="Friday" handleSubmit={this.addListItem} />
              

                <div className="Goal-box">

                  <ul>
                     {listItemWeek5}
                  </ul>

                </div>

            </div>

            <div className="Saturday Goals">

            <AddToList day="Saturday" handleSubmit={this.addListItem} />
              

                <div className="Goal-box">

                  <ul>
                    {listItemWeek6}
                  </ul>

                </div>

            </div>

            <div className="Sunday Goals">

            <AddToList day="Sunday" handleSubmit={this.addListItem} />

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