import React, { useState } from 'react'
import { useQuestionsStore } from '../store/store'
import { Box, TextField, Typography } from '@mui/material'
import Questions from './Questions'

const Game = () => {
  const getQuestions = useQuestionsStore(state => state.getQuestions)
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const score = useQuestionsStore(state => state.score)
  const [questionNumber, setQuestionNumber] = useState(0)

  const questionData = questions[currentQuestion]

  const handleGameStart = () => {
    getQuestions(questionNumber)
  }

  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {questions.length > 0 ? (
          <>
            <Questions questionData={questionData} />
            <Typography variant='h4'>Score: {score}</Typography>
          </>
        ) : (
          <>
            <TextField
              onChange={event => setQuestionNumber(event.target.value)}
              placeholder='Number of Questions'
              sx={{ color: '#fff' }}
            />
            <button onClick={handleGameStart}>¡LET'S BEGIN!</button>
          </>
        )}
      </Box>
    </>
  )
}

export default Game
