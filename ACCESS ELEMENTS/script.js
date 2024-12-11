// Get parent element by id and get its children 
const parent= document.getElementById('parent');

const chil=parent.children;
console.log(chil.length);

parent.style.display="grid";

parent.style.gridTemplateColumns='repeat(2,1fr)';

for(let i=0; i<chil.length; i++){
    chil[i].style.backgroundColor='red';
    chil[i].style.padding='20px';
    chil[i].style.margin='20px';
    chil[i].style.boxShadow='0 0 5px #000';
    chil[i].style.borderRadius='5px';

    
    const chill = chil[i].children;    
    for(let j=0; j<chill.length; j++){
        chill[j].style.padding='10px';
        chill[j].style.chilolor='white';
        chill[j].style.borderRadius='5px';
        chill[j].style.margin='10px';
        chill[j].style.boxShadow='0 0 5px #000';

    }
}
