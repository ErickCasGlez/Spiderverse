//Se importa la clase que se encuentra en la carpeta app
const Spiderman = require('./../app/spiderman')

describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {

        //Aquí va el código que queremos ver el resultado
        //Se busca un objeto con estos datos
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos que el código nos arroje el resultado esperado
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });
})