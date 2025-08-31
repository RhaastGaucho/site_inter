import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <h1>Página Principal</h1>
        <p>Bem-vindo à página principal!</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
