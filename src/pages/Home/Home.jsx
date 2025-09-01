import Layout from '../../components/Layout/Layout';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import News from '../../components/News/News';
import AdsBox from '../../components/AdsBox/AdsBox';
import './Home.css';

function Home() {
  return (
    <Layout>
      <Scoreboard /> 
      <News />
      <AdsBox />
    </Layout>
  );
}
export default Home;
