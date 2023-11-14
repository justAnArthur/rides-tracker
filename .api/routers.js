
// Imports
import * as _0_0 from "/V:/justAnArthur/university/VAVJS/assignments/03 react-rides-tracker/src/api/index.js";


export const routeBase = "/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/index.js?fn=default",
        method     : "use",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/index.js?fn=GET",
        method     : "get",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/index.js?fn=PUT",
        method     : "put",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/index.js?fn=POST",
        method     : "post",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/index.js?fn=PATCH",
        method     : "patch",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/index.js?fn=DELETE",
        method     : "delete",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_0.DELETE,
      }
].filter(it => it);

export const routers = internal.map((it) => { 
  const { method, path, route, url, source} = it;
  return { method, url, path, route, source };
});

export const endpoints = internal.map((it) => it.method?.toUpperCase() + '\t' + it.url);

const FN = (value) => value;

export const applyRouters = (applyRouter, opts = {} ) => {
  const {pre = FN, post = FN, hoc = FN} = opts;
  pre(internal)
    .forEach((it) => {
    it.cb = hoc(it.cb, it);
    applyRouter(it);
  });  
  post(internal);
};
