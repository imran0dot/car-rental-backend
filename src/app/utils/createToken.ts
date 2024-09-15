import jwt from 'jsonwebtoken';
import { TLoginInfo, TLoginUser } from '../models/user/user.interface';
import config from '../config';
import { ObjectId } from 'mongoose';

const createToken = (userInfo : TLoginInfo): string | Error => {
    try {
        const token = jwt.sign({ 
            userId: userInfo._id,
            email: userInfo.email,
            role: userInfo.role
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
