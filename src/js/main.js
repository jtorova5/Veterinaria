
// Definición de funciones

function newRandomId() {
    const id = parseInt(Math.random() * 1000000000000000);
    return id
}

function getAge(date) {
    return Math.abs(
        new Date(Date.now() - date.getTime()).getUTCFullYear() - 1970
    )
}

function getOwners() {
    console.log('Dueños:')
    console.table(owners)
}

function getPets() {
    console.log('Mascotas:')
    console.table(pets)
}

let pets = [
    {
        petName: "Spok",
        petSpecies: "Cat",
        petBreed: "Stray",
        petBirth: new Date("12/07/2019"),
        petWeight: 10,
        petState: "Estable",
        nameOwner: "Marc",
        documentOwner: "12932372",
        phoneOwner: "3005555555",
        emailOwner: "marc@gmail.com",
        img: "./public/img/strayCat.webp"
    },
    {
        petName: "Buddy",
        petSpecies: "Dog",
        petBreed: "Golden Retriever",
        petBirth: new Date("05/15/2020"),
        petWeight: 25,
        petState: "Estable",
        nameOwner: "Emily",
        documentOwner: "54321678",
        phoneOwner: "3101234567",
        emailOwner: "emily@example.com",
        img: "./public/img/goldenRetriever.webp"
    },
    {
        petName: "Whiskers",
        petSpecies: "Cat",
        petBreed: "Siamese",
        petBirth: new Date("08/20/2018"),
        petWeight: 8,
        petState: "Estable",
        nameOwner: "Sarah",
        documentOwner: "98765432",
        phoneOwner: "4157890123",
        emailOwner: "sarah@example.com",
        img: "./public/img/siameseCat.webp"
    },
    {
        petName: "Rio",
        petSpecies: "Bird",
        petBreed: "Parakeet",
        petBirth: new Date("03/10/2021"),
        petWeight: 0.5,
        petState: "Crítico",
        nameOwner: "Juan",
        documentOwner: "74185296",
        phoneOwner: "2123456789",
        emailOwner: "juan@example.com",
        img: "./public/img/parakeet.webp"
    },
    {
        petName: "Spike",
        petSpecies: "Hedgehog",
        petBreed: "African Pygmy",
        petBirth: new Date("10/02/2020"),
        petWeight: 0.3,
        petState: "Estable",
        nameOwner: "Alex",
        documentOwner: "36925814",
        phoneOwner: "9178901234",
        emailOwner: "alex@example.com",
        img: "./public/img/africanPygmy.webp"
    },
    {
        petName: "Lola",
        petSpecies: "Rabbit",
        petBreed: "Dwarf Hotot",
        petBirth: new Date("04/25/2022"),
        petWeight: 1.2,
        petState: "Estable",
        nameOwner: "Sophia",
        documentOwner: "15935748",
        phoneOwner: "6506789012",
        emailOwner: "sophia@example.com",
        img: "./public/img/dwarfHotot.webp"
    },
    {
        petName: "Gizmo",
        petSpecies: "Ferret",
        petBreed: "Sable",
        petBirth: new Date("11/12/2020"),
        petWeight: 0.7,
        petState: "playful",
        nameOwner: "Michael",
        documentOwner: "24680135",
        phoneOwner: "3234567890",
        emailOwner: "michael@example.com",
        img: "./public/img/sableFerret.webp"
    },
    {
        petName: "Ziggy",
        petSpecies: "Snake",
        petBreed: "Ball Python",
        petBirth: new Date("09/30/2019"),
        petWeight: 1.5,
        petState: "Crítico",
        nameOwner: "Rachel",
        documentOwner: "80246713",
        phoneOwner: "2126789012",
        emailOwner: "rachel@example.com",
        img: "./public/img/ballPython.webp"
    },
    {
        petName: "Snowball",
        petSpecies: "Guinea Pig",
        petBreed: "Abyssinian",
        petBirth: new Date("06/08/2021"),
        petWeight: 0.8,
        petState: "Estable",
        nameOwner: "David",
        documentOwner: "75395146",
        phoneOwner: "2134567890",
        emailOwner: "david@example.com",
        img: "./public/img/guineaPig.webp"
    },
    {
        petName: "Bubbles",
        petSpecies: "Fish",
        petBreed: "Goldfish",
        petBirth: new Date("01/14/2020"),
        petWeight: 0.1,
        petState: "Crítico",
        nameOwner: "Emma",
        documentOwner: "12345678",
        phoneOwner: "4158901234",
        emailOwner: "emma@example.com",
        img: "./public/img/goldFish.webp"
    }
]

