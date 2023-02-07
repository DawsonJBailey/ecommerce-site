import styled from 'styled-components'
import InvertedButton from "../button/button.component";

export const PaymentFormContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const FormContainer = styled.form`
height: 100px;
min-width: 500px;`

// export const PaymentButton = styled(Button)`
//   margin-left: auto;
//   margin-top: 30px;
// `;

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: 30px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const PaymentButton = styled(InvertedButton)`
  margin-left: auto;
  margin-top: 30px;
`;