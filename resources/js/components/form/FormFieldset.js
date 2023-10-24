import styled from "styled-components";
import { theme } from "../../theme";

export const FormFieldset = styled.article`
    padding: 30px;
    width: 100%;
    max-width: ${props => props.maxWidth || '600px'};
    align-self: center;
    border-radius:20px;
    background: ${theme.grey2};
    box-shadow: 0 0 30px rgba(0,0,0,.0);
    display: flex;
    flex-direction: column;
    gap:10px;
    color: ${theme.white};

    > header {
        margin-bottom: 30px;
        > h1{
            font-weight: 100;
            font-size: 42px;
        }
        > p{
            font-weight: 100;
            font-size: 20px;
            line-height: 1.25em;
        }
     }
`;
