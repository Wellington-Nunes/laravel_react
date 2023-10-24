import styled from "styled-components";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { theme } from "../../theme";

export const InputPhone = styled(PhoneInput)`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: 200;
    background: ${theme.grey2};
    border: 1px solid ${theme.grey1};
    color: ${theme.white};
    border-radius: 4px;
    outline: none;

    .PhoneInputCountryIcon,
    .PhoneInputCountryIcon--border{
        border: 0 !important;
        border-color: transparent !important;
        box-shadow: none;
    }
    .PhoneInputCountryIconImg{
        border-radius: 4px !important;
    }

    input{
        font-size: 16px;
        height: 100%;
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        padding-left: 10px;

        background: ${theme.grey2};
    }
    :focus {
        border: 1px solid ${theme.grey3};
    }
`;
