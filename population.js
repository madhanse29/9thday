const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        const blogs = xhr.response;
        const popu = blogs.filter(dam=>dam.population < 200000);
        console.log(popu);
    };

    xhr.send();
};
getBlogs();

