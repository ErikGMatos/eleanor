import styled, { css } from 'styled-components'

import { tokens } from '../style/constants'

interface IProps {
    icon?: string,
    iconinvert?: boolean,
    secondary?: boolean,
    disabled?: boolean,
    small?: boolean,
    large?: boolean,
    icononly?: boolean,
}

export const Container = styled.button<IProps>`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    background-color: ${tokens.colors.$primary};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 16px 24px;
    line-height: 150%;
    border-radius: 8px;
    color: ${tokens.colors.$white};
    font-size: ${tokens.text.$link};

    svg {
        margin-left: 30px;
        width: 24px;
        height: 24px;
    }

    ${props => props.iconinvert &&
        css`
        svg {
            order: -1;
            margin-right: 30px;
            margin-left:0;
        }
        `
    }


    ${props => props.secondary &&
        css`
            background-color: ${tokens.colors.$gray1};
        `
    }

    ${props => props.disabled &&
        css`
            background-color: ${tokens.colors.$gray3};
            color: ${tokens.colors.$gray4};
        `
    }

    ${props => props.small &&
        css`
        font-size: ${tokens.text.$link2};
        padding: 12px 20px;

        svg {
            width: 20px;
            height: 20px;
        }
    `};

    ${props => props.large &&
        css`
        padding: 16px 32px;
    `};

    ${props => props.icononly &&
        css`
        padding:16px 38px;

        svg {
            margin: 0;
        }
        `
    }

    ${props => props.icononly && props.small &&
        css`
        padding: 12px 34px;
        `
    }

    ${props => props.icononly && props.large &&
        css`
        padding: 16px 46px;
        `
    }
`
