
// mostrar mascotas
showPets()

// agregar mascota
document.getElementById('formAdd').addEventListener('click', function () {

    // obtención de datos
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

    // validación
    if (formName.trim() === '' || formSpecies.trim() === '' || formBreed.trim() === '' || formBirth.trim() === '' || formWeight.trim() === '' || formState.trim() === '' || formOwnerName.trim() === '' || formOwnerId.trim() === '' || formOwnerPhone.trim() === '' || formOwnerEmail.trim() === '' || formImg.trim() === '') {
        alert('Por favor complete todos los campos obligatorios.')
        return
    }

    // calculo de edad
    let formAge = calculateAge(new Date(formBirth))

    // agregar mascota a la lista
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

    // alerta de agregado
    Swal.fire({
        title: `Se ha agregado a ${formName} correctamente.`,
        width: 600,
        padding: "3em",
        color: "#1088A0",
        background: "url(./../../public/img/fondo-alerta.webp)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("./../../public/img/nyan-cat.gif")
            left top
            no-repeat
            `
    })

    // bandera del modo actual
    let darkmode = document.querySelector('#toggler').textContent === 'Dark-mode'

    // mostrar mascotas y validar el modo
    if (!darkmode) {
        showPets()
        let cards = document.querySelectorAll('.card')

        cards.forEach(card => {
            card.classList.toggle('bg-dark')
            card.classList.toggle('text-light')
        })

        let form = document.querySelector('#form')
        let formDelete = document.querySelector('#formDelete')

        form.classList.toggle('bg-dark')
        form.classList.toggle('text-light')
        formDelete.classList.toggle('bg-dark')
        formDelete.classList.toggle('text-light')
    } else {
        showPets()
    }

    // limpiar formulario
    document.getElementById("form").reset()
})

// eliminar mascota
document.getElementById('deletePet').addEventListener('click', function () {

    // obtención de datos
    let deletePetName = document.getElementById("deletePetName").value
    let deleteOwnerName = document.getElementById("deleteOwnerName").value

    // validacaión de datos
    if ((deletePetName.trim() === '') || (deleteOwnerName.trim() === '')) {
        alert('Por favor complete todos los campos obligatorios.')
        return
    }

    // eliminar mascota de la lista
    let index = pets.findIndex(pet => (pet.petName).toLowerCase() == (deletePetName).toLowerCase() && (pet.owner.nameOwner).toLowerCase() == (deleteOwnerName).toLowerCase())

    if (index != -1) {
        pets.splice(index, 1)
        Swal.fire({
            icon: "success",
            title: "Eso es todo...",
            text: `Se ha eliminado a ${deletePetName} de la lista de mascotas.`,
        })
    } else {
        Swal.fire({
            icon: "error",
            title: "Un momento...",
            text: `
            No se encontró ninguna mascota llamada ${deletePetName} que sea propiedad de ${deleteOwnerName}.`,
        })
    }

    // bandera del modo actual
    let darkmode = document.querySelector('#toggler').textContent === 'Dark-mode'

    // mostrar mascotas y validar el modo
    if (!darkmode) {
        showPets()
        let cards = document.querySelectorAll('.card')

        cards.forEach(card => {
            card.classList.toggle('bg-dark')
            card.classList.toggle('text-light')
        })

        let form = document.querySelector('#form')
        let formDelete = document.querySelector('#formDelete')

        form.classList.toggle('bg-dark')
        form.classList.toggle('text-light')
        formDelete.classList.toggle('bg-dark')
        formDelete.classList.toggle('text-light')

    } else {
        showPets()
    }

    // limpiar formulario
    document.getElementById("formDelete").reset()
})

// modo oscuro
document.getElementById('toggler').addEventListener('click', function () {

    // obtención de datos
    document.body.classList.toggle('bg-dark')
    document.querySelector('#toggler').classList.toggle('bg-dark')
    document.querySelector('header').classList.toggle('bg-dark')

    // variación del modo
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