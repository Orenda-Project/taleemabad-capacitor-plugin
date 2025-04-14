export enum OutputFormats {
  JPEG = 'JPEG',
  PDF = 'PDF',
  BOTH = 'BOTH',
}

export type ScanResult = {
  images?: string[];
  pdf?: string | null;
};

export type URLRequest = {
  tag: string;
  url: string;
};
