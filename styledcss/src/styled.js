import styled, { css } from 'styled-components';

const medida = 800;

    const tablet  = `@media(max-width: ${medida}px)`;

    export const estilosComunes = css`

        width: 800px;
        height: 60px;
        margin: 120px;

        font-size: 16px;
        font-weight: bold;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgba(18, 2, 2, 0.2), 
                    -4px -4px 10px rgba(210, 89, 89, 0.3);
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        cursor: pointer;

        &:hover {
            box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                        inset -4px -4px 10px rgba(255, 255, 255, 0.3);
            transform: translateY(2px);
        }

        &:active {
            box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                        inset -6px -6px 15px rgba(255, 255, 255, 0.4);
            transform: translateY(4px);
        }

        ${tablet} {
            max-width: 100%;
            margin: 20px;
        }
    
    `;

export const Boton1 = styled.div`

    ${({entrar})=>entrar?css`
    
    ${estilosComunes}
    
        color: #feab3e;
    background-color: #32b124;

    `:`
    ${estilosComunes}
    background-color: #a11cff;
    color: #14164a;
    


    `}
    
  }
`;


