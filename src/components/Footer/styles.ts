import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.footerBg};
  padding: 80px 40px 40px;

  ${({ theme }) => theme.media.lg} {
    padding: 64px 24px 32px;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 48px 16px 24px;
  }
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 64px;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BrandName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.footerHeading};
  letter-spacing: -0.02em;
`;

export const BrandDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.footerText};
  max-width: 360px;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.footerBorder};
  color: ${({ theme }) => theme.colors.footerIcon};
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.footerIconHover};
    border-color: ${({ theme }) => theme.colors.footerIconHover};
    transform: translateY(-2px);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColumnTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.footerHeading};
  margin-bottom: 4px;
`;

export const FooterLink = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.footerLink};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.footerLinkHover};
  }
`;

export const FooterSubLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.footerText};
  margin-top: 8px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.footerLink};
`;

export const Divider = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.max};
  margin: 48px auto 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.footerBorder};
`;

export const BottomRow = styled.div`
  max-width: ${({ theme }) => theme.max};
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.footerText};
  padding: 0 40px;

  ${({ theme }) => theme.media.lg} {
    padding: 0 24px;
  }
`;

export const VersionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const VersionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.footerLink};
`;

export const VersionTag = styled.span<{ $active?: boolean }>`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${({ $active, theme }) =>
    $active ? `${theme.colors.primary1}20` : `${theme.colors.footerText}15`};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary1 : theme.colors.footerText};
`;

export const VersionDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.footerText};
  margin-left: auto;
`;
