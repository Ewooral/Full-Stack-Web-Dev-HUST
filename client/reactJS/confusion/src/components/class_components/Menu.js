import React, { Component } from 'react';
import Pic from '../assets/images/alberto.png'
class Menu extends Component {
  constructor(props) {
    super(props);

    // The data stored in our component 
    // (state of the component)
    this.state = {
      selectList: null,
    };
    console.log("Menu component constructor is invoked!")
  }

  // Function that changes the state of our component
  onListSelect(dish) {
    this.setState({ selectList: dish })
  }

  componentDidMount() {
    console.log("Menu component componentDidMount is invoked!")

  }

  // This will be rendered if an event is triggered
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className='container flex justify-between 
         p-3 gap-11 bg-red-900 text-white max-w-x'>
          <p>{dish.description}</p>
          <p>{dish.price}</p>
          <p>{dish.category}</p>
          <img src={this.image} alt="img" />
          <p> <img src={Pic} alt="" /> </p>
        </div>

      )
    }
    else {
      return (
        <div className=''>Nothing...</div>
      )
    }
  }

  render() {
    const menu = this.props.myList.map((dish) => {
      return (
        <div className='flex justify-between 
         p-3 gap-11' key={dish.id}>
          <div className='container cursor-pointer'>
            <h1 className='bg-blue-800 text-white p-3'
              onClick={() => this.onListSelect(dish)}>{dish.name}
            </h1>
          </div>
          <div className='container'>
            <h5 className='flex max-w-xs bg-slate-800  text-white p-4 text-end'>{dish.description}</h5>
          </div>
          <div className="container">
            <h5 className='bg-green-900 text-white'>{dish.price}</h5>
          </div>
        </div>
      );
    });
    console.log("Menu component render is invoked!")

    return (
      <div>
        <article>
          {menu}
        </article>
        <div>
          {this.renderDish(this.state.selectList)}
        </div>
      </div>

    );

  }

}

export default Menu;
