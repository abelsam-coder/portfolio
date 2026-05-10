import ChatBot from './components/chatbot';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Info from './components/info';
import Projects from './components/projects';
import Service from './components/service';
import Tech from './components/tech';
import Testimony from './components/testimony';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-500 transition-colors">
      <Header />
      <Info/>
      <Tech/>
      <Service/>
      <Projects/>
      <Testimony/>
      <Contact/>
      <ChatBot/>
      <Footer/>
      {/* Your content */}
    </div>
  );
}