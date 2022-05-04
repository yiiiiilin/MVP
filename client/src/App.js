import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import ChatApp from './ChatApp';
import { GlobalStyle } from './Style/global';

export default function App () {

  const [photoUrl, setPhotoUrl] = useState('')

  const handleOnClickOnAbout = (e) => {
    if(e.target.value === 'About') {
      setPhotoUrl('https://media.istockphoto.com/photos/about-web-banner-the-word-about-built-from-letters-on-wooden-cubes-picture-id1335204621?b=1&k=20&m=1335204621&s=170667a&w=0&h=4Ttl3LHvYqyEGYLXEMDqyAY7CV8zhR2SlVS3f_W3SFw=')
    }
    if(e.target.value === 'Games') {
      setPhotoUrl('https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80')
    }

    if(e.target.value === 'ChatApp') {
      setPhotoUrl('https://engineering.fb.com/wp-content/uploads/2009/02/chat.jpg')
    }
  }
// https://media.istockphoto.com/photos/about-web-banner-the-word-about-built-from-letters-on-wooden-cubes-picture-id1335204621?b=1&k=20&m=1335204621&s=170667a&w=0&h=4Ttl3LHvYqyEGYLXEMDqyAY7CV8zhR2SlVS3f_W3SFw=
  useEffect(() => {
    setPhotoUrl('https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80')
  }, []);



  return (
    <GlobalStyle>
      <Header handleOnClickOnAbout={handleOnClickOnAbout}/>
      <Section1 photoUrl={photoUrl} />
      <Section2 />
      <ChatApp />
      <Footer />
    </GlobalStyle>
  )
}
