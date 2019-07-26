export const apiUrl = pathname => `https://api.leadfollow.io/v1/${pathname}`

export const actions = {
  async leadCapture(data) {
    return fetch(apiUrl('leads'), {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },
  async contactUs(data) {
    return fetch(apiUrl('contactus'), {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

export const getFormData = target =>
  Array.from(target.elements || [])
    .filter(d => d.name)
    .reduce((acc, d) => ({ ...acc, [d.name]: d.value }), {})

export default async (success = () => true) => {
  window.jQuery('form[data-action]').submit(async function(event) {
    event.preventDefault()
    const form = event.target
    const action = window.jQuery(form).data('action')
    const redirect = window.jQuery(form).data('redirect')
    const handle = actions[action]
    const data = getFormData(form)
    let result = null

    console.log('handleForm', action, data)
    if (handle) {
      result = await handle(data)
    }
    if (redirect) {
      window.location.href = redirect
    } else {
      await success({ data, result })
    }

    return false
  })
}
