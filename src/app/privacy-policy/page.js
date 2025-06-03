import Page from '@/components/Page/Page'

function PrivacyPolicyPage() {
  return (
    <Page black>
      <div className="container text-white">
        <h1>Privacy Policy – Unstoppable Wallet</h1>
        <p className="text-grey">Last Updated: May 28, 2025</p>

        <div>
          <h2 className="pt-4">1. Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Policy outlines how Unstoppable Wallet (“we”, “us”, “our”) handles information in connection
            with our non-custodial Services.
          </p>

          <h2 className="pt-4">2. No Personal Data Collection</h2>
          <p>We do not collect, store, or share personal data such as:</p>
          <ul>
            <li>Names, emails, or phone numbers;</li>
            <li>Private keys or recovery phrases;</li>
            <li>Wallet addresses linked to identities.</li>
            <li>All sensitive data remains stored locally on your device.</li>
          </ul>

          <h2 className="pt-4">3. Analytics</h2>
          <p>
            We may use anonymized, aggregated analytics to understand general usage patterns and improve the app. These insights do not identify
            individual users.
          </p>

          <h2 className="pt-4">4. Third-Party Services</h2>
          <p>
            The app may interact with third-party services (e.g., block explorers or DApps). We are not responsible for the privacy practices of such
            third parties. Please review their policies separately.
          </p>

          <h2 className="pt-4">5. Children’s Privacy</h2>
          Our Services are not intended for users under the age of 13. We do not knowingly collect any data from children.

          <h2 className="pt-4">6. Data Security</h2>
          <p>
            We implement technical and organizational measures to protect the app, but we cannot guarantee absolute security. You are encouraged to
            take
            your own precautions such as device encryption and secure backups.
          </p>

          <h2 className="pt-4">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to review it periodically to stay informed of any changes.
          </p>

          <h2 className="pt-4">8. Contact</h2>
          <p>For questions related to this Privacy Policy, contact us at: hsdao@protonmail.ch</p>
        </div>
      </div>
    </Page>
  )
}

export default PrivacyPolicyPage
