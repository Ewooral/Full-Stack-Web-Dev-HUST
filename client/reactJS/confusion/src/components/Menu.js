import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectList: null

    };
    console.log("Menu component constructor is invoked!")
  }
  onListSelect(dish) {
    this.setState({ selectList: dish })
  }

  componentDidMount(){
    console.log("Menu component componentDidMount is invoked!")

  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className='flex justify-between 
         p-3 gap-11 bg-red-900 text-white'>{dish.description}
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {
    const menu = this.props.myList.map((dish) => {
      return (
        <div className='flex justify-between 
         p-3 gap-11 cursor-pointer' key={dish.id}>
          <div>
            <h1 className='bg-blue-800 text-white p-2' onClick={() => this.onListSelect(dish)}>{dish.name}</h1>
          </div>
          <div className='hidden'>
            <h5>{dish.description}</h5>
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
