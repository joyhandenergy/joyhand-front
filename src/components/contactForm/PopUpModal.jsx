"use client";

import { useState, useEffect, useCallback } from "react";
import {
  PiXBold,
  PiFactoryDuotone,
  PiChatsCircleDuotone,
  PiCheckCircleFill,
  PiWarningCircleFill,
  PiArrowRight,
} from "react-icons/pi";

import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose, mode = "quote" }) => {
  const isQuote = mode === "quote";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateField = useCallback((name, value) => {
    let error = null;

    switch (name) {
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "firstName":
      case "lastName":
        if (value && value.length < 2) {
          error = "Must be at least 2 characters";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  }, []);

  const checkSubmissionCooldown = (email) => {
    const lastSubmission = localStorage.getItem(`lastSubmission_${email}`);
    if (lastSubmission) {
      const timeSinceLast = Date.now() - parseInt(lastSubmission);
      const cooldownMinutes = 5;
      if (timeSinceLast < cooldownMinutes * 60 * 1000) {
        const remainingMinutes = Math.ceil((cooldownMinutes * 60 * 1000 - timeSinceLast) / 60000);
        setCooldownTimer(remainingMinutes);
        return true;
      }
    }
    return false;
  };

  const handleClose = () => {
    setStatus("idle");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      orderVolume: "",
      message: "",
    });
    setTouched({});
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    validateField(name, formData[name]);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";

    if (!formData.email) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) newErrors.message = "Required";

    if (isQuote) {
      if (!formData.companyName) newErrors.companyName = "Required";
      if (!formData.orderVolume) newErrors.orderVolume = "Select volume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    if (checkSubmissionCooldown(formData.email)) {
      setStatus("cooldown");
      return;
    }

    setStatus("loading");

    try {
      const web3FormData = new FormData();
      web3FormData.append("access_key", "3301949a-20bb-40e5-a650-7845eb68a24f");
      web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
      web3FormData.append("email", formData.email);
      web3FormData.append("message", formData.message);
      web3FormData.append("company_name", formData.companyName || "Not provided");
      web3FormData.append("order_volume", formData.orderVolume || "Not specified");
      web3FormData.append("inquiry_type", isQuote ? "Manufacturing Quote Request" : "Technical Consultation");
      web3FormData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(`lastSubmission_${formData.email}`, Date.now().toString());
        setStatus("success");
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const volumeOptions = [
    { value: "", label: "Expected Monthly Volume" },
    { value: "<100", label: "Less than 100 units" },
    { value: "100-500", label: "100 - 500 units" },
    { value: "500-1000", label: "500 - 1,000 units" },
    { value: "1000+", label: "1,000+ units" },
    { value: "5000+", label: "5,000+ units (Volume Pricing)" },
  ];

  const errorMessages = Object.values(errors).filter(Boolean);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={handleClose}
          aria-label="Close Modal"
        >
          <PiXBold size={20} />
        </button>

        {status === "success" ? (
          <div className="modal__success-state">
            <PiCheckCircleFill size={60} className="modal__success-icon" />
            <h4 className="modal__success-title">Request Received!</h4>
            <p className="modal__success-text">
              {isQuote
                ? "Thank you! Our manufacturing team will review your request and contact you within 24 hours."
                : "Thank you! A technical specialist will contact you within 24 hours."}
            </p>
            <button
              className="btn btn--primary modal__success-btn"
              onClick={handleClose}
            >
              Close <PiArrowRight />
            </button>
          </div>
        ) : status === "cooldown" ? (
          <div className="modal__cooldown-state">
            <PiWarningCircleFill size={60} className="modal__cooldown-icon" />
            <h4 className="modal__cooldown-title">Please Wait</h4>
            <p className="modal__cooldown-text">
              You have already submitted a request. Please wait {cooldownTimer} minute{cooldownTimer !== 1 ? 's' : ''} before submitting again.
            </p>
            <button
              className="btn btn--secondary modal__cooldown-btn"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="modal__content-wrapper">
            <header className="modal__header">
              <div className="modal__nfc-visual">
                <div className="modal__nfc-ring"></div>
                <div className="modal__icon-box">
                  {isQuote ? (
                    <PiFactoryDuotone size={40} />
                  ) : (
                    <PiChatsCircleDuotone size={40} />
                  )}
                </div>
              </div>

              <h3 className="modal__title">
                {isQuote ? "Request Manufacturing Quote" : "Technical Consultation"}
              </h3>

              <p className="modal__subtitle">
                {isQuote
                  ? "Tell us about your requirements. Our engineering team will prepare a manufacturing proposal."
                  : "Have technical questions? Our engineering team is ready to help."}
              </p>
            </header>

            <form className="modal__form" onSubmit={handleSubmit}>
              {/* Fixed height container for error messages */}
              <div className="modal__error-container">
                {status === "error" && errorMessages.length > 0 && (
                  <div className="modal__status modal__status--error">
                    <PiWarningCircleFill size={18} />
                    <div className="modal__error-list">
                      {errorMessages.map((msg, idx) => (
                        <span key={idx}>{msg}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="modal__grid">
                <div className="modal__field">
                  <input
                    name="firstName"
                    placeholder="First Name *"
                    className={`modal__input ${
                      errors.firstName ? "modal__input--error" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.firstName}
                  />
                </div>

                <div className="modal__field">
                  <input
                    name="lastName"
                    placeholder="Last Name *"
                    className={`modal__input ${
                      errors.lastName ? "modal__input--error" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.lastName}
                  />
                </div>
              </div>

              <div className="modal__field">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email *"
                  className={`modal__input ${
                    errors.email ? "modal__input--error" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                />
              </div>

              <div className="modal__grid">
                <div className="modal__field">
                  <input
                    name="companyName"
                    placeholder={isQuote ? "Company Name *" : "Company Name (Optional)"}
                    className={`modal__input ${
                      errors.companyName ? "modal__input--error" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.companyName}
                  />
                </div>

                <div className="modal__field">
                  <select
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`modal__input modal__select ${
                      errors.orderVolume ? "modal__input--error" : ""
                    }`}
                  >
                    {volumeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal__field">
                <textarea
                  name="message"
                  rows="4"
                  placeholder={
                    isQuote
                      ? "Describe your requirements and specifications... *"
                      : "Tell us about your project or questions... *"
                  }
                  className={`modal__input modal__textarea ${
                    errors.message ? "modal__input--error" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.message}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary modal__submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span>Sending</span>
                    <span className="modal__loading-dots">
                      <span>.</span><span>.</span><span>.</span>
                    </span>
                  </>
                ) : (
                  <>
                    {isQuote ? "Request Quote" : "Send Inquiry"} <PiArrowRight />
                  </>
                )}
              </button>
              <p className="modal__footnote">
                * Required fields. Our team will respond within 24 hours.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpModal;