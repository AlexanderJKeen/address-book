import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    screen: [],
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({screen: [...prevState.screen, this.state.value]}))
    this.setState({ value: "" })
  }
  clear = () =>{
    this.setState({screen: []})
  }

  render(){
    return(
    <div className = "addressBook">
      <div className = "head">Blizzard Friends List</div>
      <form className="display" onSubmit={this.handleSubmit}>
        <label className = "title">
          Details:
        </label>
          <input className = "entry" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className = "button" type="submit" value="Submit" />
        <button className = "button" onClick ={this.clear}>Clear</button>
      </form>
      <div className = "output">
        {this.state.screen.map(value => {
          return (<Box information={value} />)})}
        
      </div>
    </div>
    )
  }
}
const Box = props => {
  return(
  <ul>
    <li>{props.information}</li>
  </ul>
  )
}
export default App;
