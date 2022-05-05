import React from 'react';
import moment from 'moment';
import { BiRightArrow } from 'react-icons/bi';

export default function MessageEntry({message, userName}) {
  const messageStyle = message.name === userName ?
  {
    textAlign: 'right',
    margin: '10px',
    borderBottom: '10px',
  } :
  {
    margin: '10px',
    borderBottom: '10px',
  };
  return (
    <div
    style={messageStyle}
    >
      {message.message} <br />
      <div style={{color: 'rgb(14,114,237)',opacity: "0.7"}}>
      {`${message.name} `}
      </div >
      <div  style={{color: 'rgb(14,114,237)', paddingLeft: '0px', opacity: "0.7"}}>
        {moment(message.time).fromNow()}
      </div>
    </div>
  )
}