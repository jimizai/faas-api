"use strict";

module.exports = async (event, context) => {
  context.headers({
    ...context.headers(),
    "Content-type": "application/json",
  });
  const result = {
    code: 200,
    data: event,
    message: "success",
    timestamp: Date.now(),
  };

  return context.status(200).succeed(result);
};
