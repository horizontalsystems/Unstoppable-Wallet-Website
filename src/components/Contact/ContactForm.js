import React from 'react'

import './ContactForm.scss'

class ContactForm extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f';
    this.div.appendChild(script);
  }

  render() {
    const { formId, formCode } = this.props
    const action = `https://app.mailerlite.com/webforms/submit/${formCode}`

    return (
      <div id={`mlb2-${formId}`} className={`ml-subscribe-form ml-subscribe-form-${formId}`} ref={e => (this.div = e)}>
        <form className="Contact-form" action={action} data-code={formCode} method="post">
          <input type="hidden" name="ml-submit" value="1" />

          <div className="Contact-form-group">
            <input type="text" className="form-control" name="fields[name]" placeholder="Name" />
            <input type="email" className="form-control" name="fields[email]" placeholder="Email" required />
          </div>
          <div className="Contact-form-group">
            <textarea name="fields[message]" maxLength="255" rows="5" placeholder="Message" required />
          </div>

          <div className="Contact-form-group">
            <label className="Contact-checkbox-wrap">
              <div className="Contact-action">
                <button type="submit" className="btn primary">Send</button>
                <button type="button" className="btn loading" disabled="disabled">Send</button>
              </div>
            </label>
          </div>
        </form>

        <div className="Contact-success">
          <h4>Thank you!</h4>
          <p>Done! Check your email.</p>
        </div>
      </div>
    )
  }
}

export default ContactForm
