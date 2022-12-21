import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    }
  }
  render() {
    const { firstName, lastName, hairColor } = this.props;
    const age = this.state.age;

    return (
      <>
        <h1>{`${lastName}, ${firstName}`}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={ () => { this.setState({age: age+1}) } }>Bday Buton for {`${firstName} ${lastName}`}</button>
        <br></br>
      </>
    )
  }
}

export default PersonCard;