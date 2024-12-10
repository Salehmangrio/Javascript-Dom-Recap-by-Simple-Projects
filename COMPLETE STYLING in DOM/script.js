// Getting elecments from index.html
const add = document.getElementById("add");
const remove = document.getElementById("remove")
const statusFrnd = document.querySelector("#card h5")

// Event listeners for add and remove buttons
add.addEventListener("click",()=>{
    statusFrnd.innerHTML="Friend";
    statusFrnd.style.color="green"
})
remove.addEventListener("click",()=>{
    statusFrnd.innerHTML="Stranger";
    statusFrnd.style.color="red"
})

/*STYLING PORTION START FROM HERE*/

// Apply styles to universal selector (*)
document.querySelectorAll('*').forEach((el) => {
    el.style.padding = '0';
    el.style.margin = '0';
    el.style.boxSizing = 'border-box';
});

// Apply styles to html and body
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.backgroundColor = 'cornflowerblue';

// Apply styles to #card
const card = document.querySelector('#card');
if (card) {
    card.style.width = '300px';
    card.style.height = '400px';
    card.style.borderRadius = '10px';
    card.style.backgroundColor = '#fff';
    card.style.padding = '20px';
    card.style.textAlign = 'center';
}

// Apply styles to #card img
const cardImg = document.querySelector('#card img');
if (cardImg) {
    cardImg.style.width = '100%';
    cardImg.style.height = '60%';
    cardImg.style.objectFit = 'cover';
    cardImg.style.objectPosition = 'center';
}

// Apply styles to #card h1
const cardH1 = document.querySelector('#card h1');
if (cardH1) {
    cardH1.style.fontSize = '30px';
    cardH1.style.margin = '10px';
}

// Apply styles to #card h5
const cardH5 = document.querySelector('#card h5');
if (cardH5) {
    cardH5.style.margin = '10px';
    cardH5.style.fontSize = '25px';
    cardH5.style.color = 'red';
}

// Apply styles to #btn-container
const btnContainer = document.querySelector('#btn-container');
if (btnContainer) {
    btnContainer.style.display = 'flex';
    btnContainer.style.justifyContent = 'space-evenly';
}

// Apply styles to #btn-container button
const buttons=document.querySelectorAll('#btn-container button')
buttons.forEach((btn) => {
    btn.style.backgroundColor = 'rgb(56, 190, 244)';
    btn.style.color = '#fff';
    btn.style.padding = '10px 20px';
    btn.style.borderRadius = '50px';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 0 5px #000';

    // Add hover effect
    btn.addEventListener('mouseover', () => {
        btn.style.boxShadow = '0 0 20px #000';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.boxShadow = '0 0 5px #000';
    });
});

// Apply styles to #btn-container #remove
const removeBtn = document.querySelector('#btn-container #remove');
if (removeBtn) {
    removeBtn.style.backgroundColor = '#dadada';
    removeBtn.style.color = 'black';
}