// Definición de funciones

// Recolectar información de la mascota y el dueño
function gatherInformation() {
    let petName = prompt('Ingresa el nombre de la mascota: ')
    let petSpecies = prompt('Ingresa la especie de la mascota: ')
    let petBreed = prompt('Ingresa la raza de la mascota: ')
    let petBirth = new Date(prompt('Ingresa la fecha de nacimiento de la mascota mm/dd/yyyy: '))
    let petWeight = parseFloat(prompt('Ingresa el peso de la mascota: '))
    let petState = prompt('Ingresa el estado de la mascota: ')
    let nameOwner = prompt('Ingresa el nombre del dueño: ')
    let documentOwner = prompt('Ingresa el documento de identificación del dueño: ')
    let phoneOwner = prompt('Ingresa el número de teléfono del dueño: ')
    let emailOwner = prompt('Ingresa el correo electrónico del dueño: ')

    addPet(petName, petSpecies, petBreed, petBirth, petWeight, petState, nameOwner, documentOwner, phoneOwner, emailOwner)
}

// Calcular edad

function calculateAge(petBirth) {
    let today = new Date()
    let age = today.getFullYear() - petBirth.getFullYear()

    return age
}

// Agregar mascota a la lista de mascotas

function addPet(petName, petSpecies, petBreed, petBirth, petWeight, petState, nameOwner, documentOwner, phoneOwner, emailOwner) {
    let petAge = calculateAge(petBirth)
    pets.push({
        petName: petName,
        petSpecies: petSpecies,
        petBreed: petBreed,
        petAge: petAge,
        petWeight: petWeight,
        petState: petState,
        nameOwner: nameOwner,
        documentOwner: documentOwner,
        phoneOwner: phoneOwner,
        emailOwner: emailOwner
    })
    console.log('Mascota agregada')
}

// Mostrar mascotas

function petsInformation() {
    console.log('Listado de mascotas:')
    pets.forEach(pet => {
        console.log(`
        Mascota: ${pet.petName}
        Especie: ${pet.petSpecies}
        Raza: ${pet.petBreed}
        Dueño: ${pet.nameOwner}
        Teléfono: ${pet.phoneOwner}
        `)
    })
}

// Mostrar dueños
function ownerInformation() {
    console.log('Listado de dueños:')
    pets.forEach(pet => {
        console.log(`
        Nombre: ${pet.nameOwner}
        Documento: ${pet.documentOwner}
        Teléfono: ${pet.phoneOwner}
        Dueño de: ${pet.petName}
        `)
    })
}

// Buscar mascota por su nombre

function findPetByName(petName) {
    let pet = pets.find(pet => pet.petName === petName)

    if (pet) {
        console.log(`
        Mascota: ${pet.petName}
        Especie: ${pet.petSpecies}
        Raza: ${pet.petBreed}
        Dueño: ${pet.nameOwner}
        Teléfono: ${pet.phoneOwner}
        `)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre de ${petName}`)
    }
}

// Buscar mascotas por propietario

function findPetsByOwner(nameOwner) {
    let petsByOwner = pets.filter(pet => pet.nameOwner === nameOwner)

    if (petsByOwner.length > 0) {
        console.log(`
        Mascotas de: ${nameOwner}
        `)
        petsByOwner.forEach(pet => {
            console.log(`
            Mascota: ${pet.petName}
            Especie: ${pet.petSpecies}
            Raza: ${pet.petBreed}
            Teléfono: ${pet.phoneOwner}
            `)
        })
    } else {
        console.log(`No se encontraron mascotas pertenecientes a ${nameOwner}`)
    }
}

// Actualizar información de una mascota existente

function updatePet(petName) {
    let pet = pets.find(p => p.petName === petName)

    // Validación del nombre de la mascota
    if (!pet) {
        console.log('El nombre de la mascota no se encuentra registrado');
    }

    let propertyNames = {
        1: 'petName',
        2: 'petSpecies',
        3: 'petBreed',
        4: 'petBirth',
        5: 'petWeight',
        6: 'petState',
        7: 'nameOwner',
        8: 'documentOwner',
        9: 'phoneOwner',
        10: 'emailOwner'
    }

    let modifier = prompt(`
        OPCIONES A ACTUALIZAR:

        1. Nombre de la mascota
        2. Especie de la mascota
        3. Raza de la mascota
        4. Fecha de nacimiento de la mascota
        5. Peso de la mascota
        6. Estado de la mascota
        7. Nombre del dueño
        8. Id del dueño
        9. Número telefónico del dueño
        10. Email del dueño

        Por favor elija el número de la opción deseada:
    `)

    // Validación de la opción a modificar
    let propertyName = propertyNames[modifier]
    if (!propertyName) {
        console.log('Opción invalida')
        return
    }

    // Validación de fecha de nacimiento y peso
    let newData = prompt('Ingrese la nueva información: ')
    if (propertyName === 'petBirth') {
        newData = new Date(newData);
    } else if (propertyName === 'petWeight') {
        newData = parseFloat(newData);
    }

    // Actualizando la propiedad
    pet[propertyName] = newData;
    console.log(`Se actualizó ${propertyName} a ${newData}`)
    console.log(pet)
}

// Eliminar una mascota

function deletePet(petName) {
    let index = pets.findIndex(pet => pet.petName === petName)
    if (index !== -1) {
        pets.splice(index, 1)
        console.log(`La mascota "${petName}" fue eliminada correctamente`)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre de ${petName}`)
    }
}

