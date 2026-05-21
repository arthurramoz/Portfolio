'use client';

import styled from 'styled-components';

const Track = styled.div<{ $active: boolean }>`
  width: 52px;
  height: 28px;
  border-radius: 100px;
  position: relative;
  flex-shrink: 0;
  background: ${({ $active, theme }) =>
    $active
      ? theme.colors.primary1
      : theme.colors.navbarBorder};
  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $active }) =>
    $active
      ? '0 0 12px rgba(72, 202, 228, 0.3)'
      : 'inset 0 1px 3px rgba(0, 0, 0, 0.06)'};

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? '27px' : '3px')};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15),
                0 0 1px rgba(0, 0, 0, 0.06);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.2s ease;
  }

  &:active::after {
    transform: scaleX(1.1);
  }
`;

interface SwitchProps {
  active: boolean;
  className?: string;
}

const Switch = ({ active, className }: SwitchProps) => {
  return <Track $active={active} className={className} />;
};

export default Switch;
