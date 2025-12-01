// import { generateToken } from "../data/tokentest.js";

// export const login = async (request, response) => {
//     console.log(`auth.controller->Datos recibidos->request:(metodo,url,body):${request.method} -url:${request.url} -body${request.body}`);

//     const { email, password } = request.body;
//     if (email === "test@gmail.com" && password === "123456") {
//         const user = {email: email, id: "123"} //id hardcodeado
//         const token = await generateToken(user);
//         response.json({ token });
//     } else {
//         response.sendStatus(401);
//     }
// }

import { generateToken } from "../data/tokentest.js";

export const login = async (request, resolve) => { 
    console.log(`auth.controller->Datos recibidos->request:(metodo,url,body):${request.method} -url:${request.url} -body: ${JSON.stringify(request.body)}`); // Usar JSON.stringify para mostrar mejor el body
    
    const { email, password } = request.body;

    if (email === "test@gmail.com" && password === "123456") {
        const user = {email: email, id: "123"} //id hardcodeado
        const token = await generateToken(user);
        resolve.json({ token }); // <-- Usar response
    } else {
        resolve.sendStatus(401); // <-- Usar response
    }
}