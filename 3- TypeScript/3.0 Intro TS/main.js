"use strict";
(() => {
    //-----Objeto que tipo de dato va tener internamente
    let objPerson;
    //---------asignar el valor
    objPerson = {
        id: 5,
        name: "Yudith Leon",
        lenguajesPr: ["C", "Java", "VisualBasic", "C++", "Js", "Ts"],
        email: "yudith@gmail.com",
    };
    console.log(objPerson);
})();
(() => {
    function profesion() {
        console.log("Profesion Ing");
        // return "Ingeniero"
    }
    const p = profesion();
    console.log(typeof profesion, p);
})();
(() => {
    let student = {
        id: 6,
        name: "string",
        lenguajesPr: ["1", "2"],
        edad: 6,
        email: "email@gmail.com",
    };
    let profesor = {
        id: 7,
        name: "Docente",
        lenguajesPr: ["1", "2"],
        edad: 6,
        email: "email@gmail.com",
    };
    console.log("Los tipos de datos", student, profesor);
    let empleado = {
        id: 3,
        name: "string",
        doc: 1223,
        pasatiempo: ["", ""],
        email: "string",
        getNombre() {
            return this.name;
        },
    };
    let profesional = {
        id: 5,
        name: "string",
        doc: 1223,
        pasatiempo: ["", ""],
        email: "string",
    };
    console.log("El type es", empleado, profesional);
    //-----------datos multiples----------------------------
    //   let trabajadora : null | undefined | person
    //   let trabajadora : number | string | person
    let trabajadora; // no es recomendable usar
    trabajadora = 1000;
    trabajadora = {
        id: 5,
        name: "string",
        doc: 1223,
        pasatiempo: ["", ""],
        email: "string",
    };
    trabajadora = "Muy buena";
    trabajadora = true;
})();
(() => {
    console.log("holis");
    let num = 0;
    num = 5;
    console.log(num);
})();
(() => {
    //-------Tipos de Datos estaticos-------------/
    let num = 0;
    num = 3;
    let nombre = "Yudith";
    console.log(num, nombre);
    let active = true;
    active = false;
    let deportes = ["Futbol", 5, false];
})();
//# sourceMappingURL=main.js.map