import { WebPlugin } from '@capacitor/core';

import type { TaleemabadCacpacitorPlugin } from './definitions';

export class TaleemabadCacpacitorPluginWeb
  extends WebPlugin
  implements TaleemabadCacpacitorPlugin
{
  startScan(): Promise<{ images?: string[]; pdf?: string | null }> {
    console.error('Document scanning is not supported on the web platform.');
    return Promise.resolve({ images: undefined, pdf: null });
  }
  startDownload(options: { url: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.url });
  }
  startDownloadWithTag(options: {
    url: { tag: string; url: string }[];
  }): Promise<{ value: { tag: string; url: string }[] }> {
    return Promise.resolve({ value: options.url });
  }
  getDownloadList(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }
  getDownloadListById(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }
  removeDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }
  pauseDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }
  cancelDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }
  resumeDownloads(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }
}
