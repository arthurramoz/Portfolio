import { Center } from '../global';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Experience from './Sections/Experience';
import GitHub from './Sections/GitHub';
import WavyLine from './WavyLine';

const Home = () => {
  return (
    <Center style={{ position: 'relative' }}>
      <WavyLine />
      <Hero />
      <About />
      <Experience />
      <GitHub />
    </Center>
  );
};

export default Home;
