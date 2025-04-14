export declare enum OutputFormats {
    JPEG = "JPEG",
    PDF = "PDF",
    BOTH = "BOTH"
}
export declare type ScanResult = {
    images?: string[];
    pdf?: string | null;
};
export declare type URLRequest = {
    tag: string;
    url: string;
};
