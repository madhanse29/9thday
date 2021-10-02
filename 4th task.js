const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v2/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        var blogs = xhr.response;
     
        var total = blogs 
        .reduce ((sum,curr)=>sum+curr.population , 0)
console.log ((total))
    }

    xhr.send();
};
getBlogs();
