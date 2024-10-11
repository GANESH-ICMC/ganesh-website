export const loadScriptFromURL = (scriptURL) => {
  const script = document.createElement("script");
  script.src = scriptURL;
  script.async = true;
  document.body.appendChild(script);
}
