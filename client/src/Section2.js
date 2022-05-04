import React from 'react';
import {
  Section2Container
} from './Style/section2';

export default function Section2 () {

  return (
    <Section2Container>
      <img
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "35px",
          cursor: "pointer",
          objectFit: "cover",
        }}
        alt="Section2pic"
        src="https://www.olark.com/img/views/index/howitworks/ChatinRealTime_img.jpg"></img>
    </Section2Container>
  )
}