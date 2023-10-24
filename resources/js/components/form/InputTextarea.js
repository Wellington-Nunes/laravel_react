import styled from "styled-components";
import { theme } from "../../theme";

export const InputTextarea = styled.textarea`
    width: 100%;
    height: ${(props) => props.height || "100px"};
    padding: 15px;
    font-size: 16px;
    font-weight: ${(props) => (props.required ? 500 : 200)};
    background: ${theme.grey2};
    border: 1px solid ${theme.grey1};
    color: ${theme.white};
    border-radius: 4px;
    outline: none;
    resize:none;

    :focus {
        border: 1px solid ${theme.grey3};
    }
`;
