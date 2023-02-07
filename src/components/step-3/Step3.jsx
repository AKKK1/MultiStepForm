import React,{useState} from 'react'
import Step from '.././step/Step'
import * as S from './styled'
import FormJSON from '../../form.json'

const {step3} = FormJSON;



const Step3 = (props) => {
  const billingType = 'monthly';

const [selectedAddons, setSelectedAddons] =useState([]);

const changeSelectedAddons=(checked, selectedAddon)=>{

  if(checked) {
    setSelectedAddons(
    [  ...selectedAddons,
      selectedAddon]
    )
  } else 
  {
    //abrunebs sias monishnuli elementis gareshe!== arudris   - anu daabrunebs adon.id 
    setSelectedAddons(
      selectedAddons.filter((addon)  => addon.id !== selectedAddon.id));      
  }

};

const checkSelected = (id)=> selectedAddons.some(i => i.id === id)

console.log(selectedAddons);

  return (
    <Step 
    {...props} > 
    <S.Step3>
{step3[billingType].map( (item) => (

<S.Item key={item.id}  isSelected={checkSelected(item.id)}>

<S.Input type="checkbox"  onChange={(e)=> changeSelectedAddons(e.target.checked, item)}/>


<S.InputBody>
  <S.Title>{item.title}</S.Title>
  <S.Subitle>{item.description}</S.Subitle>
</S.InputBody>
<S.Price>{item.price}</S.Price>

</S.Item>
))}
     
    </S.Step3>


    </Step>
  )
}

export default Step3