import React, { PureComponent as Component } from "react";
import { CSSTransition } from "react-transition-group";
import Priority from "./Priority";
import AddPriority from "./AddPriority";
import Detail from './Detail'
import ShowFormButton from "./ShowFormButton";
import uniqid from "uniqid";
import './App.css'
const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

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
      showForm: false,
      showDetail: false
    };
  }

  listPriorities() {
    return this.state.items.sort(compare).map(priority => {
      return <Priority priority={priority} key={uniqid()} />;
    });
  }

  addToPriorites(p) {
    const newListOfPriorites = [...this.state.items, p];
    console.log(newListOfPriorites);
    this.setState({ items: newListOfPriorites, showForm: false });
  }

  render() {
    return (
      <div className="priorities-container">
        {this.listPriorities()}
        {this.state.showDetail && <Detail priority={this.state.selected} />}
        <Fade in={this.state.showForm}>
        {this.state.showForm ? (
          <AddPriority addToPriorities={p => this.addToPriorites(p)} key={uniqid()}/>
        ) : (
          <ShowFormButton showForm={() => this.setState({ showForm: true })} key={uniqid()}/>
        )}
        </Fade>
      </div>
    );
  }
}

export default App;
