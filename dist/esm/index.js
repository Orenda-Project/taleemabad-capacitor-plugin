import { registerPlugin } from '@capacitor/core';
const plugin = registerPlugin('TaleemabadCacpacitorPlugin', {
    web: () => import('./web').then(m => new m.TaleemabadCacpacitorPluginWeb()),
});
export * from './definitions';
export { plugin };
//# sourceMappingURL=index.js.map