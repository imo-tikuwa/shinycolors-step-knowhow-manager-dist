import { s as script$3 } from './index.esm-AWi7effC.mjs';
import { s as script$2 } from './index.esm-1hhjcnHK.mjs';
import { B as BaseStyle, U as UniqueComponentId, R as Ripple } from '../server.mjs';
import { s as script$4 } from './basecomponent.esm-pULPujFA.mjs';
import { resolveDirective, openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, toDisplayString, createCommentVNode, withDirectives, createBlock, resolveDynamicComponent, createVNode, Transition, withCtx, vShow } from 'vue';
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

var css = "\n@layer primevue {\n    .p-fieldset-legend > a,\n    .p-fieldset-legend > span {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-fieldset-toggleable .p-fieldset-legend a {\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n    }\n\n    .p-fieldset-legend-text {\n        line-height: 1;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fieldset p-component", {
      "p-fieldset-toggleable": props.toggleable
    }];
  },
  legend: "p-fieldset-legend",
  legendtitle: "p-fieldset-legend-text",
  togglericon: "p-fieldset-toggler",
  toggleablecontent: "p-toggleable-content",
  content: "p-fieldset-content"
};
var FieldsetStyle = BaseStyle.extend({
  name: "fieldset",
  css,
  classes
});
var script$1 = {
  name: "BaseFieldset",
  "extends": script$4,
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: null,
      "default": null
    }
  },
  style: FieldsetStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Fieldset",
  "extends": script$1,
  emits: ["update:collapsed", "toggle"],
  data: function data() {
    return {
      d_collapsed: this.collapsed
    };
  },
  watch: {
    collapsed: function collapsed(newValue) {
      this.d_collapsed = newValue;
    }
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit("update:collapsed", this.d_collapsed);
      this.$emit("toggle", {
        originalEvent: event,
        value: this.d_collapsed
      });
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggle(event);
        event.preventDefault();
      }
    }
  },
  computed: {
    ariaId: function ariaId() {
      return UniqueComponentId();
    },
    buttonAriaLabel: function buttonAriaLabel() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.legend;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    PlusIcon: script$2,
    MinusIcon: script$3
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "aria-controls", "aria-expanded", "aria-label"];
var _hoisted_3 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("fieldset", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "fieldset"
  }), [createElementVNode("legend", mergeProps({
    "class": _ctx.cx("legend")
  }, _ctx.ptm("legend")), [!_ctx.toggleable ? renderSlot(_ctx.$slots, "legend", {
    key: 0
  }, function() {
    return [createElementVNode("span", mergeProps({
      id: $options.ariaId + "_header",
      "class": _ctx.cx("legendtitle")
    }, _ctx.ptm("legendtitle")), toDisplayString(_ctx.legend), 17, _hoisted_1)];
  }) : createCommentVNode("", true), _ctx.toggleable ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
    key: 1,
    id: $options.ariaId + "_header",
    tabindex: "0",
    role: "button",
    "aria-controls": $options.ariaId + "_content",
    "aria-expanded": !$data.d_collapsed,
    "aria-label": $options.buttonAriaLabel,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.toggleButtonProps), _ctx.ptm("toggler"))), [renderSlot(_ctx.$slots, "togglericon", {
    collapsed: $data.d_collapsed
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "PlusIcon" : "MinusIcon"), mergeProps({
      "class": _ctx.cx("togglericon")
    }, _ctx.ptm("togglericon")), null, 16, ["class"]))];
  }), renderSlot(_ctx.$slots, "legend", {}, function() {
    return [createElementVNode("span", mergeProps({
      "class": _ctx.cx("legendtitle")
    }, _ctx.ptm("legendtitle")), toDisplayString(_ctx.legend), 17)];
  })], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true)], 16), createVNode(Transition, mergeProps({
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        id: $options.ariaId + "_content",
        "class": _ctx.cx("toggleablecontent"),
        role: "region",
        "aria-labelledby": $options.ariaId + "_header"
      }, _ctx.ptm("toggleablecontent")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16)], 16, _hoisted_3), [[vShow, !$data.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=fieldset.esm-qy_TDo2M.mjs.map
