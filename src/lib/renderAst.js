import React from 'react'
import rehypeReact from 'rehype-react'

/*
import CalculatorWidget from '../components/CalculatorWidget'
import Calendly from '../components/Calendly'
import MailchimpLeadCapture from '../components/MailchimpLeadCapture'
import ContactUsForm from '../components/forms/ContactUs'
*/

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    //'calculator-widget': CalculatorWidget,
    //calendly: Calendly,
    //'mailchimp-lead-capture': MailchimpLeadCapture,
    //'contact-us-form': ContactUsForm
  }
}).Compiler

export default renderAst
