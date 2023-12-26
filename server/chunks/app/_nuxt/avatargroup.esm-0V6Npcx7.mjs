import { B as BaseStyle } from '../server.mjs';
import { s as script$2 } from './basecomponent.esm-pULPujFA.mjs';
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

var css = "\n@layer primevue {\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-left: -1rem;\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n}\n";
var classes = {
  root: "p-avatar-group p-component"
};
var AvatarGroupStyle = BaseStyle.extend({
  name: "avatargroup",
  css,
  classes
});
var script$1 = {
  name: "BaseAvatarGroup",
  "extends": script$2,
  style: AvatarGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "AvatarGroup",
  "extends": script$1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "avatargroup"
  }), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=avatargroup.esm-0V6Npcx7.mjs.map
