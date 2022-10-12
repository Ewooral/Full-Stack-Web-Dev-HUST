import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
    console.log("Constructor is invoked!")
  }


  componentDidMount() {
    console.log('componentDidMount works')
  }

  onChangeClick(val, nu) {
    this.setState({
      value: val + 1,
    })
  }
  renderSomething(){
    return(
      <div className="">

      </div>
    )
  }



  render() {
    console.log("Render method is invoked!")

    return (
      <div className="">
        <button onClick={() => {
          this.onChangeClick(this.state.value)


        }}
          className='paintRed'>
          <p>
            Click
          </p>
          {this.state.value}

        </button>


      </div>
    )
  }

  componentDidUpdate() {
    console.log('componentdidupdate works fine!')
  }

  shouldComponentUpdate(){
      return(true)
  }

  
  
  // getSnapshotBeforeUpdate(){

  // }

}




export default App
