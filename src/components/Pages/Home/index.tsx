import { Center } from '../global';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Experience from './Sections/Experience';
import GitHub from './Sections/GitHub';

const Home = () => {
  return (
    <Center>
      <Hero />
      <About />
      <Experience />
      <GitHub />
    </Center>
  );
};

export default Home;
