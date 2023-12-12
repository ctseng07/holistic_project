import Navbar from "./components/Navbar";
import {
  Footer,
  Hero,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='bg-heroPage bg-center bg-cover'>
        <Hero />
      </section>
      <section className=' '>
        <Footer />
      </section>
    </main>
  );
};

export default App;