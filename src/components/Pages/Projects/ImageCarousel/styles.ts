import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  opacity: 0;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  ${CarouselWrapper}:hover & {
    opacity: 1;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 8px;
`;

export const NextButton = styled(NavButton)`
  right: 8px;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  position: relative;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 0 2px 2px 0;
  transition: width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
`;
