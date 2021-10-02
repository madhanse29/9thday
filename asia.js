const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        const blogs = xhr.response;
        const studentGrades = blogs.filter(dam=>dam.region === "Asia");
        console.log(studentGrades);
    };

    xhr.send();
};
getBlogs();
