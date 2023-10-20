import React, { useState } from "react";
import "./BooksList.css";
import axios from "axios";
import { baseUrl } from "../../common/baseUrl";

const AddNewBookModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    pages: "",
    language: "",
    country: "",
    link: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(true);

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "id" ? parseInt(value, 10) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate the "id" field as a number
    if (isNaN(formData.id) || formData.id === "") {
      errors.id = "Please enter a valid number for ID";
      isValid = false;
    }

    // Validate the "title" field as not empty
    if (formData.title?.trim() === "") {
      errors.title = "Title is required";
      isValid = false;
    }

    // Validate the "author" field as not empty
    if (formData.author?.trim() === "") {
      errors.author = "Author is required";
      isValid = false;
    }

    // Validate the "pages" field as a number
    if (isNaN(formData.pages) || formData.pages === "") {
      errors.pages = "Please enter a valid number for Pages";
      isValid = false;
    }

    // Validate the "language" field as not empty
    if (formData.language?.trim() === "") {
      errors.language = "Language is required";
      isValid = false;
    }

    // Validate the "country" field as not empty
    if (formData.country?.trim() === "") {
      errors.country = "Country is required";
      isValid = false;
    }

    // Validate the "link" field as not empty
    if (formData.link?.trim() === "") {
      errors.link = "Link is required";
      isValid = false;
    }

    setFormErrors(errors);
    setFormIsValid(isValid);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "qq");
    if (validateForm()) {
      axios
        .post(`${baseUrl}/books`, formData)
        .then(function (response) {
          console.log(response.data.message);
          alert(response.data.message);
          setFormData("");
          onClose();
        })
        .catch(function (error) {
          console.log(error);
          alert(error.message);
        });
    }
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <button
          style={{
            float: "right",
            border: "none",
            cursor: "pointer",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
          onClick={() => {
            onClose();
            setFormData("");
          }}
        >
          X
        </button>
        <div className="modal-content">
          <h2>Add New Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-container">
                <span>Id</span>{" "}
                <input
                  type="number"
                  name="id"
                  placeholder="Enter the Id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.id && <div className="error">{formErrors.id}</div>}
              </div>
              <div className="input-container">
                <span>Title</span>{" "}
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.title && (
                  <div className="error">{formErrors.title}</div>
                )}
              </div>
              <div className="input-container">
                <span>Author</span>{" "}
                <input
                  type="text"
                  name="author"
                  placeholder="Enter the Author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.author && (
                  <div className="error">{formErrors.author}</div>
                )}
              </div>
            </div>
            <div className="input-container">
              <div className="input-container">
                <span>Pages</span>{" "}
                <input
                  type="number"
                  name="pages"
                  placeholder="Enter the Pages"
                  value={formData.pages}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.pages && (
                  <div className="error">{formErrors.pages}</div>
                )}
              </div>
              <div className="input-container">
                <span>Language</span>{" "}
                <input
                  type="text"
                  name="language"
                  placeholder="Enter the Language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.language && (
                  <div className="error">{formErrors.language}</div>
                )}
              </div>
              <div className="input-container">
                <span>Country</span>{" "}
                <input
                  type="text"
                  name="country"
                  placeholder="Enter the Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.country && (
                  <div className="error">{formErrors.country}</div>
                )}
              </div>
              <div className="input-container">
                <span>Link</span>{" "}
                <input
                  type="text"
                  name="link"
                  placeholder="Enter the Link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="search-input"
                />
                {formErrors.link && (
                  <div className="error">{formErrors.link}</div>
                )}
              </div>
            </div>
            <button
              className="add-button"
              style={{ width: "30%" }}
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBookModal;
