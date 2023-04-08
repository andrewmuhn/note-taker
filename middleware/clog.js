// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
  const fgCyan = "\x1b[36m";
  const fgGreen = "\x1b[32m";
  const fgOrange = "\x1b[33m";
  const fgRed = "\x1b[31m";

  switch (req.method) {
    case "GET": {
      console.info(`🫴 📗 ${fgGreen}${req.method} request to ${req.path}`);
      break;
    }
    case "POST": {
      console.info(`🫳 📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case "DELETE": {
      console.info(`👋 📙 ${fgOrange}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`🤷 📕 ${fgRed}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
