"use strict";
(() => {
  var Jo = Object.defineProperty;
  var c = (e, t) => () => (e && (t = e((e = 0))), t);
  var T = (e, t) => {
    for (var n in t) Jo(e, n, { get: t[n], enumerable: !0 });
  };
  var ce,
    le,
    v,
    ze,
    te,
    Ee,
    ue = c(() => {
      "use strict";
      (ce = window.nativeModuleProxy), (le = ce.MMKVManager);
      v = ce.DCDFileManager ?? ce.RTNFileManager;
      ze = ce.InfoDictionaryManager ?? ce.RTNClientInfoManager;
      (te = ce.DCDDeviceManager ?? ce.RTNDeviceManager),
        (Ee = ce.BundleUpdaterManager);
    });
  var Nt = {};
  T(Nt, {
    find: () => j,
    findAll: () => Ye,
    findByDisplayName: () => At,
    findByDisplayNameAll: () => ta,
    findByName: () => L,
    findByNameAll: () => ea,
    findByProps: () => l,
    findByPropsAll: () => Qo,
    findByStoreName: () => Pe,
    findByTypeName: () => na,
    findByTypeNameAll: () => ra,
    modules: () => It,
  });
  var Zo,
    Jn,
    Zn,
    It,
    j,
    Ye,
    qn,
    Qn,
    er,
    tr,
    qo,
    l,
    Qo,
    L,
    ea,
    At,
    ta,
    na,
    ra,
    Pe,
    E = c(() => {
      "use strict";
      (Zo = window.ErrorUtils.getGlobalHandler()),
        (Jn = function (e) {
          return Object.defineProperty(window.modules, e, {
            value: window.modules[e],
            enumerable: !1,
            configurable: !0,
            writable: !0,
          });
        });
      for (let e in window.modules) {
        let t = Number(e),
          n = window.modules[t]?.publicModule?.exports;
        if (!n || n === window || n.proxygone === null) {
          Jn(t);
          continue;
        }
      }
      (Zn = function (e) {
        let t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return function (n) {
          let r = [];
          for (let o in e) {
            let a = Number(o),
              i = e[a]?.publicModule?.exports;
            if (!e[a].isInitialized)
              try {
                window.ErrorUtils.setGlobalHandler(function () {}),
                  __r(a),
                  window.ErrorUtils.setGlobalHandler(Zo);
              } catch {}
            if (!i) {
              Jn(a);
              continue;
            }
            if (i.default && i.__esModule && n(i.default)) {
              if (t) return i.default;
              r.push(i.default);
            }
            if (n(i)) {
              if (t) return i;
              r.push(i);
            }
          }
          if (!t) return r;
        };
      }),
        (It = window.modules),
        (j = Zn(It, !0)),
        (Ye = Zn(It)),
        (qn = function (e) {
          return function (t) {
            return e.every(function (n) {
              return t[n] !== void 0;
            });
          };
        }),
        (Qn = function (e, t) {
          return t
            ? function (n) {
                return n?.name === e;
              }
            : function (n) {
                return n?.default?.name === e;
              };
        }),
        (er = function (e, t) {
          return t
            ? function (n) {
                return n?.displayName === e;
              }
            : function (n) {
                return n?.default?.displayName === e;
              };
        }),
        (tr = function (e, t) {
          return t
            ? function (n) {
                return n?.type?.name === e;
              }
            : function (n) {
                return n?.default?.type?.name === e;
              };
        }),
        (qo = function (e) {
          return function (t) {
            return t.getName && t.getName.length === 0 && t.getName() === e;
          };
        }),
        (l = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return j(qn(t));
        }),
        (Qo = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return Ye(qn(t));
        }),
        (L = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return j(Qn(e, t));
        }),
        (ea = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return Ye(Qn(e, t));
        }),
        (At = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return j(er(e, t));
        }),
        (ta = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return Ye(er(e, t));
        }),
        (na = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return j(tr(e, t));
        }),
        (ra = function (e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return Ye(tr(e, t));
        }),
        (Pe = function (e) {
          return j(qo(e));
        });
    });
  function ne(e, t) {
    return ft(e, t, { walkable: ["props", "children", "child", "sibling"] });
  }
  var nr = c(() => {
    "use strict";
    fe();
  });
  function Ct(e, t, n, r) {
    if (!(r > n.maxDepth) && e) {
      try {
        if (t(e)) return e;
      } catch {}
      if (Array.isArray(e)) {
        for (let o of e)
          if (!(typeof o != "object" || o === null))
            try {
              let a = Ct(o, t, n, r + 1);
              if (a) return a;
            } catch {}
      } else if (typeof e == "object") {
        for (let o of Object.keys(e))
          if (
            !(typeof e[o] != "object" || e[o] === null) &&
            !(n.walkable.length && !n.walkable.includes(o)) &&
            !n.ignore.includes(o)
          )
            try {
              let a = Ct(e[o], t, n, r + 1);
              if (a) return a;
            } catch {}
      }
    }
  }
  function ft(e, t) {
    let {
      walkable: n = [],
      ignore: r = [],
      maxDepth: o = 100,
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Ct(e, t, { walkable: n, ignore: r, maxDepth: o }, 0);
  }
  var rr = c(() => {
    "use strict";
  });
  async function me(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e4,
      r = await fetch(e, { signal: oa(n), ...t });
    if (!r.ok) throw new Error("Request returned non-ok");
    return r;
  }
  function oa(e) {
    let t = new AbortController();
    return (
      setTimeout(function () {
        return t.abort(`Timed out after ${e}ms`);
      }, e),
      t.signal
    );
  }
  var or = c(() => {
    "use strict";
  });
  function Dt(e) {
    return Object.isFrozen(e) ? Object.assign({}, e) : e;
  }
  var ar = c(() => {
    "use strict";
  });
  function K(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    let o = { ...e };
    return (
      n.forEach(function (a) {
        return delete o[a];
      }),
      o
    );
  }
  var ir = c(() => {
    "use strict";
  });
  var Pt = {};
  T(Pt, {
    findInReactTree: () => ne,
    findInTree: () => ft,
    safeFetch: () => me,
    unfreeze: () => Dt,
    without: () => K,
  });
  var fe = c(() => {
    "use strict";
    nr();
    rr();
    or();
    ar();
    ir();
  });
  var Bt,
    q,
    mt = c(() => {
      (Bt = ["a", "b", "i"]), (q = new Map());
    });
  function sr(e, t, n, r, o) {
    let a = q.get(t)?.[e];
    if (!a) return o ? Reflect.construct(t[e], n, r) : t[e].apply(r, n);
    for (let s of a.b.values()) {
      let m = s.call(r, n);
      Array.isArray(m) && (n = m);
    }
    let i = [...a.i.values()].reduce(
      function (s, m) {
        return function () {
          for (var p = arguments.length, C = new Array(p), D = 0; D < p; D++)
            C[D] = arguments[D];
          return m.call(r, C, s);
        };
      },
      function () {
        for (var s = arguments.length, m = new Array(s), p = 0; p < s; p++)
          m[p] = arguments[p];
        return o ? Reflect.construct(a.o, m, r) : a.o.apply(r, m);
      }
    )(...n);
    for (let s of a.a.values()) i = s.call(r, n, i) ?? i;
    return i;
  }
  var cr = c(() => {
    mt();
  });
  function Mt(e, t, n, r) {
    let o = q.get(e),
      a = o?.[t];
    return a?.[r].has(n)
      ? (a[r].delete(n),
        Bt.every(function (i) {
          return a[i].size === 0;
        }) &&
          (Reflect.defineProperty(e, t, {
            value: a.o,
            writable: !0,
            configurable: !0,
          }) || (e[t] = a.o),
          delete o[t]),
        Object.keys(o).length == 0 && q.delete(e),
        !0)
      : !1;
  }
  function lr() {
    for (let [e, t] of q.entries())
      for (let n in t)
        for (let r of Bt) for (let o of t[n]?.[r].keys() ?? []) Mt(e, n, o, r);
  }
  var Lt = c(() => {
    mt();
  });
  function dt(e) {
    return function (t, n, r) {
      let o =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (typeof n[t] != "function")
        throw new Error(`${t} is not a function in ${n.constructor.name}`);
      q.has(n) || q.set(n, {});
      let a = q.get(n);
      if (!a[t]) {
        let m = n[t];
        a[t] = { o: m, b: new Map(), i: new Map(), a: new Map() };
        let p = function (b, M, F) {
            let ye = sr(t, n, M, b, F);
            return o && s(), ye;
          },
          C = new Proxy(m, {
            apply: function (b, M, F) {
              return p(M, F, !1);
            },
            construct: function (b, M) {
              return p(m, M, !0);
            },
            get: function (b, M, F) {
              return M == "toString"
                ? m.toString.bind(m)
                : Reflect.get(b, M, F);
            },
          });
        Reflect.defineProperty(n, t, {
          value: C,
          configurable: !0,
          writable: !0,
        }) || (n[t] = C);
      }
      let i = Symbol(),
        s = function () {
          return Mt(n, t, i, e);
        };
      return a[t][e].set(i, r), s;
    };
  }
  var ur = c(() => {
    cr();
    mt();
    Lt();
  });
  var Ft = {};
  T(Ft, {
    after: () => R,
    before: () => Ot,
    instead: () => _e,
    unpatchAll: () => lr,
  });
  var Ot,
    _e,
    R,
    kt = c(() => {
      ur();
      Lt();
      (Ot = dt("b")), (_e = dt("i")), (R = dt("a"));
    });
  var fr,
    G = c(() => {
      "use strict";
      kt();
      kt();
      fr = { ...Ft };
    });
  function Ut() {
    return {
      listeners: Object.values(Vt).reduce(function (e, t) {
        return (e[t] = new Set()), e;
      }, {}),
      on(e, t) {
        this.listeners[e].has(t) || this.listeners[e].add(t);
      },
      off(e, t) {
        this.listeners[e].delete(t);
      },
      once(e, t) {
        var n = this;
        let r = function (o, a) {
          n.off(o, r), t(o, a);
        };
        this.on(e, r);
      },
      emit(e, t) {
        for (let n of this.listeners[e]) n(e, t);
      },
    };
  }
  var Vt,
    mr = c(() => {
      "use strict";
      (function (e) {
        (e.GET = "GET"), (e.SET = "SET"), (e.DEL = "DEL");
      })(Vt || (Vt = {}));
    });
  var dr,
    Gt,
    pr,
    Ht,
    de,
    Be,
    gr = c(() => {
      "use strict";
      ue();
      h();
      (dr = /[<>:"\/\\|?*]/g),
        (Gt = function (e) {
          return u.Platform.select({
            default: e,
            ios: v.saveFileToGallery ? e : `Documents/${e}`,
          });
        }),
        (pr = function (e) {
          return (
            dr.test(e) && (e = e.replace(dr, "-").replace(/-+/g, "-")),
            `vd_mmkv/${e}`
          );
        }),
        (Ht = async function (e) {
          (await le.getItem(e)) && le.removeItem(e);
          let t = pr(e);
          (await v.fileExists(`${v.getConstants().DocumentsDirPath}/${t}`)) &&
            (await v.removeFile?.("documents", t));
        }),
        (de = function (e) {
          let t = pr(e);
          return Be(
            t,
            (async function () {
              try {
                let n = `${v.getConstants().DocumentsDirPath}/${t}`;
                if (await v.fileExists(n)) return;
                let r = (await le.getItem(e)) ?? "{}";
                if (r === "!!LARGE_VALUE!!") {
                  let o = `${v.getConstants().CacheDirPath}/mmkv/${e}`;
                  (await v.fileExists(o))
                    ? (r = await v.readFile(o, "utf8"))
                    : (console.log(`${e}: Experienced data loss :(`),
                      (r = "{}"));
                }
                await v.writeFile("documents", Gt(t), r, "utf8"),
                  (await le.getItem(e)) !== null &&
                    (le.removeItem(e),
                    console.log(
                      `Successfully migrated ${e} store from MMKV storage to fs`
                    ));
              } catch (n) {
                console.error("Failed to migrate to fs from MMKVManager ", n);
              }
            })()
          );
        }),
        (Be = function (e, t) {
          let n;
          return {
            get: async function () {
              await t;
              let r = `${v.getConstants().DocumentsDirPath}/${e}`;
              return !n && !(await v.fileExists(r))
                ? ((n = !0), v.writeFile("documents", Gt(e), "{}", "utf8"))
                : JSON.parse(await v.readFile(r, "utf8"));
            },
            set: async function (r) {
              await t,
                await v.writeFile(
                  "documents",
                  Gt(e),
                  JSON.stringify(r),
                  "utf8"
                );
            },
          };
        });
    });
  var jt = {};
  T(jt, {
    awaitSyncWrapper: () => Me,
    createFileBackend: () => Be,
    createMMKVBackend: () => de,
    createProxy: () => yr,
    createStorage: () => re,
    purgeStorage: () => Ht,
    useProxy: () => x,
    wrapSync: () => pe,
  });
  function yr() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = Ut();
    function n(r, o) {
      return new Proxy(r, {
        get(a, i) {
          if (i === hr) return t;
          let s = [...o, i],
            m = a[i];
          return m != null
            ? (t.emit("GET", { path: s, value: m }),
              typeof m == "object" ? n(m, s) : m)
            : m;
        },
        set(a, i, s) {
          return (a[i] = s), t.emit("SET", { path: [...o, i], value: s }), !0;
        },
        deleteProperty(a, i) {
          let s = delete a[i];
          return s && t.emit("DEL", { path: [...o, i] }), s;
        },
      });
    }
    return { proxy: n(e, []), emitter: t };
  }
  function x(e) {
    if (e[$t]) throw e[$t];
    let t = e[hr];
    if (!t)
      throw new Error(
        "InvalidArgumentExcpetion - storage[emitterSymbol] is " + typeof t
      );
    let [, n] = React.useReducer(function (r) {
      return ~r;
    }, 0);
    return (
      React.useEffect(function () {
        let r = function () {
          return n();
        };
        return (
          t.on("SET", r),
          t.on("DEL", r),
          function () {
            t.off("SET", r), t.off("DEL", r);
          }
        );
      }, []),
      e
    );
  }
  async function re(e) {
    let t = await e.get(),
      { proxy: n, emitter: r } = yr(t),
      o = function () {
        return e.set(n);
      };
    return r.on("SET", o), r.on("DEL", o), n;
  }
  function pe(e) {
    let t,
      n,
      r = [],
      o = function (a) {
        return t ? a() : r.push(a);
      };
    return (
      e
        .then(function (a) {
          (t = a),
            r.forEach(function (i) {
              return i();
            });
        })
        .catch(function (a) {
          n = a;
        }),
      new Proxy(
        {},
        {
          ...Object.fromEntries(
            Object.getOwnPropertyNames(Reflect).map(function (a) {
              return [
                a,
                function (i) {
                  for (
                    var s = arguments.length,
                      m = new Array(s > 1 ? s - 1 : 0),
                      p = 1;
                    p < s;
                    p++
                  )
                    m[p - 1] = arguments[p];
                  return Reflect[a](t ?? i, ...m);
                },
              ];
            })
          ),
          get(a, i, s) {
            return i === $t ? n : i === Rr ? o : Reflect.get(t ?? a, i, s);
          },
        }
      )
    );
  }
  var hr,
    Rr,
    $t,
    Me,
    H = c(() => {
      "use strict";
      mr();
      gr();
      (hr = Symbol.for("vendetta.storage.emitter")),
        (Rr = Symbol.for("vendetta.storage.accessor")),
        ($t = Symbol.for("vendetta.storage.error"));
      Me = function (e) {
        return new Promise(function (t) {
          return e[Rr](t);
        });
      };
    });
  var Kt,
    aa,
    I,
    xe = c(() => {
      "use strict";
      E();
      (Kt = l("setLogFn").default), (aa = new Kt("Vendetta")), (I = aa);
    });
  var Jt = {};
  T(Jt, {
    color: () => oe,
    fetchTheme: () => Xe,
    getCurrentTheme: () => be,
    initThemes: () => Xt,
    installTheme: () => Se,
    patchChatBackground: () => zt,
    removeTheme: () => Yt,
    selectTheme: () => we,
    themes: () => O,
    updateThemes: () => _r,
  });
  async function Wt(e) {
    if (typeof e != "object") throw new Error("Theme must be an object");
    await Be("vendetta_theme.json").set(e);
  }
  function zt() {
    let e = be()?.data?.background;
    if (!e) return;
    let t = L("MessagesWrapperConnected", !1);
    if (!t) return;
    let { MessagesWrapper: n } = l("MessagesWrapper");
    if (!n) return;
    let r = [
      R("default", t, function (o, a) {
        return React.createElement(u.ImageBackground, {
          style: { flex: 1, height: "100%" },
          source: { uri: e.url },
          blurRadius: typeof e.blur == "number" ? e.blur : 0,
          children: a,
        });
      }),
      R("render", n.prototype, function (o, a) {
        let i = ne(a, function (s) {
          return "HACK_fixModalInteraction" in s?.props && s?.props?.style;
        });
        i
          ? (i.props.style = Object.assign(
              u.StyleSheet.flatten(i.props.style ?? {}),
              { backgroundColor: "#0000" }
            ))
          : I.error("Didn't find Messages when patching MessagesWrapper!");
      }),
    ];
    return function () {
      return r.forEach(function (o) {
        return o();
      });
    };
  }
  function Er(e) {
    if (ae.valid(e)) return ae(e).hex();
    let t = Number(u.processColor(e));
    return ae
      .rgb((t >> 16) & 255, (t >> 8) & 255, t & 255, (t >> 24) & 255)
      .hex();
  }
  function sa(e) {
    if (e.semanticColors) {
      let t = e.semanticColors;
      for (let n in t) for (let r in t[n]) t[n][r] &&= Er(t[n][r]);
    }
    if (e.rawColors) {
      let t = e.rawColors;
      for (let n in t) e.rawColors[n] = Er(t[n]);
      u.Platform.OS === "android" && ca(t);
    }
    return e;
  }
  function ca(e) {
    let t = {
      BLACK_ALPHA_60: ["BLACK", 0.6],
      BRAND_NEW_360_ALPHA_20: ["BRAND_360", 0.2],
      BRAND_NEW_360_ALPHA_25: ["BRAND_360", 0.25],
      BRAND_NEW_500_ALPHA_20: ["BRAND_500", 0.2],
      PRIMARY_DARK_500_ALPHA_20: ["PRIMARY_500", 0.2],
      PRIMARY_DARK_700_ALPHA_60: ["PRIMARY_700", 0.6],
      STATUS_GREEN_500_ALPHA_20: ["GREEN_500", 0.2],
      STATUS_RED_500_ALPHA_20: ["RED_500", 0.2],
    };
    for (let n in t) {
      let [r, o] = t[n];
      e[r] && (e[n] = ae(e[r]).alpha(o).hex());
    }
  }
  async function Xe(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n;
    try {
      n = await (await me(e, { cache: "no-store" })).json();
    } catch {
      throw new Error(`Failed to fetch theme at ${e}`);
    }
    (O[e] = { id: e, selected: t, data: sa(n) }), t && Wt(O[e]);
  }
  async function Se(e) {
    if (typeof e != "string" || e in O)
      throw new Error("Theme already installed");
    await Xe(e);
  }
  async function we(e) {
    if (e === "default") return await Wt({});
    let t = Object.values(O).find(function (n) {
      return n.selected;
    })?.id;
    t && (O[t].selected = !1), (O[e].selected = !0), await Wt(O[e]);
  }
  async function Yt(e) {
    let t = O[e];
    return t.selected && (await we("default")), delete O[e], t.selected;
  }
  function be() {
    let e = window.__vendetta_loader?.features?.themes?.prop;
    return (e && window[e]) || null;
  }
  async function _r() {
    await Me(O);
    let e = be();
    await Promise.allSettled(
      Object.keys(O).map(function (t) {
        return Xe(t, e?.id === t);
      })
    );
  }
  async function Xt() {
    let e = be();
    if (!e) return;
    let t = oe.default.unsafe_rawColors;
    (oe.default.unsafe_rawColors = new Proxy(t, {
      get: function (n, r) {
        return e
          ? e.data?.rawColors?.[r] ?? Reflect.get(t, r)
          : Reflect.get(t, r);
      },
    })),
      _e(
        "resolveSemanticColor",
        oe.default.meta ?? oe.default.internal,
        function (n, r) {
          if (!e) return r(...n);
          let [o, a] = n,
            [i, s] = xr(o, a),
            m = o === "amoled" ? 2 : o === "light" ? 1 : 0;
          let p = ia[i] ?? i,
            C = (e.data?.semanticColors?.[i] ?? e.data?.semanticColors?.[p])?.[
              m
            ];
          if (
            i === "CHAT_BACKGROUND" &&
            typeof e.data?.background?.alpha == "number"
          )
            return ae(C || "black")
              .alpha(1 - e.data.background.alpha)
              .hex();
          if (C) return C;
          let D = e.data?.rawColors?.[s.raw];
          return D
            ? s.opacity === 1
              ? D
              : ae(D).alpha(s.opacity).hex()
            : r(...n);
        }
      ),
      await _r();
  }
  function xr(e, t) {
    let n = t[(xr._sym ??= Object.getOwnPropertySymbols(t)[0])],
      r = oe.SemanticColor[n];
    return [n, r[e.toLowerCase()]];
  }
  var oe,
    O,
    ia,
    W = c(() => {
      "use strict";
      h();
      fe();
      E();
      G();
      H();
      xe();
      (oe = l("SemanticColor")),
        (O = pe(re(de("VENDETTA_THEMES")))),
        (ia = {
          BG_BACKDROP: "BACKGROUND_FLOATING",
          BG_BASE_PRIMARY: "BACKGROUND_PRIMARY",
          BG_BASE_SECONDARY: "BACKGROUND_SECONDARY",
          BG_BASE_TERTIARY: "BACKGROUND_SECONDARY_ALT",
          BG_MOD_FAINT: "BACKGROUND_MODIFIER_ACCENT",
          BG_MOD_STRONG: "BACKGROUND_MODIFIER_ACCENT",
          BG_MOD_SUBTLE: "BACKGROUND_MODIFIER_ACCENT",
          BG_SURFACE_OVERLAY: "BACKGROUND_FLOATING",
          BG_SURFACE_OVERLAY_TMP: "BACKGROUND_FLOATING",
          BG_SURFACE_RAISED: "BACKGROUND_MOBILE_PRIMARY",
        });
    });
  var pt,
    Sr,
    u,
    ae,
    gt = c(() => {
      "use strict";
      W();
      G();
      (pt = function (e) {
        for (let t in window.modules) {
          let n = window.modules[t]?.publicModule.exports;
          if (n && e(n)) return n;
        }
      }),
        (Sr = pt(function (e) {
          return e?.default?.name === "requireNativeComponent";
        }));
      Sr &&
        _e("default", Sr, function (e, t) {
          try {
            return t(...e);
          } catch {
            return e[0];
          }
        });
      window.React = pt(function (e) {
        return e.createElement;
      });
      (u = pt(function (e) {
        return e.AppRegistry;
      })),
        (ae = pt(function (e) {
          return e.brewer;
        }));
      if (window.__vendetta_loader?.features.themes)
        try {
          Xt();
        } catch (e) {
          console.error("[5xdfVendettaMod] Failed to initialize themes...", e);
        }
    });
  var tn = {};
  T(tn, {
    Flux: () => pa,
    FluxDispatcher: () => Rt,
    NavigationNative: () => ie,
    React: () => ve,
    ReactNative: () => u,
    assets: () => Je,
    channels: () => qt,
    chroma: () => ae,
    clipboard: () => z,
    commands: () => ht,
    constants: () => Le,
    i18n: () => Te,
    invites: () => fa,
    lodash: () => yt,
    moment: () => en,
    navigation: () => ma,
    navigationStack: () => da,
    stylesheet: () => P,
    toasts: () => Qt,
    url: () => Oe,
    util: () => ga,
  });
  function ua(e) {
    if (Zt) {
      for (let t in e)
        e[t] = new Proxy(u.StyleSheet.flatten(e[t]), {
          get(n, r, o) {
            let a = Reflect.get(n, r, o);
            return wr.isSemanticColor(a)
              ? wr.resolveSemanticColor(la.theme, a)
              : a;
          },
        });
      return e;
    }
  }
  var la,
    Zt,
    wr,
    Le,
    qt,
    Te,
    Oe,
    Qt,
    P,
    z,
    Je,
    fa,
    ht,
    ma,
    da,
    ie,
    pa,
    Rt,
    ve,
    en,
    yt,
    ga,
    h = c(() => {
      "use strict";
      E();
      gt();
      gt();
      gt();
      (la = Pe("ThemeStore")),
        (Zt = l("colors", "unsafe_rawColors")),
        (wr = Zt?.internal ?? Zt?.meta);
      (Le = l("Fonts", "Permissions")),
        (qt = l("getVoiceChannelId")),
        (Te = l("Messages")),
        (Oe = l("openURL", "openDeeplink")),
        (Qt = j(function (e) {
          return (
            e.open &&
            e.close &&
            !e.startDrag &&
            !e.init &&
            !e.openReplay &&
            !e.setAlwaysOnTop &&
            !e.setAccountFlag
          );
        })),
        (P = {
          ...j(function (e) {
            return e.createStyles && !e.ActionSheet;
          }),
          createThemedStyleSheet: ua,
          ...l("createThemedStyleSheet"),
        }),
        (z = l("setString", "getString", "hasString")),
        (Je = l("registerAsset")),
        (fa = l("acceptInviteAndTransitionToInviteChannel")),
        (ht = l("getBuiltInCommands")),
        (ma = l("pushLazy")),
        (da = l("createStackNavigator")),
        (ie = l("NavigationContainer")),
        (pa = l("connectStores")),
        (Rt = l("_currentDispatchActionType")),
        (ve = window.React),
        (en = l("isMoment")),
        (yt = l("forEachRight")),
        (ga = l("inspect", "isNullOrUndefined"));
    });
  var rn = {};
  T(rn, {
    all: () => se,
    find: () => ha,
    getAssetByID: () => ya,
    getAssetByName: () => Ra,
    getAssetIDByName: () => f,
    patchAssets: () => nn,
  });
  function nn() {
    let e = R("registerAsset", Je, function (t, n) {
      let r = t[0];
      se[r.name] = { ...r, id: n };
    });
    for (let t = 1; ; t++) {
      let n = Je.getAssetByID(t);
      if (!n) break;
      se[n.name] || (se[n.name] = { ...n, id: t });
    }
    return e;
  }
  var se,
    ha,
    Ra,
    ya,
    f,
    _ = c(() => {
      "use strict";
      h();
      G();
      se = {};
      (ha = function (e) {
        return Object.values(se).find(e);
      }),
        (Ra = function (e) {
          return se[e];
        }),
        (ya = function (e) {
          return Je.getAssetByID(e);
        }),
        (f = function (e) {
          return se[e]?.id;
        });
    });
  var on = {};
  T(on, { showToast: () => g });
  var Ea,
    g,
    Q = c(() => {
      "use strict";
      E();
      h();
      ({ uuid4: Ea } = l("uuid4")),
        (g = function (e, t) {
          return Qt.open({
            key: `vd-toast-${Ea()}`,
            content: e,
            source: t,
            icon: t,
          });
        });
    });
  var d,
    Y,
    k = c(() => {
      "use strict";
      H();
      (d = pe(re(de("VENDETTA_SETTINGS")))),
        (Y = pe(re(Be("vendetta_loader.json"))));
    });
  var cn = {};
  T(cn, {
    connectToDebugger: () => an,
    getDebugInfo: () => qe,
    patchLogHook: () => sn,
    socket: () => $,
    toggleSafeMode: () => Ze,
    versionHash: () => Et,
  });
  async function Ze() {
    (d.safeMode = { ...d.safeMode, enabled: !d.safeMode?.enabled }),
      window.__vendetta_loader?.features.themes &&
        (be()?.id && (d.safeMode.currentThemeId = be().id),
        d.safeMode?.enabled
          ? await we("default")
          : d.safeMode?.currentThemeId &&
            (await we(d.safeMode?.currentThemeId))),
      setTimeout(Ee.reload, 400);
  }
  function an(e) {
    if (($ !== void 0 && $.readyState !== WebSocket.CLOSED && $.close(), !e)) {
      g("Invalid debugger URL!", f("Small"));
      return;
    }
    ($ = new WebSocket(`ws://${e}`)),
      $.addEventListener("open", function () {
        return g("Connected to debugger.", f("Check"));
      }),
      $.addEventListener("message", function (t) {
        try {
          (0, eval)(t.data);
        } catch (n) {
          console.error(n);
        }
      }),
      $.addEventListener("error", function (t) {
        console.log(`Debugger error: ${t.message}`),
          g("There was an error while connecting to the debugger websocket. If this issue persists, I have no idea how to fix it.", f("Small"));
      });
  }
  function sn() {
    let e = R("nativeLoggingHook", globalThis, function (t) {
      $?.readyState === WebSocket.OPEN &&
        $.send(JSON.stringify({ message: t[0], level: t[1] })),
        I.log(t[0]);
    });
    return function () {
      $ && $.close(), e();
    };
  }
  function qe() {
    let e = window.HermesInternal.getRuntimeProperties(),
      t = e["OSS Release Version"],
      n = "for RN ",
      r = u.Platform.constants,
      o = r.reactNativeVersion;
    return {
      vendetta: {
        version: Et,
        loader: window.__vendetta_loader?.name ?? "Unknown",
      },
      discord: { version: ze.Version, build: ze.Build },
      react: {
        version: React.version,
        nativeVersion: t.startsWith(n)
          ? t.substring(n.length)
          : `${o.major}.${o.minor}.${o.patch}`,
      },
      hermes: {
        version: t,
        buildType: e.Build,
        bytecodeVersion: e["Bytecode Version"],
      },
      ...u.Platform.select({
        android: {
          os: { name: "Android", version: r.Release, sdk: r.Version },
        },
        ios: { os: { name: r.systemName, version: r.osVersion } },
      }),
      ...u.Platform.select({
        android: {
          device: {
            manufacturer: r.Manufacturer,
            brand: r.Brand,
            model: r.Model,
            codename: te.device,
          },
        },
        ios: {
          device: {
            manufacturer: te.deviceManufacturer,
            brand: te.deviceBrand,
            model: te.deviceModel,
            codename: te.device,
          },
        },
      }),
    };
  }
  var $,
    Et,
    Fe = c(() => {
      "use strict";
      h();
      G();
      W();
      ue();
      _();
      Q();
      k();
      xe();
      Et = "4c3b0ed";
    });
  var V,
    br,
    Tr,
    Qe,
    ke = c(() => {
      (function (e) {
        (e.BRAND = "brand"),
          (e.RED = "red"),
          (e.GREEN = "green"),
          (e.PRIMARY = "primary"),
          (e.TRANSPARENT = "transparent"),
          (e.GREY = "grey"),
          (e.LIGHTGREY = "lightgrey"),
          (e.WHITE = "white"),
          (e.LINK = "link");
      })(V || (V = {}));
      (function (e) {
        (e[(e.BUILT_IN = 0)] = "BUILT_IN"),
          (e[(e.BUILT_IN_TEXT = 1)] = "BUILT_IN_TEXT"),
          (e[(e.BUILT_IN_INTEGRATION = 2)] = "BUILT_IN_INTEGRATION"),
          (e[(e.BOT = 3)] = "BOT"),
          (e[(e.PLACEHOLDER = 4)] = "PLACEHOLDER");
      })(br || (br = {}));
      (function (e) {
        (e[(e.SUB_COMMAND = 1)] = "SUB_COMMAND"),
          (e[(e.SUB_COMMAND_GROUP = 2)] = "SUB_COMMAND_GROUP"),
          (e[(e.STRING = 3)] = "STRING"),
          (e[(e.INTEGER = 4)] = "INTEGER"),
          (e[(e.BOOLEAN = 5)] = "BOOLEAN"),
          (e[(e.USER = 6)] = "USER"),
          (e[(e.CHANNEL = 7)] = "CHANNEL"),
          (e[(e.ROLE = 8)] = "ROLE"),
          (e[(e.MENTIONABLE = 9)] = "MENTIONABLE"),
          (e[(e.NUMBER = 10)] = "NUMBER"),
          (e[(e.ATTACHMENT = 11)] = "ATTACHMENT");
      })(Tr || (Tr = {}));
      (function (e) {
        (e[(e.CHAT = 1)] = "CHAT"),
          (e[(e.USER = 2)] = "USER"),
          (e[(e.MESSAGE = 3)] = "MESSAGE");
      })(Qe || (Qe = {}));
    });
  var un = {};
  T(un, { patchCommands: () => ln, registerCommand: () => _a });
  function ln() {
    let e = R("getBuiltInCommands", ht, function (t, n) {
      let [r] = t;
      if (r === Qe.CHAT) return n.concat(et);
    });
    return function () {
      (et = []), e();
    };
  }
  function _a(e) {
    let t = ht.getBuiltInCommands(Qe.CHAT, !0, !1);
    t.sort(function (r, o) {
      return parseInt(o.id) - parseInt(r.id);
    });
    let n = t[t.length - 1];
    return (
      (e.id = (parseInt(n.id, 10) - 1).toString()),
      et.push(e),
      function () {
        return (et = et.filter(function (r) {
          let { id: o } = r;
          return o !== e.id;
        }));
      }
    );
  }
  var et,
    fn = c(() => {
      "use strict";
      ke();
      h();
      G();
      et = [];
    });
  var xa,
    Sa,
    wa,
    vr,
    Ir = c(() => {
      "use strict";
      (xa = function (e) {
        return { status: "fulfilled", value: e };
      }),
        (Sa = function (e) {
          return { status: "rejected", reason: e };
        }),
        (wa = function (e) {
          return Promise.resolve(e).then(xa, Sa);
        }),
        (vr = function (e) {
          return Promise.all(Array.from(e).map(wa));
        });
    });
  var gn = {};
  T(gn, {
    evalPlugin: () => Ar,
    fetchPlugin: () => Ve,
    getSettings: () => pn,
    initPlugins: () => dn,
    installPlugin: () => ge,
    plugins: () => A,
    removePlugin: () => mn,
    startPlugin: () => Ue,
    stopPlugin: () => Ge,
  });
  async function Ve(e) {
    e.endsWith("/") || (e += "/");
    let t = A[e],
      n;
    try {
      n = await (await me(e + "manifest.json", { cache: "no-store" })).json();
    } catch {
      throw new Error(`Failed to fetch manifest for ${e}`);
    }
    let r;
    if (t?.manifest.hash !== n.hash)
      try {
        r = await (
          await me(e + (n.main || "index.js"), { cache: "no-store" })
        ).text();
      } catch {}
    if (!r && !t) throw new Error(`Failed to fetch JS for ${e}`);
    A[e] = {
      id: e,
      manifest: n,
      enabled: t?.enabled ?? !1,
      update: t?.update ?? !0,
      js: r ?? t.js,
    };
  }
  async function ge(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if ((e.endsWith("/") || (e += "/"), typeof e != "string" || e in A))
      throw new Error("This plugin was already installed!");
    await Ve(e), t && (await Ue(e));
  }
  async function Ar(e) {
    let t = {
        ...window.vendetta,
        plugin: { id: e.id, manifest: e.manifest, storage: await re(de(e.id)) },
        logger: new Kt(`Vendetta \xBB ${e.manifest.name}`),
      },
      n = `vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,
      r = (0, eval)(n)(t),
      o = typeof r == "function" ? r() : r;
    return o?.default ?? o ?? {};
  }
  async function Ue(e) {
    e.endsWith("/") || (e += "/");
    let t = A[e];
    if (!t) throw new Error("Attempted to start non-existent plugin");
    try {
      if (!d.safeMode?.enabled) {
        let n = await Ar(t);
        (Ie[e] = n), n.onLoad?.();
      }
      t.enabled = !0;
    } catch (n) {
      I.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`, n);
      try {
        Ie[t.id]?.onUnload?.();
      } catch (r) {
        I.error(`Plugin ${t.id} errored whilst unloading`, r);
      }
      delete Ie[e], (t.enabled = !1);
    }
  }
  function Ge(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    e.endsWith("/") || (e += "/");
    let n = A[e],
      r = Ie[e];
    if (!n) throw new Error("Attempted to stop non-existent plugin");
    if (!d.safeMode?.enabled) {
      try {
        r?.onUnload?.();
      } catch (o) {
        I.error(`Plugin ${n.id} errored whilst unloading`, o);
      }
      delete Ie[e];
    }
    t && (n.enabled = !1);
  }
  async function mn(e) {
    e.endsWith("/") || (e += "/"),
      A[e].enabled && Ge(e),
      delete A[e],
      await Ht(e);
  }
  async function dn() {
    await Me(d), await Me(A);
    let e = Object.keys(A);
    return (
      d.safeMode?.enabled ||
        (await vr(
          e
            .filter(function (t) {
              return A[t].enabled;
            })
            .map(async function (t) {
              return (
                A[t].update &&
                  (await Ve(t).catch(function (n) {
                    return I.error(n.message);
                  })),
                await Ue(t)
              );
            })
        ),
        e
          .filter(function (t) {
            return !A[t].enabled && A[t].update;
          })
          .forEach(function (t) {
            return Ve(t);
          })),
      ba
    );
  }
  var A,
    Ie,
    ba,
    pn,
    he = c(() => {
      "use strict";
      fe();
      H();
      Ir();
      xe();
      k();
      (A = pe(re(de("VENDETTA_PLUGINS")))), (Ie = {});
      (ba = function () {
        return Object.keys(Ie).forEach(function (e) {
          return Ge(e, !1);
        });
      }),
        (pn = function (e) {
          return Ie[e]?.settings;
        });
    });
  var _n = {};
  T(_n, {
    DISCORD_SERVER: () => hn,
    DISCORD_SERVER_ID: () => Rn,
    GITHUB: () => En,
    HTTP_REGEX: () => Ta,
    HTTP_REGEX_MULTI: () => nt,
    PLUGINS_CHANNEL_ID: () => yn,
    PROXY_PREFIX: () => Ae,
    THEMES_CHANNEL_ID: () => tt,
  });
  var hn,
    Rn,
    yn,
    tt,
    En,
    Ae,
    Ta,
    nt,
    Ne = c(() => {
      "use strict";
      (hn = "https://discord.gg/n9QQ4XhhJP"),
        (Rn = "1015931589865246730"),
        (yn = "1091880384561684561"),
        (tt = "1091880434939482202"),
        (En = "https://github.com/vendetta-mod"),
        (Ae = "https://vd-plugins.github.io/proxy"),
        (Ta =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/),
        (nt =
          /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
    });
  function He(e) {
    let {
        label: t,
        icon: n,
        noPadding: r = !1,
        noAnimation: o = !1,
        children: a,
      } = e,
      { FormRow: i, FormDivider: s } = y,
      [m, p] = React.useState(!0);
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(i, {
        label: t,
        leading: n && React.createElement(i.Icon, { source: f(n) }),
        trailing: React.createElement(i.Arrow, {
          style: { transform: [{ rotate: `${m ? 180 : 90}deg` }] },
        }),
        onPress: function () {
          p(!m),
            o ||
              u.LayoutAnimation.configureNext(
                u.LayoutAnimation.Presets.easeInEaseOut
              );
        },
      }),
      !m &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement(s, null),
          React.createElement(
            u.View,
            { style: !r && { paddingHorizontal: 15 } },
            a
          )
        )
    );
  }
  var Nr = c(() => {
    "use strict";
    h();
    _();
    N();
  });
  function Cr(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  var Dr = c(() => {});
  function Pr(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Br(e, t, n) {
    return t && Pr(e.prototype, t), n && Pr(e, n), e;
  }
  var Mr = c(() => {});
  function Lr(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var Or = c(() => {});
  function _t(e, t) {
    return (
      (_t =
        Object.setPrototypeOf ||
        function (r, o) {
          return (r.__proto__ = o), r;
        }),
      _t(e, t)
    );
  }
  var Fr = c(() => {});
  function kr(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && _t(e, t);
  }
  var Vr = c(() => {
    Fr();
  });
  function rt(e) {
    return (
      (rt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          }),
      rt(e)
    );
  }
  var Ur = c(() => {});
  function Gr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  var Hr = c(() => {});
  function $r(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var jr = c(() => {});
  function Kr(e) {
    return e && typeof Symbol < "u" && e.constructor === Symbol
      ? "symbol"
      : typeof e;
  }
  var Wr = c(() => {});
  function zr(e, t) {
    return t && (Kr(t) === "object" || typeof t == "function") ? t : $r(e);
  }
  var Yr = c(() => {
    jr();
    Wr();
  });
  function Xr(e) {
    var t = Gr();
    return function () {
      var r = rt(e),
        o;
      if (t) {
        var a = rt(this).constructor;
        o = Reflect.construct(r, arguments, a);
      } else o = r.apply(this, arguments);
      return zr(this, o);
    };
  }
  var Jr = c(() => {
    Ur();
    Hr();
    Yr();
  });
  var Zr,
    va,
    S,
    xn = c(() => {
      "use strict";
      Dr();
      Mr();
      Or();
      Vr();
      Jr();
      h();
      N();
      (Zr = P.createThemedStyleSheet({
        view: { flex: 1, flexDirection: "column", margin: 10 },
        title: { fontSize: 20, textAlign: "center", marginBottom: 5 },
      })),
        (S = (function (e) {
          "use strict";
          kr(n, e);
          var t = Xr(n);
          function n(r) {
            Cr(this, n);
            var o;
            return (o = t.call(this, r)), (o.state = { hasErr: !1 }), o;
          }
          return (
            Br(n, [
              {
                key: "render",
                value: function () {
                  var o = this;
                  return this.state.hasErr
                    ? ve.createElement(
                        u.ScrollView,
                        { style: Zr.view },
                        ve.createElement(
                          y.FormText,
                          { style: Zr.title },
                          "Uh oh."
                        ),
                        ve.createElement(
                          Re,
                          { selectable: !0, style: { marginBottom: 5 } },
                          this.state.errText
                        ),
                        ve.createElement(ee, {
                          color: ee.Colors.RED,
                          size: ee.Sizes.MEDIUM,
                          look: ee.Looks.FILLED,
                          onPress: function () {
                            return o.setState({ hasErr: !1, errText: void 0 });
                          },
                          text: "Retry",
                        })
                      )
                    : this.props.children;
                },
              },
            ]),
            n
          );
        })((va = ve.Component)));
      Lr(S, "getDerivedStateFromError", function (e) {
        return { hasErr: !0, errText: e.message };
      });
    });
  var Sn = {};
  T(Sn, { rawColors: () => Ia, semanticColors: () => w });
  var w,
    Ia,
    Ce = c(() => {
      "use strict";
      h();
      W();
      (w = oe?.default?.colors ?? Le?.ThemeColorMap),
        (Ia = oe?.default?.unsafe_rawColors ?? Le?.Colors);
    });
  function Re(e) {
    let { selectable: t, style: n, children: r } = e;
    return t
      ? u.Platform.select({
          ios: React.createElement(Aa, { style: n, children: r }),
          default: React.createElement(qr, {
            style: n,
            children: r,
            selectable: !0,
          }),
        })
      : React.createElement(qr, { style: n, children: r });
  }
  var Qr,
    Aa,
    qr,
    eo = c(() => {
      "use strict";
      h();
      Ce();
      (Qr = P.createThemedStyleSheet({
        codeBlock: {
          fontFamily: Le.Fonts.CODE_SEMIBOLD,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: V.TRANSPARENT,
          color: w.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 0,
          borderColor: w.BACKGROUND_TERTIARY,
          padding: 10,
        },
      })),
        (Aa = function (e) {
          let { style: t, children: n } = e;
          return React.createElement(u.TextInput, {
            editable: !1,
            multiline: !0,
            style: [Qr.codeBlock, t && t],
            value: n,
          });
        }),
        (qr = function (e) {
          let { selectable: t, style: n, children: r } = e;
          return React.createElement(
            u.Text,
            { selectable: t, style: [Qr.codeBlock, n && n] },
            r
          );
        });
    });
  function $e(e) {
    let { onChangeText: t, placeholder: n, style: r } = e;
    return React.createElement(Na, {
      style: [Ca.search, r],
      placeholder: n,
      onChangeText: t,
    });
  }
  var Na,
    Ca,
    to = c(() => {
      "use strict";
      h();
      E();
      (Na = L("StaticSearchBarContainer")),
        (Ca = P.createThemedStyleSheet({
          search: {
            margin: 0,
            padding: 0,
            borderBottomWidth: 0,
            background: "none",
            backgroundColor: "none",
          },
        }));
    });
  var vn = {};
  T(vn, {
    Alert: () => wn,
    Button: () => ee,
    Codeblock: () => Re,
    ErrorBoundary: () => S,
    Forms: () => y,
    General: () => Da,
    HelpMessage: () => bn,
    SafeAreaView: () => Tn,
    Search: () => $e,
    Summary: () => He,
  });
  var y,
    Da,
    wn,
    ee,
    bn,
    Tn,
    N = c(() => {
      "use strict";
      E();
      Nr();
      xn();
      eo();
      to();
      (y = l("Form", "FormSection")),
        (Da = l("Button", "Text", "View")),
        (wn = At("FluxContainer(Alert)")),
        (ee = l("Looks", "Colors", "Sizes")),
        (bn = L("HelpMessage")),
        (Tn = l("useSafeAreaInsets").SafeAreaView);
    });
  function no() {
    return R("default", Pa, function (e, t) {
      let [{ thread: n }] = e;
      if (n.guild_id !== Rn) return;
      let r;
      if (n.parent_id === yn) r = "Plugin";
      else if (n.parent_id === tt && window.__vendetta_loader?.features.themes)
        r = "Theme";
      else return;
      let { firstMessage: o } = La(n),
        a = o?.content?.match(nt);
      if (!a) return;
      r === "Plugin"
        ? (a = a.filter(function (p) {
            return p.startsWith(Ae);
          }))
        : (a = a.filter(function (p) {
            return p.endsWith(".json");
          }));
      let i = a[0];
      if (!i) return;
      let s = ne(t, function (p) {
          return p?.[0]?.key;
        }),
        m = s[0].type;
      s.unshift(
        React.createElement(
          m,
          { key: "install" },
          React.createElement(Ba, {
            leading: React.createElement(Ma, {
              style: { opacity: 1 },
              source: f("ic_download_24px"),
            }),
            label: `Install ${r}`,
            onPress: function () {
              return (r === "Plugin" ? ge : Se)(i)
                .then(function () {
                  g(`Successfully installed ${n.name}`, f("Check"));
                })
                .catch(function (p) {
                  g(p.message, f("Small"));
                })
                .finally(function () {
                  return Oa();
                });
            },
          })
        )
      );
    });
  }
  var Pa,
    Ba,
    Ma,
    La,
    Oa,
    ro = c(() => {
      "use strict";
      E();
      Ne();
      G();
      he();
      W();
      fe();
      _();
      Q();
      N();
      (Pa = L("ForumPostLongPressActionSheet", !1)),
        ({ FormRow: Ba, FormIcon: Ma } = y),
        ({ useFirstForumPostMessage: La } = l("useFirstForumPostMessage")),
        ({ hideActionSheet: Oa } = l("openLazy", "hideActionSheet"));
    });
  function In(e) {
    let {
        title: t,
        confirmText: n,
        confirmColor: r,
        onConfirm: o,
        cancelText: a,
        placeholder: i,
        initialValue: s = "",
        secureTextEntry: m,
      } = e,
      [p, C] = React.useState(s),
      [D, b] = React.useState("");
    function M() {
      Promise.resolve(o(p))
        .then(function () {
          oo.close();
        })
        .catch(function (ye) {
          b(ye.message);
        });
    }
    return React.createElement(
      wn,
      {
        title: t,
        confirmText: n,
        confirmColor: r,
        isConfirmButtonDisabled: D.length !== 0,
        onConfirm: M,
        cancelText: a,
        onCancel: function () {
          return oo.close();
        },
      },
      React.createElement(Fa, {
        placeholder: i,
        value: p,
        onChange: function (F) {
          C(typeof F == "string" ? F : F.text), D && b("");
        },
        returnKeyType: "done",
        onSubmitEditing: M,
        error: D || void 0,
        secureTextEntry: m,
        autoFocus: !0,
        showBorder: !0,
        style: {
          paddingVertical: 5,
          alignSelf: "stretch",
          paddingHorizontal: 0,
        },
      })
    );
  }
  var Fa,
    oo,
    ao = c(() => {
      "use strict";
      E();
      N();
      ({ FormInput: Fa } = y), (oo = l("openLazy", "close"));
    });
  var Nn = {};
  T(Nn, {
    showConfirmationAlert: () => X,
    showCustomAlert: () => so,
    showInputAlert: () => An,
  });
  function X(e) {
    let t = e;
    return (
      (t.body = e.content),
      delete t.content,
      (t.isDismissable ??= !0),
      io.show(t)
    );
  }
  var io,
    so,
    An,
    De = c(() => {
      "use strict";
      E();
      ao();
      io = l("openLazy", "close");
      (so = function (e, t) {
        return io.openLazy({
          importer: async function () {
            return function () {
              return React.createElement(e, t);
            };
          },
        });
      }),
        (An = function (e) {
          return so(In, e);
        });
    });
  function co(e) {
    return e.startsWith(Ae)
      ? "Plugin"
      : e.endsWith(".json") && window.__vendetta_loader?.features.themes
      ? "Theme"
      : void 0;
  }
  function lo(e, t) {
    (e === "Plugin" ? ge : Se)(t)
      .then(function () {
        g("Successfully installed", f("Check"));
      })
      .catch(function (n) {
        g(n.message, f("Small"));
      });
  }
  function uo() {
    let e = new Array();
    return (
      e.push(
        R("showSimpleActionSheet", ka, function (t) {
          if (t[0].key !== "LongPressUrl") return;
          let {
              header: { title: n },
              options: r,
            } = t[0],
            o = co(n);
          o &&
            r.push({
              label: `Install ${o}`,
              onPress: function () {
                return lo(o, n);
              },
            });
        })
      ),
      e.push(
        _e("handleClick", Va, async function (t, n) {
          let { href: r } = t[0],
            o = co(r);
          if (!o) return n.apply(this, t);
          if (o === "Theme" && Ha(Ga())?.parent_id !== tt)
            return n.apply(this, t);
          X({
            title: "HANG ON JUST WAIT A SECOND",
            content: [
              "This link is a ",
              React.createElement(u.Text, { style: $a["text-md/semibold"] }, o),
              ", would you like to install it?",
            ],
            onConfirm: function () {
              return lo(o, r);
            },
            confirmText: "Install",
            cancelText: "Don\'t install",
            secondaryConfirmText: "Don\'t install, open in browser.",
            onConfirmSecondary: function () {
              return Ua(r);
            },
          });
        })
      ),
      function () {
        return e.forEach(function (t) {
          return t();
        });
      }
    );
  }
  var ka,
    Va,
    Ua,
    Ga,
    Ha,
    $a,
    fo = c(() => {
      "use strict";
      E();
      h();
      Ne();
      G();
      he();
      W();
      De();
      _();
      Q();
      (ka = j(function (e) {
        return (
          e?.showSimpleActionSheet &&
          !Object.getOwnPropertyDescriptor(e, "showSimpleActionSheet")?.get
        );
      })),
        (Va = l("handleClick")),
        ({ openURL: Ua } = Oe),
        ({ getChannelId: Ga } = qt),
        ({ getChannel: Ha } = l("getChannel")),
        ({ TextStyleSheet: $a } = l("TextStyleSheet"));
    });
  function Cn() {
    let e = new Array();
    return (
      e.push(no()),
      e.push(uo()),
      function () {
        return e.forEach(function (t) {
          return t();
        });
      }
    );
  }
  var mo = c(() => {
    "use strict";
    ro();
    fo();
  });
  function ho() {
    return R("render", ja.prototype, function (e, t) {
      var n = this;
      if (!this.state.error) return;
      let r = qe();
      this.state.activeTab ??= "message";
      let o = go.find(function (s) {
          return s.id === n.state.activeTab;
        }),
        a = this.state.error[this.state.activeTab],
        i = [
          { text: "Restart Discord", onPress: this.handleReload },
          ...(d.safeMode?.enabled
            ? []
            : [{ text: "Restart in Safe Mode", onPress: Ze }]),
          {
            text: "Retry Render",
            color: V.RED,
            onPress: function () {
              return n.setState({ info: null, error: null });
            },
          },
        ];
      return React.createElement(
        S,
        null,
        React.createElement(
          Tn,
          { style: ot.container },
          React.createElement(
            u.View,
            { style: ot.header },
            t.props.Illustration &&
              React.createElement(t.props.Illustration, {
                style: {
                  flex: 1,
                  resizeMode: "contain",
                  maxHeight: 96,
                  paddingRight: 4,
                },
              }),
            React.createElement(
              u.View,
              { style: { flex: 2, paddingLeft: 4 } },
              React.createElement(
                u.Text,
                { style: ot.headerTitle },
                t.props.title
              ),
              React.createElement(
                u.Text,
                { style: ot.headerDescription },
                t.props.body
              )
            )
          ),
          React.createElement(
            u.View,
            { style: { flex: 6 } },
            React.createElement(
              u.View,
              { style: { paddingBottom: 8 } },
              React.createElement(Ka, {
                tabs: go,
                activeTab: this.state.activeTab,
                onTabSelected: function (s) {
                  n.setState({ activeTab: s });
                },
              })
            ),
            React.createElement(
              Re,
              { selectable: !0, style: { flexBasis: "auto", marginBottom: 8 } },
              [
                `Discord: ${r.discord.build} (${r.os.name})`,
                `5xdfVendettaMod: ${r.vendetta.version}`,
              ].join(`
`)
            ),
            React.createElement(
              Re,
              { selectable: !0, style: { flex: 1, textAlignVertical: "top" } },
              o?.trimWhitespace
                ? a
                    .split(
                      `
`
                    )
                    .filter(function (s) {
                      return s.length !== 0;
                    })
                    .map(function (s) {
                      return s.trim();
                    }).join(`
`)
                : a
            )
          ),
          React.createElement(
            u.View,
            { style: ot.footer },
            i.map(function (s) {
              let m = i.indexOf(s) !== 0 ? 8 : 0;
              return React.createElement(ee, {
                text: s.text,
                color: s.color ?? V.BRAND,
                size: s.size ?? "small",
                onPress: s.onPress,
                style: te.isTablet
                  ? { flex: `0.${i.length}`, marginLeft: m }
                  : { marginTop: m },
              });
            })
          )
        )
      );
    });
  }
  var ja,
    Ka,
    po,
    ot,
    go,
    Ro = c(() => {
      "use strict";
      ke();
      h();
      E();
      G();
      Fe();
      ue();
      Ce();
      N();
      k();
      (ja = L("ErrorBoundary")),
        ({ BadgableTabBar: Ka } = l("BadgableTabBar")),
        ({ TextStyleSheet: po } = l("TextStyleSheet")),
        (ot = P.createThemedStyleSheet({
          container: {
            flex: 1,
            backgroundColor: w.BACKGROUND_PRIMARY,
            paddingHorizontal: 16,
          },
          header: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
          },
          headerTitle: {
            ...po["heading-md/semibold"],
            textAlign: "center",
            textTransform: "uppercase",
            color: w.HEADER_PRIMARY,
          },
          headerDescription: {
            ...po["text-sm/medium"],
            textAlign: "center",
            color: w.TEXT_MUTED,
          },
          footer: {
            flexDirection: te.isTablet ? "row" : "column",
            justifyContent: "flex-end",
            marginVertical: 8,
          },
        })),
        (go = [
          { id: "message", title: "Message" },
          { id: "stack", title: "Stack Trace" },
          { id: "componentStack", title: "Component", trimWhitespace: !0 },
        ]);
    });
  function xt(e) {
    let { alertTitle: t, installFunction: n } = e;
    return React.createElement(
      u.TouchableOpacity,
      {
        onPress: function () {
          return z.getString().then(function (r) {
            return An({
              title: t,
              initialValue: r.match(nt)?.[0] ?? "",
              placeholder: "https://example.com/",
              onConfirm: function (o) {
                return n(o);
              },
              confirmText: "Install",
              cancelText: "Cancel",
            });
          });
        },
      },
      React.createElement(u.Image, { style: Wa.icon, source: f("ic_add_24px") })
    );
  }
  var Wa,
    yo = c(() => {
      "use strict";
      h();
      Ne();
      De();
      _();
      Ce();
      Wa = P.createThemedStyleSheet({
        icon: { marginRight: 10, tintColor: w.HEADER_PRIMARY },
      });
    });
  function St(e) {
    let { label: t, version: n, icon: r } = e;
    return React.createElement(Eo, {
      label: t,
      leading: React.createElement(Eo.Icon, { source: f(r) }),
      trailing: React.createElement(za, null, n),
      onPress: function () {
        z.setString(`${t} - ${n}`),
          g("Copied version to clipboard.", f("toast_copy_link"));
      },
    });
  }
  var Eo,
    za,
    _o = c(() => {
      "use strict";
      h();
      _();
      Q();
      N();
      ({ FormRow: Eo, FormText: za } = y);
    });
  function Pn() {
    x(d);
    let e = [
        {
          label: "Vendetta",
          version: B.vendetta.version+" [MODDED]",
          icon: "ic_progress_wrench_24px",
        },
        {
          label: "Discord",
          version: `${B.discord.version} (${B.discord.build})`,
          icon: "Discord",
        },
        { label: "React", version: B.react.version, icon: "ic_category_16px" },
        {
          label: "React Native",
          version: B.react.nativeVersion,
          icon: "mobile",
        },
        {
          label: "Bytecode",
          version: B.hermes.bytecodeVersion,
          icon: "ic_server_security_24px",
        },
      ],
      t = [
        {
          label: "Loader",
          version: "VendettaXposed [MODDED]",
          icon: "ic_download_24px",
        },
        {
          label: "Operating System",
          version: `${B.os.name} ${B.os.version}`,
          icon: "ic_cog_24px",
        },
        ...(B.os.sdk
          ? [
              {
                label: "SDK",
                version: B.os.sdk,
                icon: "ic_profile_badge_verified_developer_color",
              },
            ]
          : []),
        {
          label: "Manufacturer",
          version: B.device.manufacturer,
          icon: "ic_badge_staff",
        },
        {
          label: "Brand",
          version: B.device.brand,
          icon: "ic_settings_boost_24px",
        },
        { label: "Model", version: B.device.model, icon: "ic_phonelink_24px" },
        {
          label: u.Platform.select({ android: "Codename", ios: "Machine ID" }),
          version: B.device.codename,
          icon: "ic_compose_24px",
        },
      ];
    return React.createElement(
      S,
      null,
      React.createElement(
        u.ScrollView,
        { style: { flex: 1 }, contentContainerStyle: { paddingBottom: 38 } },
        React.createElement(
          Dn,
          { title: "Links", titleStyleType: "no_border" },
          React.createElement(J, {
            label: "Discord Server",
            leading: React.createElement(J.Icon, { source: f("Discord") }),
            trailing: J.Arrow,
            onPress: function () {
              return Oe.openDeeplink(hn);
            },
          }),
          React.createElement(je, null),
          React.createElement(J, {
            label: "GitHub",
            leading: React.createElement(J.Icon, {
              source: f("img_account_sync_github_white"),
            }),
            trailing: J.Arrow,
            onPress: function () {
              return Oe.openURL(En);
            },
          })
        ),
        React.createElement(
          Dn,
          { title: "Actions" },
          React.createElement(J, {
            label: "Reload Discord",
            leading: React.createElement(J.Icon, {
              source: f("ic_message_retry"),
            }),
            onPress: function () {
              return Ee.reload();
            },
          }),
          React.createElement(je, null),
          React.createElement(J, {
            label: d.safeMode?.enabled
              ? "Return to Normal Mode"
              : "Reload in Safe Mode",
            subLabel: `This will reload Discord ${
              d.safeMode?.enabled ? "normally." : "without loading plugins."
            }`,
            leading: React.createElement(J.Icon, {
              source: f("ic_privacy_24px"),
            }),
            onPress: Ze,
          }),
          React.createElement(je, null),
          React.createElement(Ya, {
            label: "Developer Settings",
            leading: React.createElement(J.Icon, {
              source: f("ic_progress_wrench_24px"),
            }),
            value: d.developerSettings,
            onValueChange: function (n) {
              d.developerSettings = n;
            },
          })
        ),
        React.createElement(
          Dn,
          { title: "Info" },
          React.createElement(
            He,
            { label: "Versions", icon: "ic_information_filled_24px" },
            e.map(function (n, r) {
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(St, {
                  label: n.label,
                  version: n.version,
                  icon: n.icon,
                }),
                r !== e.length - 1 && React.createElement(je, null)
              );
            })
          ),
          React.createElement(je, null),
          React.createElement(
            He,
            { label: "Platform", icon: "ic_mobile_device" },
            t.map(function (n, r) {
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(St, {
                  label: n.label,
                  version: n.version,
                  icon: n.icon,
                }),
                r !== t.length - 1 && React.createElement(je, null)
              );
            })
          )
        )
      )
    );
  }
  var J,
    Ya,
    Dn,
    je,
    B,
    xo = c(() => {
      "use strict";
      h();
      Ne();
      Fe();
      H();
      ue();
      _();
      N();
      k();
      _o();
      ({ FormRow: J, FormSwitchRow: Ya, FormSection: Dn, FormDivider: je } = y),
        (B = qe());
    });
  function at(e) {
    let { items: t, safeModeMessage: n, safeModeExtras: r, card: o } = e;
    x(d), x(t);
    let [a, i] = React.useState("");
    return React.createElement(
      S,
      null,
      React.createElement(u.FlatList, {
        ListHeaderComponent: React.createElement(
          React.Fragment,
          null,
          d.safeMode?.enabled &&
            React.createElement(
              u.View,
              { style: { marginBottom: 10 } },
              React.createElement(bn, { messageType: 0 }, n),
              r
            ),
          React.createElement($e, {
            style: { marginBottom: 10 },
            onChangeText: function (s) {
              return i(s.toLowerCase());
            },
            placeholder: "Search",
          })
        ),
        style: { paddingHorizontal: 10, paddingTop: 10 },
        contentContainerStyle: { paddingBottom: 20 },
        data: Object.values(t).filter(function (s) {
          return s.id?.toLowerCase().includes(a);
        }),
        renderItem: function (s) {
          let { item: m, index: p } = s;
          return React.createElement(o, { item: m, index: p });
        },
      })
    );
  }
  var Bn = c(() => {
    "use strict";
    h();
    H();
    N();
    k();
  });
  function st(e) {
    let t = e.toggleValue ?? !1;
    return React.createElement(
      u.View,
      { style: [it.card, { marginTop: e.index !== 0 ? 10 : 0 }] },
      React.createElement(wt, {
        style: it.header,
        label: e.headerLabel,
        leading:
          e.headerIcon &&
          React.createElement(wt.Icon, { source: f(e.headerIcon) }),
        trailing:
          e.toggleType &&
          (e.toggleType === "switch"
            ? React.createElement(Xa, {
                style: u.Platform.OS === "android" && { marginVertical: -15 },
                value: e.toggleValue,
                onValueChange: e.onToggleChange,
              })
            : React.createElement(
                u.Pressable,
                {
                  onPress: function () {
                    (t = !t), e.onToggleChange?.(t);
                  },
                },
                React.createElement(Ja, { selected: e.toggleValue })
              )),
      }),
      React.createElement(wt, {
        label: e.descriptionLabel,
        trailing: React.createElement(
          u.View,
          { style: it.actions },
          e.overflowActions &&
            React.createElement(
              u.TouchableOpacity,
              {
                onPress: function () {
                  return qa({
                    key: "CardOverflow",
                    header: {
                      title: e.overflowTitle,
                      icon:
                        e.headerIcon &&
                        React.createElement(wt.Icon, {
                          style: { marginRight: 8 },
                          source: f(e.headerIcon),
                        }),
                      onClose: function () {
                        return Za();
                      },
                    },
                    options: e.overflowActions?.map(function (n) {
                      return { ...n, icon: f(n.icon) };
                    }),
                  });
                },
              },
              React.createElement(u.Image, {
                style: it.icon,
                source: f("ic_more_24px"),
              })
            ),
          e.actions?.map(function (n) {
            let { icon: r, onPress: o } = n;
            return React.createElement(
              u.TouchableOpacity,
              { onPress: o },
              React.createElement(u.Image, { style: it.icon, source: f(r) })
            );
          })
        ),
      })
    );
  }
  var wt,
    Xa,
    Ja,
    Za,
    qa,
    it,
    Mn = c(() => {
      "use strict";
      h();
      E();
      _();
      Ce();
      N();
      ({ FormRow: wt, FormSwitch: Xa, FormRadio: Ja } = y),
        ({ hideActionSheet: Za } = l("openLazy", "hideActionSheet")),
        ({ showSimpleActionSheet: qa } = l("showSimpleActionSheet")),
        (it = P.createThemedStyleSheet({
          card: { backgroundColor: w?.BACKGROUND_SECONDARY, borderRadius: 5 },
          header: {
            padding: 0,
            backgroundColor: w?.BACKGROUND_TERTIARY,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          },
          actions: { flexDirection: "row-reverse", alignItems: "center" },
          icon: {
            width: 22,
            height: 22,
            marginLeft: 5,
            tintColor: w?.INTERACTIVE_NORMAL,
          },
        }));
    });
  async function So(e, t) {
    e.enabled && Ge(e.id, !1), t(), e.enabled && (await Ue(e.id));
  }
  function Ln(e) {
    let { item: t, index: n } = e,
      r = pn(t.id),
      o = ie.useNavigation(),
      [a, i] = React.useState(!1);
    return a
      ? null
      : React.createElement(st, {
          index: n,
          headerLabel: `${t.manifest.name} by ${t.manifest.authors
            .map(function (s) {
              return s.name;
            })
            .join(", ")}`,
          headerIcon:
            t.manifest.vendetta?.icon || "ic_application_command_24px",
          toggleType: "switch",
          toggleValue: t.enabled,
          onToggleChange: function (s) {
            try {
              s ? Ue(t.id) : Ge(t.id);
            } catch (m) {
              g(m.message, f("Small"));
            }
          },
          descriptionLabel: t.manifest.description,
          overflowTitle: t.manifest.name,
          overflowActions: [
            {
              icon: "ic_sync_24px",
              label: "Refetch",
              onPress: async function () {
                So(t, function () {
                  Ve(t.id)
                    .then(async function () {
                      g(
                        "Successfully refetched plugin.",
                        f("toast_image_saved")
                      );
                    })
                    .catch(function () {
                      g("Failed to refetch plugin!", f("Small"));
                    });
                });
              },
            },
            {
              icon: "copy",
              label: "Copy URL",
              onPress: function () {
                z.setString(t.id),
                  g("Copied plugin URL to clipboard.", f("toast_copy_link"));
              },
            },
            {
              icon: "ic_download_24px",
              label: t.update ? "Disable updates" : "Enable updates",
              onPress: function () {
                (t.update = !t.update),
                  g(
                    `${t.update ? "Enabled" : "Disabled"} updates for ${
                      t.manifest.name
                    }.`,
                    f("toast_image_saved")
                  );
              },
            },
            {
              icon: "ic_duplicate",
              label: "Clear data",
              isDestructive: !0,
              onPress: function () {
                return X({
                  title: "WAIT NO!",
                  content: `Are you sure you wish to clear the data of ${t.manifest.name}?`,
                  confirmText: "Clear",
                  cancelText: "Cancel",
                  confirmColor: V.RED,
                  onConfirm: function () {
                    So(t, function () {
                      try {
                        le.removeItem(t.id),
                          g(`Cleared data for ${t.manifest.name}.`, f("trash"));
                      } catch {
                        g(
                          `Failed to clear data for ${t.manifest.name}!`,
                          f("Small")
                        );
                      }
                    });
                  },
                });
              },
            },
            {
              icon: "ic_message_delete",
              label: "Delete",
              isDestructive: !0,
              onPress: function () {
                return X({
                  title: "WAAAAAAAAAAAAAAIIIIIIIT!",
                  content: `Are you sure you wish to delete ${t.manifest.name}? This will clear all of the plugin's data.`,
                  confirmText: "Delete",
                  cancelText: "Cancel",
                  confirmColor: V.RED,
                  onConfirm: function () {
                    g(`The plugin ${t.manifest.name} should have been deleted.`, f("toast_invite_sent"));
                    try {
                      mn(t.id), i(!0);
                    } catch (s) {
                      g(s.message, f("Small"));
                    }
                  },
                });
              },
            },
          ],
          actions: [
            ...(r
              ? [
                  {
                    icon: "settings",
                    onPress: function () {
                      return o.push("VendettaCustomPage", {
                        title: t.manifest.name,
                        render: r,
                      });
                    },
                  },
                ]
              : []),
          ],
        });
  }
  var wo = c(() => {
    "use strict";
    ke();
    h();
    he();
    ue();
    _();
    Q();
    De();
    Mn();
  });
  function On() {
    return (
      x(d),
      React.createElement(at, {
        items: A,
        safeModeMessage:
          "You are in Safe Mode, so plugins cannot be loaded. Disable any misbehaving plugins, then return to Normal Mode from the General settings page.",
        card: Ln,
      })
    );
  }
  var bo = c(() => {
    "use strict";
    H();
    he();
    k();
    Bn();
    wo();
  });
  async function To(e, t) {
    await we(e ? t : "default"), Ee.reload();
  }
  function Fn(e) {
    let { item: t, index: n } = e;
    x(d);
    let [r, o] = React.useState(!1);
    if (r) return null;
    let a = t.data.authors;
    return React.createElement(st, {
      index: n,
      headerLabel: `${t.data.name} ${
        a
          ? `by ${a
              .map(function (i) {
                return i.name;
              })
              .join(", ")}`
          : ""
      }`,
      descriptionLabel: t.data.description ?? "No description.",
      toggleType: d.safeMode?.enabled ? void 0 : "radio",
      toggleValue: t.selected,
      onToggleChange: function (i) {
        To(i, t.id);
      },
      overflowTitle: t.data.name,
      overflowActions: [
        {
          icon: "ic_sync_24px",
          label: "Refetch",
          onPress: function () {
            Xe(t.id, t.selected)
              .then(function () {
                t.selected
                  ? X({
                      title: "The theme has been refetched",
                      content:
                        "A reload is required to see the changes. Do you want to reload now?",
                      confirmText: "Reload",
                      cancelText: "Cancel",
                      confirmColor: V.RED,
                      onConfirm: function () {
                        return Ee.reload();
                      },
                    })
                  : g("Successfully refetched theme.", f("toast_image_saved"));
              })
              .catch(function () {
                g("Failed to refetch theme!", f("Small"));
              });
          },
        },
        {
          icon: "copy",
          label: "Copy URL",
          onPress: function () {
            z.setString(t.id),
              g("Copied theme URL to clipboard.", f("toast_copy_link"));
          },
        },
        {
          icon: "ic_message_delete",
          label: "Delete",
          isDestructive: !0,
          onPress: function () {
            return X({
              title: "Hey wait... WHAT ARE YOU DOING???",
              content: `Are you sure you wish to delete ${t.data.name}?`,
              confirmText: "Delete",
              cancelText: "Cancel",
              confirmColor: V.RED,
              onConfirm: function () {
                Yt(t.id)
                  .then(function (i) {
                    o(!0), i && To(!1, t.id);
                  })
                  .catch(function (i) {
                    g(i.message, f("Small"));
                  });
              },
            });
          },
        },
      ],
    });
  }
  var vo = c(() => {
    "use strict";
    ke();
    h();
    W();
    H();
    ue();
    _();
    De();
    Q();
    k();
    Mn();
  });
  function kn() {
    return (
      x(d),
      React.createElement(at, {
        items: O,
        safeModeMessage: `You are in Safe Mode, meaning themes have been temporarily disabled.${
          d.safeMode?.currentThemeId
            ? " If a theme appears to be causing the issue, you can press below to disable it persistently."
            : ""
        }`,
        safeModeExtras: d.safeMode?.currentThemeId
          ? React.createElement(ee, {
              text: "Disable Theme",
              color: V.BRAND,
              size: "small",
              onPress: function () {
                delete d.safeMode?.currentThemeId;
              },
              style: { marginTop: 8 },
            })
          : void 0,
        card: Fn,
      })
    );
  }
  var Io = c(() => {
    "use strict";
    ke();
    H();
    W();
    N();
    k();
    Bn();
    vo();
  });
  function Vn(e) {
    let { asset: t } = e;
    return React.createElement(Qa, {
      label: `${t.name} - ${t.id}`,
      trailing: React.createElement(u.Image, {
        source: t.id,
        style: { width: 32, height: 32 },
      }),
      onPress: function () {
        z.setString(t.name),
          g("Copied asset name to clipboard.", f("toast_copy_link"));
      },
    });
  }
  var Qa,
    Ao = c(() => {
      "use strict";
      h();
      Q();
      _();
      N();
      ({ FormRow: Qa } = y);
    });
  function Un() {
    let [e, t] = React.useState("");
    return React.createElement(
      S,
      null,
      React.createElement(
        u.View,
        { style: { flex: 1 } },
        React.createElement($e, {
          style: { margin: 10 },
          onChangeText: function (n) {
            return t(n);
          },
          placeholder: "Search",
        }),
        React.createElement(u.FlatList, {
          data: Object.values(se).filter(function (n) {
            return n.name.includes(e) || n.id.toString() === e;
          }),
          renderItem: function (n) {
            let { item: r } = n;
            return React.createElement(Vn, { asset: r });
          },
          ItemSeparatorComponent: ei,
          keyExtractor: function (n) {
            return n.name;
          },
        })
      )
    );
  }
  var ei,
    No = c(() => {
      "use strict";
      h();
      _();
      N();
      Ao();
      ({ FormDivider: ei } = y);
    });
  function Hn() {
    let e = ie.useNavigation();
    return (
      x(d),
      x(Y),
      React.createElement(
        S,
        null,
        React.createElement(
          u.ScrollView,
          { style: { flex: 1 }, contentContainerStyle: { paddingBottom: 38 } },
          React.createElement(
            Gn,
            { title: "Debug", titleStyleType: "no_border" },
            React.createElement(Do, {
              value: d.debuggerUrl,
              onChange: function (t) {
                return (d.debuggerUrl = t);
              },
              placeholder: "127.0.0.1:9090",
              title: "DEBUGGER URL (ONLY USE IF YOU KNOW WHAT YOUR DOING)",
            }),
            React.createElement(ct, null),
            React.createElement(U, {
              label: "Connect to debug websocket - May be broken",
              leading: React.createElement(U.Icon, { source: f("copy") }),
              onPress: function () {
                return an(d.debuggerUrl);
              },
            }),
            window.__vendetta_rdc &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(ct, null),
                React.createElement(U, {
                  label: "Connect to React DevTools - May crash app if not avaliable",
                  leading: React.createElement(U.Icon, {
                    source: f("ic_badge_staff"),
                  }),
                  onPress: function () {
                    return window.__vendetta_rdc?.connectToDevTools({
                      host: d.debuggerUrl.split(":")?.[0],
                      resolveRNStyle: u.StyleSheet.flatten,
                    });
                  },
                })
              )
          ),
          window.__vendetta_loader?.features.loaderConfig &&
            React.createElement(
              Gn,
              { title: "Loader config" },
              React.createElement(Co, {
                label: "Load from custom url",
                subLabel: "Load 5xdfVendettaMod from a custom endpoint.",
                leading: React.createElement(U.Icon, { source: f("copy") }),
                value: Y.customLoadUrl.enabled,
                onValueChange: function (t) {
                  Y.customLoadUrl.enabled = t;
                  g("For this action to take effect, you need to reload Discord. General > Actions > Reload Discord", f("ic_message_retry"))
                },
              }),
              React.createElement(ct, null),
              Y.customLoadUrl.enabled &&
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(Do, {
                    value: Y.customLoadUrl.url,
                    onChange: function (t) {
                      return (Y.customLoadUrl.url = t);
                    },
                    placeholder: "http://localhost:4040/vendetta.js",
                    title: "VENDETTA URL",
                  }),
                  React.createElement(ct, null)
                ),
              window.__vendetta_loader.features.devtools &&
                React.createElement(Co, {
                  label: "Load React DevTools - May crash app if not avaliable.",
                  subLabel: `Version: ${window.__vendetta_loader.features.devtools.version}`,
                  leading: React.createElement(U.Icon, {
                    source: f("ic_badge_staff"),
                  }),
                  value: Y.loadReactDevTools,
                  onValueChange: function (t) {
                    Y.loadReactDevTools = t;
                  },
                })
            ),
          React.createElement(
            Gn,
            { title: "Other" },
            React.createElement(U, {
              label: "Asset Browser",
              leading: React.createElement(U.Icon, { source: f("ic_image") }),
              trailing: U.Arrow,
              onPress: function () {
                return e.push("VendettaCustomPage", {
                  title: "Asset Browser",
                  render: Un,
                });
              },
            }),
            React.createElement(ct, null),
            React.createElement(U, {
              label: "ErrorBoundary Tools",
              leading: React.createElement(U.Icon, {
                source: f("ic_warning_24px"),
              }),
              trailing: U.Arrow,
              onPress: function () {
                return ni({
                  key: "ErrorBoundaryTools",
                  header: {
                    title: "Which ErrorBoundary do you want to trip?",
                    icon: React.createElement(U.Icon, {
                      style: { marginRight: 8 },
                      source: f("ic_warning_24px"),
                    }),
                    onClose: function () {
                      return ti();
                    },
                  },
                  options: [
                    {
                      label: "5xdfVendettaMod",
                      onPress: function () {
                        return e.push("VendettaCustomPage", {
                          render: function () {
                            return React.createElement("undefined", null);
                          },
                        });
                      },
                    },
                    {
                      label: "Discord",
                      isDestructive: !0,
                      onPress: function () {
                        return e.push("VendettaCustomPage", {
                          noErrorBoundary: !0,
                        });
                      },
                    },
                  ],
                });
              },
            })
          )
        )
      )
    );
  }
  var Gn,
    U,
    Co,
    Do,
    ct,
    ti,
    ni,
    Po = c(() => {
      "use strict";
      h();
      E();
      Fe();
      H();
      _();
      N();
      k();
      No();
      ({
        FormSection: Gn,
        FormRow: U,
        FormSwitchRow: Co,
        FormInput: Do,
        FormDivider: ct,
      } = y),
        ({ hideActionSheet: ti } = l("openLazy", "hideActionSheet")),
        ({ showSimpleActionSheet: ni } = l("showSimpleActionSheet"));
    });
  var ri,
    lt,
    bt,
    Ke,
    ut,
    Bo,
    $n,
    Tt = c(() => {
      "use strict";
      h();
      he();
      W();
      De();
      Ce();
      Q();
      fe();
      _();
      k();
      xn();
      yo();
      xo();
      bo();
      Io();
      Po();
      Ne();
      (ri = P.createThemedStyleSheet({
        container: { flex: 1, backgroundColor: w.BACKGROUND_MOBILE_PRIMARY },
      })),
        (lt = function (e, t) {
          return t ? yt.snakeCase(e).toUpperCase() : e;
        }),
        (bt = function (e, t) {
          return Object.fromEntries(
            e.map(function (n) {
              return [
                n.key,
                typeof t == "function" ? t(n) : typeof t == "string" ? n[t] : t,
              ];
            })
          );
        }),
        (Ke = function () {
          let e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return [
            {
              key: lt("VendettaSettings", e),
              title: "General",
              icon: "settings",
              render: Pn,
            },
            {
              key: lt("VendettaPlugins", e),
              title: "Plugins",
              icon: "debug",
              options: {
                headerRight: function () {
                  return React.createElement(xt, {
                    alertTitle: "Install Plugin",
                    installFunction: async function (t) {
                      if (!t.startsWith(Ae) && !d.developerSettings)
                        setImmediate(function () {
                          return X({
                            title: "Unproxied Plugin",
                            content:
                              "The plugin you are trying to install has not been proxied/verified by 5xdfVendettaMod staff. Are you sure you want to continue?",
                            confirmText: "Install",
                            onConfirm: function () {
                              return ge(t)
                                .then(function () {
                                  return g("Installed plugin", f("Check"));
                                })
                                .catch(function (n) {
                                  return g(n?.message ?? `${n}`, f("Small"));
                                });
                            },
                            cancelText: "Cancel",
                          });
                        });
                      else return await ge(t);
                    },
                  });
                },
              },
              render: On,
            },
            {
              key: lt("VendettaThemes", e),
              title: "Themes",
              icon: "ic_theme_24px",
              shouldRender: function () {
                return (
                  window.__vendetta_loader?.features.hasOwnProperty("themes") ??
                  !1
                );
              },
              options: {
                headerRight: function () {
                  return (
                    !d.safeMode?.enabled &&
                    React.createElement(xt, {
                      alertTitle: "Install Theme",
                      installFunction: Se,
                    })
                  );
                },
              },
              render: kn,
            },
            {
              key: lt("VendettaDeveloper", e),
              title: "Developer",
              icon: "ic_progress_wrench_24px",
              shouldRender: function () {
                return d.developerSettings ?? !1;
              },
              render: Hn,
            },
            {
              key: lt("VendettaCustomPage", e),
              title: "Vendetta Page",
              shouldRender: function () {
                return !1;
              },
              render: function (t) {
                let { render: n, noErrorBoundary: r, ...o } = t,
                  a = ie.useNavigation();
                return (
                  a.addListener("focus", function () {
                    return a.setOptions(K(o, "render", "noErrorBoundary"));
                  }),
                  r
                    ? React.createElement(n, null)
                    : React.createElement(S, null, React.createElement(n, null))
                );
              },
            },
          ];
        }),
        (ut = function () {
          let e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return Ke(e).filter(function (t) {
            return t.shouldRender?.() ?? !0;
          });
        }),
        (Bo = function () {
          return bt(Ke(), function (e) {
            return { title: e.title, render: e.render, ...e.options };
          });
        }),
        ($n = function () {
          let e = Ke(!0);
          return {
            getLayout: function () {
              return {
                title: "5xdfVendettaMod",
                label: "5xdfVendettaMod",
                settings: ut(!0).map(function (t) {
                  return t.key;
                }),
              };
            },
            titleConfig: bt(e, "title"),
            relationships: bt(e, null),
            rendererConfigs: bt(e, function (t) {
              let n = React.memo(function (r) {
                let { navigation: o, route: a } = r;
                return (
                  o.addListener("focus", function () {
                    return o.setOptions(t.options);
                  }),
                  React.createElement(
                    u.View,
                    { style: ri.container },
                    React.createElement(t.render, a.params)
                  )
                );
              });
              return {
                type: "route",
                title: function () {
                  return t.title;
                },
                icon: t.icon ? f(t.icon) : null,
                screen: {
                  route: yt.chain(t.key).camelCase().upperFirst().value(),
                  getComponent: function () {
                    return n;
                  },
                },
              };
            }),
          };
        });
    });
  function Kn() {
    let e = ie.useNavigation();
    x(d);
    let t = ut();
    return React.createElement(
      S,
      null,
      React.createElement(
        oi,
        {
          key: "Vendetta",
          title: `5xdfVendettaMod${d.safeMode?.enabled ? " (Safe Mode)" : ""}`,
        },
        t.map(function (n, r) {
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(jn, {
              label: n.title,
              leading: React.createElement(jn.Icon, { source: f(n.icon) }),
              trailing: jn.Arrow,
              onPress: function () {
                return e.push(n.key);
              },
            }),
            r !== t.length - 1 && React.createElement(ai, null)
          );
        })
      )
    );
  }
  var jn,
    oi,
    ai,
    Mo = c(() => {
      "use strict";
      h();
      H();
      _();
      Tt();
      N();
      k();
      ({ FormRow: jn, FormSection: oi, FormDivider: ai } = y);
    });
  function Wn() {
    let e = new Array();
    return (
      e.push(
        R("default", ii, function (t, n) {
          return { ...n, ...Bo() };
        })
      ),
      R(
        "default",
        si,
        function (t, n) {
          let r = ne(n.props.children, function (o) {
            return o.type && o.type.name === "UserSettingsOverview";
          });
          e.push(
            R(
              "renderSupportAndAcknowledgements",
              r.type.prototype,
              function (o, a) {
                let {
                    props: { children: i },
                  } = a,
                  s = i.findIndex(function (m) {
                    return m?.type?.name === "UploadLogsButton";
                  });
                s !== -1 && i.splice(s, 1);
              }
            )
          ),
            e.push(
              R("render", r.type.prototype, function (o, a) {
                let {
                    props: { children: i },
                  } = a,
                  s = [
                    Te.Messages.BILLING_SETTINGS,
                    Te.Messages.PREMIUM_SETTINGS,
                  ];
                i = ne(i, function (p) {
                  return p.children?.[1].type?.name === "FormSection";
                }).children;
                let m = i.findIndex(function (p) {
                  return s.includes(p?.props.label);
                });
                i.splice(m === -1 ? 4 : m, 0, React.createElement(Kn, null));
              })
            );
        },
        !0
      ),
      function () {
        return e.forEach(function (t) {
          return t();
        });
      }
    );
  }
  var ii,
    si,
    Lo = c(() => {
      "use strict";
      h();
      E();
      G();
      fe();
      Tt();
      Mo();
      (ii = L("getScreens", !1)), (si = L("UserSettingsOverviewWrapper", !1));
    });
  function Yn() {
    let e = new Array();
    return (
      li(e) || ci(e),
      function () {
        return e.forEach(function (t) {
          return t?.();
        });
      }
    );
  }
  function ci(e) {
    let t = l("useOverviewSettings"),
      n = l("getSettingTitleConfig"),
      r = l("SETTING_RELATIONSHIPS", "SETTING_RENDERER_CONFIGS"),
      o = "getSettingSearchListItems",
      a = "getSettingListItems",
      i = l(o),
      s = !i,
      m = s ? a : o,
      p = i ?? l(a);
    if (!p || !t) return;
    let C = Ke(!0),
      D = ut(!0),
      b = $n();
    e.push(
      R("useOverviewSettings", t, function (ye, We) {
        return Oo(We, b.getLayout());
      })
    ),
      e.push(
        R("getSettingTitleConfig", n, function (ye, We) {
          return { ...We, ...b.titleConfig };
        })
      ),
      e.push(
        R(m, p, function (ye, We) {
          let [Yo] = ye;
          return [
            ...D.filter(function (Z) {
              return Yo.includes(Z.key);
            }).map(function (Z) {
              return {
                type: "setting_search_result",
                ancestorRendererData: b.rendererConfigs[Z.key],
                setting: Z.key,
                title: b.titleConfig[Z.key],
                breadcrumbs: ["Vendetta"],
                icon: b.rendererConfigs[Z.key].icon,
              };
            }),
            ...We.filter(function (Z) {
              return (
                s ||
                !C.map(function (vt) {
                  return vt.key;
                }).includes(Z.setting)
              );
            }),
          ].map(function (Z, vt, Xo) {
            return { ...Z, index: vt, total: Xo.length };
          });
        })
      );
    let M = r.SETTING_RELATIONSHIPS,
      F = r.SETTING_RENDERER_CONFIGS;
    return (
      (r.SETTING_RELATIONSHIPS = { ...M, ...b.relationships }),
      (r.SETTING_RENDERER_CONFIGS = { ...F, ...b.rendererConfigs }),
      e.push(function () {
        (r.SETTING_RELATIONSHIPS = M), (r.SETTING_RENDERER_CONFIGS = F);
      }),
      !0
    );
  }
  function li(e) {
    let t = l("SearchableSettingsList"),
      n = l("SETTING_RENDERER_CONFIG"),
      r = l("getSettingListItems");
    if (!r || !t || !n) return !1;
    let o = Ke(!0),
      a = $n();
    e.push(
      Ot("type", t.SearchableSettingsList, function (s) {
        let [{ sections: m }] = s;
        return Oo(m, a.getLayout());
      })
    ),
      e.push(
        R("getSettingListSearchResultItems", r, function (s, m) {
          m.forEach(function (p) {
            return (
              o.some(function (C) {
                return C.key === p.setting;
              }) && (p.breadcrumbs = ["Vendetta"])
            );
          });
        })
      );
    let i = n.SETTING_RENDERER_CONFIG;
    return (
      (n.SETTING_RENDERER_CONFIG = { ...i, ...a.rendererConfigs }),
      e.push(function () {
        n.SETTING_RENDERER_CONFIG = i;
      }),
      !0
    );
  }
  function Oo(e, t) {
    if (
      !Array.isArray(e) ||
      e.find(function (o) {
        return zn(o, "Vendetta");
      })
    )
      return;
    let n = e.findIndex(function (o) {
      return zn(o, Te.Messages.ACCOUNT_SETTINGS);
    });
    e.splice(n + 1, 0, t);
    let r = e.find(function (o) {
      return zn(o, Te.Messages.SUPPORT);
    });
    r &&
      (r.settings = r.settings.filter(function (o) {
        return o !== "UPLOAD_DEBUG_LOGS";
      }));
  }
  var zn,
    Fo = c(() => {
      "use strict";
      E();
      G();
      Tt();
      h();
      zn = function (e, t) {
        return e?.label === t || e?.title === t;
      };
    });
  function Xn() {
    let e = [Wn(), Yn()];
    return function () {
      return e.forEach(function (t) {
        return t?.();
      });
    };
  }
  var ko = c(() => {
    "use strict";
    Lo();
    Fo();
  });
  function Go(e) {
    let { locale: t } = e;
    try {
      Vo &&
        (Vo.overrideTheme(ui?.theme ?? "dark"),
        Uo && fi.useAMOLEDTheme === 2 && Uo.setAMOLEDThemeEnabled(!0));
    } catch (n) {
      I.error("Failed to fix theme...", n);
    }
    try {
      en.locale(t.toLowerCase());
    } catch (n) {
      I.error("Failed to fix timestamps...", n);
    }
    Rt.unsubscribe("I18N_LOAD_SUCCESS", Go);
  }
  function Ho() {
    return Rt.subscribe("I18N_LOAD_SUCCESS", Go);
  }
  var Vo,
    Uo,
    ui,
    fi,
    $o = c(() => {
      "use strict";
      h();
      E();
      xe();
      (Vo = l("updateTheme", "overrideTheme")),
        (Uo = l("setAMOLEDThemeEnabled")),
        (ui = Pe("ThemeStore")),
        (fi = Pe("UnsyncedUserSettingsStore"));
    });
  async function jo(e) {
    return {
      patcher: K(fr, "unpatchAll"),
      metro: { ...Nt, common: { ...tn } },
      constants: _n,
      utils: Pt,
      debug: K(cn, "versionHash", "patchLogHook", "toggleSafeMode"),
      ui: { components: vn, toasts: on, alerts: Nn, assets: rn, ...Sn },
      plugins: K(gn, "initPlugins", "evalPlugin"),
      themes: K(Jt, "initThemes"),
      commands: K(un, "patchCommands"),
      storage: jt,
      settings: d,
      loader: { identity: window.__vendetta_loader, config: Y },
      logger: I,
      version: Et,
      unload: function () {
        e
          .filter(function (t) {
            return typeof t == "function";
          })
          .forEach(function (t) {
            return t();
          }),
          delete window.vendetta;
      },
    };
  }
  var Ko = c(() => {
    "use strict";
    G();
    xe();
    k();
    Ne();
    Fe();
    he();
    W();
    fn();
    H();
    E();
    h();
    N();
    Q();
    De();
    _();
    Ce();
    fe();
  });
  function startvnotif() {
    window.alert("This mod may break your system. Please be alert and don't do anything stupid, thanks. -5xdf");
  }
  var Wo = {};
  T(Wo, { default: () => mi });
  async function mi() {
    let e = await Promise.all([sn(), nn(), ln(), zt(), Ho(), ho(), Xn(), Cn()]);
    (window.vendetta = await jo(e)),
      e.push(await dn()),
      I.log("5xdfVendettaMod is ready!");
      g("Vendetta mod by 5xdf, Loaded.", f("Check"));
      startvnotif();
      
  }
  var zo = c(() => {
    "use strict";
    Fe();
    fn();
    he();
    W();
    _();
    mo();
    Ro();
    ko();
    $o();
    xe();
    Ko();
  });
  ue();
  console.log("Hello from 5xdfVendettaMod!");
  Object.freeze = Object;
  Object.seal = Object;
  Promise.resolve()
    .then(() => (zo(), Wo))
    .then(function (e) {
      return e.default();
    })
    .catch(function (e) {
      console.log(e?.stack ?? e.toString()),
        alert(
          [
            `Failed to load 5xdfVendettaMod!
`,
            `Build Number: ${ze.Build}`,
            "5xdfVendettaMod: 4c3b0ed",
            e?.stack || e.toString(),
          ].join(`
`)
        );
    });
})();
//# sourceURL=Vendetta