// JAVASCRIPT DOM CONCEPTS

//1 Accessing DOM elements from index.js 
const myData=document.getElementById("data");
const body=document.getElementById("body");

//2 Fetching data from API using fetch API 
const API="https://jsonplaceholder.typicode.com/users";
fetch(API)
.then(data=>data.json())
.then(data=>{
    
    //3 Creating elements and appending them to DOM using JavaScript
    data.forEach(user => {
        
        //4 Creating new div element and assigning its styles and content
        const div=document.createElement("div");

        //5 Creating new h1, h2, and h3 elements and assigning their content
        h1=document.createElement("h1");
        h2=document.createElement("h2");
        h3=document.createElement("h3");

        //6 Assigning content to h1, h2, and h3 elements
        h1.innerHTML=user.name;
        h2.innerHTML=user.email;
        h3.innerHTML=user.username;

        //7 Appending h1, h2, and h3 elements to div element
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);

        //8 Setting styles to div element
        div.style.border="30px groove blue";
        div.style.boxShadow="-2px -2px 3px 2px black";
        div.style.borderRadius="10px";
        div.style.backgroundColor="white";
        div.style.color="black";
        div.style.margin="10px 0"
        div.style.padding="20px";
        div.style.width="92vw";
        h1.style.selectable="false";

        //9 Appending div element to myData element
        myData.appendChild(div);

        myData.style.width="100vw-50px";
        myData.style.overflowX="hidden"
        
        
        //10 Setting styles to body element
        body.style.overflowX="hidden"
        body.style.width="100vw"
        body.style.boxSizing="border-box"
        
    });
    
});

