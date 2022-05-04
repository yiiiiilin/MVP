import React from 'react';
import {
  HeaderContainer,
  CompanyLogo,
  NavBarContainer,
  NavBar,
  Signinbutton,
  Buttonposition,
} from './Style/header';

export default function Header({handleOnClickOnAbout}) {

  return (
    <HeaderContainer className="Header">
      <div style={{
        display: "flex",
        height: "100%",
        padding: "15px",
    }}>
        <div className="CompanyName">
          <CompanyLogo alt='' src="https://www.draftkings.com/landingpages/DraftKings_Linear_FC_on_dark.png" />
        </div>
        <NavBarContainer className="NavBarContainer">
          <NavBar className="NavBar1" type="button" value="About" onClick={(e) => handleOnClickOnAbout(e)}>About</NavBar>
          <NavBar className="NavBar2" type="button" value="Games" onClick={handleOnClickOnAbout}>Games</NavBar>
          <NavBar className="NavBar3" type="button" value="ChatApp" onClick={handleOnClickOnAbout}>ChatApp</NavBar>
          <NavBar className="NavBar3" type="button" value="ChatApp" onClick={handleOnClickOnAbout}>Contact</NavBar>

        </NavBarContainer>
        <Buttonposition className="sign_in_button">
          <Signinbutton
            onClick={() => {
              window.open('https://myaccount.draftkings.com/login?returnPath=%2flobby#promos?returnurl=/lobby');
            }}
          >
            SIGN IN</Signinbutton>
        </Buttonposition>
      </div>

    </HeaderContainer>
  )
}