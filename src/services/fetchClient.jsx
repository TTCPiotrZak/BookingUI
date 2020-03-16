/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import axios from 'axios'
import isEmpty from 'lodash.isempty'

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
const tokenKey = 'TAToken'


function createClient () {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await getTravelAgentToken()

      const instance = axios.create({
        baseURL: REACT_APP_API_ENDPOINT,
        headers: {Authorization: token},
      })
      resolve(instance)
    } catch (e) {
      reject(e)
    }
  })
}

function getTravelAgentToken () {
  return new Promise((resolve, reject) => {
    const ssoTravelAgentHelper = new window.SsoTAHelper()
    ssoTravelAgentHelper.getToken(function (key, token) {
      if (key === tokenKey) {
        if (token != null) {
          resolve(token)
        }
        resolve(null)
      }
      reject('SSO: non TA token received on TA callback.')
    })
  })
}




export default async function fetchClient(options) {
  try {
    const client = await createClient()
    const response = await client(options)
    return response.data
  } catch (error) {
      console.error('Error message', error.message)
    }
    throw Error.response || Error.message
  }

function initTravelAgentSSO (initiatorName) {
    return new Promise((resolve, reject) => {
      const initiator = {initiator: initiatorName}
      if (typeof initializeTASso !== 'undefined') {
        window.initializeTASso(initiator).then(resolve)
      } else {
        reject('SSO widget is not loaded')
      }
    })
  }

  function isTravelAgentLoggedIn () {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await this.getTravelAgentToken()

        if (isEmpty(token)) {
          this.logout()
          return resolve({isTravelAgentLoggedIn: false})
        }

        const travelAgentDetails = await this.getTravelAgentDetails(token)
        resolve({isTravelAgentLoggedIn: true, travelAgentDetails})
      } catch (error) {
        this.logout()
        reject(error)
      }
    })
  }



  function getTravelAgentDetails (token) {
    return new Promise((resolve, reject) => {
      const ssoTravelAgentHelper = new window.SsoTAHelper()
      ssoTravelAgentHelper.decryptToken(
        token,
        response => resolve({
          travelAgentInfo: response.TravelAgentInfo,
          token,
        }),
        reject
      )
    })
  }

  function logout () {
    const ssoTravelAgentHelper = new window.SsoTAHelper()
    ssoTravelAgentHelper.logout()
  }


