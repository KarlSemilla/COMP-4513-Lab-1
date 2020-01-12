// add code here -- do your data fetch and manipulations after DOM loaded
window.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#selector").classList.add("is-hidden");
    fetch('http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            //let hideSearch = document.querySelector("#selector").classList.add("is-hidden");
            let hideLoader = document.querySelector("#loader").classList.add("is-hidden");
            let showSelector = document.querySelector("#selector").classList.remove("is-hidden");
            let movieInfo = [];
            
            //sort fetched array
            data.sort(function(a,b){
                if(a.title > b.title){
                    return 1
                }
                else if(a.title < b.title){
                    return -1
                }
                else 
                    return 0
            })
        
            //inserts movie titles into options, value equal to movie's id
            const movieList = document.querySelector("#movieChooser");
            for(let d of data){
                let movieTitle = document.createElement("option");
                movieTitle.setAttribute("value", d.id);
                movieTitle.textContent = d.title;
                movieList.appendChild(movieTitle);
            }
        
            //Event handler for click event of add button.
            document.querySelector("#btnAdd").addEventListener("click", function(){
                //alert("Button was clicked");
                let selectValue = movieList.options[movieList.selectedIndex].value;
                
                //Checks if selected movie id is greater than 0
                if(selectValue > 0){
                    for(let d of data){
                        //Checks if id is found in fetched data
                        if(selectValue == d.id){
                            let selectFavorites = document.querySelector("#favorites");
                            let createListing = document.createElement("li");
                            createListing.setAttribute("class", "panel-block");
                            
                            //Adds html for selected movie title, includes title and image
                            createListing.innerHTML = `<figure class="media-left"> 
                                                        <img src="https://image.tmdb.org/t/p/w92${d.poster}">
                                                        </figure>
                                                        <p class="media-content">${d.title}</p>
                                                        `;
                            
                            selectFavorites.appendChild(createListing);
                        }
                    }
                }
            });
            
            //Event handler for click event on clear button
            document.querySelector("#btnClear").addEventListener("click", function(){
                document.querySelector("#favorites").innerHTML = " ";
                
            });

        })
        .catch(function(error){
            
        });
});
