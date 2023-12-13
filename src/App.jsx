import Navbar from "./components/Navbar";
import {
  Footer,
  Hero,
  About,
  Virtual,
  Shop,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='bg-heroPage bg-center bg-cover'>
        <Hero />
      </section>
      <section className='py-14 max-container'>
        <About />
      </section>
      <section className='py-14 max-container'>
        <Virtual />
      </section>
      <section className='bg-bg-pink'>
        <Shop />
      </section>
      <section className=''>
        <Footer />
      </section>
    </main>
  );
};

export default App;