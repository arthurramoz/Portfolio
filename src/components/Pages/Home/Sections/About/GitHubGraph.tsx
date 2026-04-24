'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

const GITHUB_USERNAME = 'arthurramoz';

const GitHubGraph = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        const data: ApiResponse = await res.json();
        setContributions(data.contributions);
        setTotalContributions(data.total.lastYear);
      } catch {
        setContributions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const getWeeks = (): ContributionDay[][] => {
    if (!contributions.length) return [];

    const recent = contributions.slice(-364);
    const weeks: ContributionDay[][] = [];
    let week: ContributionDay[] = [];

    for (let i = 0; i < recent.length; i++) {
      const dayOfWeek = new Date(recent[i].date).getDay();

      if (dayOfWeek === 0 && week.length > 0) {
        weeks.push(week);
        week = [];
      }
      week.push(recent[i]);
    }

    if (week.length > 0) weeks.push(week);
    return weeks;
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <Label>GitHub Contributions</Label>
        </Header>
        <LoadingBar />
      </Container>
    );
  }

  const weeks = getWeeks();

  return (
    <Container>
      <Header>
        <Label>GitHub Contributions</Label>
        <TotalCount>{totalContributions.toLocaleString()} no último ano</TotalCount>
      </Header>

      <GraphWrapper>
        <Grid>
          {weeks.map((week, wi) => (
            <Column key={wi}>
              {week.map(day => (
                <Cell
                  key={day.date}
                  $level={day.level}
                  title={`${day.date}: ${day.count} contribuições`}
                />
              ))}
            </Column>
          ))}
        </Grid>
      </GraphWrapper>

      <Legend>
        <LegendText>Menos</LegendText>
        <Cell $level={0} />
        <Cell $level={1} />
        <Cell $level={2} />
        <Cell $level={3} />
        <Cell $level={4} />
        <LegendText>Mais</LegendText>
      </Legend>
    </Container>
  );
};

export default GitHubGraph;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.btnSecondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.btnSecondaryBorder};
  border-radius: 24px;
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ theme }) => theme.media.md} {
    padding: 20px 16px 16px;
    border-radius: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.subtitle};
`;

const TotalCount = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
`;

const GraphWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 3px;
  min-width: fit-content;

  ${({ theme }) => theme.media.md} {
    gap: 2px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  ${({ theme }) => theme.media.md} {
    gap: 2px;
  }
`;

const Cell = styled.div<{ $level: number }>`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${({ $level, theme }) => {
    if ($level === 0) return theme.colors.btnSecondaryBorder;
    if ($level === 1) return '#9be9a8';
    if ($level === 2) return '#40c463';
    if ($level === 3) return '#30a14e';
    return '#216e39';
  }};
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.5);
  }

  ${({ theme }) => theme.media.md} {
    width: 9px;
    height: 9px;
    border-radius: 2px;
  }
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;

const LegendText = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin: 0 4px;
`;

const LoadingBar = styled.div`
  height: 100px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.btnSecondaryBorder};
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
`;
