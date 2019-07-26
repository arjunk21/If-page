import React from 'react'

import classes from './footer.module.css'

const Footer = () => (
  <div className={`w-100 ${classes.footer}`}>
    <div className={classes.footerinside}>
      <div className="container">
        <div className={classes.footertop}>
          <p>&copy; 2019 - ALL RIGHTS RESERVED.</p>
          <p>
            <a href="https://pages.leadfollow.io/masterservicesagreement" target="_blank" rel="noopener noreferrer">
              Master Services Agreement |
            </a>{' '}
            <a href="https://pages.leadfollow.io/termsofservice" target="_blank" rel="noopener noreferrer">
              Terms of Service |
            </a>{' '}
            <a href="https://pages.leadfollow.io/privacy" target="_blank" rel="noopener noreferrer">
              Privacy |
            </a>
            <a href="https://pages.leadfollow.io/masterreselleragreement" target="_blank" rel="noopener noreferrer">
              Master Reseller Agreement |
            </a>
          </p>
        </div>
      </div>

      <div className="container">
        <p>
          We know sometimes you just want to talk to a human. That's ok you can contact your GeoFencing Genius using this{' '}
          <a href="https://pages.leadfollow.io/ContactUs/" target="_blank" rel="noopener noreferrer">
            Contact us
          </a>{' '}
          information. <br />
          <a href="tel:3027545880"> Call or Text (302)754-5880 | </a>
          <a href="mailto:Team@LeadFollow.io">Team@LeadFollow.io</a>
        </p>
      </div>

      <div className="container">
        <p>
          <small>
            This site is not a part of the FACEBOOK™ website or FACEBOOK™ INC. Additionally, this site is not endorsed by FACEBOOK™ in any way. FACEBOOK™ is a
            trademark of FACEBOOK™, INC. This landing page makes use of Smart Pixel and Geolocation tracking technologies to remarket and retarget to you online
            and offline. By submitting this form and or interacting with this page via a response to a conversation, you agree to being called at the telephone
            number you've provided, to receiving marketing-related, electronic communications and or physical communications via direct mail from our company or
            associated companies, partners or affiliates, and to our Data Policy. You may withdraw your consent to the calls or unsubscribe from such emails at
            any time. LeadFollow™ is a registered trademark of LeadFollow LLC. All Rights Reserved. Billing by LeadFollow LLC.
          </small>
        </p>
      </div>
    </div>
  </div>
)

export default Footer
