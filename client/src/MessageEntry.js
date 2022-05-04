import React from 'react';
import moment from 'moment';

export default function MessageEntry({message}) {
  return (
    <div
    style={{
      margin: '10px',
      borderBottom: '10px',
    }}
    >
      {message.message} <br />
      <tag style={{color: 'rgb(14,114,237)',opacity: "0.7"}}>
      {`${message.name} `}
      </tag >
      <tag  style={{color: 'rgb(14,114,237)', paddingLeft: '60px', opacity: "0.7"}}>
        {moment(message.time).fromNow()}
      </tag>
    </div>
  )
}