import { registerPlugin } from '@capacitor/core';

import type { TaleemabadCacpacitorPlugin } from './definitions';

const TaleemabadCacpacitorPlugin = registerPlugin<TaleemabadCacpacitorPlugin>(
  'TaleemabadCacpacitorPlugin',
  {
    web: () => import('./web').then(m => new m.TaleemabadCacpacitorPluginWeb()),
  },
);

export * from './definitions';
export { TaleemabadCacpacitorPlugin };
