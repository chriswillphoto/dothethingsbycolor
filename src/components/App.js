import React, { PureComponent as Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Priority from "./Priority";
import AddPriority from "./AddPriority";
import Detail from "./Detail";
import ShowFormButton from "./ShowFormButton";
import uniqid from "uniqid";
import "./App.css";

const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
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
      items: {

      },
      showForm: false,
      showDetail: false,
      selected: null,
      editDetail: false
    };
  }

  saveToStorage(items) {
    localStorage.setItem("dobycolorlist", JSON.stringify(items));
  }

  fetchFromStorage() {
    if (localStorage.getItem("dobycolorlist")) {
      const itemList = localStorage.getItem("dobycolorlist");
      const parsed = JSON.parse(itemList);

      this.setState({ items: parsed });
    }
  }

  listPriorities() {
    return Object.keys(this.state.items).map((key) => { return this.state.items[key]  }).sort(compare).map(priority => {
      return (
        <Priority priority={priority} key={priority.id} openDetail={(e, p) => this.openDetail(p)} />
      );
    });
  }

  openDetail(priority) {
    this.setState({ showDetail: true, selected: priority });
  }

  addToPriorites(p) {
    const newPriorities = {...this.state.items, [p.id]: p}
    this.setState(
      { items: newPriorities, showForm: false },
      this.saveToStorage(newPriorities)
    );
  }

  componentWillMount() {
    this.fetchFromStorage();
  }

  render() {
    const key = this.state.selected
    return (
      <div className="priorities-container">
        {this.listPriorities()}
        {this.state.showDetail && (
          <Detail
            priority={this.state.items[key]}
            closeModal={() => this.setState({ showDetail: false, selected: null })}
            editState={this.state.editDetail}
            editOn={() => {this.setState({editDetail: !this.state.editDetail})}}
            editInfo={(e) => this.setState({
              items: {...this.state.items, [this.state.selected]: {...this.state.items[this.state.selected], details: e.target.value}}
            }, this.saveToStorage( this.state.items ))}
            detailInfo={this.state.items[this.state.selected].details}
          />
        )}
        <TransitionGroup>
          {this.state.showForm ? (
            <Fade key={uniqid()}>
              <AddPriority
                addToPriorities={p => this.addToPriorites(p)}
                key={uniqid()}
                hideForm={() => this.setState({ showForm: false })}
              />
            </Fade>
          ) : (
            <Fade key={uniqid()}>
              <ShowFormButton showForm={() => this.setState({ showForm: true })} key={uniqid()} />
            </Fade>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
