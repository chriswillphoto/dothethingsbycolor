import React from 'react'

const divstyle = {
  position: "fixed",
  height: "100%",
  width: "100%",
  backgroundColor: "skyblue",
  top: "0"
}



const Detail = (props) => {
  return(
    <div style={divstyle} className="detail-modal">
      <button className="close-detail" onClick={() => {props.closeModal()}}>X</button>
      <h1>{props.priority.name}</h1>
      {!props.editState ? <p onClick={props.editOn}>{props.detailInfo}</p> : <textarea value={props.detailInfo} onChange={(e) => { props.editInfo(e) }} onBlur={props.editOn}></textarea>  } 
    </div>
  )
} 

export default Detail