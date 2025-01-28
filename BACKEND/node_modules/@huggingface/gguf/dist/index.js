"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/FileBlob.ts
var FileBlob_exports = {};
__export(FileBlob_exports, {
  FileBlob: () => FileBlob
});
var import_node_fs, import_promises, import_node_stream, import_node_url, FileBlob;
var init_FileBlob = __esm({
  "src/utils/FileBlob.ts"() {
    "use strict";
    import_node_fs = require("fs");
    import_promises = require("fs/promises");
    import_node_stream = require("stream");
    import_node_url = require("url");
    FileBlob = class extends Blob {
      /**
       * Creates a new FileBlob on the provided file.
       *
       * @param path Path to the file to be lazy readed
       */
      static async create(path) {
        path = path instanceof URL ? (0, import_node_url.fileURLToPath)(path) : path;
        const { size } = await (0, import_promises.stat)(path);
        const fileBlob = new FileBlob(path, 0, size);
        return fileBlob;
      }
      path;
      start;
      end;
      constructor(path, start, end) {
        super();
        this.path = path;
        this.start = start;
        this.end = end;
      }
      /**
       * Returns the size of the blob.
       */
      get size() {
        return this.end - this.start;
      }
      /**
       * Returns a new instance of FileBlob that is a slice of the current one.
       *
       * The slice is inclusive of the start and exclusive of the end.
       *
       * The slice method does not supports negative start/end.
       *
       * @param start beginning of the slice
       * @param end end of the slice
       */
      slice(start = 0, end = this.size) {
        if (start < 0 || end < 0) {
          new TypeError("Unsupported negative start/end on FileBlob.slice");
        }
        const slice = new FileBlob(this.path, this.start + start, Math.min(this.start + end, this.end));
        return slice;
      }
      /**
       * Read the part of the file delimited by the FileBlob and returns it as an ArrayBuffer.
       */
      async arrayBuffer() {
        const slice = await this.execute((file) => file.read(Buffer.alloc(this.size), 0, this.size, this.start));
        return slice.buffer;
      }
      /**
       * Read the part of the file delimited by the FileBlob and returns it as a string.
       */
      async text() {
        const buffer = await this.arrayBuffer();
        return buffer.toString("utf8");
      }
      /**
       * Returns a stream around the part of the file delimited by the FileBlob.
       */
      stream() {
        return import_node_stream.Readable.toWeb((0, import_node_fs.createReadStream)(this.path, { start: this.start, end: this.end - 1 }));
      }
      /**
       * We are opening and closing the file for each action to prevent file descriptor leaks.
       *
       * It is an intended choice of developer experience over performances.
       */
      async execute(action) {
        const file = await (0, import_promises.open)(this.path, "r");
        try {
          return await action(file);
        } finally {
          await file.close();
        }
      }
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GGMLFileQuantizationType: () => GGMLFileQuantizationType,
  GGMLQuantizationType: () => GGMLQuantizationType,
  GGUFValueType: () => GGUFValueType,
  GGUF_QUANT_DESCRIPTIONS: () => GGUF_QUANT_DESCRIPTIONS,
  GGUF_QUANT_RE: () => GGUF_QUANT_RE,
  GGUF_QUANT_RE_GLOBAL: () => GGUF_QUANT_RE_GLOBAL,
  RE_GGUF_FILE: () => RE_GGUF_FILE,
  RE_GGUF_SHARD_FILE: () => RE_GGUF_SHARD_FILE,
  gguf: () => gguf,
  ggufAllShards: () => ggufAllShards,
  parseGGUFQuantLabel: () => parseGGUFQuantLabel,
  parseGgufShardFilename: () => parseGgufShardFilename
});
module.exports = __toCommonJS(src_exports);

// src/transformer-llm.ts
var LLM_ARCHITECTURES = [
  "llama",
  "falcon",
  "grok",
  "gpt2",
  "gptj",
  "gptneox",
  "mpt",
  "baichuan",
  "starcoder",
  "refact",
  "bert",
  "nomic-bert",
  "jina-bert-v2",
  "bloom",
  "stablelm",
  "qwen",
  "qwen2",
  "qwen2moe",
  "phi2",
  "phi3",
  "plamo",
  "codeshell",
  "orion",
  "internlm2",
  "minicpm",
  "gemma",
  "gemma2",
  "starcoder2",
  "mamba",
  "xverse",
  "command-r",
  "dbrx",
  "olmo",
  "openelm",
  "arctic",
  "deepseek2",
  "chatglm",
  "bitnet",
  "t5",
  "t5encoder",
  "jais"
];

// src/types.ts
var GGMLFileQuantizationType = /* @__PURE__ */ ((GGMLFileQuantizationType2) => {
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_F32"] = 0] = "MOSTLY_F32";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_F16"] = 1] = "MOSTLY_F16";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_0"] = 2] = "MOSTLY_Q4_0";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_1"] = 3] = "MOSTLY_Q4_1";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_1_SOME_F16"] = 4] = "MOSTLY_Q4_1_SOME_F16";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q8_0"] = 7] = "MOSTLY_Q8_0";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q5_0"] = 8] = "MOSTLY_Q5_0";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q5_1"] = 9] = "MOSTLY_Q5_1";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q2_K"] = 10] = "MOSTLY_Q2_K";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q3_K_S"] = 11] = "MOSTLY_Q3_K_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q3_K_M"] = 12] = "MOSTLY_Q3_K_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q3_K_L"] = 13] = "MOSTLY_Q3_K_L";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_K_S"] = 14] = "MOSTLY_Q4_K_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_K_M"] = 15] = "MOSTLY_Q4_K_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q5_K_S"] = 16] = "MOSTLY_Q5_K_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q5_K_M"] = 17] = "MOSTLY_Q5_K_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q6_K"] = 18] = "MOSTLY_Q6_K";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ2_XXS"] = 19] = "MOSTLY_IQ2_XXS";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ2_XS"] = 20] = "MOSTLY_IQ2_XS";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q2_K_S"] = 21] = "MOSTLY_Q2_K_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ3_XS"] = 22] = "MOSTLY_IQ3_XS";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ3_XXS"] = 23] = "MOSTLY_IQ3_XXS";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ1_S"] = 24] = "MOSTLY_IQ1_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ4_NL"] = 25] = "MOSTLY_IQ4_NL";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ3_S"] = 26] = "MOSTLY_IQ3_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ3_M"] = 27] = "MOSTLY_IQ3_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ2_S"] = 28] = "MOSTLY_IQ2_S";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ2_M"] = 29] = "MOSTLY_IQ2_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ4_XS"] = 30] = "MOSTLY_IQ4_XS";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_IQ1_M"] = 31] = "MOSTLY_IQ1_M";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_BF16"] = 32] = "MOSTLY_BF16";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_0_4_4"] = 33] = "MOSTLY_Q4_0_4_4";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_0_4_8"] = 34] = "MOSTLY_Q4_0_4_8";
  GGMLFileQuantizationType2[GGMLFileQuantizationType2["MOSTLY_Q4_0_8_8"] = 35] = "MOSTLY_Q4_0_8_8";
  return GGMLFileQuantizationType2;
})(GGMLFileQuantizationType || {});
var GGMLQuantizationType = /* @__PURE__ */ ((GGMLQuantizationType2) => {
  GGMLQuantizationType2[GGMLQuantizationType2["F32"] = 0] = "F32";
  GGMLQuantizationType2[GGMLQuantizationType2["F16"] = 1] = "F16";
  GGMLQuantizationType2[GGMLQuantizationType2["Q4_0"] = 2] = "Q4_0";
  GGMLQuantizationType2[GGMLQuantizationType2["Q4_1"] = 3] = "Q4_1";
  GGMLQuantizationType2[GGMLQuantizationType2["Q5_0"] = 6] = "Q5_0";
  GGMLQuantizationType2[GGMLQuantizationType2["Q5_1"] = 7] = "Q5_1";
  GGMLQuantizationType2[GGMLQuantizationType2["Q8_0"] = 8] = "Q8_0";
  GGMLQuantizationType2[GGMLQuantizationType2["Q8_1"] = 9] = "Q8_1";
  GGMLQuantizationType2[GGMLQuantizationType2["Q2_K"] = 10] = "Q2_K";
  GGMLQuantizationType2[GGMLQuantizationType2["Q3_K"] = 11] = "Q3_K";
  GGMLQuantizationType2[GGMLQuantizationType2["Q4_K"] = 12] = "Q4_K";
  GGMLQuantizationType2[GGMLQuantizationType2["Q5_K"] = 13] = "Q5_K";
  GGMLQuantizationType2[GGMLQuantizationType2["Q6_K"] = 14] = "Q6_K";
  GGMLQuantizationType2[GGMLQuantizationType2["Q8_K"] = 15] = "Q8_K";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ2_XXS"] = 16] = "IQ2_XXS";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ2_XS"] = 17] = "IQ2_XS";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ3_XXS"] = 18] = "IQ3_XXS";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ1_S"] = 19] = "IQ1_S";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ4_NL"] = 20] = "IQ4_NL";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ3_S"] = 21] = "IQ3_S";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ2_S"] = 22] = "IQ2_S";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ4_XS"] = 23] = "IQ4_XS";
  GGMLQuantizationType2[GGMLQuantizationType2["I8"] = 24] = "I8";
  GGMLQuantizationType2[GGMLQuantizationType2["I16"] = 25] = "I16";
  GGMLQuantizationType2[GGMLQuantizationType2["I32"] = 26] = "I32";
  GGMLQuantizationType2[GGMLQuantizationType2["I64"] = 27] = "I64";
  GGMLQuantizationType2[GGMLQuantizationType2["F64"] = 28] = "F64";
  GGMLQuantizationType2[GGMLQuantizationType2["IQ1_M"] = 29] = "IQ1_M";
  GGMLQuantizationType2[GGMLQuantizationType2["BF16"] = 30] = "BF16";
  return GGMLQuantizationType2;
})(GGMLQuantizationType || {});
var GGUFValueType = /* @__PURE__ */ ((GGUFValueType2) => {
  GGUFValueType2[GGUFValueType2["UINT8"] = 0] = "UINT8";
  GGUFValueType2[GGUFValueType2["INT8"] = 1] = "INT8";
  GGUFValueType2[GGUFValueType2["UINT16"] = 2] = "UINT16";
  GGUFValueType2[GGUFValueType2["INT16"] = 3] = "INT16";
  GGUFValueType2[GGUFValueType2["UINT32"] = 4] = "UINT32";
  GGUFValueType2[GGUFValueType2["INT32"] = 5] = "INT32";
  GGUFValueType2[GGUFValueType2["FLOAT32"] = 6] = "FLOAT32";
  GGUFValueType2[GGUFValueType2["BOOL"] = 7] = "BOOL";
  GGUFValueType2[GGUFValueType2["STRING"] = 8] = "STRING";
  GGUFValueType2[GGUFValueType2["ARRAY"] = 9] = "ARRAY";
  GGUFValueType2[GGUFValueType2["UINT64"] = 10] = "UINT64";
  GGUFValueType2[GGUFValueType2["INT64"] = 11] = "INT64";
  GGUFValueType2[GGUFValueType2["FLOAT64"] = 12] = "FLOAT64";
  return GGUFValueType2;
})(GGUFValueType || {});
var ARCHITECTURES = [...LLM_ARCHITECTURES, "rwkv", "whisper"];

