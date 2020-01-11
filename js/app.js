// add code here -- do your data fetch and manipulations after DOM loaded
fetch('http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php')
    .then(res => res.json())
    .then(posts => console.log(posts))
let hide = document.querySelector("#selector").classList.add("is-hidden");
