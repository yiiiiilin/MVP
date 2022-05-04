import React from 'react';
import {
  Section1Container
} from './Style/section1';

export default function Section1 ({photoUrl}) {

  return (
    <Section1Container>
      <img
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "35px",
          cursor: "pointer",
          objectFit: "cover",
        }}
        alt="section1Pic"
        src={photoUrl}>
      </img>
    </Section1Container>
  )
}