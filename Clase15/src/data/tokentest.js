import jwt from 'jsonwebtoken'; 
import 'dotenv/config'; 

const secret_key = process.env.JWT_SECRET_KEY ||"MySecretKey123"; 
// const secret_key = 'miTokenSecreto123'; 

// Función para generar un token JWT 
export const generateToken = (userData) => { 
    console.log("generateToken-userData", userData);
    const user = {
        id: userData.id, 
        email: userData.email
    }; 
    const expiration = { expiresIn: '1h' }; 
    return jwt.sign(user, secret_key, expiration); 
}

// const token = generateToken({ id: 1, email: 'test@gmail.com' });
// console.log("Generated Token:", token);

