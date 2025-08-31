import Layout from '../../components/Layout/Layout';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import News from '../../components/News/News';
import './Home.css';

function Home() {
  return (
    <Layout>
      <Scoreboard /> 
      <News />
    </Layout>
  );
}

export default Home;
