module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        className: process.env.CLASS_NAME
        //        input: event,

      },
      null,
      2
    ),
  };
};
