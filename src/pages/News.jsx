import { useEffect, useState } from "react";
import { fetchNews } from "../api";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    getNews();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">Latest News</h1>

      {news.length === 0 ? (
        <p className="text-center text-gray-600">No news articles available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((article) => (
            <div key={article._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800">{article.title}</h2>
              <p className="text-gray-500">{article.content}</p>
              <p className="text-gray-400 text-sm">Published: {new Date(article.publishedAt).toDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
