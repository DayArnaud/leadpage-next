"use client";

import React, { useState } from "react";
import { sendFormData } from "../app/api/mock";
import "../utils/bootstrapValidation";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    mobileNo: "",
    address: "",
    pinCode: "",
    email: "",
    confirmEmail: "",
  });

  const [emailError, setEmailError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setEmailError("Please confirm with the same Email Address.");
      return;
    }

    try {
      const response = await sendFormData(formData);

      if (response.success) {
        console.log("Data sent successfully!", response.data);
        setSent(true);
      } else {
        console.log("Failed to send the data.");
      }
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Please fill all the details</h2>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label className="form-label" htmlFor="first-name">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="first-name"
            autoComplete="given-name"
            placeholder="First Name"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">Please choose a First Name.</div>
          <div className="valid-feedback">
            Please fill with your First Name.
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="last-name"
            autoComplete="family-name"
            placeholder="Last Name"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">Please choose a Last Name.</div>
          <div className="valid-feedback">Please fill with your Last Name.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="username">
            User Name
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              className="form-control"
              type="text"
              id="username"
              autoComplete="username"
              placeholder="User Name"
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              required
            />
            <div className="invalid-feedback">Please choose a User Name.</div>
            <div className="valid-feedback">
              Please fill with your Username.
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="mobile">
            Mobile No
          </label>
          <input
            className="form-control"
            type="text"
            id="mobile"
            autoComplete="phone"
            placeholder="Mobile No"
            onChange={(e) =>
              setFormData({ ...formData, mobileNo: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">Please choose a Mobile No.</div>
          <div className="valid-feedback">Please fill with your Mobile No.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">
            Please fill with your Email Address.
          </div>
          <div className="valid-feedback">Please fill with a valid Email.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="confirm-email">
            Confirm Email
          </label>
          <input
            className="form-control"
            type="email"
            id="confirm-email"
            autoComplete="email"
            placeholder="Confirm Email"
            onChange={(e) =>
              setFormData({ ...formData, confirmEmail: e.target.value })
            }
            required
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="adress">
            Address
          </label>
          <input
            className="form-control"
            type="text"
            id="adress"
            autoComplete="street-address"
            placeholder="Address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">Please fill with your Address.</div>
          <div className="valid-feedback">
            <b>Please fill with a valid Address.</b>
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="pin-code">
            PIN Code
          </label>
          <input
            className="form-control"
            type="text"
            id="pin-code"
            placeholder="PIN Code"
            onChange={(e) =>
              setFormData({ ...formData, pinCode: e.target.value })
            }
            required
          />
          <div className="invalid-feedback">Please choose a PIN code.</div>
          <div className="valid-feedback">Please fill with your PIN code.</div>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="agreeToTerms"
            required
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-toggle="button"
          >
            Submit
          </button>
        </div>
        {sent && (
          <div className="alert alert-success" role="alert">
            Your profile was successfully created!
          </div>
        )}
      </form>
    </div>
  );
};
