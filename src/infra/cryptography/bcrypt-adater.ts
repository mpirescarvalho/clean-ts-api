import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  public static readonly SALT = 12

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, BcryptAdapter.SALT)
    return hash
  }
}
