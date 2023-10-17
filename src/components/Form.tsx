"use client";

import { useState } from "react";
import { validationSchema } from "../utils/yupValidations";

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

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Dados enviados", formData);
    } catch (error) {
      console.log("Erro de validação", error);
    }
  };

  return (
    <div className="container">
      <h2>Please fill all the details</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input
            className="form-control is-invalid"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <p className="text-danger">Please choose a First Name.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <p className="text-danger">Please choose a Last Name.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">User Name</label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              className="form-control"
              type="text"
              placeholder="User Name"
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </div>
          <p className="text-danger">Please choose a User Name.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">Mobile No</label>
          <input
            className="form-control"
            type="text"
            placeholder="Mobile No"
            onChange={(e) =>
              setFormData({ ...formData, mobileNo: e.target.value })
            }
          />
          <p className="text-danger">Please choose a Mobile No.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <p className="text-danger">Please fill the Email Address.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">Confirm Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Confirm Email"
            onChange={(e) =>
              setFormData({ ...formData, confirmEmail: e.target.value })
            }
          />
          <p className="text-danger">Please confirm the Email Address.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <p className="text-danger">Please fill the Address.</p>
        </div>

        <div className="col-md-6">
          <label className="form-label">PIN Code</label>
          <input
            className="form-control"
            type="text"
            placeholder="PIN Code"
            onChange={(e) =>
              setFormData({ ...formData, pinCode: e.target.value })
            }
          />
          <p className="text-danger">Please enter the PIN Code.</p>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="agreeToTerms"
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            Agree to terms and conditions
          </label>
        </div>
        <p className="text-danger">You must agree before submitting.</p>

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
