var capacitorDownloadManager = (function (exports, core) {
    'use strict';

    const TaleemabadPlugin = core.registerPlugin('TaleemabadPlugin', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.TaleemabadCacpacitorPluginWeb()),
    });

    class TaleemabadCacpacitorPluginWeb extends core.WebPlugin {
        startScan() {
            console.error('Document scanning is not supported on the web platform.');
            return Promise.resolve({ images: undefined, pdf: null });
        }
        startDownload(options) {
            return Promise.resolve({ value: options.url });
        }
        startDownloadWithTag(options) {
            return Promise.resolve({ value: options.url });
        }
        getDownloadList() {
            return Promise.resolve({ value: '[]' });
        }
        getDownloadListById() {
            return Promise.resolve({ value: '[]' });
        }
        removeDownloads(options) {
            return Promise.resolve({ value: options.value });
        }
        pauseDownloads(options) {
            return Promise.resolve({ value: options.value });
        }
        cancelDownloads(options) {
            return Promise.resolve({ value: options.value });
        }
        resumeDownloads() {
            return Promise.resolve({ value: '[]' });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TaleemabadCacpacitorPluginWeb: TaleemabadCacpacitorPluginWeb
    });

    exports.TaleemabadPlugin = TaleemabadPlugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
