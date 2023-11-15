
// Imports
import * as _0_0 from "/V:/justAnArthur/university/VAVJS/assignments/03 react-rides-tracker/src/api/auth/login.js";
import * as _0_1 from "/V:/justAnArthur/university/VAVJS/assignments/03 react-rides-tracker/src/api/auth/register.js";
import * as _0_2 from "/V:/justAnArthur/university/VAVJS/assignments/03 react-rides-tracker/src/api/user.js";


export const routeBase = "/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/auth/login.js?fn=default",
        method     : "use",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/auth/login.js?fn=GET",
        method     : "get",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/auth/login.js?fn=PUT",
        method     : "put",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/auth/login.js?fn=POST",
        method     : "post",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/auth/login.js?fn=PATCH",
        method     : "patch",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/auth/login.js?fn=DELETE",
        method     : "delete",
        route      : "/auth/login",
        path       : "/api/auth/login",
        url        : "/api/auth/login",
        cb         : _0_0.DELETE,
      },
  _0_1.default && {
        source     : "src/api/auth/register.js?fn=default",
        method     : "use",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.default,
      },
  _0_1.GET && {
        source     : "src/api/auth/register.js?fn=GET",
        method     : "get",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.GET,
      },
  _0_1.PUT && {
        source     : "src/api/auth/register.js?fn=PUT",
        method     : "put",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.PUT,
      },
  _0_1.POST && {
        source     : "src/api/auth/register.js?fn=POST",
        method     : "post",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.POST,
      },
  _0_1.PATCH && {
        source     : "src/api/auth/register.js?fn=PATCH",
        method     : "patch",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.PATCH,
      },
  _0_1.DELETE && {
        source     : "src/api/auth/register.js?fn=DELETE",
        method     : "delete",
        route      : "/auth/register",
        path       : "/api/auth/register",
        url        : "/api/auth/register",
        cb         : _0_1.DELETE,
      },
  _0_2.default && {
        source     : "src/api/user.js?fn=default",
        method     : "use",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.default,
      },
  _0_2.GET && {
        source     : "src/api/user.js?fn=GET",
        method     : "get",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.GET,
      },
  _0_2.PUT && {
        source     : "src/api/user.js?fn=PUT",
        method     : "put",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.PUT,
      },
  _0_2.POST && {
        source     : "src/api/user.js?fn=POST",
        method     : "post",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.POST,
      },
  _0_2.PATCH && {
        source     : "src/api/user.js?fn=PATCH",
        method     : "patch",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.PATCH,
      },
  _0_2.DELETE && {
        source     : "src/api/user.js?fn=DELETE",
        method     : "delete",
        route      : "/user",
        path       : "/api/user",
        url        : "/api/user",
        cb         : _0_2.DELETE,
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
