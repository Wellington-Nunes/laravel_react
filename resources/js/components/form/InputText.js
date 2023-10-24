import styled from "styled-components";
import InputMask from 'react-input-mask';
import { theme } from "../../theme";

export const InputText = styled(InputMask)`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: ${props => props.required ? 500 : 200};
    background: ${theme.grey2};
    border: 1px solid ${theme.grey1};
    color: ${theme.white};
    border-radius: 4px;
    outline: none;

    :focus {
        border: 1px solid ${theme.grey3};
    }
`;
