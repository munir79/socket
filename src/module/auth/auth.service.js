import bcrypt from 'bcrypt';
import { User } from './auth.model.js';
import { generatedToken } from '../../utils/generatedToken.js';

const registarUser = async (payLoad) => {
  const { name, email, password, role } = payLoad;
  console.log(' payLoad from controllers', payLoad);
  const userExists = await User.findOne({ email: payLoad.email });

  if (userExists) {
    throw new Error('User already Existists');
  }

  const hasPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    role,
    password: hasPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generatedToken(user._id, user.role),
  };
};

const LogInUser = async (payLoad) => {
  const { email, password } = payLoad;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(' user Not found');
  }

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw new Error('Password Not Match');
  }

  return {
    _id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
    token: generatedToken(user._id, user.role),
  };
};

export const AuthService = { registarUser, LogInUser };
