import Link from 'next/link';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  padding: 24px 40px 72px;

  ${({ theme }) => theme.media.lg} {
    padding: 16px 24px 56px;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 8px 16px 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 16px;
  }
`;

export const Tag = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentText};
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.md} {
    font-size: 1.6rem;
  }
`;

export const AllLink = styled(Link)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.title};
  }

  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

export const MobileAllLink = styled(AllLink)`
  display: none;

  ${({ theme }) => theme.media.sm} {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    padding: 13px 18px;
  }
`;
