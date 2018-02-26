import React, { PureComponent as Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Priority from "./Priority";
import AddPriority from "./AddPriority";

const compare = function(a, b) {
  const levelA = a.level;
  const levelB = b.level;

  let comparison = 0;
  if (levelA < levelB) {
    comparison = 1;
  } else if (levelA > levelB) {
    comparison = -1;
  }
  return comparison;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ name: "one", level: 4 }, { name: "two", level: 5 }]
    };
  }

  listPriorities() {
    return this.state.items.sort(compare).map(priority => {
      return <Priority priority={priority} />;
    });
  }

  addToPriorites(p) {
    const newListOfPriorites = [...this.state.items, p];
    console.log(newListOfPriorites);
    this.setState({ items: newListOfPriorites });
  }

  render() {
    return (
      <div className="priorities-container">
        {this.listPriorities()}
        <AddPriority addToPriorities={p => this.addToPriorites(p)} />
      </div>
    );
  }
}

export default App;
