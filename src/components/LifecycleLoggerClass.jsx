import { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);

    // For functional component, I would use the traditional useState hook
    // Even though they're both _technically_ equivalent
    // const [count, setCount] = useState(0);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted...");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component updated...", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Component unmount...");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="logger-container">
        <h2>LifecycleLogger (Class Component)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} className="secondary-btn">
          Update
        </button>
      </div>
    );
  }
}

export default LifecycleLogger;
