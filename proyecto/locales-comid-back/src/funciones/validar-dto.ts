import { validate } from 'class-validator';

export async function validarDto(datos, objetoValido) {
  const keys = Object.keys(datos);
  keys.forEach(llave => {
    objetoValido[llave] = datos[llave];
  });
  return await validate(objetoValido);
}
