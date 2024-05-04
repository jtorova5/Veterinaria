
// main
const main = document.querySelector('#petsCards')

// mostrar mascotas
function showPets() {
    petsCards.innerHTML = (``)
    for (const pet of pets) {
        petsCards.innerHTML += (`
    
    <figure class="card m-3 border-secondary border-2 rounded-3" style="width: 20rem;">
        <div class="w-100 h-100 overflow-hidden">
            <img src="${pet.img}" class="object-fit-fill" alt="${pet.petBreed}" title="${pet.petBreed}">
        </div>

        <div class="card-body">
            <h2 class="card-title text-center">${pet.petName}</h2>
            <p><strong>Especie:</strong> ${pet.petSpecies}</p>
            <p><strong>Raza:</strong> ${pet.petBreed}</p>
            <p><strong>Edad:</strong> ${pet.petBirth} años</p>
            <p><strong>Peso:</strong> ${pet.petWeight} kg</p>
            <p><strong>Estado:</strong> ${pet.petState}</p>
            <p><strong>Nombre del dueño:</strong> ${pet.owner.nameOwner}</p>
            <p><strong>Id del dueño:</strong> ${pet.owner.documentOwner}</p>
            <p><strong>Teléfono del dueño:</strong> ${pet.owner.phoneOwner}</p>
            <p><strong>Email del dueño:</strong> ${pet.owner.emailOwner}</p>
        </div>
    </figure>
`)
    }
}

showPets()

// agregar mascota
document.getElementById('formAdd').addEventListener('click', function () {
    let formName = document.getElementById("formName").value
    let formSpecies = document.getElementById("formEspecies").value
    let formBreed = document.getElementById("formBreed").value
    let formBirth = document.getElementById("formBirth").value
    let formWeight = document.getElementById("formWeight").value
    let formState = document.getElementById("formState").value
    let formOwnerName = document.getElementById("formOwnerName").value
    let formOwnerId = document.getElementById("formOwnerId").value
    let formOwnerPhone = document.getElementById("formOwnerPhone").value
    let formOwnerEmail = document.getElementById("formOwnerEmail").value
    let formImg = document.getElementById("formImg").value

    if (formName.trim() === '' || formSpecies.trim() === '' || formBreed.trim() === '' || formBirth.trim() === '' || formWeight.trim() === '' || formState.trim() === '' || formOwnerName.trim() === '' || formOwnerId.trim() === '' || formOwnerPhone.trim() === '' || formOwnerEmail.trim() === '' || formOwnerEmail.trim() === '') {
        alert('Por favor complete todos los campos obligatorios.')
        return
    }

    let formAge = calculateAge(new Date(formBirth))

    pets.push({
        petName: formName,
        petSpecies: formSpecies,
        petBreed: formBreed,
        petBirth: formAge,
        petWeight: formWeight,
        petState: formState,
        owner: {
            nameOwner: formOwnerName,
            documentOwner: formOwnerId,
            phoneOwner: formOwnerPhone,
            emailOwner: formOwnerEmail,
        },
        img: formImg
    })

    showPets()
    document.getElementById("form").reset()
})

// eliminar mascota
document.getElementById('deletePet').addEventListener('click', function () {
    let deletePetName = document.getElementById("deletePetName").value
    let deleteOwnerName = document.getElementById("deleteOwnerName").value

    if ((deletePetName.trim() === '') || (deleteOwnerName.trim() === '')) {
        alert('Por favor complete todos los campos obligatorios.')
        return
    }

    let index = pets.findIndex(pet => (pet.petName).toLowerCase() == (deletePetName).toLowerCase() && (pet.owner.nameOwner).toLowerCase() == (deleteOwnerName).toLowerCase())

    if (index != -1) {
        pets.splice(index, 1)
        console.log(`Se ha eliminado a ${deletePetName} de la lista de mascotas.`)
    } else {
        console.log(`No se encontró a ${deletePetName} en la lista de mascotas.`)
    }

    showPets()
    document.getElementById("formDelete").reset()
})

// modo oscuro
document.getElementById('toggler').addEventListener('click', function () {
    document.body.classList.toggle('bg-dark')
    document.querySelector('#toggler').classList.toggle('bg-dark')
    document.querySelector('header').classList.toggle('bg-dark')

    let cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        card.classList.toggle('bg-dark')
        card.classList.toggle('text-light')
    })

    let btns = document.querySelectorAll('.btn')

    btns.forEach(btn => {
        btn.classList.toggle('text-dark')
    })

    if (document.querySelector('#toggler').textContent === 'Dark-mode') {
        document.querySelector('#toggler').textContent = 'Light-mode'
    } else {
        document.querySelector('#toggler').textContent = 'Dark-mode'
    }
})