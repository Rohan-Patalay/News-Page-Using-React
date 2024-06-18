export default function  News(props)
{

return(

<div className="news">
<div className="news-img">
    {
       props.article.urlToImage!==null? 
       <img src={props.article.urlToImage} alt="hello"/>:
       <img src="https://as2.ftcdn.net/v2/jpg/02/51/95/53/1000_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" alt="heelo"/>
    }

</div>
<h1>{props.article.title}</h1>
<p>{props.article.description?.substring(0,100).concat("...")}</p>
<a href={props.article.url} target="blank">Read More</a>

<div className="source">
    <p>Author:{props.article.author}</p>
    <p>Source:{props.article.source.name}</p>
</div>

</div>

 )

}