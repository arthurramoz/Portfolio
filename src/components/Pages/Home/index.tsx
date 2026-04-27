import { Center } from '../global';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Experience from './Sections/Experience';

const Home = () => {
  return (
    <Center>
      <Hero />
      <About />
      <Experience />
    </Center>
  );
};

export default Home;
