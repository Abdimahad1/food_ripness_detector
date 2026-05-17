import axios from "axios";

// =====================================================
// API BASE URL
// =====================================================

const API = axios.create({

  baseURL:
    `${import.meta.env.VITE_API_URL}/api`,

});

// =====================================================
// DEBUG ENV
// =====================================================

console.log(
  "API URL:",
  import.meta.env.VITE_API_URL
);

// =====================================================
// ANALYZE FRUIT IMAGE
// =====================================================

export const analyzeFruitImage =
async (formData) => {

  try {

    console.log(
      "==================================="
    );

    console.log(
      "SENDING IMAGE TO BACKEND..."
    );

    console.log(
      "API URL:",
      `${import.meta.env.VITE_API_URL}/api/analyze`
    );

    // =====================================================
    // SEND REQUEST
    // =====================================================

    const response =
      await API.post(
        "/analyze",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },

          timeout: 60000,
        }
      );

    console.log(
      "==================================="
    );

    console.log(
      "BACKEND RESPONSE:"
    );

    console.log(
      response.data
    );

    console.log(
      "==================================="
    );

    return response.data;

  } catch (error) {

    console.log(
      "==================================="
    );

    console.log(
      "ANALYZE ERROR:"
    );

    console.log(error);

    // =====================================================
    // BACKEND RESPONSE ERROR
    // =====================================================

    if (error.response) {

      console.log(
        "BACKEND STATUS:",
        error.response.status
      );

      console.log(
        "BACKEND ERROR DATA:"
      );

      console.log(
        error.response.data
      );

    }

    // =====================================================
    // NETWORK ERROR
    // =====================================================

    else if (error.request) {

      console.log(
        "NO RESPONSE FROM SERVER"
      );

      console.log(
        error.request
      );

    }

    // =====================================================
    // OTHER ERROR
    // =====================================================

    else {

      console.log(
        "GENERAL ERROR:"
      );

      console.log(
        error.message
      );

    }

    console.log(
      "==================================="
    );

    throw error;
  }
};