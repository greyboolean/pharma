import bcrypt, { hash } from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword: string = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export default hashPassword;
