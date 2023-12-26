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

var css = "\n@layer primevue {\n    .p-splitter-panel {\n        flex-grow: 1;\n        overflow: hidden;\n    }\n\n    .p-splitter-panel-nested {\n        display: flex;\n    }\n\n    .p-splitter-panel .p-splitter {\n        flex-grow: 1;\n        border: 0 none;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-splitter-panel", {
      "p-splitter-panel-nested": instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  css,
  classes
});
var script$1 = {
  name: "BaseSplitterPanel",
  "extends": script$2,
  props: {
    size: {
      type: Number,
      "default": null
    },
    minSize: {
      type: Number,
      "default": null
    }
  },
  style: SplitterPanelStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "SplitterPanel",
  "extends": script$1,
  computed: {
    isNested: function isNested() {
      return this.$slots["default"]().some(function(child) {
        return child.type.name === "Splitter";
      });
    },
    getPTOptions: function getPTOptions() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptm("root", $options.getPTOptions), {
    "data-pc-name": "splitterpanel"
  }), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=splitterpanel.esm-Z4Ia4Qei.mjs.map
