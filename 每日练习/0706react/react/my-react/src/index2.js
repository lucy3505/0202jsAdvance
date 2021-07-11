import React from './react'
// import React from './react'
import ReactDOM from 'react-dom'


// React.render('hello2',document.getElementById("root"))
class App{
  constructor(props){
    this.props=props
  }
    render(){
      console.log(this.props)
       return (
      <div>App

        {this.props.children}
      </div>
    )
    }
   
  
}

function app(props){
  return (<div>app</div>)
}


React.render(<App><div>app children</div></App>,document.getElementById("root"))