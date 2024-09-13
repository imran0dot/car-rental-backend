import mongoose from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../config"

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true,
});


// Check User Before Create 
userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('email')) {
      const existingUser = await mongoose.models.User.findOne({ email: this.email });

      if (existingUser) {
        return next(new Error('Email already exists'));
      }
    }
  }
  catch (err) {
    throw new Error('Something Went Wrong!')
  }
});


// make the hash password before save  
userSchema.pre('save', async function (next) {
  const user = this;  
  
  if (user.isModified("password")) {
    try {
      const saltRounds = Number(config.bcrypt_salt_rounds);
      user.password = await bcrypt.hash(user.password, saltRounds);
    } catch (err) {
      return next(new Error("Error occurred while hashing the password"));
    }
  }

  next();
});

// send empty result after save 
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
})



const User = mongoose.model<IUser>('User', userSchema);
export default User;
