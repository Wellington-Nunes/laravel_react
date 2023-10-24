import styled from "styled-components";
import { theme } from "../../theme";

export const InputSelect = styled.select`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: 200;
    border-radius: 4px;
    background: ${theme.grey2};
    border: 1px solid ${theme.grey1};
    color: ${theme.white};
    outline: none;

    :focus {
        border: 1px solid ${theme.grey3};
    }
`;
