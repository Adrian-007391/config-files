"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => Command
});
module.exports = __toCommonJS(src_exports);
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
function Command() {
  const getclipboard = async () => {
    const clip = await import_api.Clipboard.readText();
    return clip;
  };
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Item, {
      title: "nothing on the clipboard"
    })
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0NvZGluZ1x1RDgzRFx1RERBNS9SYXljYXN0L3VzYWdlLWFuYWxpdGljcy9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBbGVydCwgQ2xpcGJvYXJkLCBEZXRhaWwsIExpc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IGdldGNsaXBib2FyZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjbGlwOiBzdHJpbmcgPSBhd2FpdCBDbGlwYm9hcmQucmVhZFRleHQoKTtcbiAgICByZXR1cm4gY2xpcDtcbiAgfTtcbiAgPExpc3Q+XG4gICAgPExpc3QuSXRlbSB0aXRsZT17XCJub3RoaW5nIG9uIHRoZSBjbGlwYm9hcmRcIn0+PC9MaXN0Lkl0ZW0+XG4gIDwvTGlzdD47XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBK0M7QUFBL0M7QUFFZSxTQUFSLFVBQTJCO0FBQ2hDLFFBQU0sZUFBZSxZQUFZO0FBQy9CLFVBQU0sT0FBZSxNQUFNLHFCQUFVLFNBQVM7QUFDOUMsV0FBTztBQUFBLEVBQ1Q7QUFDQSw4Q0FBQztBQUFBLElBQ0Msc0RBQUMsZ0JBQUssTUFBTDtBQUFBLE1BQVUsT0FBTztBQUFBLEtBQTRCO0FBQUEsR0FDaEQ7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
