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


export default function Home() {
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