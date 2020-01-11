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
        
            //insert movie titles into select with option values
            const movieList = document.querySelector("#movieChooser");
            let i = 1;
            for(let d of data){
                let movieTitle = document.createElement("option");
                movieTitle.setAttribute("value", i);
                movieTitle.textContent = d.title;
                movieList.appendChild(movieTitle);
                i++;
            }
            console.log(data[0].title);
            console.log(data);
            

        })
        .catch(function(error){
            //console.log("Shit's not working");
        });
});

    /*    
    .then(function(response){
        return reponse.json();
    })
    .then(res => res.json())
    .then(posts => console.log(posts))
    */

