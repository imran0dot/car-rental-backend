import jwt from 'jsonwebtoken';
import { TUser } from '../models/user/user.interface';
import config from '../config';

const createToken = (userInfo: Pick<TUser, 'email' | 'role'>): string | Error => {
    try {
        const token = jwt.sign({ 
            email: userInfo.email,
            role: userInfo.role,
        },
            config.jwt_secret as string,
            { expiresIn: '1h' }
        );

        return token;
    } catch (err) {
        return new Error('Failed to create token');
    }
};

export default createToken;
