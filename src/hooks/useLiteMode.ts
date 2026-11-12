'use client';

import { useEffect, useState } from 'react';
import { LITE_QUERY } from '@/styles/lite';

/**
 * true em celulares, tablets e telas estreitas: usado para não montar
 * efeitos pesados (blobs animados, cursor customizado etc.).
 * Começa em true para que nada pesado seja montado antes de sabermos o device.
 */
export const useLiteMode = () => {
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const query = window.matchMedia(LITE_QUERY);
    const update = () => setLite(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return lite;
};
