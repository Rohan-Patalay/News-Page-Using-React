import './App.css';
import { useEffect, useState } from 'react';
import News from './News';

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  function getPreviousDayDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const previousDayDate = getPreviousDayDate();
    console.log(previousDayDate);

    // Add optional chaining and defaulting in case of missing response fields
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${previousDayDate}&apiKey=af8ab6c0c9dd4e23b97bb6e34c228f49`)
      .then((response) => response.json())
      .then((news) => {
        // Safely accessing properties
        setArticles(news.articles ?? []);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log('Error fetching news:', err);
        setArticles([]);  // Set to empty array in case of error to prevent crashes
      });
  }, [category]);

  return (
    <div className="App">
      <header className='header'>
        <h1>Parso Tak</h1>
        <input
          type='text'
          onChange={(event) => {
            setCategory(event.target.value || "india");
          }}
          placeholder='Search News'
        />
      </header>

      <section className='news-articles'>
        {articles.length !== 0 ? (
          articles.map((article, index) => (
            <News key={index} article={article} />
          ))
        ) : (
          <h3>No News Found For Searched Text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
