import { Center } from '../global';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Gallery from './Sections/Gallery';

const Home = () => {
  return (
    <Center>
      <Hero />
      <About />
      <Gallery />
    </Center>
  );
};

export default Home;
