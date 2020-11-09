function solve() {
    document.querySelector('#container button').addEventListener('click', getPet);
    const [nameElement, ageElement, kindElement, ownerElement] = document.querySelectorAll('#container input');
    const adoptionSectionUl = document.querySelector('#adoption ul');
    const adoptedSectionUl = document.querySelector('#adopted ul');

    adoptionSectionUl.addEventListener('click', onAdoption);
    adoptedSectionUl.addEventListener('click', onDelete);

    function getPet(e) {
        e.preventDefault();
        const name = nameElement.value;
        const age = ageElement.value;
        const kind = kindElement.value;
        const owner = ownerElement.value;

        if (!name || !age || !kind || !owner) return;

        addPetToAdoption(name, age, kind, owner);

        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';
    }

    function addPetToAdoption(name, age, kind, owner){
        let newPet = `<li><p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p>`;
        newPet += `<span>Owner: ${owner}</span><button>Contact with owner</button></li>`;
        adoptionSectionUl.innerHTML += newPet;
    }

    function onAdoption(e) {
        const currentElement = e.target;
        if (currentElement.tagName === 'BUTTON' && currentElement.textContent === 'Contact with the owner') {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<input placeholder="Enter your names"><button>Yes! I take it!</button>`;
            currentElement.replaceWith(newDiv);
        } else if (currentElement.tagName === 'BUTTON' && currentElement.textContent === 'Yes! I take it!') {
            e.preventDefault();
            const newOwner = e.target.previousElementSibling.value;
            if (!newOwner) return;
            const pet = e.target.parentElement.parentElement;
            pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
            const checkedButton = document.createElement('button');
            checkedButton.textContent = 'Checked';
            pet.querySelector('div').replaceWith(checkedButton);
            adoptedSectionUl.appendChild(pet);
        }
    }

    function onDelete(e) {
        e.target.parentElement.remove();
    }
}

