import script$2 from './button.esm-T6TXAoNd.mjs';
import { s as script$4 } from './index.esm-rfRr3bLw.mjs';
import script$3 from './tieredmenu.esm-wuz6KEAZ.mjs';
import { B as BaseStyle, U as UniqueComponentId } from '../server.mjs';
import { s as script$5 } from './basecomponent.esm-pULPujFA.mjs';
import { resolveComponent, openBlock, createElementBlock, mergeProps, renderSlot, createVNode, withCtx, normalizeClass, createElementVNode, createBlock, resolveDynamicComponent, createSlots } from 'vue';
import './badge.esm-zEnhr1Hp.mjs';
import './index.esm-6k1Ves5E.mjs';
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
import './overlayeventbus.esm-CmNzebaM.mjs';
import './portal.esm-fpE0Qes9.mjs';
import './index.esm-ZJmq5mIs.mjs';

function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
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
var css = "\n@layer primevue {\n    .p-splitbutton {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-splitbutton .p-splitbutton-defaultbutton,\n    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,\n    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,\n    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {\n        flex: 1 1 auto;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 0 none;\n    }\n\n    .p-splitbutton-menubutton,\n    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,\n    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    .p-splitbutton .p-menu {\n        min-width: 100%;\n    }\n\n    .p-fluid .p-splitbutton {\n        display: flex;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-splitbutton p-component", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "p-button-".concat(props.severity), props.severity), "p-button-raised", props.raised), "p-button-rounded", props.rounded), "p-button-text", props.text), "p-button-outlined", props.outlined), "p-button-sm", props.size === "small"), "p-button-lg", props.size === "large")];
  },
  button: "p-splitbutton-defaultbutton",
  menuButton: "p-splitbutton-menubutton"
};
var SplitButtonStyle = BaseStyle.extend({
  name: "splitbutton",
  css,
  classes
});
var script$1 = {
  name: "BaseSplitButton",
  "extends": script$5,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    model: {
      type: Array,
      "default": null
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    menuButtonProps: {
      type: null,
      "default": null
    },
    menuButtonIcon: {
      type: String,
      "default": void 0
    },
    severity: {
      type: String,
      "default": null
    },
    raised: {
      type: Boolean,
      "default": false
    },
    rounded: {
      type: Boolean,
      "default": false
    },
    text: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    plain: {
      type: Boolean,
      "default": false
    }
  },
  style: SplitButtonStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "SplitButton",
  "extends": script$1,
  emits: ["click"],
  data: function data() {
    return {
      isExpanded: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$watch("$refs.menu.visible", function(newValue) {
      _this.isExpanded = newValue;
    });
  },
  methods: {
    onDropdownButtonClick: function onDropdownButtonClick(event) {
      if (event) {
        event.preventDefault();
      }
      this.$refs.menu.toggle({
        currentTarget: this.$el,
        relatedTarget: this.$refs.button.$el
      });
      this.isExpanded = this.$refs.menu.visible;
    },
    onDropdownKeydown: function onDropdownKeydown(event) {
      if (event.code === "ArrowDown" || event.code === "ArrowUp") {
        this.onDropdownButtonClick();
        event.preventDefault();
      }
    },
    onDefaultButtonClick: function onDefaultButtonClick(event) {
      if (this.isExpanded) {
        this.$refs.menu.hide(event);
      }
      this.$emit("click", event);
    }
  },
  computed: {
    ariaId: function ariaId() {
      return UniqueComponentId();
    },
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  },
  components: {
    PVSButton: script$2,
    PVSMenu: script$3,
    ChevronDownIcon: script$4
  }
};
var _hoisted_1 = ["data-pc-severity"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVSButton = resolveComponent("PVSButton");
  var _component_PVSMenu = resolveComponent("PVSMenu");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptm("root"), {
    "data-pc-name": "splitbutton",
    "data-pc-severity": _ctx.severity
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createVNode(_component_PVSButton, mergeProps({
      type: "button",
      "class": _ctx.cx("button"),
      label: _ctx.label,
      disabled: _ctx.disabled,
      severity: _ctx.severity,
      text: _ctx.text,
      outlined: _ctx.outlined,
      size: _ctx.size,
      "aria-label": _ctx.label,
      onClick: $options.onDefaultButtonClick
    }, _ctx.buttonProps, {
      pt: _ctx.ptm("button"),
      unstyled: _ctx.unstyled,
      "data-pc-section": "button"
    }), {
      icon: withCtx(function(slotProps) {
        return [renderSlot(_ctx.$slots, "icon", {
          "class": normalizeClass(slotProps["class"])
        }, function() {
          return [createElementVNode("span", mergeProps({
            "class": [_ctx.icon, slotProps["class"]]
          }, _ctx.ptm("button")["icon"], {
            "data-pc-section": "buttonicon"
          }), null, 16)];
        })];
      }),
      "default": withCtx(function() {
        return [renderSlot(_ctx.$slots, "buttoncontent")];
      }),
      _: 3
    }, 16, ["class", "label", "disabled", "severity", "text", "outlined", "size", "aria-label", "onClick", "pt", "unstyled"])];
  }), createVNode(_component_PVSButton, mergeProps({
    ref: "button",
    type: "button",
    "class": _ctx.cx("menuButton"),
    disabled: _ctx.disabled,
    "aria-haspopup": "true",
    "aria-expanded": $data.isExpanded,
    "aria-controls": $options.ariaId + "_overlay",
    onClick: $options.onDropdownButtonClick,
    onKeydown: $options.onDropdownKeydown,
    severity: _ctx.severity,
    text: _ctx.text,
    outlined: _ctx.outlined,
    size: _ctx.size
  }, _ctx.menuButtonProps, {
    pt: _ctx.ptm("menuButton"),
    unstyled: _ctx.unstyled,
    "data-pc-section": "menubutton"
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "menubuttonicon", {
        "class": normalizeClass(slotProps["class"])
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.menuButtonIcon ? "span" : "ChevronDownIcon"), mergeProps({
          "class": [_ctx.menuButtonIcon, slotProps["class"]]
        }, _ctx.ptm("menuButton")["icon"], {
          "data-pc-section": "menubuttonicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown", "severity", "text", "outlined", "size", "pt", "unstyled"]), createVNode(_component_PVSMenu, {
    ref: "menu",
    id: $options.ariaId + "_overlay",
    model: _ctx.model,
    popup: true,
    autoZIndex: _ctx.autoZIndex,
    baseZIndex: _ctx.baseZIndex,
    appendTo: _ctx.appendTo,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("menu")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.menuitemicon ? {
    name: "itemicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "menuitemicon", {
        item: slotProps.item,
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.item ? {
    name: "item",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "item", {
        item: slotProps.item,
        hasSubmenu: slotProps.hasSubmenu,
        label: slotProps.label,
        props: slotProps.props
      })];
    }),
    key: "1"
  } : void 0]), 1032, ["id", "model", "autoZIndex", "baseZIndex", "appendTo", "unstyled", "pt"])], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=splitbutton.esm-PgS8PEte.mjs.map
