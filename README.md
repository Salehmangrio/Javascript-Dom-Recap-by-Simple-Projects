## JavaScript DOM Manipulation - Beginner to Advanced Concepts  

This repo provides an in-depth understanding of DOM manipulation techniques in JavaScript, covering fundamental to advanced topics with examples.  

---

## Table of Contents  

1. [Introduction](#introduction)  
2. [Basics of DOM Manipulation](#basics-of-dom-manipulation)  
   - Accessing Elements  
   - Traversing DOM Nodes  
   - Modifying Styles  
3. [Event Handling](#event-handling)  
   - Adding Event Listeners  
   - Handling Click Events  
   - Hover Effects  
4. [Dynamic DOM Manipulation](#dynamic-dom-manipulation)  
   - Creating and Appending Elements  
   - Fetching Data and Rendering  
5. [Form Validation](#form-validation)  
6. [Advanced Topics](#advanced-topics)  
   - Grid Styling with Loops  
   - Toggling Classes  
   - Using Arrays and Loops for Element Manipulation  
7. [Summary](#summary)  

---

## 1. Introduction  

This project demonstrates how to interact with the Document Object Model (DOM) using JavaScript. You’ll learn to manipulate elements, respond to events, dynamically update content, and handle form validation.  

Author: **Saleh Muhammad Mangrio**  
- [LinkedIn Profile](https://www.linkedin.com/in/salehmuhammad114)  
- [GitHub Profile](https://github.com/Salehmangrio)  

---

## 2. Basics of DOM Manipulation  

### Accessing Elements  
Use methods like `getElementById`, `querySelector`, and `querySelectorAll` to access elements in the DOM.  

Example:  
```javascript  
const parent = document.getElementById('parent');  
const children = parent.children;  
console.log(children.length);  
```  

### Traversing DOM Nodes  
Access related elements using properties like:  
- `parentElement`  
- `children`  
- `nextElementSibling`  

Example:  
```javascript  
const firstChild = parent.firstElementChild;  
const lastChild = parent.lastElementChild;  
```  

### Modifying Styles  
You can apply or modify styles directly:  
```javascript  
parent.style.display = "grid";  
parent.style.gridTemplateColumns = 'repeat(2, 1fr)';  
```  

---

## 3. Event Handling  

### Adding Event Listeners  
Attach event listeners to elements for interactivity:  
```javascript  
add.addEventListener("click", () => {  
    statusFrnd.innerHTML = "Friend";  
    statusFrnd.style.color = "green";  
});  

remove.addEventListener("click", () => {  
    statusFrnd.innerHTML = "Stranger";  
    statusFrnd.style.color = "red";  
});  
```  

### Hover Effects  
Add dynamic hover styles:  
```javascript  
btn.addEventListener('mouseover', () => {  
    btn.style.boxShadow = '0 0 20px #000';  
});  
```  

---

## 4. Dynamic DOM Manipulation  

### Creating and Appending Elements  
Dynamically create, style, and append elements.  

Example:  
```javascript  
data.forEach(user => {  
    const div = document.createElement("div");  
    const h1 = document.createElement("h1");  
    h1.innerHTML = user.name;  
    div.appendChild(h1);  
    document.getElementById("data").appendChild(div);  
});  
```  

### Fetching Data and Rendering  
Use the Fetch API to retrieve data and update the DOM:  
```javascript  
fetch("https://jsonplaceholder.typicode.com/users")  
    .then(response => response.json())  
    .then(data => {  
        data.forEach(user => {  
            // Append user details dynamically  
        });  
    });  
```  

---

## 5. Form Validation  

Implement client-side validation for forms:  
```javascript  
function validateForm() {  
    if (name === "" || email === "") {  
        alert("Please fill in all fields.");  
        return false;  
    } else if (password !== confirmPass) {  
        alert("Passwords do not match.");  
        return false;  
    }  
    alert("Registration successful!");  
}  
```  

---

## 6. Advanced Topics  

### Grid Styling with Loops  
Apply styles dynamically using loops:  
```javascript  
for (let i = 0; i < children.length; i++) {  
    children[i].style.backgroundColor = 'red';  
    children[i].style.padding = '20px';  
}  
```  

### Toggling Classes  
Toggle classes for interactivity:  
```javascript  
box.addEventListener('click', () => {  
    box.classList.toggle('active');  
});  
```  

### Arrays and Loops for Element Manipulation  
Manipulate grouped elements with loops:  
```javascript  
buttons.forEach((button, idx) => {  
    button.addEventListener('click', () => {  
        rowArr[idx].forEach(box => {  
            box.classList.toggle('row-selected');  
        });  
    });  
});  
```  

---

## 7. Summary  

This project illustrates how to:  
- Access and manipulate DOM elements.  
- Apply dynamic styles and event handling.  
- Fetch data from an API and render it dynamically.  
- Validate forms and ensure better user interaction.  

By following these examples, you can confidently build interactive, responsive, and dynamic web pages.  
