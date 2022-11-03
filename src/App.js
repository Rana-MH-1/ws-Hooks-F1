import React from "react";
import Timer from "./Componenets/Timer";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:'Wael',
      count: 0,
      val : null,
      show:false
    }
  }

Incerement(){
  this.setState({count: this.state.count + 1})
  }
  Decrement(){
    if(this.state.count>0){
      this.setState({count: this.state.count- 1})
    }
  }
  RESET(){
    this.setState({count:0})
  }

  Increment_with_value(val){
    this.setState({count: this.state.count + val})
  }

  render(){
    let count = this.state.count
    return (
      <div className="App">
       <h1>This is a ws of state -- class</h1>
       <h3>{this.state.name}</h3>
       <h2>{count}</h2>
       <button onClick={()=>this.Incerement()}>INCREMENT</button>
       <button onClick={()=> this.Decrement()}>DECREMENT</button>
       <button onClick={()=> this.RESET()}>RESET</button>
       <input onChange={(e)=>this.setState({val: +e.target.value})} placeholder="put a number" />
       <button onClick={(e)=> this.Increment_with_value(this.state.val)}>INCREMENT With VALUE</button>
       <hr/>
       <button onClick={()=>this.setState({show:!this.state.show})}>Show Timer</button>
      {this.state.show && <Timer/>}


      </div>
    );
  }
}

export default App;
