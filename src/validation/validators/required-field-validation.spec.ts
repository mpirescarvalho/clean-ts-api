import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '@/presentation/errors'

const FIELD_NAME = 'any_field'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(FIELD_NAME)
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_value' })
    expect(error).toEqual(new MissingParamError(FIELD_NAME))
  })

  test('Should return null if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ [FIELD_NAME]: 'any_value' })
    expect(error).toBeFalsy()
  })
})
