import React from 'react'
import * as S from './styled'
import Step1 from '../step-1/Step1'

const Step = (

{  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children}
  

) => {
  return (
    <S.Step>
<S.StepHeader> 
<S.Title>{title}</S.Title>
<S.SubTitle>{subtitle}</S.SubTitle>
</S.StepHeader>

<S.Body>
{children}

</S.Body>

<S.StepFooter>
{hasBackButton &&  <S.GoBackButton>Go Back
</S.GoBackButton> }



{hasNextButton && <S.GoNextButton>
  Go Next
</S.GoNextButton>}

</S.StepFooter>

    </S.Step>
  )
}

export default Step