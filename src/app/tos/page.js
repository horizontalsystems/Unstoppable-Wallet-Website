import Page from '@/components/Page/Page'

function TosPage() {
  return (
    <Page black>
      <div className="container text-white">
        <h1>Terms of Service – Unstoppable Wallet</h1>
        <p className="text-grey">Last Updated: May 28, 2025</p>

        <div>
          <h2 className="pt-3">1. Introduction</h2>
          Unstoppable Wallet (“we”, “us”, or “our”) provides a non-custodial cryptocurrency wallet through our website, mobile apps, and related
          services (collectively, the “Services”). By using our Services, you agree to these Terms of Service (“Terms”) and our associated policies.

          <h2 className="pt-3">2. Agreement to Terms</h2>
          <ul>
            <li>By accessing or using our Services, you confirm that you:</li>
            <li>Have read, understood, and accepted these Terms;</li>
            <li>Have the legal capacity and authority to enter into this agreement;</li>
            <li>Agree to be bound by all applicable laws and regulations.</li>
            <li>If you do not agree with these Terms, please do not use our Services.</li>
          </ul>

          <h2 className="pt-3">3. Non-Custodial Nature</h2>
          <p>
            Unstoppable Wallet is a non-custodial wallet. We do not have access to or store your private keys, recovery phrases, or any personal
            account
            credentials. You are solely responsible for securely managing your seed phrase and safeguarding your funds.
          </p>

          <h2 className="pt-3">4. No Financial Advice</h2>
          <p>
            We do not provide any financial, investment, or legal advice. Information in the app is provided for general informational purposes only
            and does not constitute any form of guidance or recommendation.
          </p>

          <h2 className="pt-3">5. Prohibited Use</h2>
          <p>You may not use the Services for any unlawful, harmful, or abusive purposes including, but not limited to:</p>
          <ul>
            <li>Money laundering or financing terrorism;</li>
            <li>Circumvention of sanctions or regulations;</li>
            <li>Engaging in fraudulent or deceptive practices.</li>
          </ul>

          <h2 className="pt-3">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Unstoppable Wallet shall not be liable for any loss of funds, data, or damages arising from:</p>
          <ul>
            <li>Your use or misuse of the app;</li>
            <li>Security breaches or user error;</li>
            <li>Blockchain failures or smart contract risks.</li>
          </ul>

          <h2 className="pt-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms at any time. We will notify you by updating the “Last Updated” date or through the
            app.
            Continued use after changes means you accept the revised Terms.
          </p>

          <h2 className="pt-3">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [insert applicable jurisdiction], without regard to its conflict of laws principles.
          </p>

          <h2 className="pt-3">9. Contact</h2>
          <p>
            For questions regarding these Terms, contact us at: <a href="hsdao@protonmail.ch">hsdao@protonmail.ch</a>
          </p>
        </div>
      </div>
    </Page>
  )
}

export default TosPage
