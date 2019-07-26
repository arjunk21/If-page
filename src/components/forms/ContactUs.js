import React, { useState } from 'react'
import Formol, { Field } from 'formol'

import { actions } from '../../lib/handleForms'

const ContactUsForm = () => {
  const [submited, setSubmited] = useState(false)

  const handleSubmit = async data => {
    await actions.contactUs(data)
    setSubmited(true)
  }

  return submited ? (
    <div>
      <h2>
        Your message has been submitted. Our team will be in contact with you within the next 48 business hours. If you would like a faster response please call
        our team.
      </h2>
    </div>
  ) : (
    <Formol onSubmit={handleSubmit} classes={{ submit: 'btn btn-primary btn-lg' }} submitText="Submit" noCancel>
      <Field className="form-group" name="name" classNameModifiers={{ label: ['form-group-label'] }} required>
        Name
      </Field>
      <Field className="form-group" name="email" type="email" required>
        Email Address
      </Field>
      <Field className="form-group" type="text" name="phone">
        Phone Number
      </Field>
      <Field className="form-group" name="message" type="area" required>
        How can we help?
      </Field>
    </Formol>
  )
}

export default ContactUsForm
