import React from 'react'
import Release018 from './0.18.png'
import Release019 from './0.19.png'

function Releases() {
  return (
    <div className="container">
      <div className="Section-space-top Section-space-bottom">
        <div className="Page-header-text text-center pb-5">Last Updates</div>
        <div className="d-flex justify-content-center">
          <div className="row w-75 g-3">
            <div className="col-sm-12 col-md-6">
              <div className="card card-rounded border-0 bg-steel-20 md-h-100">
                <div className="card-body">
                  <img src={Release018} alt="" className="w-100" />
                  <div className="small">
                    <div className="py-3 fw-bold">1. UI / UX Improvements</div>
                    <div>- new icon set for an entire wallet app.</div>
                    <div>- redesigned settings tab.</div>
                    <div>- academy moved to settings tab.</div>
                    <div>- info screen for transaction status phases. ...</div>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://unstoppablewallet.medium.com/whats-new-version-0-18-1af77fc7b24f"
                      className="text-decoration-none text-warning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small>Learn More</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card card-rounded border-0 bg-steel-20 md-h-100">
                <div className="card-body">
                  <img src={Release019} alt="" className="w-100" />
                  <div className="small">
                    <div className="py-3 fw-bold">1. MARKET TAB</div>
                    <div>This release brings one of the most awaited features.
                      Market Tab enables anyone to browse cryptocurrency tokens, filter tokens by market criteria (i.e volume, price change, and
                      market
                      cap), and browse cryptocurrency tokens by category for easy comparison of ...
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://unstoppablewallet.medium.com/whats-new-version-0-19-31efcb7dcb5f"
                      className="text-decoration-none text-warning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small>Learn More</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Releases
