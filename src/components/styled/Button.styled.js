import styled from "styled-components";

export const StyledButton = styled.div`
    button {
        outline: none;
        border: none;
        width: ${({ width }) => width}px;
        height: ${({ height }) => height}px;
        font-size: 16px;
        background: #${({ background }) => background};
        color: white;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background: #${({ hoverBackground }) => hoverBackground};
        }
    }
`;
