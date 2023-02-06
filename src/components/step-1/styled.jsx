import styled, {css} from "styled-components";

    


export const Step1 = styled.div`
    display: flex;
    flex-direction: column;
gap: 24px;    
`

export const Input = styled.input`
    font-size: 16px;
    
    padding: 12px;
    border: 1px solid hsl(229, 24%, 87%);
border-radius: 8px;
color: hsl(213, 96%, 18%);
font-weight: 500;
transition: border-color 200ms ease;

&::placeholder{
    color:  hsl(231, 11%, 63%);
}

&:hover{
    border-color: var(--Purplish-blue);
}
`



export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;


${Input} {
    
    ${({ hasError} ) => hasError && css`
        border-color: var(--Strawberry-red);
    ` }

}

  
`;

export const Label = styled.label`
    font-size: 14px;
    
`


export const ErrorMessage = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    color: var(--Strawberry-red);
    font-size: 14px;

    
`