import { IUser } from './user.interface';
import User from './user.model';

export const createUserIntoDB = async (userData: IUser): Promise<IUser | Error> => {
        const validatedUser = userData;
        const newUser = new User(validatedUser);
        await newUser.save();
        return newUser;
};