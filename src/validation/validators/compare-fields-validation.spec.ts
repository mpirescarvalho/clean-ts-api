import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const FIELD_NAME = 'any_field'
const FIELD_NAME_TO_COMPARE = 'any_field_to_compare'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation(FIELD_NAME, FIELD_NAME_TO_COMPARE)
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      [FIELD_NAME]: 'any_value',
      [FIELD_NAME_TO_COMPARE]: 'different_value'
    })
    expect(error).toEqual(new InvalidParamError(FIELD_NAME_TO_COMPARE))
  })

  test('Should return null if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      [FIELD_NAME]: 'any_value',
      [FIELD_NAME_TO_COMPARE]: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
