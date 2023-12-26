import { s as script$2 } from './basecomponent.esm-pULPujFA.mjs';
import { B as BaseStyle } from '../server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot } from 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'vue/server-renderer';

var classes = {
  root: "p-inputgroup-addon"
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: "inputgroupaddon",
  classes
});
var script$1 = {
  name: "BaseInputGroupAddon",
  "extends": script$2,
  style: InputGroupAddonStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputGroupAddon",
  "extends": script$1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "inputgroupaddon"
  }), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inputgroupaddon.esm-ISshfZG2.mjs.map
