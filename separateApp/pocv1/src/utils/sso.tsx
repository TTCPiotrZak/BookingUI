// import isEmpty = require('lodash.isempty')

const tokenKey = 'TAToken'

// export default function getTravelAgentToken (): Promise<any> {
//     return new Promise((resolve, reject) => {
//       const ssoTravelAgentHelper = new window.SsoTAHelper()
//       ssoTravelAgentHelper.getToken(function (key: string, token: unknown) {
//         if (key === tokenKey) {
//           if (token != null) {
//             resolve(token)
//           }
//           resolve(null)
//         }
//         reject('SSO: non TA token received on TA callback.')
//       })
//     })
//   }

export default function getTravelAgentToken (): Promise<any> {
  return new Promise((resolve, reject) => {
    const token = 'test';
        if (1 === 1) {return resolve(token)}
      reject('SSO: non TA token received on TA callback.')
    })
  }
