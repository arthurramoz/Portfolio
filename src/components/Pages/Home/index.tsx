import { Center } from '../global';
import Hero from './Sections/Hero';
import Featured from './Sections/Featured';
import About from './Sections/About';
import GitHub from './Sections/GitHub';

const Home = () => {
  return (
    <Center>
      <Hero />
      <Featured />
      <About />
      <GitHub />
    </Center>
  );
};

export default Home;
