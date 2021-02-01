import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/cryptography/hasher'

export class BcryptAdapter implements Hasher {
  public static readonly SALT = 12

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, BcryptAdapter.SALT)
    return hash
  }
}
