import { registerPlugin } from '@capacitor/core';

import type { TaleemabadCacpacitorPlugin } from './definitions';

const TaleemabadPlugin = registerPlugin<TaleemabadCacpacitorPlugin>(
  'TaleemabadPlugin',
  {
    web: () => import('./web').then(m => new m.TaleemabadCacpacitorPluginWeb()),
  },
);

export * from './definitions';
export { TaleemabadPlugin };
