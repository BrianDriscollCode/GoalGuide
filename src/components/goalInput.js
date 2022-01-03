import React from "react";

class GoalInput extends React.Component {
    
    constructor() {
    
        this.state = { value: "" }

    }

     //click on list items and change inputs
    createInputField(event) {

        let input = document.createElement("INPUT");      
        input.value = event.target.textContent;
        input.setAttribute("onKeyDown", 'this.listItemInput');
        event.target.replaceWith(input);
        
    }
  
      

    render () {

        return (

            <input onkeypress={this.createInputField} />

        );
    }





}