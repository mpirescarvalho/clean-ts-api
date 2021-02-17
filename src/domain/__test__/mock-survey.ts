import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})

export const mockSurveyModel = (): SurveyModel => ({
  ...mockAddSurveyParams(),
  id: 'any_id'
})

export const mockSurveyModels = (): SurveyModel[] => ([
  {
    id: 'id1',
    question: 'question1',
    answers: [{
      image: 'any_image1',
      answer: 'any_answer1'
    }],
    date: new Date()
  },
  {
    id: 'id2',
    question: 'question2',
    answers: [{
      image: 'any_image2',
      answer: 'any_answer2'
    }, {
      answer: 'any_answer3'
    }],
    date: new Date()
  }
])
