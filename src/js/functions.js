
// Definición de funciones

// Calcular edad
function calculateAge(birthDate) {
    let today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()

    return age
}

// mostrar mascotas
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