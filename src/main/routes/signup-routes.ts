import { Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup'
import { adaptRoute } from '../config/adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