// // Menú

// let on = 1

// function displayMenu() {
//     let option = parseInt(prompt(`
//     SISTEMA DE GESTIÓN VETERINARIA

//     Menú:
//     1. Registro de mascota
//     2. Ver listado de mascotas
//     3. Ver listado de dueños
//     4. Buscar mascota por el nombre
//     5. Filtrar mascota por el dueño
//     6. Actualizar información de una mascota
//     7. Eliminar mascota
//     8. Salir

//     Escriba el número de la opción deseada:
//     `))

//     return option
// }

// while (on) {
//     option = displayMenu()
//     switch (option) {
//         case 1:
//             gatherInformation()
//             break
//         case 2:
//             petsInformation()
//             break
//         case 3:
//             ownerInformation()
//             break
//         case 4:
//             let petNameToFind = prompt('Ingresa el nombre de la mascota: ')
//             findPetByName(petNameToFind)
//             break
//         case 5:
//             let nameOwner = prompt('Ingresa el nombre del dueño: ')
//             findPetsByOwner(nameOwner)
//             break
//         case 6:
//             let petName = prompt('Ingrese el nombre de la mascota a modificar: ');
//             updatePet(petName)
//             break
//         case 7:
//             let petNameToDelete = prompt('Ingresa el nombre de la mascota: ')
//             deletePet(petNameToDelete)
//             break
//         case 8:
//             console.log('Gracias por usar nuestro sistema')
//             on = 0
//             break
//         default:
//             console.log('Opción inválida')
//             break
//     }
// }

// Header section
const header = document.querySelector('header')

header.innerHTML = (`
    <h1 class="text-center m-5 text-info">Veterinaria</h1>
`)

// Main section
const main = document.querySelector('main')


for (let i = 0; i < pets.length; i++) {
    main.innerHTML += (`
    <div class="card m-5 text-bg-light border-secondary border-2 rounded-3" style="width: 25%">
        <img src="${pets[i].img}" class="card-img-top flex-fill" alt="${pets[i].petBreed}">

        <div class="card-body">
            <h2 class="card-title text-center">${pets[i].petName}</h2>
            <p><strong>Especie:</strong> ${pets[i].petSpecies}</p>
            <p><strong>Raza:</strong> ${pets[i].petBreed}</p>
            <p><strong>Edad:</strong> ${pets[i].petAge}</p>
            <p><strong>Peso:</strong> ${pets[i].petWeight}</p>
            <p><strong>Estado:</strong> ${pets[i].petState}</p>
            <p><strong>Nombre del dueño:</strong> ${pets[i].nameOwner}</p>
            <p><strong>Id del dueño:</strong> ${pets[i].documentOwner}</p>
            <p><strong>Teléfono del dueño:</strong> ${pets[i].phoneOwner}</p>
            <p><strong>Email del dueño:</strong> ${pets[i].emailOwner}</p>
        </div>
    </div>
`)
}

main.classList.add('d-flex')
main.classList.add('justify-content-center')
main.classList.add('flex-wrap')
