import React from "react";


class AddToList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test: "test"
        }
    }



    render () {

        return (

            <div className="goalTitle"> 
                <h3> {this.props.day} </h3>
                <button onClick={this.props.handleSubmit} type={this.props.day}> + </button>
            </div>

        );

    }

}

export default AddToList;