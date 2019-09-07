import fs from 'fs'
import { promisify } from "util";
const readFile = promisify(fs.readFile);

async function generator(): Promise<object | string> {
    const randomNumber: number = ~~(Math.random()*3);
    console.log(randomNumber);
    let answer: object | string = '';
    switch (randomNumber) {
        case 0:
            answer = {
                type: 'test',
                query: 'es' + (randomNumber + 5 + ~~(Math.random()*3)).toString(),
            };
            break;
        case 1:
            answer = await readFile('./app/static/joke.jpg');
            break;
        case 2:
            answer = 'Test here!';
            break;
    }
    return answer;
}

export default generator;
