import { useState } from "react"
import emailjs from "@emailjs/browser"


function Newsletter() {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      user_email: email
    }

    emailjs.send(
      "service_tuwv0v9",   // replace
      "template_shhoowi",  // replace
      templateParams,
      "KOgLFfc8X11EDHWQ9"    // replace
    )
    .then(() => {
      setMessage("Subscribed Successfully 🎉")
      setEmail("")
    })
    .catch(() => {
      setMessage("Something went wrong ❌")
    })
  }

  return (
    <section className="premium-newsletter">
      <div className="container">
        <div className="newsletter-box text-center">

          <h2 className="newsletter-title">
            Stay Updated With <span>Exclusive Deals</span>
          </h2>

          <form onSubmit={handleSubmit} className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>

          </form>

          {message && (
            <p className="newsletter-message mt-3">
              {message}
            </p>
          )}

        </div>
      </div>
    </section>
  )
}

export default Newsletter 