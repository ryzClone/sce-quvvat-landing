import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Company from './components/Company/Company';
import Investors from './components/Investors/Investors';
import News from './components/News/News';
import Jobs from './components/Jobs/Jobs';
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      
      <main className="main-container">
        {/* Left Sidebar (News) */}
        <aside className="sidebar left-sidebar">
          <section id="news">
            <News />
          </section>
        </aside>

        {/* Main Content */}
        <section className="main-content">
          <section id="company">
            <Company />
          </section>

          <section id="jobs">
            <Jobs />
          </section>
        </section>

        {/* Right Sidebar (Investors) */}
        <aside className="sidebar right-sidebar">
          <section id="investors">
            <Investors />
          </section>
        </aside>
      </main>

      {/* Contact bo'limini pastga qo'yamiz */}
      <Contact />

    </>
  );
}

export default App;
