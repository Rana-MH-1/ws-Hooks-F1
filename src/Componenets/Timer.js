import { Component } from "react";

class Timer extends Component{
    constructor(){
        console.log('constructor');
        super()
        this.state={
            timer: 0,
            intervall : null
        }
    }

    componentDidMount(){
        console.log('component did mount');
        this.setState({intervall: setInterval(()=>this.setState({timer: this.state.timer +1}),1000) })
    }

    componentDidUpdate(){
        console.log('comp did update');
        console.log(this.state.timer);
    }
    componentWillUnmount(){
        console.log('comp is killed');
        clearInterval(this.state.intervall)
    }

    render(){
        return(
            <div>
                <h2>Component Timer has mounted since {this.state.timer}</h2>
            </div>
        )
    }
}

export default Timer