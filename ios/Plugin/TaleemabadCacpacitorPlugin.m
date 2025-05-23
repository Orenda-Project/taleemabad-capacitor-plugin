#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(TaleemabadCacpacitorPlugin, "TaleemabadCacpacitorPlugin",
           CAP_PLUGIN_METHOD(startDownload, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(startDownloadWithTag, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getDownloadList, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(removeDownloads, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resumeDownloads, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(pauseDownloads, CAPPluginReturnPromise);
)
