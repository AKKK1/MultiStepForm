import React,{useState} from 'react'
import Step from '.././step/Step'
import * as S from './styled'
import FormJSON from '../../form.json'
import ArcadeIcon from '../../images/icon-arcade.svg'
import AdvancedIcon from '../../images/icon-advanced.svg'
import ProICon from '../../images/icon-pro.svg'

import { 
  Icons,
  DEFAULT_BILLING_TYPE,
  DEFAULT_PLAN,
  MONTHLY,
  YEARLY
} from './constants'


const {step2} = FormJSON;

const Step2 = (props) => {


  const [billingType, setBillingType] = useState(DEFAULT_BILLING_TYPE);

const [plan, setPlan]=useState(DEFAULT_PLAN)




const changePlan = (newPlan) => {
  setPlan(newPlan)
}

const changeBillingType = (newBillingType)=>{
  setBillingType(newBillingType);
}

  return (
    <Step {...props} >
      
      
      <S.Step2>
<S.RadioGroup>
{
step2[billingType].map(
(item)=> (
  <S.RadioLabel key={item.id}  isSelected={item.id === plan}>
  <S.RadioInput name="plan-type" type="radio"   onChange={()=> changePlan(item.id)} />
<S.Icon src={Icons[item.id]}/>

<S.Title>{item.title}</S.Title>
<S.Subtitle>{item.price}</S.Subtitle>

{

billingType === YEARLY &&  (<S.Description>{item.description}</S.Description>)

}

</S.RadioLabel>
)

)
  
}


</S.RadioGroup>
<S.BillingWrapper>
<S.BillingButton
  type='button'

onClick={() => changeBillingType(MONTHLY)}  isSelected={billingType === MONTHLY }>Monthly</S.BillingButton>
  
  <S.BillingButton
  type='button'
  onClick={() => changeBillingType(YEARLY)}  isSelected={billingType === YEARLY }>Yearly</S.BillingButton>
</S.BillingWrapper>
      </S.Step2>
      
       </Step>
  )
}

export default Step2