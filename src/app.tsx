// import ScrollToTopButton from './components/ScrollTopButton/ScrollToTopButton';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contact from './components/Contacts/Contact';

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <section id="contact">
        <Contact />
      </section>

      {/* <ScrollToTopButton /> */}
    </>
  );
}
