import Page from '@/components/Page/Page'

function TosPage() {
  return (
    <Page black>
      <div className="container text-white">
        <h1>Terms of Service – Unstoppable Wallet</h1>
        <p className="text-grey">Last Updated: May 28, 2025</p>

        <div>
          <h2 className="pt-3">1. Intro</h2>
          Hey there. You’re using Unstoppable Wallet — a non-custodial crypto wallet built for real self-custody and
          financial freedom.
          This page lays out what you’re agreeing to when you use our app, website, or any of our services (we’ll just
          call them “the Services”).

          <p>By using Unstoppable, you’re saying:</p>
          <ul>
            <li>You’ve read this</li>
            <li>You get it</li>
            <li>You're cool with it</li>
            <li>If not, no hard feelings - just don’t use the app.</li>
          </ul>

          <h2 className="pt-3">2. Using the Wallet</h2>
          <p>By using the Services, you confirm that:</p>
          <ul>
            <li>You’re legally allowed to do so;</li>
            <li>You understand what this wallet does (and doesn’t do);</li>
            <li>You’ll follow the laws that apply to you wherever you are.</li>
          </ul>

          <h2 className="pt-3">3. You’re in Control</h2>
          <p>
            Unstoppable is non-custodial — meaning we never hold your coins, private keys, or seed phrases.
            We can’t freeze your funds, recover your wallet, or see what’s in it.
          </p>
          <p>
            Your wallet = your responsibility. <br/>
            Lose your seed phrase, and it’s gone. There’s no password reset button in crypto.
          </p>

          <h2 className="pt-3">4. No Financial Advice</h2>
          <p>
            We’re not your financial advisor, lawyer, or accountant.
            Anything you see in the app is for general info only — not investment advice or a call to action.
          </p>
          <p>You’re in charge of your own decisions. DYOR (Do Your Own Research).</p>

          <h2 className="pt-3">5. Don’t Use It for Shady Stuff</h2>
          <p>
            Unstoppable isn’t here to help anyone break laws. Don’t use it for:
          </p>
          <ul>
            <li>Money laundering</li>
            <li>Funding terror</li>
            <li>Dodging sanctions</li>
            <li>Scams, fraud, or anything shady</li>
          </ul>
          <p>Use it for what it was built for — freedom, not crime.</p>

          <h2 className="pt-3">6. No Guarantees, No Liability</h2>
          <p>We built this wallet with care, but we can’t promise perfection. We’re not responsible for:</p>
          <ul>
            <li>Lost funds or messed-up transactions</li>
            <li>Hacks, user mistakes, or bugs</li>
            <li>Issues with blockchains or smart contracts</li>
          </ul>
          <p>Use the app at your own risk. That’s how self-custody works.</p>

          <h2 className="pt-3">7. Updates to These Terms</h2>
          <p>
            We might update these Terms from time to time. If we do, we’ll update the “Last Updated” date or let you
            know in-app.
            Keep using the app? That means you're fine with the new version.
          </p>

          <h2 className="pt-3">8. Governing Law</h2>
          <p>These Terms are governed by the laws of [insert jurisdiction here].</p>

          <h2 className="pt-3">9. Contact</h2>
          <p>
            Got questions? <br/>
            Drop us a line at <a href="mailto:hello@horizontalsystems.io" rel="noopener noreferrer">hello@horizontalsystems.io</a>
          </p>
        </div>
      </div>
    </Page>
  )
}

export default TosPage
