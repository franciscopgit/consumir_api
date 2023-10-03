import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  input {
    height: 40px;
    font-size: 15px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 20px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
