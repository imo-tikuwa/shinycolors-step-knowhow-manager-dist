import script$2 from './button.esm-T6TXAoNd.mjs';
import { B as BaseStyle, E as ConfirmationEventBus, Z as ZIndexUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, y as FocusTrap } from '../server.mjs';
import { O as OverlayEventBus } from './overlayeventbus.esm-CmNzebaM.mjs';
import { s as script$3 } from './portal.esm-fpE0Qes9.mjs';
import { s as script$4 } from './basecomponent.esm-pULPujFA.mjs';
import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, createVNode, Transition, mergeProps, withDirectives, createElementBlock, renderSlot, Fragment, resolveDynamicComponent, normalizeClass, createCommentVNode, createElementVNode, toDisplayString, createSlots } from 'vue';
import './badge.esm-zEnhr1Hp.mjs';
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
import './index.esm-6k1Ves5E.mjs';
import './baseicon.esm-AWte4eHl.mjs';

var css = "\n@layer primevue {\n    .p-confirm-popup {\n        position: absolute;\n        margin-top: 10px;\n        top: 0;\n        left: 0;\n    }\n\n    .p-confirm-popup-flipped {\n        margin-top: 0;\n        margin-bottom: 10px;\n    }\n\n    /* Animation */\n    .p-confirm-popup-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-confirm-popup-leave-to {\n        opacity: 0;\n    }\n\n    .p-confirm-popup-enter-active {\n        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-confirm-popup-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    .p-confirm-popup:after,\n    .p-confirm-popup:before {\n        bottom: 100%;\n        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);\n        content: ' ';\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n    }\n\n    .p-confirm-popup:after {\n        border-width: 8px;\n        margin-left: -8px;\n    }\n\n    .p-confirm-popup:before {\n        border-width: 10px;\n        margin-left: -10px;\n    }\n\n    .p-confirm-popup-flipped:after,\n    .p-confirm-popup-flipped:before {\n        bottom: auto;\n        top: 100%;\n    }\n\n    .p-confirm-popup.p-confirm-popup-flipped:after {\n        border-bottom-color: transparent;\n    }\n\n    .p-confirm-popup.p-confirm-popup-flipped:before {\n        border-bottom-color: transparent;\n    }\n\n    .p-confirm-popup .p-confirm-popup-content {\n        display: flex;\n        align-items: center;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-confirm-popup p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  content: "p-confirm-popup-content",
  icon: function icon(_ref2) {
    var instance = _ref2.instance;
    return ["p-confirm-popup-icon", instance.confirmation ? instance.confirmation.icon : null];
  },
  message: "p-confirm-popup-message",
  footer: "p-confirm-popup-footer",
  rejectButton: function rejectButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-confirm-popup-reject", instance.confirmation && !instance.confirmation.rejectClass ? "p-button-sm p-button-text" : null];
  },
  acceptButton: function acceptButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-confirm-popup-accept", instance.confirmation && !instance.confirmation.acceptClass ? "p-button-sm" : null];
  }
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: "confirmpopup",
  css,
  classes
});
var script$1 = {
  name: "BaseConfirmPopup",
  "extends": script$4,
  props: {
    group: String
  },
  style: ConfirmPopupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ConfirmPopup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      visible: false,
      confirmation: null,
      autoFocusAccept: null,
      autoFocusReject: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  confirmListener: null,
  closeListener: null,
  mounted: function mounted() {
    var _this = this;
    this.confirmListener = function(options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        _this.target = options.target;
        if (_this.confirmation.onShow) {
          _this.confirmation.onShow();
        }
        _this.visible = true;
      }
    };
    this.closeListener = function() {
      _this.visible = false;
      _this.confirmation = null;
    };
    ConfirmationEventBus.on("confirm", this.confirmListener);
    ConfirmationEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    ConfirmationEventBus.off("confirm", this.confirmListener);
    ConfirmationEventBus.off("close", this.closeListener);
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.container = null;
    }
    this.target = null;
    this.confirmation = null;
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onHide: function onHide() {
      if (this.confirmation.onHide) {
        this.confirmation.onHide();
      }
      this.visible = false;
    },
    onAcceptKeydown: function onAcceptKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.accept();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onRejectKeydown: function onRejectKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.reject();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onEnter: function onEnter(el) {
      this.autoFocusAccept = this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
      this.autoFocusReject = this.confirmation.defaultFocus === "reject" ? true : false;
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterEnter: function onAfterEnter() {
      this.focus();
    },
    onLeave: function onLeave() {
      this.autoFocusAccept = null;
      this.autoFocusReject = null;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay() {
      DomHandler.absolutePosition(this.container, this.target);
      var containerOffset = DomHandler.getOffset(this.container);
      var targetOffset = DomHandler.getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty("--overlayArrowLeft", "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-confirm-popup-flipped", "true");
        !this.isUnstyled && DomHandler.addClass(this.container, "p-confirm-popup-flipped");
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.visible && _this2.container && !_this2.container.contains(event.target) && !_this2.isTargetClicked(event)) {
            if (_this2.confirmation.onHide) {
              _this2.confirmation.onHide();
            }
            _this2.visible = false;
          } else {
            _this2.alignOverlay();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this3.visible) {
            _this3.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.visible && !DomHandler.isTouchDevice()) {
            _this4.visible = false;
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    focus: function focus() {
      var focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus({
          preventScroll: true
        });
      }
    },
    isTargetClicked: function isTargetClicked(event) {
      return this.target && (this.target === event.target || this.target.contains(event.target));
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    onOverlayKeydown: function onOverlayKeydown(event) {
      if (event.code === "Escape") {
        ConfirmationEventBus.emit("close", this.closeListener);
        DomHandler.focus(this.target);
      }
    },
    getCXOptions: function getCXOptions(icon2, iconProps) {
      return {
        contenxt: {
          icon: icon2,
          iconClass: iconProps["class"]
        }
      };
    }
  },
  computed: {
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    acceptLabel: function acceptLabel() {
      return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
    },
    rejectLabel: function rejectLabel() {
      return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
    },
    acceptIcon: function acceptIcon() {
      return this.confirmation ? this.confirmation.acceptIcon : null;
    },
    rejectIcon: function rejectIcon() {
      return this.confirmation ? this.confirmation.rejectIcon : null;
    }
  },
  components: {
    CPButton: script$2,
    Portal: script$3
  },
  directives: {
    focustrap: FocusTrap
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
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CPButton = resolveComponent("CPButton");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-confirm-popup",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "alertdialog",
            "class": _ctx.cx("root"),
            "aria-modal": $data.visible,
            onClick: _cache[2] || (_cache[2] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayKeydown && $options.onOverlayKeydown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.$attrs), _ctx.ptm("root"))), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            message: $data.confirmation,
            onAccept: $options.accept,
            onReject: $options.reject,
            acceptCallback: $options.accept,
            rejectCallback: $options.reject
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [!_ctx.$slots.message ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("content")
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {}, function() {
            return [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
              key: 0,
              "class": normalizeClass(_ctx.cx("icon"))
            }, null, 8, ["class"])) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              "class": _ctx.cx("icon")
            }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
          }), createElementVNode("span", mergeProps({
            "class": _ctx.cx("message")
          }, _ctx.ptm("message")), toDisplayString($data.confirmation.message), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
            key: 1,
            message: $data.confirmation
          }, null, 8, ["message"])), createElementVNode("div", mergeProps({
            "class": _ctx.cx("footer")
          }, _ctx.ptm("footer")), [createVNode(_component_CPButton, {
            label: $options.rejectLabel,
            onClick: _cache[0] || (_cache[0] = function($event) {
              return $options.reject();
            }),
            onKeydown: $options.onRejectKeydown,
            autofocus: $data.autoFocusReject,
            "class": normalizeClass([_ctx.cx("rejectButton"), $data.confirmation.rejectClass]),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("rejectButton"),
            "data-pc-name": "rejectbutton"
          }, createSlots({
            _: 2
          }, [$options.rejectIcon || _ctx.$slots.rejecticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "rejecticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.rejectIcon, iconProps["class"]]
                }, _ctx.ptm("rejectButton")["icon"], {
                  "data-pc-name": "rejectbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1032, ["label", "onKeydown", "autofocus", "class", "unstyled", "pt"]), createVNode(_component_CPButton, {
            label: $options.acceptLabel,
            onClick: _cache[1] || (_cache[1] = function($event) {
              return $options.accept();
            }),
            onKeydown: $options.onAcceptKeydown,
            autofocus: $data.autoFocusAccept,
            "class": normalizeClass([_ctx.cx("acceptButton"), $data.confirmation.acceptClass]),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("acceptButton"),
            "data-pc-name": "acceptbutton"
          }, createSlots({
            _: 2
          }, [$options.acceptIcon || _ctx.$slots.accepticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "accepticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.acceptIcon, iconProps["class"]]
                }, _ctx.ptm("acceptButton")["icon"], {
                  "data-pc-name": "acceptbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1032, ["label", "onKeydown", "autofocus", "class", "unstyled", "pt"])], 16)], 64))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=confirmpopup.esm-tvvpu0k6.mjs.map
