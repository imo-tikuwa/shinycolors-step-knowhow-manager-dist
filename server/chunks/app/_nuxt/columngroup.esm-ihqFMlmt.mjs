import { s as script$2 } from './basecomponent.esm-pULPujFA.mjs';
import '../server.mjs';
import 'vue';
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

var ColumnGroupStyle = {};
var script$1 = {
  name: "BaseColumnGroup",
  "extends": script$2,
  props: {
    type: {
      type: String,
      "default": null
    }
  },
  style: ColumnGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ColumnGroup",
  "extends": script$1,
  inject: ["$columnGroups"],
  mounted: function mounted() {
    var _this$$columnGroups;
    (_this$$columnGroups = this.$columnGroups) === null || _this$$columnGroups === void 0 || _this$$columnGroups.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$columnGroups2;
    (_this$$columnGroups2 = this.$columnGroups) === null || _this$$columnGroups2 === void 0 || _this$$columnGroups2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};

export { script as default };
//# sourceMappingURL=columngroup.esm-ihqFMlmt.mjs.map
