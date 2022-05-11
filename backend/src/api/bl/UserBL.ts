import * as jose from 'jose';
import { getRepository } from 'typeorm';
import config from '../../config';
import { User } from '../entities/User';
export class UserBL {
  public static async validatePassword(userId: string, password: string) {
    const userRepository = getRepository(User);

    try {
      const userToValidate = await userRepository.findOne(userId);

      if (userToValidate.password === password) {
        delete userToValidate.password;
        const jwt = await new jose.SignJWT({ ...userToValidate })
          .setProtectedHeader({ alg: 'RS256' })
          .setIssuedAt()
          .sign(await config.getPrivateKey());

        return jwt;
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}
