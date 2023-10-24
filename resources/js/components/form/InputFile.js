import styled from "styled-components";
import { theme } from "../../theme";

export const FileBox = styled.div`
    width: 100%;
    padding: 15px;
    border-radius: 4px;
    font-weight: ${props => props.required ? 500 : 200};
    background: ${theme.grey2};
    border: 1px solid ${theme.grey1};
    color: ${theme.primary};
    outline: none;
    display: flex;
    justify-content: space-between;

    :focus {
        border-color: ${theme.grey3};
    }
`;

export const InputFile = styled.input`
    display: none;
`;

export const FileLabel = styled.label`
    font-size: 16px;
    font-weight: 200;
`;
