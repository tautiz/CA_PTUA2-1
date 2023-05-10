// const manoForma = document.querySelector('form');
// const output = document.getElementById('output');
let oldReference = document.getElementById('email');
let emailCount = 0;

//
// manoForma.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let vardas = e.target.elements.vardas.value;
//     let pavarde = e.target.elements.pavarde.value;
//
//     output.style.margin = '5px';
//     output.innerHTML = `Vardas: ${vardas} <br>Pavardė: ${pavarde}`;
// })

function createNewEmail(id) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const remove = document.createElement('input');

    remove.type = 'button';
    remove.value = '-';
    remove.addEventListener('click', function (e) {
        e.preventDefault();
        let removeButton = e.target;
        let parent = removeButton.parentElement;
        let sibbling = parent.previousElementSibling;

        sibbling.remove();
        parent.remove();
        oldReference =  document.getElementById('email');
        emailCount--; // Gali kilti problemu kai pasalinam elementa su zemesniu ID ir ji vel kuriame
    })

    label.textContent = 'Naujas emailas '+id;
    label.setAttribute('for', 'email'+id);

    input.setAttribute('type', 'email');
    input.setAttribute('id', 'email'+id);
    input.setAttribute('name', 'email'+id);
    // input.setAttribute('class', 'form__input');
    input.className = 'form__input';

    div.append(input);
    div.append(remove);

    insertAfter(oldReference, label);
    insertAfter(label, div);

    oldReference = div;
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

document.getElementById('addEmail').addEventListener('click', function (e){
    e.preventDefault();
    createNewEmail(emailCount);
    emailCount++;
})

// <div>
//     <label for="email">Naujas emailas</label>
//     <input type="email" id="email" name="email" className="form__input"/>
// </div>
