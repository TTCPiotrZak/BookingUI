module.exports.countries = async (event) => {
  if (process.env.IS_OFFLINE) {
    require("./serverlessOffline");
  }

  try {
    console.log("endpoint called");
    const apiAuthorizationHeader =
      "Basic dG9rZW46djEuYTIyZjQyZWFiNjRmNDA1ZWFlNGM3NDA2NTMxY2E1NDguMGNiMjBlYTNiYzYyNDY3MTgyNWUyNzI5MGIyZDEwODY=";
    const response = await axios({
      url: "https://booking-services.dev.travcorpservices.com/countries",
      method: "GET",
      headers: {
        Authorization: apiAuthorizationHeader,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    const { data = {}, status } = error.response || {
      data: { errors: [] },
      status: 500,
    };

    // return {
    //   statusCode: status,
    //   body: JSON.stringify({
    //     isBookingLocked: getIsBookingLockedError(data),
    //   }),
    return {
      statusCode: status,
      body: JSON.stringify(response.data),
    };
  }
};
