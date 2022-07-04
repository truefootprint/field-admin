let host;

if (window.location.hostname === "localhost") {
  host = "http://localhost:3000";
} else if (window.location.hostname === "staging-field-admin.truefootprint.com") {
  host = "https://staging-field-backend.truefootprint.com";
} else {
  host = "https://field-backend.truefootprint.com";
}

export const HOST = host;
