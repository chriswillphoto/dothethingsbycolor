import React from 'react'
import './Priority.css'


const styles = {
  1: "level-one",
  2: "level-two",
  3: "level-three",
  4: "level-four",
  5: "level-five"
}

const Priority = (props) => {
  return(
    <div className={"priority-container " + styles[props.priority.level] } onClick={(e) => props.openDetail(e, props.priority)}>
      <h1 className="priority-heading">{props.priority.name}</h1>
    </div>
  )
}



export default Priority