import { Component } from "react";

// function Clock() {

//     const [time, setTime] = useState(new Date())

//     useEffect(() => {
//         const timer = setInterval(() => setTime(new Date()), 1000)
//         return () => {
//             clearTimeout(timer)

//         }

//     }, [time])
//     return (
//         <div>
//             <h2>Hello, world!</h2>
//             <h2>It is {time.toLocaleTimeString()} AM</h2>
//         </div>
//     );

// }

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // life cycle methods

    // mounting the component to the DOM
    componentDidMount() {
        this.food = setInterval(
            () => this.tick(),
            1000
        );
    }
    // unmounting component to the DOM
    componentWillUnmount() {
        clearInterval(this.food);
    }

    tick() { this.setState({ date: new Date() }); }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default Clock




