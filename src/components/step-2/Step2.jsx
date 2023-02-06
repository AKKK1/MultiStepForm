import React from 'react'
import Step from '.././step/Step'
import * as S from './styled'
import FormJSON from '../../form.json'
import ArcadeIcon from '../../images/icon-arcade.svg'
import AdvancedIcon from '../../images/icon-advanced.svg'
import ProICon from '../../images/icon-pro.svg'



const Icons = { 
  1: ArcadeIcon,
  2: AdvancedIcon,
  3:ProICon,
}
const {step2} = FormJSON;

const Step2 = (props) => {
  const billingType = "monthly"


  return (
    <Step {...props} >
      
      
      <S.Step2>
<S.RadioGroup>
{
step2[billingType].map(
(item)=> (
  <S.RadioLabel key={item.id}>
  <S.RadioInput name="plan-type" type="radio" />
<S.Icon src={Icons[item.id]}/>

<S.Title>{item.title}</S.Title>
<S.Subtitle>{item.price}</S.Subtitle>
</S.RadioLabel>
)

)
  
}


</S.RadioGroup>

      </S.Step2>
      
       </Step>
  )
}

export default Step2