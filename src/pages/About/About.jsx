import Layout from '../../components/Layout/Layout';
import './About.css';
import fundadores from '../../assets/About/fundadores.png'; 
import beirario from '../../assets/About/beirario.jpeg'; 

function About() {
  return (
    <Layout>
      <h1 className="about-title">Fundação</h1>
      <img src={fundadores} alt="Fundadores" className="about-image" />
      <p className="about-text">A origem do Sport Club Internacional está ligada à integração entre povos de diferentes nacionalidades. Diferente de outros clubes da capital gaúcha 
        da época, voltados principalmente a descendentes de alemães, o Inter surgiu acolhendo diversas etnias. Sua fundação foi conduzida diretamente pelos irmãos
        Henrique Poppe Leão, José Eduardo Poppe e Luiz Madeira Poppe, que chegaram a Porto Alegre por volta de 1908, em meio à efervescência do futebol no 
        Brasil.</p>
      <h1 className="about-title">Beira-Rio</h1>
      <img src={beirario} alt="Beira-Rio" className="about-image" />
      <p className="about-text">Após quase duas décadas de domínio regional, o Inter estava pronto para alçar voos mais altos. Um título nacional parecia distante
        para um clube fora do grande eixo, mas o desafio exigia mais do que um time talentoso: era preciso uma estrutura grandiosa. Assim, o projeto do tão sonhado Gigante da Beira-Rio começou a tomar forma e se tornar realidade. Ao mesmo tempo, dentro de campo, o Colorado começava a expandir seus horizontes e conquistar novos territórios.
        Apesar dos escassos recursos financeiros, direcionados em sua grande parte à construção do Beira-Rio, o Inter montou uma excelente equipe, contando com o 
        talento de garotos como Bráulio, Dorinho e Pontes. Logo na primeira participação em competição nacional, no Torneio Roberto Gomes Pedrosa, o Inter fez 
        grande campanha chegando até a fase final, na qual acabou ficando com o vice-campeonato perante ao Palmeiras de Ademir da Guia. No ano seguinte, o Colorado
        repetiu a dose e o título escapou por pouco, ficando atrás apenas do Santos de Pelé. O Colorado começava a ocupar seu espaço entre os maiores clubes do 
        Brasil.
        Foram três décadas no lendário Estádio dos Eucaliptos, que apesar da mística e conservação, não comportava mais o tamanho do Clube. Em 6 de abril de 1969, 
        o Inter finalmente inaugura o Gigante da Beira-Rio. Na partida de estreia, vitória por 2 a 1 sobre o Benfica de Eusébio, principal time europeu daquela 
        década. Com apenas 18 anos, o ídolo Claudiomiro eternizou seu nome na história ao marcar o primeiro gol do Estádio.</p>

    </Layout> 
  );
}

export default About;