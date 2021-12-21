"use strict";
// const request = require("request");
const path = require("path");

// const getSync = (url) =>
//   new Promise((resolve, reject) => {
//     request(url, (err, _res, body) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(body);
//       }
//     });
//   });

module.exports = async (event, context) => {
  context.headers({
    ...context.headers(),
    "Content-type": "application/json",
  });
  // const res = await getSync(path.resolve(event.path, "function/node-simple"));

  const result = {
    code: 200,
    data: "handler2",
    message: "success",
    timestamp: Date.now(),
  };

  return context.status(200).succeed(result);
};
