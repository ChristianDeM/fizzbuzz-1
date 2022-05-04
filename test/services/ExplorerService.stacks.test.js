const ExplorerService = require("../../lib/services/ExplorerService");
const  explorers = require("./explorers.test.json");

describe("Tests para ExplorerService Filter Stack", () => {
    test("Requerimiento 1: Calcular todos los explorers Cons stack", () => {       
        const stack="javascript"
        const explorersInNode = ExplorerService.getFiltertBystack(explorers,"javascript");
        expect(explorersInNode[0].stacks[0]).toBe("javascript");
    });

});
