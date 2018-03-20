import React from 'react'

const divstyle = {
  position: "fixed",
  height: "100%",
  width: "100%",
  backgroundColor: "skyblue",
  top: "0"
}

const DetailInfo = ({toEditor}) => {
  return(
    <p onClick={toEditor} >Test</p>
  )
}

const Editor = (props) => {
  return(
    <div>
    <textarea onChange={(e) => props.editInfo(e)} value={props.details}></textarea>
    </div>
  )
}


const Detail = (props) => {
  return(
    <div style={divstyle} className="detail-modal">
      <button className="close-detail" onClick={() => {props.closeModal()}}>X</button>
      <h1>{props.priority.name}</h1>
      {!props.editState ? <DetailInfo toEditor={props.editOn}/> : <Editor details={props.detailInfo} editInfo={(e) => props.editInfo(e)}  />}
    </div>
  )
} 

export default Detail