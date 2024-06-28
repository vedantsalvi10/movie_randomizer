const URL = " http://www.omdbapi.com/?i=tt1190634&apikey=60475f01";


const movie = async ()=>{
  let response = await  fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
   document.querySelector('.main').innerHTML = `
<div class="tittle_contain">
 <div class="title"><h1>${data.Title} </h1></div>
 <div class="imdb_rating">
   <div class="rating">
     <div class="star"><img src="/pngwing.com.png" alt=""></div> 
     <div class="right">
       <div class="rate">Imdb rating</div>
       <div class="value">${data.imdbRating}</div>
     </div>
     
   </div>
   <div class="votes">
   <div class="rate">Imdb votes</div>
       <div class="value">${data.imdbVotes}</div>
   </div>
 </div>
</div>
<div class="layout">
<div class="poster">
<img src="${data.Poster}"/>
</div>
</div>
<div class="information">
    <div class="big_data">
      <div class="plot">
      <h3>Plot:</h3>
      <p>${data.Plot}</p>
      </div>
      <div class="actors">
      <h3>Actors:</h3>
      <p>${data.Actors}</p>
      </div>
      <div class="awards">
      <h3>Awards:</h3>
      <p>${data.Awards}</p>
      </div>
    </div>
    <div class="small_data">
    <div class="writer sd"><h4>Writer:</h4><p>${data.Writer}</p></p></div>
    <div class="Genre sd"><h4>Genre:</h4><p>${data.Genre}</p></div>
    <div class="release sd"><h4>Released:</h4><p>${data.Released}</p></div>
    <div class="type sd"><h4>Type:</h4><p>${data.Type}</p></div>
    <div class="runtime sd"><h4>Runtime:</h4><p>${data.Runtime}</p></div>
    <div class="seasons sd"><h4>Seasons:</h4><p>${data.totalSeasons}</p></div>
    <div class="country sd"><h4>Country:</h4><p>${data.Country}</p></div>
    </div>
  </div>
`;
}
movie();
function openz(){
  movie();
}
