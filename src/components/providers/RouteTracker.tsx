'use client';

import { usePathname } from 'next/navigation';
import { useGTMPageTracking } from '@/hooks/use-gtm';

export function RouteTracker() {
  const pathname = usePathname();

  useGTMPageTracking(pathname);

  return null;
}
