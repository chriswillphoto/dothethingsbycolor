import React, { PureComponent as Component } from "react";
import Priority from './Priority'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  listPriorities() {
    this.state.items.map( priority => {
      <Priority level={priority.level} />
    } )
  }

  render() {
    return(
      <div className="priorities-container" >
        {this.listPriorities()}
      </div>
    )
  }
}

export default App;
