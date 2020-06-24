export async function sreceiveCountries(bookingReference) {
  const API_URL = "http://localhost:9000/api";

  const token =
    "A4Miwv9Z8qRmAhc_hvkzKdkKpE1Njk6u0JMo0ICxuciFwE5lPcoCPwx3leqm7nhT0EIDJhSkOd8M0E-mgCnmtm9095h_W7pzibFIdCDMDvL1eaEBaIeYg9aTL7g0O2AD_PCyawxsEUWuNDokOPAbj0vDr5ZWzh_ra0IHbJGB20jazHLIm9p9jGPp4oP5PIVfk1BFLw03buIRX--s7YVoBfQT8E_InAoPfbAb-JESe8MfjhnjPFK0VyuDWQLgPCExNIRHgRpiTQfDuXgYStSof84L1-WAM-7bM41_pPTTBQ3bppmwn_KdlhkSArGqPt-6tIyjGRuzkVaW0ljXQGZ_-Mzm_tFGiXyMnZg82iZWHgTxkbPk8dsC4r7J8kpctrSkaDKfK6s0UZ1xdqojoIP2t91_2CKz0bVmoXaeFBr32nPxJhqEMnJe_LP6ziycWBsJ-_An3_rkfykeTmK-PxOr2KQkrjH6khp-ZlFLr2HfhVa0ickIGSfzbIa1nhLDHCSDp0ISzCf4rfHcT8Cnlpa-2Akg8JiVh_cyB-p7k3_adzg4GmaVhwn9NN3eFuKlIfaDC3jX3NsDTJE9qBltV6Ehvo36gvIiuWFJrw6xd6y6k2belWpe6emOK-74b66uap9DJvQgGbp1c_BfP3VuMZEbMf2RaR5XfPZ_bG_T99lY4SfmaFoUXOjZgZP_zMNRpANm5oQrRP5iudg-jAA1G1LFvLi6xBwDvUJh4i3LXGUvNzQ";
  const requestOptions = {
    method: "GET",
    headers: { Authorization: token },
  };
  // const response = await fetch(`http://localhost:9000/api/bookings/${bookingReference}`, requestOptions)

  return fetch(API_URL + "/countries", requestOptions)
    .then(handleResponse)
    .then((data) => {
      return Promise.resolve(data);
    });
}

async function handleResponse(response) {
  const data = await response.json();
  if (response.status === 200) {
    Promise.resolve();
  }
  if (response.status === 401) {
    return Promise.reject();
  }
  return data;
}
