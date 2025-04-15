/**
 * Supported output formats for document scanning
 * @enum {string}
 */
export enum OutputFormats {
  /** JPEG image format output */
  JPEG = 'JPEG',
  /** PDF document format output */
  PDF = 'PDF',
  /** Both JPEG and PDF format outputs */
  BOTH = 'BOTH',
}

/**
 * Result type for document scanning operation
 * @interface
 */
export type ScanResult = {
  /** Array of paths to scanned images */
  images?: string[];
  /** Path to generated PDF file, null if no PDF was generated */
  pdf?: string | null;
};

/**
 * Request type for tagged URL downloads
 * @interface
 */
export type URLRequest = {
  /** Identifier tag for the download */
  tag: string;
  /** URL of the file to download */
  url: string;
};
