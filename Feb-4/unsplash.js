const API_KEY = "b_IzJ8BE51m6ZJD-uiWrfEbXeZX8wXMs1fbpOzyUyEE";
const API_SECRET = "KUdqd7E6fbkIu4oWVDYfFs039IR9PKnpFsMxDGKDYCw";
var search=document.getElementById("abb");
search.addEventListener("click",function(){
    let search_param = document.getElementById("search").value;

    fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${search_param}&per_page=30`)
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {
        console.log(res.results.length);
        for(let i = 0; i < res.results.length; i = i + 1) {
            let single_result = res.results[i];
            let single_url = single_result.urls.regular;            
            document.getElementById("img").src=single_url;
            console.log(single_url);
        }
    })
});

