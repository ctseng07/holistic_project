import Navbar from "./components/Navbar";
import {
  Footer,
  Hero,
  About,
  VirtualSkin,
  VirtualWorkshop,
  Shop,
  Book,
  Blog,
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
        <VirtualSkin />
      </section>
      <section className='bg-bg-pink'>
        <Shop />
      </section>
      <section className='py-14 max-container'>
        <Blog />
      </section>
      <section className='py-14 max-container'>
        <VirtualWorkshop />
      </section>
      <section className='bg-bg-pink'>
        <Book />
      </section>
      <section className=''>
        <Footer />
      </section>
    </main>
  );
};

export default App;