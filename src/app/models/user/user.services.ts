import { IUser } from './user.interface';
import User from './user.model';

export const createUserIntoDB = async (userData: IUser): Promise<IUser | Error> => {
        const newUser = await User.create(userData);
        return newUser;
};



