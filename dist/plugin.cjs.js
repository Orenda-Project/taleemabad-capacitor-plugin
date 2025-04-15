'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

/**
 * Supported output formats for document scanning
 * @enum {string}
 */
exports.OutputFormats = void 0;
(function (OutputFormats) {
    /** JPEG image format output */
    OutputFormats["JPEG"] = "JPEG";
    /** PDF document format output */
    OutputFormats["PDF"] = "PDF";
    /** Both JPEG and PDF format outputs */
    OutputFormats["BOTH"] = "BOTH";
})(exports.OutputFormats || (exports.OutputFormats = {}));

/**
 * Register the TaleemabadPlugin with Capacitor
 * Provides document scanning and file download functionality
 */
const TaleemabadCapacitorPlugin = core.registerPlugin('TaleemabadPlugin', {
    /**
     * Web implementation loader
     * Dynamically imports and instantiates the web implementation
     */
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.TaleemabadWebPlugin()),
});

/**
 * Web implementation of TaleemabadPlugin.
 * Provides stub implementations for native functionality in web environment.
 */
class TaleemabadWebPlugin extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TaleemabadWebPlugin: TaleemabadWebPlugin
});

exports.TaleemabadCapacitorPlugin = TaleemabadCapacitorPlugin;
//# sourceMappingURL=plugin.cjs.js.map
