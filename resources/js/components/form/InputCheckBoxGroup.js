import styled from "styled-components";
import { theme } from "../../theme";

export const InputCheckBoxGroup = styled.div`
    width: 100%;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap:10px;

    input {width:20px}
    p{
        flex:1;
        font-size: 12px;
        color: ${theme.white};
    }
`;
