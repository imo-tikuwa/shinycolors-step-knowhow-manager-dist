import { s as script$2 } from './index.esm-5lrmFQcQ.mjs';
import { B as BaseStyle, Z as ZIndexUtils, D as DomHandler } from '../server.mjs';
import { s as script$3 } from './basecomponent.esm-pULPujFA.mjs';
import { openBlock, createBlock, Transition, mergeProps, withCtx, createElementBlock, renderSlot, normalizeClass, resolveDynamicComponent, createCommentVNode } from 'vue';
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

var css = "\n@layer primevue {\n    .p-scrolltop {\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-scrolltop-sticky {\n        position: sticky;\n    }\n\n    .p-scrolltop-sticky.p-link {\n        margin-left: auto;\n    }\n\n    .p-scrolltop-enter-from {\n        opacity: 0;\n    }\n\n    .p-scrolltop-enter-active {\n        transition: opacity 0.15s;\n    }\n\n    .p-scrolltop.p-scrolltop-leave-to {\n        opacity: 0;\n    }\n\n    .p-scrolltop-leave-active {\n        transition: opacity 0.15s;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-scrolltop p-link p-component", {
      "p-scrolltop-sticky": props.target !== "window"
    }];
  },
  icon: "p-scrolltop-icon"
};
var ScrollTopStyle = BaseStyle.extend({
  name: "scrolltop",
  css,
  classes
});
var script$1 = {
  name: "BaseScrollTop",
  "extends": script$3,
  props: {
    target: {
      type: String,
      "default": "window"
    },
    threshold: {
      type: Number,
      "default": 400
    },
    icon: {
      type: String,
      "default": void 0
    },
    behavior: {
      type: String,
      "default": "smooth"
    }
  },
  style: ScrollTopStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ScrollTop",
  "extends": script$1,
  scrollListener: null,
  container: null,
  data: function data() {
    return {
      visible: false
    };
  },
  mounted: function mounted() {
    if (this.target === "window")
      this.bindDocumentScrollListener();
    else if (this.target === "parent")
      this.bindParentScrollListener();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.target === "window")
      this.unbindDocumentScrollListener();
    else if (this.target === "parent")
      this.unbindParentScrollListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.overlay = null;
    }
  },
  methods: {
    onClick: function onClick() {
      var scrollElement = this.target === "window" ? void 0 : this.$el.parentElement;
      scrollElement.scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility: function checkVisibility(scrollY) {
      if (scrollY > this.threshold)
        this.visible = true;
      else
        this.visible = false;
    },
    bindParentScrollListener: function bindParentScrollListener() {
      var _this = this;
      this.scrollListener = function() {
        _this.checkVisibility(_this.$el.parentElement.scrollTop);
      };
      this.$el.parentElement.addEventListener("scroll", this.scrollListener);
    },
    bindDocumentScrollListener: function bindDocumentScrollListener() {
      var _this2 = this;
      this.scrollListener = function() {
        _this2.checkVisibility(DomHandler.getWindowScrollTop());
      };
      (void 0).addEventListener("scroll", this.scrollListener);
    },
    unbindParentScrollListener: function unbindParentScrollListener() {
      if (this.scrollListener) {
        this.$el.parentElement.removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    unbindDocumentScrollListener: function unbindDocumentScrollListener() {
      if (this.scrollListener) {
        (void 0).removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    onEnter: function onEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    }
  },
  computed: {
    scrollTopAriaLabel: function scrollTopAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
    }
  },
  components: {
    ChevronUpIcon: script$2
  }
};
var _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-scrolltop",
    appear: "",
    onEnter: $options.onEnter,
    onAfterLeave: $options.onAfterLeave
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [$data.visible ? (openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        ref: $options.containerRef,
        "class": _ctx.cx("root"),
        onClick: _cache[0] || (_cache[0] = function() {
          return $options.onClick && $options.onClick.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.scrollTopAriaLabel
      }, _ctx.ptm("root"), {
        "data-pc-name": "scrolltop"
      }), [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(_ctx.cx("icon"))
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : "ChevronUpIcon"), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      })], 16, _hoisted_1)) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["onEnter", "onAfterLeave"]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=scrolltop.esm-FNmJu9oQ.mjs.map
