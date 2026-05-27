"use client";

import { useState } from "react";
import { PiCheckCircleFill, PiWarningCircleFill } from "react-icons/pi";

const SimpleContactForm = ({ mode = "quote" }) => {
  const isQuote = mode === "quote";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: "",
    botcheck: false
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error | cooldown
  const [touched, setTouched] = useState({});
  const [cooldownTimer, setCooldownTimer] = useState(0);

  // Check for existing submissions from this email (local storage based)
  const checkSubmissionCooldown = (email) => {
    const lastSubmission = localStorage.getItem(`lastSubmission_${email}`);
    if (lastSubmission) {
      const timeSinceLast = Date.now() - parseInt(lastSubmission);
      const cooldownMinutes = 5; // 5 minutes cooldown
      if (timeSinceLast < cooldownMinutes * 60 * 1000) {
        const remainingMinutes = Math.ceil((cooldownMinutes * 60 * 1000 - timeSinceLast) / 60000);
        setCooldownTimer(remainingMinutes);
        return true;
      }
    }
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? e.target.checked : value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    else if (formData.firstName.trim().length < 2) errors.firstName = "Minimum 2 characters";

    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format";

    if (isQuote && !formData.companyName.trim()) errors.companyName = "Company name is required";

    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Minimum 10 characters";

    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allFields);

    // Check if there are errors
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    // Check cooldown
    if (checkSubmissionCooldown(formData.email)) {
      setStatus("cooldown");
      return;
    }

    setStatus("loading");

    try {
      // Prepare form data for Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("access_key", "889ad27b-0f25-4686-a395-692a6df4ffa2");
      web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
      web3FormData.append("email", formData.email);
      web3FormData.append("message", formData.message);
      web3FormData.append("company_name", formData.companyName || "Not provided");
      web3FormData.append("order_volume", formData.orderVolume || "Not specified");
      web3FormData.append("inquiry_type", isQuote ? "Quote Request" : "Contact Form");

      // Web3Forms Honeypot: if botcheck is true, Web3Forms will silently ignore the spam
      if (formData.botcheck) {
        web3FormData.append("botcheck", "true");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        // Store submission timestamp for cooldown
        localStorage.setItem(`lastSubmission_${formData.email}`, Date.now().toString());
        setStatus("success");
        // Reset form after success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          orderVolume: "",
          message: "",
          botcheck: false
        });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Volume options
  const volumeOptions = [
    { value: "", label: "Expected Volume" },
    { value: "<100", label: "Less than 100 units" },
    { value: "100-500", label: "100 - 500 units" },
    { value: "500-1000", label: "500 - 1,000 units" },
    { value: "1000+", label: "1,000+ units" },
    { value: "5000+", label: "5,000+ units" },
  ];

  return (
    <form className="modal__form" onSubmit={handleSubmit} noValidate>

      {/* Honeypot Spam Trap (Hidden from Real Users) */}
      <input 
        type="checkbox" 
        name="botcheck" 
        style={{ display: "none" }} 
        checked={formData.botcheck} 
        onChange={handleChange} 
      />

      {/* Name Grid */}
      <div className="modal__grid">
        <div className="modal__field">
          <input
            name="firstName"
            placeholder="First Name *"
            aria-label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.firstName && errors.firstName
                ? "modal__input modal__input--error"
                : "modal__input"
            }
          />
          {touched.firstName && errors.firstName && (
            <span className="modal__error">{errors.firstName}</span>
          )}
        </div>

        <div className="modal__field">
          <input
            name="lastName"
            placeholder="Last Name"
            aria-label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="modal__input"
          />
        </div>
      </div>

      {/* Email */}
      <div className="modal__field">
        <input
          type="email"
          name="email"
          placeholder="Business Email *"
          aria-label="Business Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.email && errors.email
              ? "modal__input modal__input--error"
              : "modal__input"
          }
        />
        {touched.email && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </div>

      {/* Quote-specific fields */}
      {isQuote && (
        <div className="modal__grid">
          <div className="modal__field">
            <input
              name="companyName"
              placeholder="Company Name *"
              aria-label="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                touched.companyName && errors.companyName
                  ? "modal__input modal__input--error"
                  : "modal__input"
              }
            />
            {touched.companyName && errors.companyName && (
              <span className="modal__error">{errors.companyName}</span>
            )}
          </div>

          <div className="modal__field">
            <select
              name="orderVolume"
              aria-label="Expected Order Volume"
              className="modal__input modal__select"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.orderVolume}
            >
              {volumeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Message */}
      <div className="modal__field">
        <textarea
          name="message"
          placeholder={isQuote ? "Tell us about your requirements... *" : "Your message... *"}
          aria-label={isQuote ? "Requirements message" : "Contact message"}
          rows="4"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.message && errors.message
              ? "modal__input modal__input--error"
              : "modal__input"
          }
        />
        {touched.message && errors.message && (
          <span className="modal__error">{errors.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn--primary modal__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span>Processing</span>
            <span className="modal__loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </>
        ) : (
          isQuote ? "Request Quote" : "Send Message"
        )}
      </button>

      {/* Footer Area with Absolute Status Badge */}
      <div style={{ position: "relative", minHeight: "30px", marginTop: "16px" }}>
        
        {/* Normal Footnote (hides when status is shown) */}
        <p 
          className="modal__footnote" 
          style={{ 
            opacity: status === 'idle' || status === 'loading' ? 1 : 0, 
            transition: 'opacity 0.3s',
            margin: 0
          }}
        >
          <PiCheckCircleFill size={12} /> Priority response for volume inquiries
        </p>

        {/* Absolute Status Badge (Overlays footnote without shifting layout) */}
        <div style={{ 
          position: "absolute", 
          bottom: "-5px", 
          left: 0, 
          width: "100%", 
          zIndex: 10,
          opacity: status !== 'idle' && status !== 'loading' ? 1 : 0,
          pointerEvents: status !== 'idle' && status !== 'loading' ? 'auto' : 'none',
          transition: 'opacity 0.3s, transform 0.3s',
          transform: status !== 'idle' && status !== 'loading' ? 'translateY(0)' : 'translateY(10px)'
        }}>
          {status === "error" && (
            <div className="modal__status modal__status--error" style={{ margin: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <PiWarningCircleFill size={18} />
              <span>Please fix the errors above and try again.</span>
            </div>
          )}

          {status === "cooldown" && (
            <div className="modal__status modal__status--cooldown" style={{ margin: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <PiWarningCircleFill size={18} />
              <span>Please wait {cooldownTimer} minute{cooldownTimer !== 1 ? 's' : ''} before submitting again.</span>
            </div>
          )}

          {status === "success" && (
            <div className="modal__status modal__status--success" style={{ margin: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <PiCheckCircleFill size={18} />
              <span>Message sent successfully! We will respond within 24 hours.</span>
            </div>
          )}
        </div>
      </div>


    </form>
  );
};

export default SimpleContactForm;