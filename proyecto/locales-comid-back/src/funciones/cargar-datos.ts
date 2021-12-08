// import * as s from '../datos/'
// @ts-ignore
declare var require: any;
// tslint:disable-next-line:no-var-requires
const fs = require('fs');
export async function crearDatos(pathArchivo, service) {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(pathArchivo, 'UTF-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(service.crear(JSON.parse(data)));
        }
      });
    });
  } catch (e) {
    console.error('error crear', e);
  }
}
