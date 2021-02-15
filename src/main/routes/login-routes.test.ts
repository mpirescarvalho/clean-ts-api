import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import request from 'supertest'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'José',
          email: 'jose.123@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })

    test('Should return 403 on signup with already in use email', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'José',
          email: 'jose.123@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)

      await request(app)
        .post('/api/signup')
        .send({
          name: 'José',
          email: 'jose.123@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login with valid credentials', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'José',
        email: 'jose.123@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'jose.123@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 on login with invalid credentials', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'jose.123@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