// src/utils/isBackend.ts
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var isWebWorker = typeof self === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
var isBackend = !isBrowser && !isWebWorker;

// src/utils/promisesQueue.ts
async function promisesQueue(factories, concurrency) {
  const results = [];
  const executing = /* @__PURE__ */ new Set();
  let index = 0;
  for (const factory of factories) {
    const closureIndex = index++;
    const e = factory().then((r) => {
      results[closureIndex] = r;
      executing.delete(e);
    });
    executing.add(e);
    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }
  await Promise.all(executing);
  return results;
}

// src/quant-descriptions.ts
var GGUF_QUANT_DESCRIPTIONS = {
  [0 /* F32 */]: {
    txt: "32-bit standard IEEE 754 single-precision floating-point number.",
    src_url: "https://en.wikipedia.org/wiki/Single-precision_floating-point_format"
  },
  [1 /* F16 */]: {
    txt: "16-bit standard IEEE 754 half-precision floating-point number.",
    src_url: "https://en.wikipedia.org/wiki/Half-precision_floating-point_format"
  },
  [8 /* Q8_0 */]: {
    txt: "8-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249"
  },
  [9 /* Q8_1 */]: {
    txt: "8-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290"
  },
  [15 /* Q8_K */]: {
    txt: `8-bit quantization (q). Each block has 256 weights. Only used for quantizing intermediate results. All 2-6 bit dot products are implemented for this quantization type. Weight formula: w = q * block_scale.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [14 /* Q6_K */]: {
    txt: `6-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weights. Weight formula: w = q * block_scale(8-bit), resulting in 6.5625 bits-per-weight.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [6 /* Q5_0 */]: {
    txt: "5-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249"
  },
  [7 /* Q5_1 */]: {
    txt: "5-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290"
  },
  [13 /* Q5_K */]: {
    txt: `5-bit quantization (q). Super-blocks with 8 blocks, each block has 32 weights. Weight formula: w = q * block_scale(6-bit) + block_min(6-bit), resulting in 5.5 bits-per-weight.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [2 /* Q4_0 */]: {
    txt: "4-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557654249"
  },
  [3 /* Q4_1 */]: {
    txt: "4-bit round-to-nearest quantization (q). Each block has 32 weights. Weight formula: w = q * block_scale + block_minimum. Legacy quantization method (not used widely as of today).",
    src_url: "https://github.com/huggingface/huggingface.js/pull/615#discussion_r1557682290"
  },
  [12 /* Q4_K */]: {
    txt: `4-bit quantization (q). Super-blocks with 8 blocks, each block has 32 weights. Weight formula: w = q * block_scale(6-bit) + block_min(6-bit), resulting in 4.5 bits-per-weight.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [11 /* Q3_K */]: {
    txt: `3-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weights. Weight formula: w = q * block_scale(6-bit), resulting. 3.4375 bits-per-weight.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [10 /* Q2_K */]: {
    txt: `2-bit quantization (q). Super-blocks with 16 blocks, each block has 16 weight. Weight formula: w = q * block_scale(4-bit) + block_min(4-bit), resulting in 2.5625 bits-per-weight.`,
    src_url: "https://github.com/ggerganov/llama.cpp/pull/1684#issue-1739619305"
  },
  [23 /* IQ4_XS */]: {
    txt: "4-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 4.25 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [21 /* IQ3_S */]: {
    txt: "3-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 3.44 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [18 /* IQ3_XXS */]: {
    txt: "3-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 3.06 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [22 /* IQ2_S */]: {
    txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.5 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [17 /* IQ2_XS */]: {
    txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.31 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [16 /* IQ2_XXS */]: {
    txt: "2-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 2.06 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [19 /* IQ1_S */]: {
    txt: "1-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 1.56 bits-per-weight.",
    src_url: "https://huggingface.co/CISCai/OpenCodeInterpreter-DS-6.7B-SOTA-GGUF/blob/main/README.md?code=true#L59-L70"
  },
  [20 /* IQ4_NL */]: {
    txt: "4-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/5590"
  },
  [24 /* I8 */]: {
    txt: "8-bit fixed-width integer number.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/6045"
  },
  [25 /* I16 */]: {
    txt: "16-bit fixed-width integer number.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/6045"
  },
  [26 /* I32 */]: {
    txt: "32-bit fixed-width integer number.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/6045"
  },
  [27 /* I64 */]: {
    txt: "64-bit fixed-width integer number.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/6062"
  },
  [28 /* F64 */]: {
    txt: "64-bit standard IEEE 754 double-precision floating-point number.",
    src_url: "https://en.wikipedia.org/wiki/Double-precision_floating-point_format"
  },
  [29 /* IQ1_M */]: {
    txt: "1-bit quantization (q). Super-blocks with 256 weights. Weight w is obtained using super_block_scale & importance matrix, resulting in 1.75 bits-per-weight.",
    src_url: "https://github.com/ggerganov/llama.cpp/pull/6302"
  },
  [30 /* BF16 */]: {
    txt: "16-bit shortened version of the 32-bit IEEE 754 single-precision floating-point number.",
    src_url: "https://en.wikipedia.org/wiki/Bfloat16_floating-point_format"
  }
};

// src/gguf.ts
var RE_GGUF_FILE = /\.gguf$/;
var RE_GGUF_SHARD_FILE = /^(?<prefix>.*?)-(?<shard>\d{5})-of-(?<total>\d{5})\.gguf$/;
var PARALLEL_DOWNLOADS = 20;
function parseGgufShardFilename(filename) {
  const match = RE_GGUF_SHARD_FILE.exec(filename);
  if (match && match.groups) {
    return {
      prefix: match.groups["prefix"],
      shard: match.groups["shard"],
      total: match.groups["total"]
    };
  }
  return null;
}
var ggufQuants = Object.values(GGMLQuantizationType).filter((v) => typeof v === "string");
var GGUF_QUANT_RE = new RegExp(`(?<quant>${ggufQuants.join("|")})(_(?<sizeVariation>[A-Z]+))?`);
var GGUF_QUANT_RE_GLOBAL = new RegExp(GGUF_QUANT_RE, "g");
function parseGGUFQuantLabel(fname) {
  const quantLabel = fname.toUpperCase().match(GGUF_QUANT_RE_GLOBAL)?.at(-1);
  return quantLabel;
}
var isVersion = (version) => version === 1 || version === 2 || version === 3;
var ggufMagicNumber = new Uint8Array([71, 71, 85, 70]);
function isGGUFValueType(n) {
  return typeof GGUFValueType[n] === "string";
}
var HTTP_CHUNK_SIZE = 2 * 10 ** 6;
var HTTP_DATA_LEEWAY = 5 * 10 ** 5;
var HTTP_TOTAL_MAX_SIZE = 50 * 10 ** 6;
var RangeView = class {
  constructor(uri, params) {
    this.uri = uri;
    this.params = params;
    this.chunk = 0;
    this.buffer = new ArrayBuffer(0, { maxByteLength: HTTP_TOTAL_MAX_SIZE });
    this.dataView = new DataView(this.buffer);
  }
  chunk;
  buffer;
  dataView;
  get view() {
    return this.dataView;
  }
  /**
   * Fetch a new chunk from the server
   */
  async fetchChunk() {
    const range = [this.chunk * HTTP_CHUNK_SIZE, (this.chunk + 1) * HTTP_CHUNK_SIZE - 1];
    const buf = new Uint8Array(
      await (await (this.params?.fetch ?? fetch)(this.uri, {
        headers: {
          ...this.params?.additionalFetchHeaders ?? {},
          Range: `bytes=${range[0]}-${range[1]}`
        }
      })).arrayBuffer()
    );
    this.appendBuffer(buf);
    this.chunk += 1;
  }
  /**
   * Append new data into the buffer
   */
  appendBuffer(buf) {
    if (ArrayBuffer.prototype.resize) {
      this.buffer.resize((this.chunk + 1) * HTTP_CHUNK_SIZE);
      new Uint8Array(this.buffer).set(buf, this.chunk * HTTP_CHUNK_SIZE);
    } else {
      const newBuffer = new ArrayBuffer((this.chunk + 1) * HTTP_CHUNK_SIZE, { maxByteLength: HTTP_TOTAL_MAX_SIZE });
      const arrView = new Uint8Array(newBuffer);
      arrView.set(new Uint8Array(this.buffer));
      arrView.set(buf, this.chunk * HTTP_CHUNK_SIZE);
      this.buffer = newBuffer;
      this.dataView = new DataView(this.buffer);
    }
  }
  /**
   * Check whether we need to fetch a new chunk
   */
  async fetchChunkIfNeeded(offset) {
    if (this.dataView.byteLength - offset < HTTP_DATA_LEEWAY) {
      await this.fetchChunk();
    }
  }
};
var RangeViewLocalFile = class extends RangeView {
  /**
   * Read a new chunk from local file system.
   */
  async fetchChunk() {
    const { FileBlob: FileBlob2 } = await Promise.resolve().then(() => (init_FileBlob(), FileBlob_exports));
    const blob = await FileBlob2.create(this.uri);
    const range = [this.chunk * HTTP_CHUNK_SIZE, (this.chunk + 1) * HTTP_CHUNK_SIZE - 1];
    const buffer = await blob.slice(range[0], range[1]).arrayBuffer();
    this.appendBuffer(new Uint8Array(buffer));
    this.chunk += 1;
  }
};
function readVersionedSize(view, byteOffset, version, littleEndian) {
  switch (version) {
    case 1: {
      const n = view.getUint32(byteOffset, littleEndian);
      return { value: BigInt(n), length: 4 };
    }
    case 2:
    case 3: {
      return { value: view.getBigUint64(byteOffset, littleEndian), length: 8 };
    }
  }
}
function readString(view, offset, version, littleEndian) {
  const length = readVersionedSize(view, offset, version, littleEndian);
  const off = length.length;
  const value = new TextDecoder().decode(view.buffer.slice(offset + off, offset + off + Number(length.value)));
  return { value, length: off + Number(length.value) };
}
function readMetadataValue(view, type, offset, version, littleEndian) {
  switch (type) {
    case 0 /* UINT8 */:
      return { value: view.getUint8(offset), length: 1 };
    case 1 /* INT8 */:
      return { value: view.getInt8(offset), length: 1 };
    case 2 /* UINT16 */:
      return { value: view.getUint16(offset, littleEndian), length: 2 };
    case 3 /* INT16 */:
      return { value: view.getInt16(offset, littleEndian), length: 2 };
    case 4 /* UINT32 */:
      return { value: view.getUint32(offset, littleEndian), length: 4 };
    case 5 /* INT32 */:
      return { value: view.getInt32(offset, littleEndian), length: 4 };
    case 6 /* FLOAT32 */:
      return { value: view.getFloat32(offset, littleEndian), length: 4 };
    case 7 /* BOOL */:
      return { value: view.getUint8(offset) !== 0, length: 1 };
    case 8 /* STRING */:
      return readString(view, offset, version, littleEndian);
    case 9 /* ARRAY */: {
      const arrayType = view.getUint32(offset, littleEndian);
      const arrayLength = readVersionedSize(view, offset + 4, version, littleEndian);
      let length = 4 + arrayLength.length;
      const arrayValues = [];
      for (let i = 0; i < arrayLength.value; i++) {
        const metadataValue = readMetadataValue(view, arrayType, offset + length, version, littleEndian);
        arrayValues.push(metadataValue.value);
        length += metadataValue.length;
      }
      return { value: arrayValues, length };
    }
    case 10 /* UINT64 */:
      return { value: view.getBigUint64(offset, littleEndian), length: 8 };
    case 11 /* INT64 */:
      return { value: view.getBigInt64(offset, littleEndian), length: 8 };
    case 12 /* FLOAT64 */:
      return { value: view.getFloat64(offset, littleEndian), length: 8 };
  }
}
async function gguf(uri, params) {
  let r;
  if (isBackend) {
    if (uri.match(/^https?:\/\//)) {
      r = new RangeView(uri, params);
    } else if (params?.allowLocalFile) {
      r = new RangeViewLocalFile(uri, params);
    } else {
      throw new Error("Access to local file is not enabled, please set allowLocalFile to true");
    }
  } else {
    if (params?.allowLocalFile) {
      throw new Error("allowLocalFile cannot be used on browser");
    }
    r = new RangeView(uri, params);
  }
  await r.fetchChunk();
  const checkBuffer = (buffer, header) => {
    for (let i = 0; i < header.length; i++) {
      if (header[i] !== buffer[i]) {
        return false;
      }
    }
    return true;
  };
  if (!checkBuffer(new Uint8Array(r.view.buffer.slice(0, 4)), ggufMagicNumber)) {
    throw new Error("not a valid gguf file: not starting with GGUF magic number");
  }
  const [littleEndian, version] = (() => {
    const version2 = r.view.getUint32(4, true);
    if (version2 & 65535) {
      return [true, version2];
    } else {
      return [false, r.view.getUint32(4, false)];
    }
  })();
  if (!isVersion(version)) {
    throw new Error(`not a valid gguf file: unsupported version "${version}"`);
  }
  let offset = 8;
  const tensorCount = readVersionedSize(r.view, offset, version, littleEndian);
  offset += tensorCount.length;
  const numKv = readVersionedSize(r.view, offset, version, littleEndian);
  offset += numKv.length;
  const metadata = {
    version,
    tensor_count: tensorCount.value,
    kv_count: numKv.value
  };
  for (let i = 0; i < numKv.value; i++) {
    await r.fetchChunkIfNeeded(offset);
    const keyResult = readString(r.view, offset, version, littleEndian);
    offset += keyResult.length;
    const valueType = r.view.getUint32(offset, littleEndian);
    offset += 4;
    if (!isGGUFValueType(valueType)) {
      throw new Error("Unsupported metadata type: " + valueType);
    }
    let valueResult;
    while (!valueResult) {
      try {
        valueResult = readMetadataValue(r.view, valueType, offset, version, littleEndian);
      } catch (err) {
        if (err instanceof RangeError) {
          await r.fetchChunk();
        } else {
          throw err;
        }
      }
    }
    offset += valueResult.length;
    metadata[keyResult.value] = valueResult.value;
  }
  const tensorInfos = [];
  for (let i = 0; i < tensorCount.value; i++) {
    await r.fetchChunkIfNeeded(offset);
    const keyResult = readString(r.view, offset, version, littleEndian);
    offset += keyResult.length;
    const nDims = r.view.getUint32(offset, littleEndian);
    offset += 4;
    const shape = [];
    for (let dim = 0; dim < nDims; dim++) {
      const shapeDim = readVersionedSize(r.view, offset, version, littleEndian);
      shape.push(shapeDim.value);
      offset += shapeDim.length;
    }
    const type = r.view.getUint32(offset, littleEndian);
    offset += 4;
    const tensorOffset = r.view.getBigUint64(offset, littleEndian);
    offset += 8;
    tensorInfos.push({
      name: keyResult.value,
      n_dims: nDims,
      shape,
      dtype: type,
      offset: tensorOffset
    });
  }
  if (params?.computeParametersCount) {
    const parameterCount = tensorInfos.map(({ shape }) => shape.reduce((acc, val) => acc * Number(val), 1)).reduce((acc, val) => acc + val, 0);
    return { metadata, tensorInfos, parameterCount };
  } else {
    return { metadata, tensorInfos };
  }
}
async function ggufAllShards(url, params) {
  const parallelDownloads = params?.parallelDownloads ?? PARALLEL_DOWNLOADS;
  if (parallelDownloads < 1) {
    throw new TypeError("parallelDownloads must be greater than 0");
  }
  const ggufShardFileInfo = parseGgufShardFilename(url);
  if (ggufShardFileInfo) {
    const total = parseInt(ggufShardFileInfo.total);
    const prefix = ggufShardFileInfo.prefix;
    const urls = [];
    for (let shardIdx = 1; shardIdx <= total; shardIdx++) {
      urls.push(`${prefix}-${shardIdx.toString().padStart(5, "0")}-of-${total.toString().padStart(5, "0")}.gguf`);
    }
    const shards = await promisesQueue(
      urls.map((shardUrl) => () => gguf(shardUrl, { ...params, computeParametersCount: true })),
      parallelDownloads
    );
    return {
      shards,
      parameterCount: shards.map(({ parameterCount }) => parameterCount).reduce((acc, val) => acc + val, 0)
    };
  } else {
    const { metadata, tensorInfos, parameterCount } = await gguf(url, { ...params, computeParametersCount: true });
    return { shards: [{ metadata, tensorInfos }], parameterCount };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GGMLFileQuantizationType,
  GGMLQuantizationType,
  GGUFValueType,
  GGUF_QUANT_DESCRIPTIONS,
  GGUF_QUANT_RE,
  GGUF_QUANT_RE_GLOBAL,
  RE_GGUF_FILE,
  RE_GGUF_SHARD_FILE,
  gguf,
  ggufAllShards,
  parseGGUFQuantLabel,
  parseGgufShardFilename
});
