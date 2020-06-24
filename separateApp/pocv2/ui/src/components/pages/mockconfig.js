const ConfigurationObject = {
  standardNumberPrePostNights: 3,
  inlineOfferDelaySeconds: 10,
  brandPages: {
    termsAndConditions:
      "https://www.luxurygoldvacations.com/us/information/booking-conditions",
    privacyPolicy:
      "https://www.luxurygoldvacations.com/us/information/privacy-policy",
    usefulLinks:
      "/itropics/NewBookingWizard/SupplementalPages/UsefulLinks/LGUSAS/",
    brandWebsite: "https://www.luxurygoldvacations.com/",
    travelAgentHomePage: "https://www.luxurygold.com/agents",
  },
  confirmation: {
    MMB_callToAction:
      "<p>Please complete Registration as soon as possible after booking, but no later than 30 days prior to departure. In order to release your documents, we will need your First Name, Last Name, Email Address and Phone Number.</p><p><a class='mmb' data-id='mmb-link' href='{0}'>Manage your booking</a></p>",
  },
  passengers: {
    travelInsurance_callToAction:
      "Get peace of mind with optional <a href='{0}' target='_blank'>{1}</a>",
  },
  features: {
    emailQuote: true,
    shouldSendQuoteEmailOnError: true,
    showDisplayablePromotions: false,
    ageRestriction: false,
    dobRequired: true,
    showPurgeCachePage: true,
    purgeCacheNeedsAuth: false,
    showApiEndpoints: true,
    enableTestLogin: true,
    itropicsAirPromos: true,
    sellingCompanyEmailNotifications: true,
    ssoEnabled: true,
    taMiscellaneousProductBreakdown: true,
    apiBookingEnabled: true,
    paypalEnabled: true,
    enableLoginByEmail: false,
    clientAddressMandatory: true,
    clientEmailAddressMandatory: true,
    sendConfirmationEmails: true,
    enableFilterByDirectFlight: true,
    devLinks: true,
    apiBookingsDirectInTropics: true,
    taCommissionBreakdown: true,
    enableFlightSorting: true,
    cardPaymentEnabled: true,
    apiDirectCardPaymentEnabled: true,
    hideSwaggerEndPoints: [
      "/consultants",
      "/access-token/{accessTokenType}",
      "/user",
      "/brands/{brand}/tours/{tourId}/precompute",
      "/travel-consultant/list/ids",
      "/travel-consultant/title",
      "/travel-consultant/{id}",
      "/travel-agency/{id}/city",
      "/travel-agency/{id}/country",
      "/travel-agency/{id}/consultant/list/ids",
      "/travel-agency",
      "/amadeus/booking/{bookingId}/flight/{amadeusId}",
      "/amadeus/booking/{bookingReference}/notes",
      "/flights/promised/brand/{brand}/region/{region}/price/from/{departureCode}/on/{departureDate}/to/{destinationCode}/returning-from/{returningCode}",
    ],
    useOperatingCompanyTax: false,
    realTimeQuoteApi: true,
    api_frequentTravellerDiscount: true,
    api_additionalProducts: true,
    bookingNotifications: false,
    apiManageBookingLink: true,
    bookingEngineMayBookInTropics: true,
    allowUngeneratedApiKeys: true,
    ungeneratedApiKeysGracePeriod: "1d",
    onHoldEnabled: true,
    showWhitelabelLink: true,
    hideToursFromApiViewBooking: false,
    api_schemaValidationEnabled: true,
    clearSessionIfSkinDontMatch: true,
    tropicsFlights: true,
    showFTD: true,
    showPastGuestBenefit: true,
    extras: {
      prePostAccommodation: true,
      additionalTrips: true,
    },
    upliftEnabled: true,
    showEdocs: true,
    discountsApi: true,
    combinePaymentSchedule: true,
    manageMyBookingsEndpoints: [
      "/travel-agent/bookings",
      "/internal/bookings/{bookingReference}",
    ],
    zipMoney: false,
    useKibana: false,
    restrictPromotions: false,
    standardPriceStrikeThroughAllowed: true,
    experimentsEnabled: false,
  },
  email: {
    from: "webleads@insightvacations.com",
    bookingNotificationsTo: "online.booking@ttc.com",
    notify: "webleads@insightvacations.com",
  },
  errorMessages: {
    titleGenderMismatch: "Passenger title must match gender",
    uszipcodeInvalid: "Please enter 5-9 numbers for your ZIP code",
    passengerTypeInvalid: "Passenger type must be adult or child",
    required: "Please enter your {0}.",
    minLength: "Please enter at least {0} characters for your {1}.",
    maxLength: "Please enter no more than {0} characters for your {1}.",
    pattern: "Please enter a valid value for your {0}.",
    email: "Please enter a proper email address, e.g. my-email@address.com",
    number: "Please enter numbers only for your {0}.",
    phoneNumberInvalidInternationalCode: "Invalid international code",
    phoneNumberInvalid:
      "Phone number invalid. Please enter a valid phone number including Area Code.",
    mobileNumberInvalid:
      "Mobile number invalid. Please enter a valid mobile number.",
    termsAndConditions:
      "Please check the box above to confirm you agree to the terms and conditions.",
    creditCardDate: "Please select a valid card expiry date.",
    unsupportedCardType: "Only {0} cards are supported.",
    securityCodeLength: "Please enter your {0} digit security code",
    partySize: "Please choose up to 8 passengers.",
    childrenAges: "Please enter the ages of all children.",
    noRoomsAvailable:
      "Sorry there are no rooms available for this passenger combination.",
    ageNotMatchingDOB:
      "The date of birth entered does not match the age of the child on the date of departure.",
    dateFormat: "Please enter the date with the following format: {0}",
    frequentTravellerDiscount:
      "Please select the passengers who have travelled with Trafalgar in the past.",
    flightDepartureDate: "Please select a date before the tour starts",
    flightReturnDate: "Please select a date after the tour ends",
    flightDepartureDateBefore: "Please select a date before the tour starts",
    flightDepartureDateAfter: "Please select a date after the tour ends",
    flightDepartureAirport:
      "Please select a departure airport from the suggestions.",
    flightArriveAirport:
      "Please select an arrival airport from the suggestions.",
    flightsTripNotesRead: "You must read the Trip Notes before booking flights",
    flightArriveDepartureSameAirport:
      "Departure and arrival airports cannot be the same.",
    flightArriveDepartureSameCountry:
      "The arrival airport must be in the same country as the original departure airport.",
    multiCityFlightDateSequence:
      "Please select a date on or after the previous flight.",
    flightDepartureDateInPast: "Please select a date in the future",
  },
  flights: {
    countryMismatch:
      "The return airport must be in the same country as the origin airport",
    incorrectNumberOfFlights: "A search must include at least two flights",
    invalidAirportCode: "The airport code '${airportCode}' is invalid.",
    invalidCabinClass: "The cabin class '${cabin}' is invalid.",
    invalidAirlineCode:
      "The airline code(s) '${airlines}' are invalid for this brand and region.",
    startCountryNotAllowed:
      "The start airport must be in the country: '${countryCode}'",
    endCountryNotAllowed:
      "The end airport must be in the country '${countryCode}'",
    noResults: "No results for this search",
    noCachedFlights: "No flight data for this ID",
    disabledMessage: "Flights are not available for this region",
    noAirportCode: "Segment ${segment} must have a ${destination} airport",
    searchResultsExpires: "1hr",
    invalidPartyForItinerary:
      "Flights exist for this itinerary but not this party combination",
    cannotFlyDuringTourMessage: "Flights must not take place during the tour",
    bookFlightRecommendationMessage:
      "We do not recommend booking your own flights prior to a trip being confirmed",
    brochuresFlightSuppression: ["LGUSUS19G", "LGLAUS19G"],
    pricing: "bundled",
    biasWarning:
      "The flights are not displayed in neutral order and certain airlines' fare, schedule or availability information is given preferential treatment in how it is displayed.",
    mode: "enabled",
    isMultiCityEnabled: true,
    requireTripNotesRead: true,
    defaultDepartTime: "15:00",
    defaultReturnTime: "15:00",
  },
  promisedFlights: {
    bookFlightRecommendationMessage:
      "We do not recommend booking your own flights prior to a trip being confirmed",
    pricing: "bundled",
  },
  validation: {
    uszipcode: "^[0-9]{5}-?([0-9]{4})?$",
  },
  roomsAvailability: {
    roomOnRequest:
      "The room you selected is on request. If you wish to proceed with this request, please click 'Continue'. Alternatively, click 'Change Options' to update your room selection or return to <a href='{0}' target='_blank'>{1}</a> to select a different date.",
    tripOnRequest:
      "The departure date you selected is on request. If you wish to proceed with this request, please click 'Continue'. Alternatively, you may wish to return to <a href='{0}' target='_blank'>{1}</a> to select a different date.",
  },
  styleCode: "LG",
  brandLogo: "lg-logo.svg",
  brandName: "Luxury",
  brandFamilyDisplayText: "Luxury Gold",
  phone: {
    general: "http://www.luxurygold.com/contact-us",
    groupBookings: "http://www.luxurygold.com/contact-us",
  },
  insurance: {
    text: "Travel Protection",
    productInfoUrl:
      "https://affinitytravelcert.com/document/pdfs/iprUS_Landing.html",
  },
  confirmationEmail: {
    logo: "lgusas.png",
    brandName: "Luxury Gold",
    nameWithTitle: true,
    guestNameField: "Guest Name: ",
    tourSummaryTitle: "Tour Summary",
    tourSummaryPassengerSubTotalTemplate: "div",
    hasTravelProtection: true,
    thankYouTemplate: "thankYou",
    quoteReferenceNumberTemplate: "pleaseQuote",
    from: "contactus@insightvacations.com",
    notify: "no-reply@insightvacations.com",
  },
  gtmContainerIds: ["GTM-MJQDL6"],
  why: [
    "Up to the minute availability",
    "Instant booking confirmation",
    "No hidden fees or charges",
  ],
  testimonials: [
    {
      text:
        "Very well looked after, hotels were excellent, concierge professional and very well informed.",
      author: "Peter from Canada",
    },
    {
      text:
        "Exciting experience. Well planned and well executed by top-notch professionals. Excellent accommodations.",
      author: "Cherie from USA",
    },
    {
      text:
        "All hotels, tours, experiences and service was exceptional with great attention to detail.",
      author: "Diane from Canada",
    },
    {
      text:
        "Tour was comprehensive and covered many highlights of the magnificent Canadian Rockies. Each day brought many unforgettable memories.",
      author: "Marilyn from Australia",
    },
    {
      text:
        "A wonderful experience, superb hotels, excellent guide, great itinerary.",
      author: "Glynis from the UK",
    },
  ],
  showFeefoLogoWithTestimonials: true,
  preferredAirlines: [
    {
      code: "EI",
      name: "Aer Lingus",
    },
    {
      code: "AB",
      name: "Air Berlin ",
    },
    {
      code: "AC",
      name: "Air Canada",
    },
    {
      code: "AF",
      name: "Air France ",
    },
    {
      code: "NZ",
      name: "Air New Zealand",
    },
    {
      code: "CT",
      name: "Alitalia S.a.S.p.a",
    },
    {
      code: "AA",
      name: "American Airlines",
    },
    {
      code: "OS",
      name: "Austrian Airlines",
    },
    {
      code: "AV",
      name: "Avianca",
    },
    {
      code: "BA",
      name: "British Airways",
    },
    {
      code: "SN",
      name: "Brussels Airlines",
    },
    {
      code: "DL",
      name: "Delta Airlines",
    },
    {
      code: "EK",
      name: "Emirates",
    },
    {
      code: "EY",
      name: "Etihad Airways",
    },
    {
      code: "BR",
      name: "Eva Airways",
    },
    {
      code: "AY",
      name: "Finnair",
    },
    {
      code: "IB",
      name: "Iberia",
    },
    {
      code: "FI",
      name: "Iceland Air",
    },
    {
      code: "KL",
      name: "Klm Royal Dutch Airlines",
    },
    {
      code: "KE",
      name: "Korean Air",
    },
    {
      code: "LP",
      name: "Lan Peru",
    },
    {
      code: "XL",
      name: "Latam Airlines Ecuador",
    },
    {
      code: "LA",
      name: "Latam Airlines Group",
    },
    {
      code: "LO",
      name: "Lot Polish Airlines",
    },
    {
      code: "LH",
      name: "Lufthansa",
    },
    {
      code: "QF",
      name: "Qantas Airways",
    },
    {
      code: "SK",
      name: "Scandinavian Airlines",
    },
    {
      code: "SA",
      name: "South African Airways",
    },
    {
      code: "LX",
      name: "Swiss International Air Lines",
    },
    {
      code: "TK",
      name: "Turkish Airlines Inc",
    },
    {
      code: "UN",
      name: "United Airlines",
    },
    {
      code: "VA",
      name: "Virgin Atlantic",
    },
  ],
  faqs: [
    {
      groups: ["General", "Promotion Codes"],
      question: "I have a promo code / voucher. How do I redeem it?",
      answer:
        "Enter your code into the 'Add promo coupon' underneath the full cost break down of step 1, 'Tour Overview' and click 'Add'. You will see the total update to reflect the discount.",
    },
    {
      groups: ["Promotion Codes"],
      question: "My promotion code isn't working! What do I do?",
      answer:
        "Please check that the code you are using is valid on the trip you are trying to book and that you have entered it correctly. If you are still having problems, please contact us on {{phone}}.",
    },
    {
      groups: ["General", "Flights", "Price"],
      question: "Is airfare included in the total trip price?",
      answer:
        "Some of our trips have internal flights included within the price, however, you will need to purchase flights to/from your trip start/end cities. You can add these flights at a later date after you have secured your place on the trip.",
    },
    {
      groups: ["Flights"],
      question: "How much do flights cost?",
      answer:
        "<p>Flight prices will vary depending on where you are departing from and travelling to.</p><p>Airfares do not need to be booked at the same time as your trip and you can continue to book and secure your place on this trip.</p><p>If you are interested in booking through us, we are happy to provide you a quote for your airfare.</p>",
    },
    {
      groups: ["Flights"],
      question: "What if I need to change my flight?",
      answer:
        "You can contact us on {{phone}} and one of our Travel Experts will be happy to try and accommodate your request.",
    },
    {
      groups: ["Flights"],
      question: "I'm unable to price airfare. Help!",
      answer:
        "<p>Please contact us at {{phone}} and someone will happily assist you.</p><p>Airfare does not need to be booked at the time of your trip, but we can absolutely provide you a quote as well as book it for you.</p>",
    },
    {
      groups: ["Special Requirements"],
      question: "I have special dietary needs. Can you accommodate?",
      answer:
        "Yes. If you have special dietary requirements, please specify these in the 'Special Requests' on the 'Passenger Details' section.",
    },
    {
      groups: ["General"],
      question:
        "What kind of changes to my trip can I make and how do I make changes?",
      answer:
        "You can add any optional experiences you like via our Manage My Booking facility. For any other changes, please contact us on {{phone}}.",
    },
    {
      groups: ["General"],
      question: "I need to speak to someone. How can I contact you?",
      answer: "You can contact us on {{phone}}.",
    },
    {
      groups: ["Payments"],
      question: "Do you offer payment installments?",
      answer:
        "<p>We require a deposit to be made for your trip three days from booking. After that point, you will be able to pay for the balance of your trip as you would like through our Manage My Booking facility.</p><p>All payments must be made 45 days prior to departure.</p>",
    },
    {
      groups: ["Payments"],
      question: "What payment methods do you use?",
      answer:
        "We accept credit/debit card payments (Visa, MasterCard, American Express) and PayPal.",
    },
  ],
  emailQuote: false,
  country: "United States Of America",
  countryCode: "US",
  internationalCode: "+1",
  dateFormat: "MM/DD/YYYY",
  showBaggageNotes: true,
  localisedWords: {
    region: "State",
    city: "City",
    travelled: "traveled",
    travelling: "traveling",
  },
  departureDayLimit: 7,
  sellingCompanyCode: "LGUSAS",
  name: "Luxury Gold",
  // TODO devops issue
  webUrl: "http://localhost:4011/",
  v4apiUrl: "https://booking-services.eu.ngrok.io.ngrok.io/",
  itropicsUrl: "http://londvwl01.corp.ttc/",
  paymentServicesUrl: "https://payment-services.dev.travcorpservices.com/",
  zipMoneyUrl: "https://payment-proxy.dev.travcorpservices.com/",
  environment: "local",
  bookingServicesContainerIds: ["GTM-MGK6NCH"],
  ssoUrl: "https://sso.dev.travcorpservices.com/",
  autoCancelBookingTimeoutModal: "2400",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTAwNjkwMjB9.cDGosbDEkzlfNbY5YArYbWo0f5efTEtXK2E1X0hXGIQ",
};

export default ConfigurationObject;