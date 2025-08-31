import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <h1>Página Secundária</h1>
        <p>Esta é a página secundária.</p>
      </main>
    </div>
  );
}

export default About;
