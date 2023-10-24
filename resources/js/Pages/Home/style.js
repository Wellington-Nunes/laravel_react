import styled from "styled-components";
import { theme } from "../../theme";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    background: ${theme.grey1};
    margin-bottom: 20px;

    h1 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: ${theme.white};
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    background: ${theme.grey1};

    div {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
`;

export const Input = styled.input`
    padding: 14px;
    font-size: 16px;
    background-color: ${theme.grey2};
    border: none;
    border-radius: 4px;
`;

export const ButtonForm = styled.button`
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${theme.green};
    color: ${theme.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #02b051;
    }
`;

export const ButtonMain = styled.button`
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${theme.grey2};
    color: ${theme.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
`;

export const ListContainer = styled.div`
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${theme.white};
`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0 10px;
`;

export const ListItem = styled.li`
    padding: 10px;
    width: 100%;
    background-color: ${theme.grey2};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    div {
        width: 15%;
    }
`;
export const ButtonSmall = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 600;
    background-color: ${theme.grey1};
    color: ${theme.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
