import { h as defineStore, p as persistedState, i as characters, j as headKnowhowTypes, k as headKnowhowKnowhows, l as knowhowLevels, t as tensionKnowhows, s as stepKnowhowCategories, m as stepKnowhowTypes, o as flattenKnowhows } from '../server.mjs';

const unserialize = (knowhowBooks) => {
  return knowhowBooks.map((knowhowBook) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    var _a;
    return {
      id: (_a2 = knowhowBook.a) != null ? _a2 : null,
      name: (_b = characters.find((character) => character.code === knowhowBook.b)) != null ? _b : null,
      vocal: (_c = knowhowBook.c) != null ? _c : null,
      dance: (_d = knowhowBook.d) != null ? _d : null,
      visual: (_e = knowhowBook.e) != null ? _e : null,
      mental: (_f = knowhowBook.f) != null ? _f : null,
      headKnowhowType: (_g = headKnowhowTypes.find((headKnowhowType) => headKnowhowType.code === knowhowBook.g)) != null ? _g : null,
      headKnowhow: (_h = headKnowhowKnowhows.find((headKnowhow) => headKnowhow.code === knowhowBook.h)) != null ? _h : null,
      headKnowhowLevel: (_i = knowhowLevels.find((knowhowLevel) => knowhowLevel.code === knowhowBook.i)) != null ? _i : null,
      tensionKnowhow: (_j = tensionKnowhows.find((tensionKnowhow) => tensionKnowhow.code === knowhowBook.j)) != null ? _j : null,
      tensionKnowhowLevel: (_k = knowhowLevels.find((knowhowLevel) => knowhowLevel.code === knowhowBook.k)) != null ? _k : null,
      stepKnowhowCategory: (_l = stepKnowhowCategories.find((category) => category.code === knowhowBook.l)) != null ? _l : null,
      stepKnowhowType: (_m = stepKnowhowTypes.find((stepKnowhowType) => stepKnowhowType.code === knowhowBook.m)) != null ? _m : null,
      stepKnowhowLevel: (_n = knowhowLevels.find((knowhowLevel) => knowhowLevel.code === knowhowBook.n)) != null ? _n : null,
      // ※日付とメモは後から追加したのでキーがoの後ろになっている
      date: knowhowBook.p ? new Date(knowhowBook.p) : null,
      memo: (_o = knowhowBook.q) != null ? _o : null,
      knowhows: (_p = (_a = knowhowBook.o) == null ? void 0 : _a.map((knowhow) => {
        var _a3, _b2;
        return {
          // ノウハウ1~20の選択肢はネストしてるので以下のようにグループごとのitemsに含まれるノウハウと一致するものがあるかをチェック
          // 最後までチェックして見つからなかったときnullを返す
          knowhow: (_a3 = flattenKnowhows.find((item) => item.code === knowhow.a)) != null ? _a3 : null,
          level: (_b2 = knowhowLevels.find((knowhowLevel) => knowhowLevel.code === knowhow.b)) != null ? _b2 : null
        };
      })) != null ? _p : null
    };
  });
};
const serialize = (knowhowBooks) => {
  return knowhowBooks.map((knowhowBook) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l, _m, _n, _o, _p;
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    return {
      a: (_a2 = knowhowBook.id) != null ? _a2 : null,
      b: (_b2 = (_a = knowhowBook.name) == null ? void 0 : _a.code) != null ? _b2 : null,
      c: (_c2 = knowhowBook.vocal) != null ? _c2 : null,
      d: (_d2 = knowhowBook.dance) != null ? _d2 : null,
      e: (_e2 = knowhowBook.visual) != null ? _e2 : null,
      f: (_f2 = knowhowBook.mental) != null ? _f2 : null,
      g: (_g2 = (_b = knowhowBook.headKnowhowType) == null ? void 0 : _b.code) != null ? _g2 : null,
      h: (_h2 = (_c = knowhowBook.headKnowhow) == null ? void 0 : _c.code) != null ? _h2 : null,
      i: (_i2 = (_d = knowhowBook.headKnowhowLevel) == null ? void 0 : _d.code) != null ? _i2 : null,
      j: (_j = (_e = knowhowBook.tensionKnowhow) == null ? void 0 : _e.code) != null ? _j : null,
      k: (_k = (_f = knowhowBook.tensionKnowhowLevel) == null ? void 0 : _f.code) != null ? _k : null,
      l: (_l = (_g = knowhowBook.stepKnowhowCategory) == null ? void 0 : _g.code) != null ? _l : null,
      m: (_m = (_h = knowhowBook.stepKnowhowType) == null ? void 0 : _h.code) != null ? _m : null,
      n: (_n = (_i = knowhowBook.stepKnowhowLevel) == null ? void 0 : _i.code) != null ? _n : null,
      // ※日付とメモは後から追加したのでキーがoの後ろになっている
      p: (_o = knowhowBook.date) != null ? _o : null,
      q: (_p = knowhowBook.memo) != null ? _p : null,
      o: knowhowBook.knowhows.map((knowhow) => {
        var _a3, _b3;
        var _a22, _b22;
        return {
          a: (_a3 = (_a22 = knowhow == null ? void 0 : knowhow.knowhow) == null ? void 0 : _a22.code) != null ? _a3 : null,
          b: (_b3 = (_b22 = knowhow == null ? void 0 : knowhow.level) == null ? void 0 : _b22.code) != null ? _b3 : null
        };
      })
    };
  });
};
const useDataStore = defineStore("data", {
  state: () => {
    return {
      // 以下はローカルストレージで永続化されてない時点でのデフォルトのstateとなる
      data: [...Array(5)].map(() => {
        return {
          a: null,
          b: null,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: null,
          h: null,
          i: null,
          j: null,
          k: null,
          l: null,
          m: null,
          n: null,
          p: null,
          q: null,
          o: [...Array(20)].map(() => {
            return {
              a: null,
              b: null
            };
          })
        };
      })
    };
  },
  getters: {
    // state.dataについてvueで扱う形式に変換
    unserializedData: (state) => {
      return unserialize(state.data);
    }
  },
  actions: {
    // データ保存処理
    saveKnowhowBooks(knowhowBooks) {
      this.data = serialize(knowhowBooks);
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});

export { unserialize as a, serialize as s, useDataStore as u };
//# sourceMappingURL=data-671GmvQs.mjs.map
