*Creando un nuevo Feature Fizzbuzz*

<p> Para la implementacion del siguiente fueature es el siguiente diagrama

<p> El codigo proupuesto es el siguiente 

### codigo en explorer service
`static filterByStacks(explorers, stack){
        const filter= explorers.filter(explorer => explorer.stacks.includes(stack));
        return filter;
    }`

<p> iniciamos la clase filter donde La variables filter  realiza el filtro en explorers.staks donde explorer es la lectura de Explorers.json
se usa includes  para obtener  el stack ingresado.  

### codigo para controller

`static getFiltertBystack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByStacks(explorers, stack);
    }`

<p>creamos la clase getFiltertBystack donde recibe el stack que se va a enviar. donde retornaremos la clase anterios Explorers.filterByStacks.

### Pruebas con jest
`describe("Tests para ExplorerService Filter Stack", () => {
    test("Requerimiento 1: Calcular todos los explorers Cons stack", () => {       
        const stack="javascript";
        const explorersInNode = ExplorerService.getFiltertBystack(explorers,"javascript");
        expect(explorersInNode[0].stacks[0]).toBe("javascript");
    });

});
`

<p> Creamos  una prueba en base de el primer explorer par comprobar los posibles  fallos 







<p> Creamos pruebas con jest para la veificacion de los resultados 