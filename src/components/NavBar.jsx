import { Chrono } from 'react-chrono'
import React from 'react'

export default function NavBar () {
  const items = [
    {
      title: 'Freshman Fall',
    },
    {
      title: 'Freshman Winter',
    },
    {
      title: 'Freshman Spring',
    },
    {
      title: 'Sophomore Fall',
    },
    {
      title: 'Sophomore Winter',
    },
    {
      title: 'Sophomore Spring',
    },
    {
      title: 'Junior Fall',
    },
    {
      title: 'Junior Winter',
    },
    {
      title: 'Junior Spring',
    },
    {
      title: 'Senior Fall',
    },
    {
      title: 'Senior Winter',
    },
    {
      title: 'Senior Spring',
    }
  ]

  const theme = {
    primary: 'white',
    secondary: 'blue',
    titleColor: 'grey',
    titleColorActive: 'white'
  }

  return (
    <div style={{ width: '100%', height: '100px' }}>
      <Chrono items={items}
              theme={theme}
              mode="HORIZONTAL"
              cardLess="true"
              hideControls="true"
        // flipLayout="true"
      />
    </div>
  )
}