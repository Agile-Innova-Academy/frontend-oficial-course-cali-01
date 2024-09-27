import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'
import React from 'react'
import { useQuestionsStore } from '../store/store'

const Questions = ({ questionData }) => {
  const answerSelection = useQuestionsStore(state => state.answerSelection)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)

  const handleAnswerColor = answerIndex => {
    const { answer, selectedAnswer } = questionData

    if (!selectedAnswer) return 'transparent'
    if (answerIndex !== answer && answerIndex !== selectedAnswer) return 'transparent'
    if (answerIndex === answer) {
      return 'green'
    } else {
      return 'red'
    }
  }

  const handleOptionClick = answerIndex => {
    answerSelection(answerIndex)
    handleAnswerColor(answerIndex)
    setTimeout(() => {
      nextQuestion()
    }, 3000);
  }

  return (
    <Paper square={false} sx={{ p: 3 }}>
      <Typography variant='h5' sx={{ mb: 3 }}>
        {questionData.question}
      </Typography>
      <List>
        {questionData.options.map((option, index) => (
          <ListItem disablePadding key={index} divider>
            <ListItemButton
              disabled={questionData.selectedAnswer}
              onClick={() => handleOptionClick(index)}
              sx={{ backgroundColor: handleAnswerColor(index) }}
            >
              <ListItemText primary={option} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Questions
