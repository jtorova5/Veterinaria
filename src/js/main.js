
// Main section
const main = document.querySelector('#carousel')

for (const pet of pets) {
    carousel.innerHTML += (`
    <figure class="card m-5 text-bg-light border-secondary border-2 rounded-3 w-25">
        <img src="${pet.img}" class="card-img-top object-fit-fill h-100" alt="${pet.petBreed}">

        <div class="card-body">
            <h2 class="card-title text-center">${pet.petName}</h2>
            <p><strong>Especie:</strong> ${pet.petSpecies}</p>
            <p><strong>Raza:</strong> ${pet.petBreed}</p>
            <p><strong>Edad:</strong> ${pet.petBirth}</p>
            <p><strong>Peso:</strong> ${pet.petWeight}</p>
            <p><strong>Estado:</strong> ${pet.petState}</p>
            <p><strong>Nombre del dueño:</strong> ${pet.owner.nameOwner}</p>
            <p><strong>Id del dueño:</strong> ${pet.owner.documentOwner}</p>
            <p><strong>Teléfono del dueño:</strong> ${pet.owner.phoneOwner}</p>
            <p><strong>Email del dueño:</strong> ${pet.owner.emailOwner}</p>
        </div>
    </figure>
`)
}