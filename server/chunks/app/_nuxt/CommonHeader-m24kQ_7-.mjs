import script from './splitbutton.esm-PgS8PEte.mjs';
import script$1 from './button.esm-T6TXAoNd.mjs';
import script$2 from './sidebar.esm-LIFcxvKP.mjs';
import script$3 from './tabview.esm-W7MvQU-x.mjs';
import script$4 from './tabpanel.esm-D_Gh2whj.mjs';
import { s as script$5 } from './dropdown.esm-5FPhnD_A.mjs';
import script$6 from './inputswitch.esm-iRAwWFu4.mjs';
import { defineComponent, reactive, ref, toRefs, useSSRContext, resolveDirective, mergeProps, withCtx, createVNode, withDirectives, openBlock, createBlock } from 'vue';
import { h as defineStore, p as persistedState, q as useRoute, u as useRouter, d as useConfirm, _ as _export_sfc } from '../server.mjs';
import { u as useHead } from './index-UWJl43Mi.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';

const useConfigStore = defineStore("config", {
  state: () => {
    return {
      // stateについてdataなどのキーをネストさせない方法が良く分からない？？？？
      data: {
        // 以下はローカルストレージで永続化されてない時点でのデフォルトのstateとなる
        theme: "saga-blue",
        saveConfirm: true,
        deleteConfirm: true,
        loadConfirm: true
      }
    };
  },
  getters: {
    // stateのdataをdataのまま返す場合はgetterの定義自体不要みたい？
    // piniaのサンプルではstateで管理しているcounterについて2倍した値を返したりするのにgetterを使っていた
    // 以下は不要となったが一応コメントアウト
    // getConfig: (state) => state.data,
  },
  actions: {
    // 以下のアクションについてローカルストレージを使用してる場合、
    // ↑のstateを各ビュー内で変更したタイミングで保管されるため以下のようなアクション自体が不要だった！
    // 以下は不要となったが一応コメントアウト
    // setTheme(theme: string) {
    //   console.log("setTheme", theme);
    //   this.data.theme = theme;
    // },
    // setSaveConfirm(saveConfirm: boolean) {
    //   console.log("setSaveConfirm", saveConfirm);
    //   this.data.saveConfirm = saveConfirm;
    // },
    // setDeleteConfirm(deleteConfirm: boolean) {
    //   console.log("setDeleteConfirm", deleteConfirm);
    //   this.data.deleteConfirm = deleteConfirm;
    // },
    // setLoadConfirm(loadConfirm: boolean) {
    //   console.log("setLoadConfirm", loadConfirm);
    //   this.data.loadConfirm = loadConfirm;
    // },
  },
  persist: {
    storage: persistedState.localStorage
  }
});
const _sfc_main = defineComponent({
  setup(_, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const confirm = useConfirm();
    const configStore = useConfigStore();
    const state = reactive({
      // 設定のサイドバーを表示するかどうか
      configSidebarVisible: false
    });
    const displaySwitchItems = ref([
      {
        label: "\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406",
        icon: "pi pi-home",
        disabled: route.path === "/",
        command: () => displaySwitchConfirm("/")
      },
      {
        label: "\u30C7\u30FC\u30BF\u8868\u793A\u30FB\u30CE\u30A6\u30CF\u30A6\u5225",
        icon: "pi pi-book",
        disabled: route.path === "/display-each-knowhow",
        command: () => displaySwitchConfirm("/display-each-knowhow")
      },
      {
        label: "\u30C7\u30FC\u30BF\u8868\u793A\u30FB\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u5225",
        icon: "pi pi-book",
        disabled: route.path === "/character-max-level-summary",
        command: () => displaySwitchConfirm("/character-max-level-summary")
      },
      {
        label: "STEP\u6301\u3061\u8FBC\u307F\u691C\u8A3C",
        icon: "pi pi-book",
        disabled: route.path === "/step-bring-in-test",
        command: () => displaySwitchConfirm("/step-bring-in-test")
      },
      {
        label: "\u4F7F\u3044\u65B9",
        icon: "pi pi-question-circle",
        disabled: route.path === "/usage",
        command: () => displaySwitchConfirm("/usage")
      }
    ]);
    const displaySwitchConfirm = (targetRoute) => {
      if (route.path === "/") {
        confirm.require({
          header: "\u8868\u793A\u5207\u66FF",
          message: "\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u306E\u5165\u529B\u306B\u3064\u3044\u3066\u4FDD\u5B58\u3057\u3066\u3044\u306A\u3044\u5185\u5BB9\u306F\u5931\u308F\u308C\u307E\u3059\u3002",
          acceptLabel: "OK",
          rejectLabel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
          acceptIcon: "pi pi-check",
          rejectIcon: "pi pi-times",
          accept: () => {
            router.push(targetRoute);
          }
        });
      } else {
        router.push(targetRoute);
      }
    };
    const changeTheme = () => {
      useHead({
        link: [
          // linkタグのidについて決め打ちすると以後、追加済みのtheme-cssというidが設定されているlinkタグを書き換えるようになる模様
          // テーマcssについて重複させずに1つのlinkタグ内で変更でき、とても便利
          { id: "theme-css", rel: "stylesheet", href: `themes/${configStore.data.theme}/theme.css?${Date.now()}` }
        ]
      });
    };
    const emitInitializeConfirm = ($event) => {
      emit("initializeConfirm", $event);
    };
    return {
      configStore,
      ...toRefs(state),
      displaySwitchItems,
      changeTheme,
      emitInitializeConfirm
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SplitButton = script;
  const _component_Button = script$1;
  const _component_Sidebar = script$2;
  const _component_TabView = script$3;
  const _component_TabPanel = script$4;
  const _component_Dropdown = script$5;
  const _component_InputSwitch = script$6;
  const _directive_tooltip = resolveDirective("tooltip");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-content-center mb-3 w-full overflow-x-auto common-header" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "unique-functions", {}, null, _push, _parent);
  _push(`<div class="flex flex-column mx-2">`);
  _push(ssrRenderComponent(_component_SplitButton, mergeProps({
    label: "\u8868\u793A\u5207\u66FF",
    icon: "pi pi-arrow-right-arrow-left",
    class: "p-button-sm p-button-help white-space-nowrap w-full",
    model: _ctx.displaySwitchItems
  }, ssrGetDirectiveProps(_ctx, _directive_tooltip, {
    value: "\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304B\u3089\u5225\u306E\u30DA\u30FC\u30B8\u3078\u9077\u79FB\u3057\u307E\u3059<br />\u300C\u884C\u8FFD\u52A0\u300D\u300C\u884C\u8907\u5199\u300D\u300C\u4FDD\u5B58\u300D\u300C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u300D\u300C\u5FA9\u5143\u300D<br />\u304A\u3088\u3073\u300C\u521D\u671F\u5316\u300D\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406\u753B\u9762\u3067\u306E\u307F\u884C\u3048\u307E\u3059",
    escape: true,
    class: "custom-tooltip"
  }, void 0, { bottom: true })), null, _parent));
  _push(`</div><div class="flex flex-column mx-2">`);
  _push(ssrRenderComponent(_component_Button, mergeProps({
    label: "\u8A2D\u5B9A",
    icon: "pi pi-cog",
    class: "p-button-sm p-button-warning white-space-nowrap w-full",
    iconPos: "right",
    onClick: ($event) => _ctx.configSidebarVisible = true
  }, ssrGetDirectiveProps(_ctx, _directive_tooltip, { value: "\u8A2D\u5B9A\u753B\u9762\u3092\u958B\u304D\u307E\u3059", class: "custom-tooltip" }, void 0, { bottom: true })), null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Sidebar, {
    visible: _ctx.configSidebarVisible,
    "onUpdate:visible": ($event) => _ctx.configSidebarVisible = $event,
    baseZIndex: 1e4,
    position: "right"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TabView, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TabPanel, { header: "\u8A2D\u5B9A" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h4${_scopeId3}>\u30C6\u30FC\u30DE</h4>`);
                    _push4(ssrRenderComponent(_component_Dropdown, {
                      modelValue: _ctx.configStore.data.theme,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.theme = $event,
                      options: _ctx.$constants.primevueThemes,
                      optionLabel: "code",
                      optionValue: "code",
                      autoOptionFocus: false,
                      class: "white-space-nowrap w-full",
                      onChange: _ctx.changeTheme
                    }, null, _parent4, _scopeId3));
                    _push4(`<h4${_scopeId3}>\u4FDD\u5B58\u78BA\u8A8D</h4>`);
                    _push4(ssrRenderComponent(_component_InputSwitch, mergeProps({
                      modelValue: _ctx.configStore.data.saveConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.saveConfirm = $event
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, { value: "\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" }, void 0, { bottom: true })), null, _parent4, _scopeId3));
                    _push4(`<h4${_scopeId3}>\u524A\u9664\u78BA\u8A8D</h4>`);
                    _push4(ssrRenderComponent(_component_InputSwitch, mergeProps({
                      modelValue: _ctx.configStore.data.deleteConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.deleteConfirm = $event
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, {
                      value: "\u884C\u524A\u9664\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059",
                      class: "custom-tooltip"
                    }, void 0, { bottom: true })), null, _parent4, _scopeId3));
                    _push4(`<h4${_scopeId3}>\u5FA9\u5143\u78BA\u8A8D</h4>`);
                    _push4(ssrRenderComponent(_component_InputSwitch, mergeProps({
                      modelValue: _ctx.configStore.data.loadConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.loadConfirm = $event
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, { value: "\u5FA9\u5143\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" }, void 0, { bottom: true })), null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h4", null, "\u30C6\u30FC\u30DE"),
                      createVNode(_component_Dropdown, {
                        modelValue: _ctx.configStore.data.theme,
                        "onUpdate:modelValue": ($event) => _ctx.configStore.data.theme = $event,
                        options: _ctx.$constants.primevueThemes,
                        optionLabel: "code",
                        optionValue: "code",
                        autoOptionFocus: false,
                        class: "white-space-nowrap w-full",
                        onChange: _ctx.changeTheme
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                      createVNode("h4", null, "\u4FDD\u5B58\u78BA\u8A8D"),
                      withDirectives(createVNode(_component_InputSwitch, {
                        modelValue: _ctx.configStore.data.saveConfirm,
                        "onUpdate:modelValue": ($event) => _ctx.configStore.data.saveConfirm = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [
                          _directive_tooltip,
                          { value: "\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                          void 0,
                          { bottom: true }
                        ]
                      ]),
                      createVNode("h4", null, "\u524A\u9664\u78BA\u8A8D"),
                      withDirectives(createVNode(_component_InputSwitch, {
                        modelValue: _ctx.configStore.data.deleteConfirm,
                        "onUpdate:modelValue": ($event) => _ctx.configStore.data.deleteConfirm = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [
                          _directive_tooltip,
                          {
                            value: "\u884C\u524A\u9664\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059",
                            class: "custom-tooltip"
                          },
                          void 0,
                          { bottom: true }
                        ]
                      ]),
                      createVNode("h4", null, "\u5FA9\u5143\u78BA\u8A8D"),
                      withDirectives(createVNode(_component_InputSwitch, {
                        modelValue: _ctx.configStore.data.loadConfirm,
                        "onUpdate:modelValue": ($event) => _ctx.configStore.data.loadConfirm = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [
                          _directive_tooltip,
                          { value: "\u5FA9\u5143\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                          void 0,
                          { bottom: true }
                        ]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_TabPanel, { header: "\u305D\u306E\u4ED6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h4${_scopeId3}>\u521D\u671F\u5316</h4>`);
                    if (_ctx.$route.path === "/") {
                      _push4(ssrRenderComponent(_component_Button, {
                        label: "\u521D\u671F\u5316\u3059\u308B",
                        icon: "pi pi-trash",
                        class: "p-button-sm p-button-danger white-space-nowrap w-full",
                        iconPos: "right",
                        onClick: ($event) => _ctx.emitInitializeConfirm($event)
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<span style="${ssrRenderStyle({ color: "var(--red-500)" })}"${_scopeId3}>\u203B\u521D\u671F\u5316\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406\u753B\u9762\u3088\u308A\u5B9F\u65BD\u3057\u3066\u304F\u3060\u3055\u3044</span>`);
                    }
                  } else {
                    return [
                      createVNode("h4", null, "\u521D\u671F\u5316"),
                      _ctx.$route.path === "/" ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        label: "\u521D\u671F\u5316\u3059\u308B",
                        icon: "pi pi-trash",
                        class: "p-button-sm p-button-danger white-space-nowrap w-full",
                        iconPos: "right",
                        onClick: ($event) => _ctx.emitInitializeConfirm($event)
                      }, null, 8, ["onClick"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        style: { color: "var(--red-500)" }
                      }, "\u203B\u521D\u671F\u5316\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406\u753B\u9762\u3088\u308A\u5B9F\u65BD\u3057\u3066\u304F\u3060\u3055\u3044", 4))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TabPanel, { header: "\u8A2D\u5B9A" }, {
                  default: withCtx(() => [
                    createVNode("h4", null, "\u30C6\u30FC\u30DE"),
                    createVNode(_component_Dropdown, {
                      modelValue: _ctx.configStore.data.theme,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.theme = $event,
                      options: _ctx.$constants.primevueThemes,
                      optionLabel: "code",
                      optionValue: "code",
                      autoOptionFocus: false,
                      class: "white-space-nowrap w-full",
                      onChange: _ctx.changeTheme
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                    createVNode("h4", null, "\u4FDD\u5B58\u78BA\u8A8D"),
                    withDirectives(createVNode(_component_InputSwitch, {
                      modelValue: _ctx.configStore.data.saveConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.saveConfirm = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [
                        _directive_tooltip,
                        { value: "\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                        void 0,
                        { bottom: true }
                      ]
                    ]),
                    createVNode("h4", null, "\u524A\u9664\u78BA\u8A8D"),
                    withDirectives(createVNode(_component_InputSwitch, {
                      modelValue: _ctx.configStore.data.deleteConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.deleteConfirm = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [
                        _directive_tooltip,
                        {
                          value: "\u884C\u524A\u9664\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059",
                          class: "custom-tooltip"
                        },
                        void 0,
                        { bottom: true }
                      ]
                    ]),
                    createVNode("h4", null, "\u5FA9\u5143\u78BA\u8A8D"),
                    withDirectives(createVNode(_component_InputSwitch, {
                      modelValue: _ctx.configStore.data.loadConfirm,
                      "onUpdate:modelValue": ($event) => _ctx.configStore.data.loadConfirm = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [
                        _directive_tooltip,
                        { value: "\u5FA9\u5143\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                        void 0,
                        { bottom: true }
                      ]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_TabPanel, { header: "\u305D\u306E\u4ED6" }, {
                  default: withCtx(() => [
                    createVNode("h4", null, "\u521D\u671F\u5316"),
                    _ctx.$route.path === "/" ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      label: "\u521D\u671F\u5316\u3059\u308B",
                      icon: "pi pi-trash",
                      class: "p-button-sm p-button-danger white-space-nowrap w-full",
                      iconPos: "right",
                      onClick: ($event) => _ctx.emitInitializeConfirm($event)
                    }, null, 8, ["onClick"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      style: { color: "var(--red-500)" }
                    }, "\u203B\u521D\u671F\u5316\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406\u753B\u9762\u3088\u308A\u5B9F\u65BD\u3057\u3066\u304F\u3060\u3055\u3044", 4))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TabView, null, {
            default: withCtx(() => [
              createVNode(_component_TabPanel, { header: "\u8A2D\u5B9A" }, {
                default: withCtx(() => [
                  createVNode("h4", null, "\u30C6\u30FC\u30DE"),
                  createVNode(_component_Dropdown, {
                    modelValue: _ctx.configStore.data.theme,
                    "onUpdate:modelValue": ($event) => _ctx.configStore.data.theme = $event,
                    options: _ctx.$constants.primevueThemes,
                    optionLabel: "code",
                    optionValue: "code",
                    autoOptionFocus: false,
                    class: "white-space-nowrap w-full",
                    onChange: _ctx.changeTheme
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                  createVNode("h4", null, "\u4FDD\u5B58\u78BA\u8A8D"),
                  withDirectives(createVNode(_component_InputSwitch, {
                    modelValue: _ctx.configStore.data.saveConfirm,
                    "onUpdate:modelValue": ($event) => _ctx.configStore.data.saveConfirm = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [
                      _directive_tooltip,
                      { value: "\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                      void 0,
                      { bottom: true }
                    ]
                  ]),
                  createVNode("h4", null, "\u524A\u9664\u78BA\u8A8D"),
                  withDirectives(createVNode(_component_InputSwitch, {
                    modelValue: _ctx.configStore.data.deleteConfirm,
                    "onUpdate:modelValue": ($event) => _ctx.configStore.data.deleteConfirm = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [
                      _directive_tooltip,
                      {
                        value: "\u884C\u524A\u9664\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059",
                        class: "custom-tooltip"
                      },
                      void 0,
                      { bottom: true }
                    ]
                  ]),
                  createVNode("h4", null, "\u5FA9\u5143\u78BA\u8A8D"),
                  withDirectives(createVNode(_component_InputSwitch, {
                    modelValue: _ctx.configStore.data.loadConfirm,
                    "onUpdate:modelValue": ($event) => _ctx.configStore.data.loadConfirm = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                    [
                      _directive_tooltip,
                      { value: "\u5FA9\u5143\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306E\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059", class: "custom-tooltip" },
                      void 0,
                      { bottom: true }
                    ]
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TabPanel, { header: "\u305D\u306E\u4ED6" }, {
                default: withCtx(() => [
                  createVNode("h4", null, "\u521D\u671F\u5316"),
                  _ctx.$route.path === "/" ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    label: "\u521D\u671F\u5316\u3059\u308B",
                    icon: "pi pi-trash",
                    class: "p-button-sm p-button-danger white-space-nowrap w-full",
                    iconPos: "right",
                    onClick: ($event) => _ctx.emitInitializeConfirm($event)
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    style: { color: "var(--red-500)" }
                  }, "\u203B\u521D\u671F\u5316\u306F\u30C7\u30FC\u30BF\u5165\u529B\u30FB\u7BA1\u7406\u753B\u9762\u3088\u308A\u5B9F\u65BD\u3057\u3066\u304F\u3060\u3055\u3044", 4))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommonHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, useConfigStore as u };
//# sourceMappingURL=CommonHeader-m24kQ_7-.mjs.map
