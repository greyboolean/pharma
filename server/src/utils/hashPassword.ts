import * as bcrypt from 'bcryptjs';

const roundsOfHashing = 10;

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword: string = await bcrypt.hash(password, roundsOfHashing);
  return hashedPassword;
};

export default hashPassword;
