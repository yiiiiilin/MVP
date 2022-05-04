import React, {useState, useEffect} from 'react';
import MessageEntry from './MessageEntry.js'
import {
  ChatAppIcon,
  ChatAppIconContainer,
  ModalContent,
  ChatButton,
  ButtonContainer
} from './Style/chat.js';
import {
  BiMailSend
} from 'react-icons/bi'
import {
  AiOutlineCloseCircle,
  AiOutlineArrowDown,
  AiOutlineVideoCameraAdd,
  AiOutlinePicture,
  AiOutlineFileAdd,
} from 'react-icons/ai'

export default function ChatApp () {
  const [displayIcon, setDisplayIcon] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])

  const fakeMessage = [
    'How are you today?',
    'Do you have any questions',
    'What is your name?',
    'Fine, thank you. And you?'
  ]

  const toggleDisplay = () => {
    setDisplayIcon(!displayIcon)
  }

  const handleInput = (e) => {
    if(e.target.value === 'CLEAR') {
      setMessages([]);
    }
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    setMessages([...messages, {message: input, name: 'From me', time: new Date()}])
  }

  // useEffect(() => {
  //  let random = fakeMessage[
  //   Math.floor(
  //     Math.random()*(fakeMessage.length)
  //   )
  // ]}, [])

  // setInterval((e)=> {
  //   setMessages(
  //     [
  //       ...messages,
  //       'How are you today?'
  //     ]
  //   )
  // }, 5000);



  return (
    <ChatAppIconContainer>
      {
        displayIcon === false ?
        <ModalContent>
          <div style={{
            backgroundColor: "#CBA1EC",
            height: '10%',
            width: "100%",
            margin: "0",
            borderRadius: '20px 20px 0 0 ',
          }}>
            <p style={{
              right: "20px",
              top: "60px",
              position: 'fixed',
              cursor: 'pointer',
              }}
              onClick={toggleDisplay}

              >
              <AiOutlineVideoCameraAdd
                size='22px'
                style={{left: '1150px', top: '75px',position: 'fixed'}}
              />
              <AiOutlineArrowDown size='25px' />
              <AiOutlineCloseCircle size='25px'/>
            </p>
          </div>

          <div style={{
        padding: '1rem',
        maxHeight: '350px',
        overflow: 'auto',
      }}>
        <div>
          <p>Hello, I am the draftkings Bot. How are you today?</p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            <ButtonContainer>
              <ChatButton
                onClick={() => {
                  window.open('https://www.draftkings.com/about/');
                }}
              >ABOUT DRAFTKINGS</ChatButton>
            </ButtonContainer>
            <ButtonContainer>
              <ChatButton
                onClick={() => {
                  window.open('https://www.draftkings.com/dfs?_gl=1*m873st*_ga*NjM0MjY2NzYyLjE2NTExMTc3NDM.*_ga_QG8WHJSQMJ*MTY1MTExNzc0My4xLjEuMTY1MTExOTYxNy4w');
                }}
              >DAILY FANTACY</ChatButton>
            </ButtonContainer>
            <ButtonContainer>
              <ChatButton
                onClick={() => {
                  window.open('https://sportsbook.draftkings.com/sportsbook?_gl=1*12jvj87*_ga*NjM0MjY2NzYyLjE2NTExMTc3NDM.*_ga_QG8WHJSQMJ*MTY1MTExNzc0My4xLjEuMTY1MTExOTU3MC4w');
                }}
              >SPORTSBOOK</ChatButton>
            </ButtonContainer>
            <ButtonContainer>
              <ChatButton
                onClick={() => {
                  window.open('https://casino.draftkings.com/auth?wpkw=https%3A%2F%2Fwww.draftkings.com%2F&wpaffn=Google&wpsrc=Organic%20Search&_gl=1*1rg7c01*_ga*NjM0MjY2NzYyLjE2NTExMTc3NDM.*_ga_QG8WHJSQMJ*MTY1MTExNzc0My4xLjEuMTY1MTExOTU0My4w&_ga=2.210173394.699446064.1651117743-634266762.1651117743');
                }}
              >CASINO</ChatButton>
            </ButtonContainer>
          </div>

        </div>
            {messages.map((message) => {
              return <MessageEntry key={Math.random()}message={message}/>;
            })}
          </div>
          <div
            style={{
              textAlign: 'center',
              bottom: '20px',
              position: 'absolute',
            }}
          >
            <textarea
              placeholder='Message...'
              type="text"
              onChange={handleInput}
              style={{
                height: "100px",
                width: '280px'
              }}
            >
            </textarea>
            <BiMailSend size="25px" style= {{cursor: 'pointer', paddingRight: '10px'}}onClick={handleSubmit} />
            <AiOutlinePicture size='25px' style= {{cursor: 'pointer', paddingRight: '10px'}} />
            <AiOutlineFileAdd size='25px' style= {{cursor: 'pointer'}} />
          </div>

        </ModalContent>
         :
        <ChatAppIcon
          onClick={toggleDisplay}
          style={{display: `${displayIcon ? null : 'none'}`}}
        >
        </ChatAppIcon>

      }
    </ChatAppIconContainer>
  )
}