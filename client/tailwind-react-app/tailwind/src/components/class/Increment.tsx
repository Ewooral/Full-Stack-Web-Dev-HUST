import React from 'react';

class Increment extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      initial: 0
    }

  }


  onchangeNum(num) {
    this.setState({
      initial: num + 1
    })
    console.log(num + 1)
  }

  render() {
    return (
      <div className='container relative flex items-center mb-3 justify-evenly '>
        <article onClick={() => {
          this.onchangeNum(this.state.initial)
        }} className=' bg-black rounded-md text-white p-6 cursor-pointer '>
          {this.state.initial}
        </article>
      </div>
    );
  }



};

export default Increment;
