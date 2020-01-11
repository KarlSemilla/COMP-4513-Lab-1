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
            data.sort();
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

