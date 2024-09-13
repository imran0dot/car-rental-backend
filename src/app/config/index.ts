import dotenv from 'dotenv';
import path from 'path'

const configPath = {
    path: path.join(
        (process.cwd(), '.env')
    )
}
dotenv.config(configPath);

export default {
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    default_pass: process.env.DEFAULT_PASS,
    bcrypt_salt_rounds: process.env.SALT_ROUND
}