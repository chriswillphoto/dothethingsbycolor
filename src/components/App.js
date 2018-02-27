import React, { PureComponent as Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Priority from "./Priority";
import AddPriority from "./AddPriority";
import ShowFormButton from "./ShowFormButton";

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
      items: [{ name: "one", level: 4 }, { name: "two", level: 5 }],
      showForm: false
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
        {this.state.showForm ? (
          <AddPriority addToPriorities={p => this.addToPriorites(p)} />
        ) : (
          <ShowFormButton />
        )}
      </div>
    );
  }
}

export default App;
