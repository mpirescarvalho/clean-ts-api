import { HashComparer } from '@/data/protocols/cryptography/hash-comparer'
import { Hasher } from '@/data/protocols/cryptography/hasher'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer {
  public static readonly SALT = 12

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, BcryptAdapter.SALT)
    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
