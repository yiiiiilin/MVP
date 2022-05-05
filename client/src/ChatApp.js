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

export default function ChatApp ({socket}) {
  const [displayIcon, setDisplayIcon] = useState(true);
  const [input, setInput] = useState('');
  const [messageList, setmessageList] = useState([])
  const [showLogin, setShowLogin] = useState(true);
  const [userName, setUserName] = useState('');


  const toggleDisplay = () => {
    setDisplayIcon(!displayIcon)
  }

  const handleInput = (e) => {
    if(e.target.value === 'CLEAR') {
      setmessageList([]);
    }
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    if (input !== '') {
      const messageData = {
        name: userName,
        message: input,
        time: new Date(),
      };

      await socket.emit('send_message', messageData);
      setmessageList((list) => [...list, messageData]);
      setInput('')
    }

    // setmessageList([...messageList, {message: input, time: new Date()}])
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data)
      setmessageList([...messageList, data]);
    })
  }, [messageList, socket]);

  const showApp = showLogin?
  <div>
    <form>
      <label>
        Your Name
        <input type='text' onChange={(event) => setUserName(event.target.value)}/>
      </label>
      <input type='submit' value="Submit"
      onClick={(e) => {
        e.preventDefault();
        setShowLogin(false);
        }}
      />
    </form>
  </div> :
  <div>
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
              onKeyPress={(event) => {
                event.key === 'Enter' && handleSubmit()
                }
              }
            >
            </textarea>
            <BiMailSend size="25px" style= {{cursor: 'pointer', paddingRight: '10px'}}onClick={handleSubmit} />
            <AiOutlinePicture size='25px' style= {{cursor: 'pointer', paddingRight: '10px'}} />
            <AiOutlineFileAdd size='25px' style= {{cursor: 'pointer'}} />
          </div>
  </div>
  ;


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
            {messageList.map((message) => {
              return <MessageEntry key={Math.random()}message={message} userName={userName}/>;
            })}
          </div>

          {showApp}
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