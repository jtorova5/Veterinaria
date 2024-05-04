
// Definición de funciones

// Calcular edad
function calculateAge(birthDate) {
    let today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()

    return age
}


// Mostrar dueños
// function ownerInformation() {
//     console.log('Listado de dueños:')
//     pets.forEach(pet => {
//         console.log(`
//         Nombre: ${pet.owner.nameOwner}
//         Documento: ${pet.owner.documentOwner}
//         Teléfono: ${pet.owner.phoneOwner}
//         Dueño de: ${pet.petName}
//         `)
//     })
// }

// Buscar mascota por su nombre

// function findPetByName(petName) {
//     let pet = pets.find(pet => pet.petName === petName)

//     if (pet) {
//         console.log(`
//         Mascota: ${pet.petName}
//         Especie: ${pet.petSpecies}
//         Raza: ${pet.petBreed}
//         Dueño: ${pet.owner.nameOwner}
//         Teléfono: ${pet.owner.phoneOwner}
//         `)
//     } else {
//         console.log(`No se encontró ninguna mascota con el nombre de ${petName}`)
//     }
// }

// // Buscar mascotas por propietario

// function findPetsByOwner(nameOwner) {
//     let petsByOwner = pets.filter(pet => pet.owner.nameOwner === nameOwner)

//     if (petsByOwner.length > 0) {
//         console.log(`
//         Mascotas de: ${nameOwner}
//         `)
//         petsByOwner.forEach(pet => {
//             console.log(`
//             Mascota: ${pet.petName}
//             Especie: ${pet.petSpecies}
//             Raza: ${pet.petBreed}
//             Teléfono: ${pet.owner.phoneOwner}
//             `)
//         })
//     } else {
//         console.log(`No se encontraron mascotas pertenecientes a ${nameOwner}`)
//     }
// }

// // Actualizar información de una mascota existente

// function updatePet(petName) {
//     let pet = pets.find(p => p.petName === petName)

//     // Validación del nombre de la mascota
//     if (!pet) {
//         console.log('El nombre de la mascota no se encuentra registrado');
//     }

//     let propertyNames = {
//         1: 'petName',
//         2: 'petSpecies',
//         3: 'petBreed',
//         4: 'petBirth',
//         5: 'petWeight',
//         6: 'petState',
//         7: 'nameOwner',
//         8: 'documentOwner',
//         9: 'phoneOwner',
//         10: 'emailOwner'
//     }

//     let modifier = prompt(`
//         OPCIONES A ACTUALIZAR:

//         1. Nombre de la mascota
//         2. Especie de la mascota
//         3. Raza de la mascota
//         4. Fecha de nacimiento de la mascota
//         5. Peso de la mascota
//         6. Estado de la mascota
//         7. Nombre del dueño
//         8. Id del dueño
//         9. Número telefónico del dueño
//         10. Email del dueño

//         Por favor elija el número de la opción deseada:
//     `)

//     // Validación de la opción a modificar
//     let propertyName = propertyNames[modifier]
//     if (!propertyName) {
//         console.log('Opción invalida')
//         return
//     }

//     // Validación de fecha de nacimiento y peso
//     let newData = prompt('Ingrese la nueva información: ')
//     if (propertyName === 'petBirth') {
//         newData = new Date(newData);
//     } else if (propertyName === 'petWeight') {
//         newData = parseFloat(newData);
//     }

//     // Actualizando la propiedad
//     pet[propertyName] = newData;
//     console.log(`Se actualizó ${propertyName} a ${newData}`)
//     console.log(pet)
// }

// // Eliminar una mascota

// function deletePet(petName) {
//     let index = pets.findIndex(pet => pet.petName === petName)
//     if (index !== -1) {
//         pets.splice(index, 1)
//         console.log(`La mascota "${petName}" fue eliminada correctamente`)
//     } else {
//         console.log(`No se encontró ninguna mascota con el nombre de ${petName}`)
//     }
// }

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