# Taleemabad Capacitor Plugin

Capacitor plugin for downloading files to native device and document scanning

## Install

```bash
npm install taleemabad-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`addListener(string, ...)`](#addlistenerstring)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startScan(...)

```typescript
startScan(options?: { pageLimit?: number; mode?: string; enableGalleryImport?: boolean; outputFormats?: OutputFormats; } | undefined) => Promise<ScanResult>
```

| Param         | Type                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ pageLimit?: number; mode?: string; enableGalleryImport?: boolean; outputFormats?: <a href="#outputformats">OutputFormats</a>; }</code> |

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

---

### startDownload(...)

```typescript
startDownload(options: { url: string[]; }) => Promise<{ value: string[]; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ url: string[]; }</code> |

**Returns:** <code>Promise&lt;{ value: string[]; }&gt;</code>

---

### removeDownloads(...)

```typescript
removeDownloads(options: { value: string[]; }) => Promise<{ value: string[]; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ value: string[]; }</code> |

**Returns:** <code>Promise&lt;{ value: string[]; }&gt;</code>

---

### resumeDownloads()

```typescript
resumeDownloads() => Promise<{ value: string; }>
```

Resumes all paused downloads. Returns a promise that resolves with a string indicating the result of the resume operation.

---

### getDownloadList()

```typescript
getDownloadList() => Promise<{ value: string; }>
```

Retrieves the list of all current downloads. Returns a promise that resolves with a string representing the list of current downloads.

---

### addListener(String, ...)

```typescript
addListener(eventName: String, listenerFunc: (download: { result: string; }) => void) => PluginListenerHandle
```

| Param              | Type                                                    |
| ------------------ | ------------------------------------------------------- |
| **`eventName`**    | <code><a href="#string">String</a></code>               |
| **`listenerFunc`** | <code>(download: { result: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

#### PluginListenerHandle

This interface represents the different types of download events.

| Prop                         | Type                | Description                                  | Android | iOS |
| ---------------------------- | ------------------- | -------------------------------------------- | ------- | --- |
| **`onAdded`**                | <code>String</code> | Event when a download is added               | YES     | NO  |
| **`onCancelled`**            | <code>String</code> | Event when a download is cancelled           | YES     | NO  |
| **`onCompleted`**            | <code>String</code> | Event when a download is completed           | YES     | YES |
| **`onDeleted`**              | <code>String</code> | Event when a download is deleted             | YES     | NO  |
| **`onDownloadBlockUpdated`** | <code>String</code> | Event when a download block is updated       | YES     | NO  |
| **`onError`**                | <code>String</code> | Event when an error occurs during download   | YES     | YES |
| **`onPaused`**               | <code>String</code> | Event when a download is paused              | YES     | NO  |
| **`onProgress`**             | <code>String</code> | Event when a download makes progress         | YES     | YES |
| **`onQueued`**               | <code>String</code> | Event when a download is queued              | YES     | NO  |
| **`onRemoved`**              | <code>String</code> | Event when a download is removed             | YES     | NO  |
| **`onResumed`**              | <code>String</code> | Event when a download is resumed             | YES     | NO  |
| **`onStarted`**              | <code>String</code> | Event when a download is started             | YES     | NO  |
| **`onWaitingNetwork`**       | <code>String</code> | Event when a download is waiting for network | YES     | NO  |

### Type Aliases

| **`ScanResult`** |
| **`URLRequest`** |

### Enums

| **`OutputFormats`** |
