import { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q="Sport Club Internacional"&language=pt&apiKey=99e377e7bda34589a761cfe078d72ab5`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="news-box">
      <h2>Últimas Notícias</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="news-item">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="Notícia"
                  className="news-img"
                />
              )}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  );
}

export default News;
