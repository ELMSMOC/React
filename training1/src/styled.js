import styled, { css } from 'styled-components';

const medida = 800;

    const tablet  = `@media(max-width: ${medida}px)`;

    export const estilosComunes = css`

        width: 100%;
        height: 60px;
        margin: 0px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #062751;
        border-radius: 5px;
        cursor: pointer;
                    
        transition: color 0.3s ease, background-color 0.3s ease;
                
        &:hover, &:active {
            background-color: #19adbb; 
            color: #32b124;
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

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    `;


