import { registerPlugin } from '@capacitor/core';
/**
 * Register the TaleemabadPlugin with Capacitor
 * Provides document scanning and file download functionality
 */
const TaleemabadCapacitorPlugin = registerPlugin('TaleemabadPlugin', {
    /**
     * Web implementation loader
     * Dynamically imports and instantiates the web implementation
     */
    web: () => import('./web').then(m => new m.TaleemabadWebPlugin()),
});
// Export plugin interfaces and types
export * from './types';
// Export the plugin instance
export { TaleemabadCapacitorPlugin };
//# sourceMappingURL=index.js.map