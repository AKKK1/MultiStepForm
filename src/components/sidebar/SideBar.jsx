import React from 'react'
import * as S from './styled'
import {Items} from  './Constants'




const SideBar = ({ activeStep}) => {
  return (
    <S.SideBar>

        {
        Items.map((item) => (
            <S.Item isActive={activeStep === item.id} key={item.id}>

    <S.ItemNumber>{item.number}</S.ItemNumber>
    <S.ItemBody>
        <S.Subtitle>{item.subtitle}</S.Subtitle>
        <S.Title>{item.title}</S.Title>
    </S.ItemBody>
</S.Item>)
            )
        
        
        }



    </S.SideBar>
  )
}

export default SideBar