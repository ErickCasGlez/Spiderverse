describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {

        //Aquí va el código que queremos ver el resultado
        //Se busca un objeto con estos datos
        const andrewGarfield = Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos que el código nos arroje el resultado esperado
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    });
})