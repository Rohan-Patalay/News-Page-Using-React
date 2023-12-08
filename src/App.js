
import './App.css';
import { useEffect, useState } from 'react';
import News from './News';
function App() {

  let [articles,setArticles]=useState([]);
  let[category,setCategory]=useState("india");
useEffect(()=>{

  fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=af8ab6c0c9dd4e23b97bb6e34c228f49`)
.then((response)=>response.json())
.then((news)=>{
  setArticles(news.articles);
  console.log(news.articles);
})
.catch((err)=>{
  console.lof(err)
})


},[category])

  return (
    <div className="App">
    <header className='header'>
<h1>Parso Tak</h1>
<input type='text'onChange={(event)=>{
  if(event.target.value!==""){
    setCategory(event.target.value);
  }
  else{
    setCategory("india")
  }
}} placeholder='Search News'/>


    </header>

     <section className='news-articles'>
     {
articles.length!==0?



      articles.map((article)=>{

        return(
          <News article={article}/>
        )
      })
      :
      <h3>No News Found For Searched Text</h3>
     }
    
     </section>
    </div>
  );
}

export default App;
