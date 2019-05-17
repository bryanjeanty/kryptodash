import Router from "next/router";

export const checkSession = ctx => {
  let userId;
  if (typeof window !== "undefined") {
    userId = localStorage.getItem("userData").split("%")[0];
    if (userId.length === 0) {
      Router.replace("/");
    }
  } else {
    if (ctx.req) {
      userId = ctx.req.user._id;
      if (userId.length === 0) {
        ctx.res.redirect("/");
      }
    }
  }
  return userId;
};
