declare var __webpack_public_path__: string;

// We assume the current script runs at the base path. Simply extract out its filename and then use that path
// as the base
const base = (document.currentScript as HTMLScriptElement).src;
__webpack_public_path__ = base.substr(0, base.lastIndexOf("/") + 1);

// tslint:disable-next-line:no-var-requires
const { initializeRuntime } = require("./index");
export { initializeRuntime };
