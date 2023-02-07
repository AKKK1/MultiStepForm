import React, { useState } from 'react'
import SideBar from '../sidebar/SideBar'
import Step1 from '../step-1/Step1'
import styled from 'styled-components'
import * as S from './styled'
import Step from '../step/Step'
import Step2 from '../step-2/Step2'
import Step3 from '../step-3/Step3'
import Step4 from '../step-4/Step4'


const Steps = {
  step1: {
    component: Step1,
    title: "Personal Info",
    subtitle: "Please provide your name, email address, and phone number.",
    hasNextButton: true,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing",
    hasNextButton: true,
    hasBackButton: true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    hasNextButton: true,
    hasBackButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check eveything looks OK before confirming.",
    hasBackButton: true,
  },
};

const MultiStepForm = () => {

const [activeStep, setActiveStep] = useState('step3');
const ActiveStep = Steps[activeStep].component;
  return (
    
        <S.StepForm>
        <SideBar activeStep={activeStep}/>
        <ActiveStep {...Steps[activeStep]}/>
        </S.StepForm>
    
  )
}

export default MultiStepForm