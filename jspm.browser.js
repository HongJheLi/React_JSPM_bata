SystemJS.config({
  baseURL: "/",
  trace: true,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "React_JSPM_bata/": "./"
  }
});
