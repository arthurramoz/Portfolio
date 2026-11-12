import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #0b0b0f;
`;

export const Track = styled.div<{ $portrait?: boolean }>`
  display: flex;
  gap: ${({ $portrait }) => ($portrait ? '12px' : '0')};
  padding: ${({ $portrait }) => ($portrait ? '16px' : '0')};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div<{ $portrait?: boolean }>`
  flex: 0 0 ${({ $portrait }) => ($portrait ? 'auto' : '100%')};
  scroll-snap-align: ${({ $portrait }) => ($portrait ? 'start' : 'center')};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: ${({ $portrait }) => ($portrait ? 'auto' : '100%')};
    height: ${({ $portrait }) => ($portrait ? '440px' : 'auto')};
    max-height: ${({ $portrait }) => ($portrait ? 'none' : '62vh')};
    aspect-ratio: ${({ $portrait }) => ($portrait ? 'auto' : '16 / 9')};
    object-fit: contain;
    border-radius: ${({ $portrait }) => ($portrait ? '18px' : '0')};
    background: #0b0b0f;
  }

  @media (max-width: 640px) {
    img {
      height: ${({ $portrait }) => ($portrait ? '360px' : 'auto')};
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: rgba(10, 10, 14, 0.8);
  color: #fff;
  z-index: 1;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(10, 10, 14, 1);
  }

  /* No toque, o gesto de arrastar ja navega */
  @media (hover: none) {
    display: none;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 12px;
`;

export const NextButton = styled(NavButton)`
  right: 12px;
`;

export const Counter = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #fff;
  background: rgba(10, 10, 14, 0.8);
  pointer-events: none;
`;
