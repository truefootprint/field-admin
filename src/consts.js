let host;

if (window.location.hostname === "localhost") {
  host = "http://localhost:3000";
} else {
  host = "https://reporter-backend.truefootprint.com";
}

export const HOST = host;
