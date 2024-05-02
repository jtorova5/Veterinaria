
// Header section
const header = document.querySelector('header')

header.innerHTML = (`
<nav class=" container d-flex flex-wrap justify-content-md-between pt-4 mb-4 align-items-center my-auto">
  <div class="col-md-3 mb-2 mb-md-0 text-center align-items-baseline">
    <a href="/" class="text-decoration-none">
        <i class="fa-solid fa-shield-dog fa-xl text-info fs-1"></i>
    </a>
  </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 text-info">Features</a></li>
        <li><a href="#" class="nav-link px-2 text-info">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 text-info">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 text-info">About</a></li>
    </ul>

  <div class="col-md-3 text-end">
    <button type="button" class="btn btn-outline-info me-2">Login</button>
    <button type="button" class="btn btn-info text-white">Sign-up</button>
  </div>
</nav>
`)

// Main section
const main = document.querySelector('main')

for (const pet of pets) {
    main.innerHTML += (`
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

// Footer section
const footer = document.querySelector('footer')

footer.innerHTML = (`
<section class="container d-flex justify-content-center">
    <div class="col-md-4 d-flex align-items-center justify-content-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <i class="fa-solid fa-shield-dog fa-xl text-info fs-1"></i>
        </a>
        <span class="mb-3 mb-md-0 text-info">&copy; 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-center list-unstyled d-flex fs-3">
        <li class="ms-3">
            <a class="text-info" href="https://www.facebook.com/CielomioATV/" target="_blank">
                <i class="bi bi-facebook"></i>
            </a>
        </li>
        <li class="ms-3">
            <a class="text-info" href="https://www.instagram.com/cielomiow/?ref=beben&hl=en" target="_blank">
                <i class="bi bi-instagram"></i>
            </a>
        </li>
        <li class="ms-3">
            <a class="text-info" href="https://api.whatsapp.com/message/NLPW5ZMO4MYPG1?autoload=1&app_absent=0" target="_blank">
                <i class="bi bi-whatsapp"></i>
            </a>
        </li>
    </ul>
</section>
`)