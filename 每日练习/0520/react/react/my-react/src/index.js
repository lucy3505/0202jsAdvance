// import React from 'react'
import React from './react'
import ReactDOM from 'react-dom'

function say(){
    console.log('say')
}
// const element = <div><span name = "xxx" xxx="fd" onClick={say}>hello<button>加油</button></span></div>
class Button extends React.Component{
    // this.state = {
    //     type:"warning"
    // }
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <div>
        {this.props.children}
        </div>
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:1
        }
    }
    render(){
        console.log(this.props.children)
        return <div>
        {this.state.num}{this.props.name}
        {this.props.children}
            {/* <Button type="primiary">
                   <div>提交</div>
                   <button>提交2</button>
            </Button> */}
          
        
        </div>
    }
        
}


React.render(<App name="app"><Button type="primiary">
                   <div>提交</div>
                   <button>提交2</button>
            </Button>
            </App>,document.getElementById('root'))