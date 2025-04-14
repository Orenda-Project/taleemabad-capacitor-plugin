import { registerPlugin } from '@capacitor/core';
const TaleemabadPlugin = registerPlugin('TaleemabadPlugin', {
    web: () => import('./web').then(m => new m.TaleemabadCacpacitorPluginWeb()),
});
export * from './definitions';
export { TaleemabadPlugin };
//# sourceMappingURL=index.js.map