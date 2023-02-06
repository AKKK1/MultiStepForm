import styled from "styled-components";

export const Step =styled.form`
 flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
`

export const StepHeader = styled.div`
    
`
export const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
`
export const SubTitle = styled.h2`
color: hsl(231, 11%, 63%);
font-size: 16px;

    
`
export const Body = styled.div`

flex: 1;
    
`
export const StepFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const GoBackButton = styled.button`
font-size: 14px;
color: hsl(231, 11%, 63%);
border: none;
&:hover{
    color: inherit;

}

    
`
export const GoNextButton = styled.button`
margin-left: auto;
    background-color: hsl(213, 96%, 18%);
    color: white;
    padding: 12px 24px;
    border-radius: 9px;

`