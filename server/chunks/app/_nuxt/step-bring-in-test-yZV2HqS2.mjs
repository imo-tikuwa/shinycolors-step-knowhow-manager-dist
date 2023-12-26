import { _ as __nuxt_component_0 } from './CommonHeader-m24kQ_7-.mjs';
import script from './button.esm-T6TXAoNd.mjs';
import script$1 from './datatable.esm-SD88VGKt.mjs';
import script$2 from './columngroup.esm-ihqFMlmt.mjs';
import script$3 from './row.esm--1xIWnLk.mjs';
import script$4 from './column.esm-IPJa9Qt6.mjs';
import script$5 from './dialog.esm-fsMkKGGn.mjs';
import { _ as __nuxt_component_7 } from './KnowhowBookInfoTableRow--NQoPiCb.mjs';
import script$6 from './checkbox.esm-CF3adjLy.mjs';
import { defineComponent, reactive, ref, toRefs, useSSRContext, resolveDirective, withCtx, mergeProps, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { d as useConfirm, _ as _export_sfc, e as useNuxtApp } from '../server.mjs';
import { u as useDataStore } from './data-671GmvQs.mjs';
import deepcopy from 'deepcopy';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './splitbutton.esm-PgS8PEte.mjs';
import './index.esm-rfRr3bLw.mjs';
import './baseicon.esm-AWte4eHl.mjs';
import './basecomponent.esm-pULPujFA.mjs';
import './tieredmenu.esm-wuz6KEAZ.mjs';
import './overlayeventbus.esm-CmNzebaM.mjs';
import './portal.esm-fpE0Qes9.mjs';
import './index.esm-ZJmq5mIs.mjs';
import './sidebar.esm-LIFcxvKP.mjs';
import './index.esm-OWNZeYZ2.mjs';
import './tabview.esm-W7MvQU-x.mjs';
import './index.esm-UaoSL-bR.mjs';
import './index.esm-ZFOOYo3T.mjs';
import './tabpanel.esm-D_Gh2whj.mjs';
import './dropdown.esm-5FPhnD_A.mjs';
import './index.esm-6k1Ves5E.mjs';
import './virtualscroller.esm-SGYTLsKp.mjs';
import './inputswitch.esm-iRAwWFu4.mjs';
import './index-UWJl43Mi.mjs';
import '@unhead/shared';
import './badge.esm-zEnhr1Hp.mjs';
import './paginator.esm-qMzOO1Pz.mjs';
import './index.esm-fdotDPcg.mjs';
import './inputnumber.esm-D0YktOfy.mjs';
import './index.esm-Opt1bmr7.mjs';
import './index.esm-_QeGuJHV.mjs';
import './inputtext.esm-iBgU8hXG.mjs';
import './index.esm-q3W2mLuf.mjs';
import './index.esm-ZlBV_3PC.mjs';
import './index.esm-1hhjcnHK.mjs';
import './index.esm-LgzwKT5W.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import 'vue-router';
import 'pinia-plugin-persistedstate';

const _sfc_main = defineComponent({
  setup() {
    const confirm = useConfirm();
    useDataStore();
    const { $constants } = useNuxtApp();
    const state = reactive({
      // 行複写のモーダルを表示するかどうか
      displaySelectModal: false
    });
    const knowhowBooks = reactive([]);
    const bringInKnowhowBookIds = ref([]);
    const bringInKnowhowBooks = reactive([]);
    const includesKnowhows = reactive([]);
    const openSelectModal = () => {
      bringInKnowhowBookIds.value = [];
      state.displaySelectModal = true;
    };
    const closeSelectModal = () => {
      state.displaySelectModal = false;
    };
    const closeSelectModalAndDisplayKnowhowBooks = () => {
      const checkedKnowhowBooks = knowhowBooks.filter(
        (knowhowBook) => bringInKnowhowBookIds.value.includes(knowhowBook.id)
      );
      if (checkedKnowhowBooks.length !== 3) {
        confirm.require({
          header: "\u9078\u629E\u30A8\u30E9\u30FC",
          message: "\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u306F3\u518A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
          acceptLabel: "OK",
          acceptIcon: "pi pi-check",
          // rejectボタンを非表示とする
          rejectClass: "hidden"
        });
        return false;
      }
      bringInKnowhowBooks.splice(0);
      checkedKnowhowBooks.forEach((checkedKnowhowBook) => {
        bringInKnowhowBooks.push(deepcopy(checkedKnowhowBook));
      });
      includesKnowhows.splice(0);
      bringInKnowhowBooks.forEach((bringInKnowhowBook) => {
        bringInKnowhowBook.knowhows.forEach((knowhow) => {
          if (knowhow.knowhow && knowhow.level && !includesKnowhows.find((includesKnowhow) => includesKnowhow.code === knowhow.knowhow.code)) {
            includesKnowhows.push(knowhow.knowhow);
          }
        });
      });
      includesKnowhows.sort((a, b) => {
        const aIndex = $constants.flattenKnowhowCodes.indexOf(a.code);
        const bIndex = $constants.flattenKnowhowCodes.indexOf(b.code);
        return aIndex - bIndex;
      });
      state.displaySelectModal = false;
    };
    const displayKnowhow = (registerdKnowhows, rowKnowhow) => {
      let found = registerdKnowhows.find((registerdKnowhow) => {
        var _a;
        return ((_a = registerdKnowhow.knowhow) == null ? void 0 : _a.code) === rowKnowhow.code;
      });
      if (found) {
        return found.level.name;
      }
      return null;
    };
    const displayKnowhowCount = (displayKnowhow2) => {
      let count = 0;
      bringInKnowhowBooks.forEach((bringInKnowhowBook) => {
        if (bringInKnowhowBook.knowhows.find((knowhow) => {
          var _a;
          return ((_a = knowhow.knowhow) == null ? void 0 : _a.code) === displayKnowhow2.code;
        })) {
          count++;
        }
      });
      return count;
    };
    return {
      ...toRefs(state),
      knowhowBooks,
      bringInKnowhowBookIds,
      bringInKnowhowBooks,
      includesKnowhows,
      openSelectModal,
      closeSelectModal,
      closeSelectModalAndDisplayKnowhowBooks,
      displayKnowhow,
      displayKnowhowCount
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonHeader = __nuxt_component_0;
  const _component_Button = script;
  const _component_DataTable = script$1;
  const _component_ColumnGroup = script$2;
  const _component_Row = script$3;
  const _component_Column = script$4;
  const _component_Dialog = script$5;
  const _component_KnowhowBookInfoTableRow = __nuxt_component_7;
  const _component_Checkbox = script$6;
  const _directive_tooltip = resolveDirective("tooltip");
  _push(`<!--[--><div class="container">`);
  _push(ssrRenderComponent(_component_CommonHeader, null, {
    "unique-functions": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-column mx-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, mergeProps({
          label: "\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E",
          icon: "pi pi-book",
          class: "p-button-sm white-space-nowrap w-full",
          iconPos: "right",
          onClick: _ctx.openSelectModal
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, { value: "STEP\u306B\u6301\u3061\u8FBC\u3080\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF3\u518A\u3092\u9078\u629E\u3057\u307E\u3059", class: "custom-tooltip" }, void 0, { bottom: true })), null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-column mx-2" }, [
            withDirectives(createVNode(_component_Button, {
              label: "\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E",
              icon: "pi pi-book",
              class: "p-button-sm white-space-nowrap w-full",
              iconPos: "right",
              onClick: _ctx.openSelectModal
            }, null, 8, ["onClick"]), [
              [
                _directive_tooltip,
                { value: "STEP\u306B\u6301\u3061\u8FBC\u3080\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF3\u518A\u3092\u9078\u629E\u3057\u307E\u3059", class: "custom-tooltip" },
                void 0,
                { bottom: true }
              ]
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.bringInKnowhowBooks.length <= 0) {
    _push(`<div class="flex justify-content-center"><span style="${ssrRenderStyle({ color: "var(--red-500)" })}"> \u2191\u300C\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E\u300D\u30DC\u30BF\u30F3\u3088\u308ASTEP\u306B\u6301\u3061\u8FBC\u3080\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 </span></div>`);
  } else {
    _push(ssrRenderComponent(_component_DataTable, {
      value: _ctx.bringInKnowhowBooks,
      class: "p-datatable-sm mb-4",
      dataKey: "id",
      showGridlines: "",
      responsiveLayout: "scroll"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_ColumnGroup, { type: "header" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Row, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Column, {
                        header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
                        rowspan: 2,
                        field: "name.code",
                        class: "white-space-nowrap",
                        style: { width: "130px" }
                      }, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_Column, {
                        colspan: _ctx.includesKnowhows.length
                      }, {
                        header: withCtx((slotProps, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span class="p-column-title white-space-nowrap mr-3"${_scopeId4}>\u30CE\u30A6\u30CF\u30A6</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "p-column-title white-space-nowrap mr-3" }, "\u30CE\u30A6\u30CF\u30A6")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_Column, {
                          header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
                          rowspan: 2,
                          field: "name.code",
                          class: "white-space-nowrap",
                          style: { width: "130px" }
                        }),
                        createVNode(_component_Column, {
                          colspan: _ctx.includesKnowhows.length
                        }, {
                          header: withCtx((slotProps) => [
                            createVNode("span", { class: "p-column-title white-space-nowrap mr-3" }, "\u30CE\u30A6\u30CF\u30A6")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_Row, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (_ctx.includesKnowhows.length) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.includesKnowhows, (knowhow) => {
                          _push4(ssrRenderComponent(_component_Column, {
                            field: knowhow.code,
                            header: knowhow.name,
                            key: knowhow.code,
                            class: "white-space-nowrap"
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        _push4(ssrRenderComponent(_component_Column, null, null, _parent4, _scopeId3));
                      }
                    } else {
                      return [
                        _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow) => {
                          return openBlock(), createBlock(_component_Column, {
                            field: knowhow.code,
                            header: knowhow.name,
                            key: knowhow.code,
                            class: "white-space-nowrap"
                          }, null, 8, ["field", "header"]);
                        }), 128)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      createVNode(_component_Column, {
                        header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
                        rowspan: 2,
                        field: "name.code",
                        class: "white-space-nowrap",
                        style: { width: "130px" }
                      }),
                      createVNode(_component_Column, {
                        colspan: _ctx.includesKnowhows.length
                      }, {
                        header: withCtx((slotProps) => [
                          createVNode("span", { class: "p-column-title white-space-nowrap mr-3" }, "\u30CE\u30A6\u30CF\u30A6")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow) => {
                        return openBlock(), createBlock(_component_Column, {
                          field: knowhow.code,
                          header: knowhow.name,
                          key: knowhow.code,
                          class: "white-space-nowrap"
                        }, null, 8, ["field", "header"]);
                      }), 128)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_Column, {
            field: "name",
            header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC"
          }, {
            body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
              var _a, _b;
              if (_push3) {
                _push3(`${ssrInterpolate((_a = slotProps.data.name) == null ? void 0 : _a.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b = slotProps.data.name) == null ? void 0 : _b.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if (_ctx.includesKnowhows && _ctx.includesKnowhows.length) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
              _push2(ssrRenderComponent(_component_Column, {
                field: "knowhow" + knowhowIndex,
                header: knowhow.name,
                class: "text-center"
              }, {
                body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.displayKnowhow(slotProps.data.knowhows, knowhow))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.displayKnowhow(slotProps.data.knowhows, knowhow)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            _push2(ssrRenderComponent(_component_Column, null, null, _parent2, _scopeId));
          }
          _push2(ssrRenderComponent(_component_ColumnGroup, { type: "footer" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Row, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_Column, { footer: "\u518A\u6570" }, null, _parent4, _scopeId3));
                      if (_ctx.includesKnowhows && _ctx.includesKnowhows.length) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
                          _push4(ssrRenderComponent(_component_Column, {
                            footer: _ctx.displayKnowhowCount(knowhow),
                            class: "text-center"
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        _push4(ssrRenderComponent(_component_Column, null, null, _parent4, _scopeId3));
                      }
                    } else {
                      return [
                        createVNode(_component_Column, { footer: "\u518A\u6570" }),
                        _ctx.includesKnowhows && _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
                          return openBlock(), createBlock(_component_Column, {
                            footer: _ctx.displayKnowhowCount(knowhow),
                            class: "text-center"
                          }, null, 8, ["footer"]);
                        }), 256)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      createVNode(_component_Column, { footer: "\u518A\u6570" }),
                      _ctx.includesKnowhows && _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
                        return openBlock(), createBlock(_component_Column, {
                          footer: _ctx.displayKnowhowCount(knowhow),
                          class: "text-center"
                        }, null, 8, ["footer"]);
                      }), 256)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
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
            createVNode(_component_ColumnGroup, { type: "header" }, {
              default: withCtx(() => [
                createVNode(_component_Row, null, {
                  default: withCtx(() => [
                    createVNode(_component_Column, {
                      header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",
                      rowspan: 2,
                      field: "name.code",
                      class: "white-space-nowrap",
                      style: { width: "130px" }
                    }),
                    createVNode(_component_Column, {
                      colspan: _ctx.includesKnowhows.length
                    }, {
                      header: withCtx((slotProps) => [
                        createVNode("span", { class: "p-column-title white-space-nowrap mr-3" }, "\u30CE\u30A6\u30CF\u30A6")
                      ]),
                      _: 1
                    }, 8, ["colspan"])
                  ]),
                  _: 1
                }),
                createVNode(_component_Row, null, {
                  default: withCtx(() => [
                    _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow) => {
                      return openBlock(), createBlock(_component_Column, {
                        field: knowhow.code,
                        header: knowhow.name,
                        key: knowhow.code,
                        class: "white-space-nowrap"
                      }, null, 8, ["field", "header"]);
                    }), 128)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_Column, {
              field: "name",
              header: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC"
            }, {
              body: withCtx((slotProps) => {
                var _a;
                return [
                  createTextVNode(toDisplayString((_a = slotProps.data.name) == null ? void 0 : _a.name), 1)
                ];
              }),
              _: 1
            }),
            _ctx.includesKnowhows && _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
              return openBlock(), createBlock(_component_Column, {
                field: "knowhow" + knowhowIndex,
                header: knowhow.name,
                class: "text-center"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(_ctx.displayKnowhow(slotProps.data.knowhows, knowhow)), 1)
                ]),
                _: 2
              }, 1032, ["field", "header"]);
            }), 256)) : (openBlock(), createBlock(_component_Column, { key: 1 })),
            createVNode(_component_ColumnGroup, { type: "footer" }, {
              default: withCtx(() => [
                createVNode(_component_Row, null, {
                  default: withCtx(() => [
                    createVNode(_component_Column, { footer: "\u518A\u6570" }),
                    _ctx.includesKnowhows && _ctx.includesKnowhows.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.includesKnowhows, (knowhow, knowhowIndex) => {
                      return openBlock(), createBlock(_component_Column, {
                        footer: _ctx.displayKnowhowCount(knowhow),
                        class: "text-center"
                      }, null, 8, ["footer"]);
                    }), 256)) : (openBlock(), createBlock(_component_Column, { key: 1 }))
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
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Dialog, {
    header: "\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E",
    visible: _ctx.displaySelectModal,
    "onUpdate:visible": ($event) => _ctx.displaySelectModal = $event,
    breakpoints: { "1200px": "90vw", "960px": "90vw", "760px": "90vw" },
    style: { width: "65vw" },
    modal: true
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          label: "\u30AD\u30E3\u30F3\u30BB\u30EB",
          icon: "pi pi-times",
          class: "p-button-sm p-button-text",
          iconPos: "right",
          onClick: _ctx.closeSelectModal
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          label: "OK",
          icon: "pi pi-check",
          class: "p-button-sm",
          iconPos: "right",
          onClick: _ctx.closeSelectModalAndDisplayKnowhowBooks,
          autofocus: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            label: "\u30AD\u30E3\u30F3\u30BB\u30EB",
            icon: "pi pi-times",
            class: "p-button-sm p-button-text",
            iconPos: "right",
            onClick: _ctx.closeSelectModal
          }, null, 8, ["onClick"]),
          createVNode(_component_Button, {
            label: "OK",
            icon: "pi pi-check",
            class: "p-button-sm",
            iconPos: "right",
            onClick: _ctx.closeSelectModalAndDisplayKnowhowBooks,
            autofocus: ""
          }, null, 8, ["onClick"])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid"${_scopeId}><div class="col-12"${_scopeId}><h4${_scopeId}>STEP\u306B\u6301\u3061\u8FBC\u3080\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</h4><div class="p-datatable p-component p-datatable-gridlines p-datatable-sm"${_scopeId}><div class="p-datatable-wrapper"${_scopeId}><table class="p-datatable-table"${_scopeId}><tbody class="p-datatable-tbody"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.knowhowBooks, (knowhowBook) => {
          _push2(ssrRenderComponent(_component_KnowhowBookInfoTableRow, { knowhowBook }, {
            "first-row-append": withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_Checkbox, {
                  modelValue: _ctx.bringInKnowhowBookIds,
                  "onUpdate:modelValue": ($event) => _ctx.bringInKnowhowBookIds = $event,
                  value: knowhowBook.id,
                  disabled: _ctx.bringInKnowhowBookIds.length >= 3 && !_ctx.bringInKnowhowBookIds.includes(knowhowBook.id)
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_Checkbox, {
                    modelValue: _ctx.bringInKnowhowBookIds,
                    "onUpdate:modelValue": ($event) => _ctx.bringInKnowhowBookIds = $event,
                    value: knowhowBook.id,
                    disabled: _ctx.bringInKnowhowBookIds.length >= 3 && !_ctx.bringInKnowhowBookIds.includes(knowhowBook.id)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "disabled"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></tbody></table></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "grid" }, [
            createVNode("div", { class: "col-12" }, [
              createVNode("h4", null, "STEP\u306B\u6301\u3061\u8FBC\u3080\u30CE\u30A6\u30CF\u30A6\u30D6\u30C3\u30AF\u30923\u518A\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),
              createVNode("div", { class: "p-datatable p-component p-datatable-gridlines p-datatable-sm" }, [
                createVNode("div", { class: "p-datatable-wrapper" }, [
                  createVNode("table", { class: "p-datatable-table" }, [
                    createVNode("tbody", { class: "p-datatable-tbody" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.knowhowBooks, (knowhowBook) => {
                        return openBlock(), createBlock(_component_KnowhowBookInfoTableRow, { knowhowBook }, {
                          "first-row-append": withCtx(() => [
                            createVNode(_component_Checkbox, {
                              modelValue: _ctx.bringInKnowhowBookIds,
                              "onUpdate:modelValue": ($event) => _ctx.bringInKnowhowBookIds = $event,
                              value: knowhowBook.id,
                              disabled: _ctx.bringInKnowhowBookIds.length >= 3 && !_ctx.bringInKnowhowBookIds.includes(knowhowBook.id)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "disabled"])
                          ]),
                          _: 2
                        }, 1032, ["knowhowBook"]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/step-bring-in-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stepBringInTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { stepBringInTest as default };
//# sourceMappingURL=step-bring-in-test-yZV2HqS2.mjs.map
