import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../../presentation/protocols'

export const adaptRoute = (controller: Controller): (req: Request, res: Response) => void =>
  async (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
