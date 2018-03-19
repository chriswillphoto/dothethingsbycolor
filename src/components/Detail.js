import React from 'react'

const divstyle = {
  position: "fixed",
  height: "100%",
  width: "100%",
  backgroundColor: "skyblue",
  top: "0"
}

const Detail = ({priority}) => {
  return(
    <div style={divstyle} className="detail-modal">
      <button class="close-detail">X</button>
      <h1>{priority.name}</h1>
    </div>
  )
} 

export default Detail