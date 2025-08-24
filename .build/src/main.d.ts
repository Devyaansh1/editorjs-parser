import { OutputBlockData, OutputData } from "@editorjs/editorjs";
type Plugins = (props: OutputBlockData) => string;
type Options = {
    strict: boolean;
};
declare const parser: (plugins?: Record<string, Plugins>, options?: Options) => {
    parse: (blocks: OutputData) => string;
    parseBlock: (block: OutputBlockData) => string | undefined;
};
export default parser;
