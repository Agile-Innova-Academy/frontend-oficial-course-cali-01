(() => {
  //-----Objeto que tipo de dato va tener internamente
  let objPerson: {
    id: number;
    name: string;
    lenguajesPr: string[];
    edad?: number;
    email?: string;
  };

  //---------asignar el valor
  objPerson = {
    id: 5,
    name: "Yudith Leon",
    lenguajesPr: ["C", "Java", "VisualBasic", "C++", "Js", "Ts"],
    email: "yudith@gmail.com",
  };
  console.log(objPerson);

  
})();
