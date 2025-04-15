import { WebPlugin } from '@capacitor/core';
import type { TaleemabadPlugin } from './definitions';

/**
 * Web implementation of TaleemabadPlugin.
 * Provides stub implementations for native functionality in web environment.
 */
export class TaleemabadWebPlugin extends WebPlugin implements TaleemabadPlugin {
  /**
   * Stub implementation for document scanning in web platform
   * @returns Promise with empty scan result
   */
  startScan(): Promise<{ images?: string[]; pdf?: string | null }> {
    console.error('Document scanning is not supported on the web platform.');
    return Promise.resolve({ images: undefined, pdf: null });
  }

  /**
   * Stub implementation for starting downloads
   * @param options Object containing array of URLs to download
   * @returns Promise with the same URLs without actual downloading
   */
  startDownload(options: { url: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.url });
  }

  /**
   * Stub implementation for starting tagged downloads
   * @param options Object containing array of tagged URLs
   * @returns Promise with the same tagged URLs without actual downloading
   */
  startDownloadWithTag(options: {
    url: { tag: string; url: string }[];
  }): Promise<{ value: { tag: string; url: string }[] }> {
    return Promise.resolve({ value: options.url });
  }

  /**
   * Stub implementation for getting download list
   * @returns Promise with empty download list
   */
  getDownloadList(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }

  /**
   * Stub implementation for getting download list by ID
   * @returns Promise with empty download list
   */
  getDownloadListById(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }

  /**
   * Stub implementation for removing downloads
   * @param options Object containing array of download IDs to remove
   * @returns Promise with the same download IDs
   */
  removeDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }

  /**
   * Stub implementation for pausing downloads
   * @param options Object containing array of download IDs to pause
   * @returns Promise with the same download IDs
   */
  pauseDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }

  /**
   * Stub implementation for canceling downloads
   * @param options Object containing array of download IDs to cancel
   * @returns Promise with the same download IDs
   */
  cancelDownloads(options: { value: string[] }): Promise<{ value: string[] }> {
    return Promise.resolve({ value: options.value });
  }

  /**
   * Stub implementation for resuming downloads
   * @returns Promise with empty result
   */
  resumeDownloads(): Promise<{ value: string }> {
    return Promise.resolve({ value: '[]' });
  }
}
