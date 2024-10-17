'use client';

import { useEffect } from 'react';

export function NavigationFix() {
  useEffect(() => {
    // Fires when the page is shown, including from bfcache (back/forward button).
    // event.persisted = true means the page was restored from bfcache (frozen state).
    // In that case, we force a full reload to re-run all JS, WebGL, and animations.
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return null;
}
