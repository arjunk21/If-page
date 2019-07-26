import _ from 'lodash'
import qs from 'qs'

export const createCCToken = async data => {
  const fields = ['number', 'exp_month', 'exp_year', 'cvc']
  const body = new URLSearchParams(qs.stringify({ card: _.pick(data, fields) }))
  const result = await fetch('https://api.stripe.com/v1/tokens', {
    method: 'post',
    headers: {
      Authorization: `Bearer pk_live_nGv680stbM24ucLjOuMM5K8t`
    },
    body
  }).then(res => res.json())
  if (result.error) {
    const field = fields.reduce((prev, curr) => (String(result.error.param).includes(curr) ? curr : prev), 'number')
    console.log(field)
    return { errors: { [field]: [result.error.message] } }
  }
  return { token: result.id }
}

export const onError = ({ graphQLErrors, networkError }) => {
  console.log('graphQLErrors', graphQLErrors)
  if (graphQLErrors) {
    graphQLErrors.map(error => {
      console.log(error)
      return graphQLErrors
    })
  }
  if (networkError && !graphQLErrors) {
    console.log('networkError', networkError)
  }
}
