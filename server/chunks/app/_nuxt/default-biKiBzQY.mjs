import { defineComponent, computed, useSSRContext } from 'vue';
import { q as useRoute, _ as _export_sfc } from '../server.mjs';
import { u as useHead } from './index-UWJl43Mi.mjs';
import { ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = defineComponent({
  setup() {
    const route = useRoute();
    const pageTitle = computed(() => {
      let title = "\u30B7\u30E3\u30CB\u30DE\u30B9\u306E\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u3092\u7BA1\u7406\u3059\u308B\u30C4\u30FC\u30EB";
      switch (route.path) {
        case "/":
          title += " - \u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406";
          break;
        case "/display-each-knowhow":
          title += " - \u30C7\u30FC\u30BF\u8868\u793A\u30FB\u30CE\u30A6\u30CF\u30A6\u5225";
          break;
        case "/character-max-level-summary":
          title += " - \u30C7\u30FC\u30BF\u8868\u793A\u30FB\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u5225";
          break;
        case "/usage":
          title += " - \u4F7F\u3044\u65B9";
          break;
      }
      return title;
    });
    useHead({
      title: pageTitle
    });
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-biKiBzQY.mjs.map
