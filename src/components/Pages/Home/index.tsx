import { Center } from '../global';
import Hero from './Sections/Hero';
import WhatsNew from './Sections/WhatsNew';
import About from './Sections/About';
import Experience from './Sections/Experience';
import GitHub from './Sections/GitHub';

const Home = () => {
  return (
    <Center>
      <Hero />
      <WhatsNew />
      <About />
      <Experience />
      <GitHub />
    </Center>
  );
};

export default Home;
