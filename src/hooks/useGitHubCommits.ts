'use client';

import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'arthurramoz';
const CACHE_KEY = '@Portfolio:github-commits';
const CACHE_TTL = 1000 * 60 * 60;

interface CacheData {
  value: number;
  timestamp: number;
}

interface YearResponse {
  total: Record<string, number>;
}

export const useGitHubCommits = () => {
  const [commits, setCommits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed: CacheData = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL) {
        setCommits(parsed.value);
        setLoading(false);
        return;
      }
    }

    const fetchCommits = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const startYear = 2020;
        let totalCommits = 0;

        const requests = [];
        for (let year = startYear; year <= currentYear; year++) {
          requests.push(
            fetch(
              `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
            ).then(res => res.json())
          );
        }

        const results: YearResponse[] = await Promise.all(requests);

        for (const data of results) {
          if (data.total) {
            const yearTotal = Object.values(data.total).reduce((sum, v) => sum + v, 0);
            totalCommits += yearTotal;
          }
        }

        if (totalCommits > 0) {
          setCommits(totalCommits);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ value: totalCommits, timestamp: Date.now() })
          );
        }
      } catch {
        setCommits(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return { commits, loading };
};
