import styled from 'styled-components';

export const ChatAppIcon = styled.div`
  height: 50px;
  weight: 50px;
  background-image: url(https://www.pngplay.com/wp-content/uploads/7/Chat-Transparent-Images.png);
  background-size: cover;
  z-index:1;
  cursor: pointer;
`

export const ChatAppIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 5;
`
export const ModalContainer = styled.div`
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalFormContainer = styled.form`
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8);
`;

export const CompareModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8);
`;

export const ModalProductName = styled.th`
  font-weight: 700;
  font-size: 1em;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(3, 115, 83, 0.3);
  width: 150px;
  position: sticky;
  line-height: 1.25;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 20px;
  font-size: .9em;
  width: 300px;
  height: 90%;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 5;
  animation: 500ms ease-out 0s 1 normal none running jgQpwH;
`;

export const ModalBody = styled.div`
  padding: 10px;
  overflow-y: auto;
`

export const ButtonContainer = styled.div`
padding: 4px;
`

export const ChatButton = styled.div`
display: inline-block;
border: 1px solid rgba(14, 114, 237, 0.45);
font-size: 16px;
font-weight: 500;
border-radius: 8px;
line-height: 20px;
padding: 7px 13px;
margin: 0px;
box-sizing: border-box;
background-color: transparent;
color: rgb(14, 114, 237);
cursor: pointer;
transition: background-color 50ms ease-in-out 0s, border-color 100ms ease-in-out 0s;
white-space: normal;
text-align: left;
&:hover {

  color: #fff;
  zindex: 2;
  boder-rad: px 20px 5px 20px;
  background-color: rgba(14, 114, 237, 0.45);
}
`