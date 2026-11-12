import { css } from 'styled-components';

/** Celulares, tablets e janelas estreitas: versão leve do site. */
export const LITE_QUERY = '(max-width: 1024px), (pointer: coarse)';
export const liteMedia = `@media ${LITE_QUERY}`;

/**
 * No modo leve o backdrop-filter é desligado (custa caro na GPU do celular),
 * então superfícies de vidro que ficam por cima do conteúdo viram sólidas.
 */
export const solidOnLite = css`
  ${liteMedia} {
    &,
    &:hover {
      background: ${({ theme }) => theme.colors.glassSolid};
    }
  }
`;
