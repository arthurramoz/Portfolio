import { Center } from '../global';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Gallery from './Sections/Gallery';

const Home = () => {
  return (
    <Center>
      <Hero />
      <About />
      <Experience />
      <Gallery />
    </Center>
  );
};

export default Home;
