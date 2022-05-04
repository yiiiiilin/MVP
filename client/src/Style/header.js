import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #323232;
  position: relative;
  height: 100%;
  padding: 2em;
`
export const CompanyLogo = styled.img`
  width: 120px;
  height: aut0;
`
export const NavBarContainer = styled.div`
  margin-left: 35%;
  margin-right: 30%;
  display: flex;
`
export const NavBar = styled.button`

  font-size: 16px;
  padding: 5px 20px 5px 20px;
  margin-right: 40px;
  line-height: 40px;
  cursor: pointer;
  font-weight: 50;
  font_family: Open Sans,sans-serif!important;
  boarder-color: #fff;
  border-radius: 20px;
  &:hover {

    color: #fff;
    zindex: 2;
    boder-rad: px 20px 5px 20px;
    background-color: #323232;
  }

`
export const Signinbutton = styled.button`
  background-color: #323232
  color: #fff;
  padding: 5px 30px 5px 30px;
  white-space: nowrap;
  text-align: center;
  border-radius: 20px;
  &:hover {

    color: #fff;
    zindex: 2;
    boder-rad: px 20px 5px 20px;
    background-color: #323232;
  }
`

export const Buttonposition = styled.div`
  margin-left: 10%;
`