import {
  getApi,
  getPromise,
  isLoggenIn,
  mayorEdad,
  nombre,
  objUser,
  saludar,
  userRegister,
} from "../../components/TiposDatos";
import { arraysdataUser } from "../../data/data";

describe("Reliazar pruebas a los Tipos de datos", () => {
  //-----------bolean-----------//
  test("Comprobar que isLoggedIn se autariza con true", () => {
    // inicializacion

    const auth = isLoggenIn;
    if (auth) {
      console.log("Usuario Autorizado");
    } else {
      throw new Error("Usuario No autorizado");
    }
  });

  //-------Validar sie s mayor de edad----------
  test("Si ingreso 25 años - devuelve true porque es mayor de edad", () => {
    expect(mayorEdad(25)).toBeTruthy();
  });
  test("Si ingreso 15 años - devuelve false porque es menor de edad", () => {
    expect(mayorEdad(15)).toBeFalsy();
  });

  test("al validar la funcion debe devolverme diferente a string", () => {
    expect(typeof mayorEdad(15)).not.toBe("string");
  });
  test("al validar la funcion debe devolverme un bolean", () => {
    expect(typeof mayorEdad(15)).toBe("boolean");
  });

  //-----------string-----------//
  test("validar que sea es nombre de usuario", () => {
    const nombreValidar = "Maria";
    expect(nombre).not.toBe(nombreValidar);
    expect(nombre).toBe("Yudith");
  });

  //-----------Objetos------------------
  test("validar que retorna un objeto", () => {
    expect(objUser()).toEqual({
      email: "yudith@gmail.com",
      pass: "123456",
    });
    expect(objUser()).not.toEqual({
      email: "yudith@gmail.com",
      pass: "123456777",
    });
  });

  //---------------Funtion-----------

  test("Validar el retorno de la función", () => {
    const nombreValidar = "Julian";
    const saludoValidar = saludar(nombreValidar);

    expect(saludoValidar).toBe(
      `Hola ${nombreValidar}, Bienvenido a Clase de Testing`
    );
    expect(saludoValidar).not.toBe(`Hola ${nombreValidar}`);
    expect(saludoValidar).toContain("Clase");
    expect(saludoValidar).toContain(nombreValidar);
    expect(saludoValidar).not.toContain("Yudi");
  });

  //----------Arrays-------------------//
  test("validar el return del id partiendo de un id de ref", () => {
    let id = 4;

    // traerme lo que tiene la funcion
    const usersFilterFuntion = userRegister(id);
    // posible salida que debo comparar
    const userComparar = arraysdataUser.find((u) => u.id === 2);

    // validacion - expect

    expect(usersFilterFuntion).not.toEqual(userComparar);
    expect(usersFilterFuntion).not.toEqual(arraysdataUser[3]);

    // si el usuario no esxiste
    id = 10;
    const usersFilterFuntion2 = userRegister(id);
    expect(usersFilterFuntion2).toEqual(undefined);
  });

  //---------------Promesas-------------------//
  // test('validar la promesa encuentre a el usuario correspondiente por un id', done  => {
  //     let id = 5;

  //     // posible salida que debo comparar
  //     const userComparar = arraysdataUser.find((u) => u.id === id);

  //     getPromise(id).then( (res) => {
  //       expect(res).toEqual(userComparar)
  //       done();
  //     })
  //  })

  //----------------peticiones api / async await------------------//
  test("validar que lo que me retorna la api en imagen correponda de tipo hhtp", async () => {
    const url = await getApi();
    console.log(url);
    expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
    expect(url.includes("https://fakestoreapi.com/img/")).toBe(true);
  });
});
