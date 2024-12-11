// Get parent element by id and get its children 
const parent= document.getElementById('parent');

// Apply GRID to parent element
parent.style.display="grid";
parent.style.gridTemplateColumns='repeat(2,1fr)';

//Accessing all child of parent element
const chil=parent.children;


// Loop through each child of parent element
for(let i=0; i<chil.length; i++){

    // Apply styles to each child element
    chil[i].style.backgroundColor='red';
    chil[i].style.padding='20px';
    chil[i].style.margin='20px';
    chil[i].style.boxShadow='0 0 5px #000';
    chil[i].style.borderRadius='5px';

    // Accessing each child's child element 
    const chill = chil[i].children;    
    for(let j=0; j<chill.length; j++){
        // Apply styles to each grandchild element
        chill[j].style.padding='10px';
        chill[j].style.chilolor='white';
        chill[j].style.borderRadius='5px';
        chill[j].style.margin='10px';
        chill[j].style.boxShadow='0 0 5px #000';
    }
}
