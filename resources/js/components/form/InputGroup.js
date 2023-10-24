import styled from "styled-components";
import { theme } from "../../theme";

export const InputGroup = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    border: 1px solid ${theme.grey1};
    color: ${theme.grey5};
    border-radius: 4px;
    display: flex;
    flex-direction: ${props => props.flexDir || 'column'};
    gap:10px;
`;
