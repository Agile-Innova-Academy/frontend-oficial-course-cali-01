import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

export const useQuestionsStore = create(
  devtools(
    persist((set, get) => {
      return {
        // Initial state
        questions: [],
        currentQuestion: 0,
        score: 0,

        // Actions
        getQuestions: async (questionsNumber) => {
          const response = await fetch('https://api.jsonbin.io/v3/b/66f616f3e41b4d34e4388e64');
          const data = await response.json();
          const questions = data.record.questions

          const temporaryQuestions = questions.sort(() => Math.random() - 0.5).slice(0, questionsNumber)
          set({ questions: temporaryQuestions }, false, 'GET_QUESTIONS');
        },
        answerSelection: (answerIndex) => {
          const newQuestions = get().questions.map(question => question)
          const currentQuestion = get().questions[get().currentQuestion]
          newQuestions[get().currentQuestion] = {
            ...currentQuestion,
            selectedAnswer: answerIndex
          }
          set({ questions: newQuestions }, false, 'ANSWER_SELECTED')
          if (answerIndex === currentQuestion.answer) {
            newQuestions[get().currentQuestion] = {
              ...currentQuestion,
              selectedAnswer: answerIndex,
              isCorrect: true
            }
            set({ questions: newQuestions }, false, 'CORRECT_ANSWER_SELECTED')
            set({ score: get().score + 1 }, false, 'INCREASE_SCORE')
          }
        },
        nextQuestion: () => {
          const { questions, currentQuestion } = get()
          const nextQuestion = currentQuestion + 1

          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion }, false, 'GET_NEXT_QUESTION')
          } else {
            set({ 
              currentQuestion: 0,
              score: 0,
              questions: []
            }, false, 'GAME_RESET')
          }
        }
      }
    },
      {
        name: 'questions'
      }
    )
  )
)
