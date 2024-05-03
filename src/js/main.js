
// Main section
const main = document.querySelector('#petsCards')

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

// Agregar mascota

document.getElementById('add').addEventListener('click', function () {
    let formName = document.getElementById("formName").value
    let formSpecies = document.getElementById("formEspecies").value
    let formBreed = document.getElementById("formBreed").value
    let formBirth = new Date(document.getElementById("formBirth").value)
    let formWeight = document.getElementById("formWeight").value
    let formState = document.getElementById("formState").value
    let formOwnerName = document.getElementById("formOwnerName").value
    let formOwnerId = document.getElementById("formOwnerId").value
    let formOwnerPhone = document.getElementById("formOwnerPhone").value
    let formOwnerEmail = document.getElementById("formOwnerEmail").value
    let formImg = document.getElementById("formImg").value

    console.log(formBirth)

    pets.push({
        petName: formName,
        petSpecies: formSpecies,
        petBreed: formBreed,
        petAge: calculateAgeAdded(new Date(formBirth)),
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

// Modo oscuro

document.getElementById('toggler').addEventListener('click', function () {
    document.body.classList.toggle('bg-dark')
    document.querySelector('#toggler').classList.toggle('bg-dark')
    document.querySelector('header').classList.toggle('bg-dark')
    let body = document.querySelectorAll('.card')
    body.forEach(card => {
        card.classList.toggle('bg-dark')
        card.classList.toggle('text-light')
    })
})