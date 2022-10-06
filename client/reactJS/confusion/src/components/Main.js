// This is a sudo container component for our app. Thus the root container 

import { Component } from "react";// import Logo from './assets/images/logo.png';
import Menu from "./components/Menu";
import { DISHES } from "./shared/dishes"

//  class component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LISTS: DISHES

        };

    }

    render() {
        return (
            <>
                <div className="relative container-fluid">
                    <Menu myList={this.state.LISTS} />
                </div>
            </>
        )
    }
}

export default App

