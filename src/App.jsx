import { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import MultiStepForm from '../src/components/multi-step-form/MultiStepForm'
import styled from 'styled-components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <GlobalStyles/>
   <MultiStepForm/>
    </>
  )
}

export default App
