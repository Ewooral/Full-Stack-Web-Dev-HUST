// This is a sudo container component for our app. Thus the root container 

import { Component } from "react";// import Logo from './assets/images/logo.png';
import Menu from "./Menu";
import { DISHES } from "../../shared/dishes"

//  class component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LISTS: DISHES,
            selectList: null,
        };

    }

    onListSelect(dishId) {
        this.setState({ selectList: dishId })
    }


    render() {
        return (
            <>
                <div className="relative container-fluid">
                    <Menu myList={this.state.LISTS} 
                        onClick={(dishId) => this.onListSelect(dishId)}
                    />
                </div>
            </>
        )
    }
}

export default Main

