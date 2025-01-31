'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const SubscriptionForm = ({ formCode, formId }) => {
  const className = `ml-subscribe-form ml-subscribe-form-${formId}`

  useEffect(() => {
    // Ensure the form is initialized after scripts are loaded
    if (window.ml_jQuery) {
      window.ml_jQuery(`#mlb2-${formId} form`).on('submit', function (e) {
        e.preventDefault()
        console.log('Form submitted')
      })
    }
  }, [])

  return (
    <div id={`mlb2-${formId}`} className={className}>
      <Script
        src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.ml_jQuery = window.jQuery.noConflict(true)
        }}
      />

      <Script
        src="https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f"
        strategy="afterInteractive"
      />

      <form method="POST" action={`https://app.mailerlite.com/webforms/submit/${formCode}`} data-form={formCode} data-id={formId}>
        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <label htmlFor="newsletter1" className="visually-hidden">
            Email address
          </label>
          <input
            id="newsletter1"
            type="email"
            className="form-control bg-steel-10"
            placeholder="Email address"
            name="fields[email]"
            required
          />
          <button className="btn btn-warning rounded-5 px-4" type="submit">
            Subscribe
          </button>
        </div>
        <p className="my-3">
          Subscribe to our newsletter to get new products, guides, and cheat sheets
          when they are published.
        </p>
      </form>
    </div>
  )
}

export default SubscriptionForm
