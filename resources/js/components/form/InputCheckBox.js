import styled from "styled-components";
import { theme } from "../../theme";

export const InputCheckBox = styled.input`
width:30px;
height: 30px;
color: ${theme.white};
    :focus {
        border: 1px solid ${theme.grey3};
    }
`;
