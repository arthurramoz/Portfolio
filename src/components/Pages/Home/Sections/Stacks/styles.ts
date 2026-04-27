import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 96px 24px 96px;
  max-width: ${({ theme }) => theme.max};
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    padding: 80px 16px 64px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 64px;
  align-items: flex-end;
  text-align: right;

  ${({ theme }) => theme.media.md} {
    align-items: flex-start;
    text-align: left;
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
  flex-direction: row-reverse;
  gap: 64px;
  align-items: flex-start;

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
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;

  ${({ theme }) => theme.media.md} {
    font-size: 16px;
  }
`;

export const StatLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const StacksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;

export const StackChip = styled.span`
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primary1}12;
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.primary1}30;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1}25;
    transform: translateY(-1px);
  }
`;

export const StatsGrid = styled.div`
  flex: 0.6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
  }

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 24px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 24px 16px;
  }
`;

export const StatNumber = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1;

  ${({ theme }) => theme.media.md} {
    font-size: 32px;
  }
`;
