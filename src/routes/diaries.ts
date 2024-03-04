import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
import { authenticateToken } from '../security'

const router = express.Router()

router.get('/', authenticateToken, (_req, res) => {

  res.send(diaryServices.getEntriesWithOutSensitiveInfo())
})
// authenticateToken
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', authenticateToken, (req, res) => {
  try {
    console.log('hola', req.body)

    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (ex) {
    console.log('ex', ex)
    res.sendStatus(404).send()
  }
})

export default router
