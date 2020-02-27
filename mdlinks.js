import { errVal } from './message.js';
export const mdLinks = (path, option) => {
    let promiseMd = new Promise((resolve, reject) => {
        if (!path) {
            reject(console.log(errVal))
        } else {
            resolve(mdFile(path))
        }
        // revisar, validate True or False
    });
}