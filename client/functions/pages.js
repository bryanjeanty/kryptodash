import Router from "next/router";

export const checkSession = ctx => {
  let userData;
  if (typeof window !== "undefined") {
    userData = { userDataString: localStorage.getItem("userData") };
    if (Object.keys(userData).length === 0) {
      Router.replace("/");
    }
  } else {
    if (ctx.req) {
      userData = ctx.req.user;
      if (
        typeof userData === "undefined" ||
        Object.keys(userData).length === 0
      ) {
        ctx.res.redirect("/");
      }
    }
  }
  return userData;
};

export const getSession = ctx => {
  let userData;
  if (typeof window !== "undefined") {
    userData = { userDataString: localStorage.getItem("userData") };
  } else {
    if (ctx.req) {
      userData = ctx.req.user;
    }
  }
  return userData;
};
