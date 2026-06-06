import Certificates from './components/certificate';
import ChatBot from './components/chatbot';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Info from './components/info';
import Portfolio from './components/p';
import Projects from './components/projects';
import Service from './components/service';
import Tech from './components/tech';
import Testimony from './components/testimony';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';
import api from '../api/api';


export default function Home() {
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await api.get('/start/');
        console.log(response.data.message);
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    };

    checkServer();
  }, []);

  return (
    <ThemeProvider>
   
     <Header/>
     <Info/>
     <Service/>
    <Projects/>
    <Testimony/>
    <Certificates/>
    <Contact/>
    <Footer/>
    <ChatBot/>
    </ThemeProvider>
  );
}