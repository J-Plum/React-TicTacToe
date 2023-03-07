import React, { Component } from 'react';

class HelloWorld extends Component {

  constructor(props){
    super(props);
    this.state = {
      id : "J-plum",
    }
  }


  componentDidMount(){
    // Component가 Mount 되면 동작
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default HelloWorld;