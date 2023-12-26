import { s as script$3 } from './index.esm-ZlBV_3PC.mjs';
import { s as script$2, a as script$1$1 } from './index.esm-WW6swqYx.mjs';
import { s as script$4 } from './index.esm-AxxWcFzB.mjs';
import { s as script$5 } from './basecomponent.esm-pULPujFA.mjs';
import { B as BaseStyle } from '../server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot, createBlock, resolveDynamicComponent, createElementVNode, createTextVNode } from 'vue';
import './baseicon.esm-AWte4eHl.mjs';
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

var css = "\n@layer primevue {\n    .p-inline-message {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        vertical-align: top;\n    }\n    \n    .p-inline-message-icon {\n        flex-shrink: 0;\n    }\n\n    .p-inline-message-icon-only .p-inline-message-text {\n        visibility: hidden;\n        width: 0;\n    }\n\n    .p-fluid .p-inline-message {\n        display: flex;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, instance = _ref.instance;
    return ["p-inline-message p-component p-inline-message-" + props.severity, {
      "p-inline-message-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inline-message-icon", props.icon];
  },
  text: "p-inline-message-text"
};
var InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  css,
  classes
});
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$5,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  style: InlineMessageStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$2,
        success: script$3,
        warn: script$1$1,
        error: script$4
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "class": _ctx.cx("root")
  }, _ctx.ptm("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode("\xA0")];
  })], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inlinemessage.esm-5ORvd9LI.mjs.map
