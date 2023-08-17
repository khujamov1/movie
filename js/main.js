var elMainSearchForm = document.querySelector(".search-form")
var elMainSearchInput = document.querySelector(".search-input");
var elMainSearchSelect = document.querySelector(".search-select")
var elMainList = document.querySelector(".main-list");



function renderMovies(parametr) {
    
    elMainList.innerHTML = ""
    
    parametr.forEach(item => {
        var elMovieItem = document.createElement("li");
        elMovieItem.className = "main-movie"
        var elMovieImg = document.createElement("img");
        elMovieImg.className = "movie-img";
        var elMovieTitle = document.createElement("h3");
        elMovieTitle.className = "movie-title";
        var elMovieRating = document.createElement("span");
        elMovieRating.className = "movie-rating";
        var elMovieYear = document.createElement("span");
        elMovieYear.className = "movie-year";
        var elMovieDuration = document.createElement("span");
        elMovieDuration.className = "movie-duration";
        var elMovieCategory = document.createElement("p");
        elMovieCategory.className = "movie-category";
        var elMovieInfo = document.createElement("button");
        elMovieInfo.className = "movie-info";
        
        
        elMainList.appendChild(elMovieItem);
        elMovieItem.append(elMovieImg ,elMovieTitle, elMovieRating, elMovieYear, elMovieDuration, elMovieCategory, elMovieInfo);
        
        elMovieImg.src = `https://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`;
        elMovieTitle.textContent = item.Title;
        elMovieRating.textContent = item.imdb_rating;
        elMovieYear.textContent = item.movie_year;
        elMovieDuration.textContent = calculateTime(item.runtime);
        elMovieCategory.textContent = `Categoria: ${item.Categories}`;
        elMovieInfo.textContent = "More Info";
        
        
        
        
        function calculateTime(minute) {
            var hour = Math.floor(minute / 60);
            var minu = Math.floor(minute % 60);
            
            return `${hour} Hrs ${minu} Min`
        }
    });
};

function searchOption() {
    
    var newOptions = [];
    var newArr = [];
    
    movies.forEach(item => {
        newOptions.push(item.Categories);
        newOptions.forEach(option => {
            if(!newArr.includes(option)) {
                newArr.push(option)
            }
        })
    })
    newArr.forEach(ganre => {
        var elMovieCategoriOptions = document.createElement("option");
        elMovieCategoriOptions.textContent = ganre;
        elMovieCategoriOptions.value = ganre;
        
        elMainSearchSelect.appendChild(elMovieCategoriOptions);
        console.log(ganre);
    })
    
}

searchOption();

elMainSearchForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    var elMainSearchInputVal = elMainSearchInput.value.trim();
    var elMainSearchSelectVal = elMainSearchSelect.value;
    
    var newRegex = new RegExp(elMainSearchInputVal, "gi");
    
    var resultArr = movies.filter(movie => {
        return movie.Title.match(newRegex) && (movie.Categories.includes(elMainSearchSelectVal) || elMainSearchSelectVal == "All" )
    })
    if(resultArr.length > 0) {
        renderMovies(resultArr)
    }else (
        elMainList.textContent = "Not found 404"
        )
    })
    
    
    renderMovies(movies);