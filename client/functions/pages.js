import Router from "next/router";

// export const checkSession = ctx => {
//   let userId;
//   if (typeof window !== "undefined") {
//     userId = localStorage.getItem("userData").split("%")[0];
//     if (userId.length === 0) {
//       Router.replace("/");
//     }
//   } else {
//     userId = ctx.req.user._id;
//     if (userId.length === 0) {
//       ctx.res.redirect("/");
//     }
//   }
//   return userId;
// };

export const checkSession = ctx => {
  let userId;
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("userData");
    if (userData) {
      userId = userData.split("%")[0];
      return userId;
    } else {
      if (window.location.pathname === "/") {
        return {};
      }
      Router.replace("/");
      return {};
    }
  } else {
    if (ctx.req.user) {
      userId = ctx.req.user._id;
      return userId;
    } else {
      if (ctx.req.url === "/") {
        return {};
      }
      ctx.res.redirect("/");
      return {};
    }
  }
};
