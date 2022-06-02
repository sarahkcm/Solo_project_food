import React from "react";
// import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';


const OnePost = (props) => {
        return(
            <div>
                <li className="feed-list-item">

                 {/* {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} */}
                <div className="feed-list-item-title" onClick={()=>{props.handleClick(props.oneP)}}>{props.oneP.Title}</div>
                <div className="feed-list-item-byline"><p className="feed-list-item-byline-author">{props.oneP.description}</p></div>
                <img src={props.oneP.Picture} onClick={props.handleClick} className="feed-list-item-image"/>
                {/* <span className="feed-list-item-lede">{props.oneP.likes} </span> */}
                </li>
            </div>
            
        )
  }

export default OnePost