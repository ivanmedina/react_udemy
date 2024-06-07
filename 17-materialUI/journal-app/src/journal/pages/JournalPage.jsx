import { MailOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
    </JournalLayout>
  )
}
