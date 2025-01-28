import type { GGUFParseOutput } from "./types";
export type { MetadataBaseValue, MetadataValue, Version, GGUFMetadata, GGUFTensorInfo, GGUFParseOutput } from "./types";
export { GGUFValueType, GGMLFileQuantizationType, GGMLQuantizationType, Architecture } from "./types";
export { GGUF_QUANT_DESCRIPTIONS } from "./quant-descriptions";
export declare const RE_GGUF_FILE: RegExp;
export declare const RE_GGUF_SHARD_FILE: RegExp;
export interface GgufShardFileInfo {
    prefix: string;
    shard: string;
    total: string;
}
export declare function parseGgufShardFilename(filename: string): GgufShardFileInfo | null;
export declare const GGUF_QUANT_RE: RegExp;
export declare const GGUF_QUANT_RE_GLOBAL: RegExp;
export declare function parseGGUFQuantLabel(fname: string): string | undefined;
export declare function gguf(uri: string, params: {
    /**
     * Custom fetch function to use instead of the default one, for example to use a proxy or edit headers.
     */
    fetch?: typeof fetch;
    additionalFetchHeaders?: Record<string, string>;
    computeParametersCount: true;
    allowLocalFile?: boolean;
}): Promise<GGUFParseOutput & {
    parameterCount: number;
}>;
export declare function gguf(uri: string, params?: {
    /**
     * Custom fetch function to use instead of the default one, for example to use a proxy or edit headers.
     */
    fetch?: typeof fetch;
    additionalFetchHeaders?: Record<string, string>;
    allowLocalFile?: boolean;
}): Promise<GGUFParseOutput>;
export declare function ggufAllShards(url: string, params?: {
    /**
     * Custom fetch function to use instead of the default one, for example to use a proxy or edit headers.
     */
    fetch?: typeof fetch;
    additionalFetchHeaders?: Record<string, string>;
    parallelDownloads?: number;
}): Promise<{
    shards: GGUFParseOutput[];
    parameterCount: number;
}>;
//# sourceMappingURL=gguf.d.ts.map