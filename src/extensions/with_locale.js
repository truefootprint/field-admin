const withLocale = requestHandler => (type, resource, params) => {
  const locale = (params.data || {}).locale || (params.filter || {}).locale;

  if (typeof locale !== "undefined") {
    localStorage.setItem("locale", locale);
  }

  return requestHandler(type, resource, params);
};

export default withLocale;
