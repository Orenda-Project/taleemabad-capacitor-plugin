import type { PluginListenerHandle } from '@capacitor/core';
import type { OutputFormats, ScanResult, URLRequest } from './types';

/**
 * Main plugin interface that combines scanner and download functionality
 */
interface TaleemabadPlugin extends ScannerPlugin, DownloadPlugin {
  /**
   * Add a listener for download events
   * @param eventName Name of the event to listen for
   * @param listenerFunc Callback function that handles the event
   */
  addListener(
    eventName: string,
    listenerFunc: (download: { result: string }) => void,
  ): PluginListenerHandle;
}

/**
 * Interface for document scanning functionality
 */
interface ScannerPlugin {
  /**
   * Start document scanning
   * @param options Scanning configuration options
   * @returns Promise with scanning results containing image paths and PDF path
   */
  startScan(
    options?: Partial<{
      pageLimit: number;
      mode: string;
      enableGalleryImport: boolean;
      outputFormats: OutputFormats;
    }>,
  ): Promise<ScanResult>;
}

/**
 * Interface for download management functionality
 */
interface DownloadPlugin {
  /**
   * Start downloading files
   * @param options Object containing array of URLs to download
   * @returns Promise with array of download results
   */
  startDownload(options: { url: string[] }): Promise<{ value: string[] }>;

  /**
   * Start downloading files with tags
   * @param options Object containing array of tagged URLs
   * @returns Promise with array of tagged download results
   */
  startDownloadWithTag(options: {
    url: URLRequest[];
  }): Promise<{ value: URLRequest[] }>;

  /**
   * Remove downloads from the queue
   * @param options Object containing array of download IDs to remove
   * @returns Promise with array of removed download IDs
   */
  removeDownloads(options: { value: string[] }): Promise<{ value: string[] }>;

  /**
   * Pause active downloads
   * @param options Object containing array of download IDs to pause
   * @returns Promise with array of paused download IDs
   */
  pauseDownloads(options: { value: string[] }): Promise<{ value: string[] }>;

  /**
   * Cancel active downloads
   * @param options Object containing array of download IDs to cancel
   * @returns Promise with array of cancelled download IDs
   */
  cancelDownloads(options: { value: string[] }): Promise<{ value: string[] }>;

  /**
   * Resume all paused downloads
   * @returns Promise with result of resume operation
   */
  resumeDownloads(): Promise<{ value: string }>;

  /**
   * Get list of all downloads
   * @returns Promise with list of downloads
   */
  getDownloadList(): Promise<{ value: string }>;

  /**
   * Get download list filtered by ID
   * @returns Promise with filtered list of downloads
   */
  getDownloadListById(): Promise<{ value: string }>;
}

export { TaleemabadPlugin };
