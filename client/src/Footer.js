import React from 'react';
import {
  FooterContainer,
  CopyRight
} from './Style/footer.js';
import {
  GrFacebook,
} from 'react-icons/gr'

import {
  FaInstagramSquare
} from 'react-icons/fa'

export default function Footer () {

  return (
    <FooterContainer>
      <CopyRight>© 2022 All Rights Reserved.</CopyRight>
      <br />
      <a href="  https://www.facebook.com/draftkings/">
        <GrFacebook size="25px" color="#1b74e4"
          style={{
          cursor: 'pointer',
      }}/>
      </a>
      {/* <a href="  https://www.facebook.com/draftkings/">
        <FaInstagramSquare size="25px" color="#1b74e4"
          style={{
          cursor: 'pointer',
      }}/>
      </a> */}

    </FooterContainer>
  )
}