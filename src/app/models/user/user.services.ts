import { TLoginUser, TUser } from './user.interface';
import User from './user.model';
import bcrypt from 'bcrypt'

export const createUserIntoDB = async (userData: TUser): Promise<TUser | Error> => {
        const newUser = await User.create(userData);
        return newUser;
};


export const loginUserIntoDb = async (loginInfo: TLoginUser): Promise<TUser | null > => {
        const user  = await User.findOne<TUser>({ email: loginInfo.email });
        if(!user){
                throw new Error('User Not Found')
        };
        const validatePassword = await bcrypt.compare(loginInfo.password, user.password);
        if(!validatePassword){
                throw new Error('User Not Found 001')
        };
        user.password = ""
        return user;
};




