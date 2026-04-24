import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 128px 24px 96px;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;
  overflow-x: hidden;

  ${({ theme }) => theme.media.md} {
    padding: 100px 16px 64px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 64px;

  ${({ theme }) => theme.media.md} {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.title};

  ${({ theme }) => theme.media.lg} {
    font-size: 32px;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;
  max-width: 100%;

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${({ theme }) => theme.media.md} {
    font-size: 16px;
  }

  strong {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
  }
`;

export const StatsColumn = styled.div`
  flex: 0.6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  min-width: 0;
  max-width: 100%;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    flex: unset;
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 24px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 20px;
    flex-direction: row;
    text-align: left;
    border-radius: 16px;
  }
`;

export const StatNumber = styled.span`
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1;
  flex-shrink: 0;

  ${({ theme }) => theme.media.md} {
    font-size: 32px;
  }
`;

export const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  overflow-wrap: break-word;
  word-break: break-word;

  ${({ theme }) => theme.media.sm} {
    font-size: 12px;
    letter-spacing: 0.02em;
  }
`;
