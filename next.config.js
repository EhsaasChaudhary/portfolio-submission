const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  env: {
    EMAILJS_SERVICE_ID: "service_h2zywgh",
    EMAILJS_TEMPLATE_ID: "template_jt7ho06",
    EMAILJS_PUBLIC_KEY: "O9gfw24UaIQVHt0Yw",
  },
};
