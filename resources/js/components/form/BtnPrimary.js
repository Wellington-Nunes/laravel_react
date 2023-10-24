import styled from "styled-components";
import { theme } from "../../theme";

export const BtnPrimary = styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background: rgb(${(props) => props.bgColor || "0,159,227"});
    border: none;
    border-radius: 4px;
    color: ${theme.white};
    cursor: pointer;
    box-shadow: 0 0 10px rgba(${(props) => props.bgColor || "0,159,227"}, 0.5);
    transition: all 500ms;
    display: flex;
    justify-content: center;
    gap: 10px;
    :hover {
        box-shadow: 0 0 20px
            rgba(${(props) => props.bgColor || "0,159,227"}, 0.9);
    }
`;
