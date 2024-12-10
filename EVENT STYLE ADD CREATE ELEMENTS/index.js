// JAVASCRIPT DOM USAGE:

// ACCESSING DOM ELEMENTS FROM INDEX.HTML
const boxes = document.querySelectorAll('.box');

// GETTING EACH BOX FROM 'boxes' ACCESESSED ABOVE
boxes.forEach((box) => {
    // ADDING CLICK EVENT LISTENER TO EACH BOX
    box.addEventListener('click', (e) => {
        // TOGGLE ACTIVE CLASS ON CLICK
        box.classList.toggle('active');

        // CHANGE BACKGROUND COLOR AND TEXT COLOR ON ACTIVE STATE
        if (box.classList.contains('active')) {

            // CHANGE BACKGROUND COLOR AND TEXT COLOR TO BLACK and WHITE
            box.style.backgroundColor = "black"
            box.style.color = "white"
        } else {

            // CHANGE BACKGROUND COLOR AND TEXT COLOR TO WHITE and BLACK
            box.style.backgroundColor = "white"
            box.style.color = "black"
        }

        // INCREMENT DATA INSIDE BOXES ON CLICK
        data = parseInt(e.target.textContent);

        // UPDATE TEXT CONTENT OF BOXES
        box.textContent = (data + 1);
    });
})

// ACCESSING DOM ELEMENTS FROM INDEX.JS
const buttons = document.querySelectorAll('.btn');
const row1 = document.querySelectorAll('.row1');
const row2 = document.querySelectorAll('.row2');
const row3 = document.querySelectorAll('.row3');

// GETTING EACH ROW FROM 'row1', 'row2', 'row3' ACCESSED ABOVE
const rowArr = [row1, row2, row3];

// GETTING EACH BUTTON FROM 'buttons' ACCESSED ABOVE
buttons.forEach((button, idx) => {    
    // ADDING CLICK EVENT LISTENER TO EACH BUTTON
    button.addEventListener('click', () => {

        //ACCESSING EACH ROW ON ITS INDEX OF BUTTON
        rowArr[idx].forEach(box => {

            // TOGGLE row-selected CLASS ON CLICK
            box.classList.toggle('row-selected')

            // CHANGE BACKGROUND COLOR AND TEXT COLOR ON ACTIVE STATE
            if (box.classList.contains('row-selected')) {
                box.style.backgroundColor = "blue";
            }
            else {
                box.style.backgroundColor = "white";
                box.style.color = "black";
            }

        })

    })
})
