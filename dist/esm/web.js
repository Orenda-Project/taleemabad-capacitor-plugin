import { WebPlugin } from '@capacitor/core';
/**
 * Web implementation of TaleemabadPlugin.
 * Provides stub implementations for native functionality in web environment.
 */
export class TaleemabadWebPlugin extends WebPlugin {
    /**
     * Stub implementation for document scanning in web platform
     * @returns Promise with empty scan result
     */
    startScan() {
        console.error('Document scanning is not supported on the web platform.');
        return Promise.resolve({ images: undefined, pdf: null });
    }
    /**
     * Stub implementation for starting downloads
     * @param options Object containing array of URLs to download
     * @returns Promise with the same URLs without actual downloading
     */
    startDownload(options) {
        return Promise.resolve({ value: options.url });
    }
    /**
     * Stub implementation for starting tagged downloads
     * @param options Object containing array of tagged URLs
     * @returns Promise with the same tagged URLs without actual downloading
     */
    startDownloadWithTag(options) {
        return Promise.resolve({ value: options.url });
    }
    /**
     * Stub implementation for getting download list
     * @returns Promise with empty download list
     */
    getDownloadList() {
        return Promise.resolve({ value: '[]' });
    }
    /**
     * Stub implementation for getting download list by ID
     * @returns Promise with empty download list
     */
    getDownloadListById() {
        return Promise.resolve({ value: '[]' });
    }
    /**
     * Stub implementation for removing downloads
     * @param options Object containing array of download IDs to remove
     * @returns Promise with the same download IDs
     */
    removeDownloads(options) {
        return Promise.resolve({ value: options.value });
    }
    /**
     * Stub implementation for pausing downloads
     * @param options Object containing array of download IDs to pause
     * @returns Promise with the same download IDs
     */
    pauseDownloads(options) {
        return Promise.resolve({ value: options.value });
    }
    /**
     * Stub implementation for canceling downloads
     * @param options Object containing array of download IDs to cancel
     * @returns Promise with the same download IDs
     */
    cancelDownloads(options) {
        return Promise.resolve({ value: options.value });
    }
    /**
     * Stub implementation for resuming downloads
     * @returns Promise with empty result
     */
    resumeDownloads() {
        return Promise.resolve({ value: '[]' });
    }
}
//# sourceMappingURL=web.js.map