import styled from "styled-components";

export const PopupOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 9999;
    display: ${props => props.show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
`;