(() => {
  //---------Interface para objetos---------------
  interface Persona {
    id: number;
    name: string;
    lenguajesPr: string[];
    edad?: number;
    email?: string;
  }

  let student: Persona = {
    id: 6,
    name: "string",
    lenguajesPr: ["1", "2"],
    edad: 6,
    email: "email@gmail.com",
  };

  let profesor: Persona = {
    id: 7,
    name: "Docente",
    lenguajesPr: ["1", "2"],
    edad: 6,
    email: "email@gmail.com",
  };
  console.log("Los tipos de datos", student, profesor);

  //------------Type Personalizado----------------------//

  type person = {
    id: number;
    name: string;
    doc: string | number;
    pasatiempo: string[];
    edad?: number;
    email?: string | null;
    getNombre?: () => string;
  };

  let empleado: person = {
    id: 3,
    name: "string",
    doc: 1223,
    pasatiempo: ["", ""],
    email: "string",
    getNombre() {
      return this.name;
    },
  };

  let profesional: person = {
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
  
let trabajadora : any // no es recomendable usar
  trabajadora= 1000
  trabajadora = {
    id: 5,
    name: "string",
    doc: 1223,
    pasatiempo: ["", ""],
    email: "string",
  };
  trabajadora = "Muy buena"

trabajadora = true

})();
