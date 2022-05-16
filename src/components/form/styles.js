import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  margin: 30px 0;
  padding: 30px;
  border-radius: 5px;
  background-color: rgb(230, 230, 230);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  text-align: center;
  width: 100%;
  display: block;
  font-weight: 300;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 22px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 100%;
  margin-top: 10px;
  background-color: rgb(242, 242, 242);

  background-image: linear-gradient(
    transparent 0%,
    transparent 95%,
    #00a1fb 95%,
    #00a1fb 100%
  );
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 0% 100%;
  transition-property: background-size;
  transition-duration: .5s;

  &:focus {
    background-size: 100% 100%;
  }
`;

export const FormFields = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

export const FormField = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  background-color: rgb(0, 145, 255);
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: rgb(0, 124, 219);
  }
`;