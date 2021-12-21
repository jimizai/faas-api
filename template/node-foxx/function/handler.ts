export default async (event: any, context: any) => {
  const result = {
    body: JSON.stringify(event.body),
    "content-type": event.headers["content-type"],
  };

  return result;
};
