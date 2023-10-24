import styled from "styled-components";
import { theme } from "../../theme";

export const PopupContainer = styled.div`
    width: ${props => props.width || "500px"};
    min-height: ${props => props.minHeight || "450px"};
    background: ${theme.grey1};
    padding: 40px;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;