import React from 'react'
import Step from '.././step/Step'
import * as S from './styled'
import FormJSON from '../../form.json'



const Step1 = (props) => {

const{step1} = FormJSON;
const hasError = true;

  return (

    <Step {...props}>
      <S.Step1>

      {
          step1.map(item =>
             (
  <S.FormItem key={item.id} hasError={hasError}>
  <S.Label 
   hasError={hasError}
   
  htmlFor={item.id}> 
  {item.label}
  </S.Label>

<S.Input 

hasError={hasError}
id={item.id}
name={item.id}
  type={item.type}
   placeholder={item.placeholder} />

{hasError && (<S.ErrorMessage >This field is required</S.ErrorMessage >) }
    </S.FormItem>

          ))

      }

</S.Step1>


       </Step>
  )
}

export default Step1