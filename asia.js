const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        const blogs = xhr.response;
        const asiaRegion = blogs.filter(dam=>dam.region === "Asia");
        console.log(asiaRegion);
    };

    xhr.send();
};
getBlogs();
