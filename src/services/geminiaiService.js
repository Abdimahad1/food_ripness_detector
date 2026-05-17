import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// =====================================================
// ANALYZE FRUIT IMAGE
// =====================================================

export const analyzeFruitImage =
async (formData) => {

  try {

    console.log(
      "SENDING IMAGE TO BACKEND..."
    );

    const response =
      await API.post(
        "/analyze",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    console.log(
      "BACKEND RESPONSE:",
      response.data
    );

    return response.data;

  } catch (error) {

    console.log(
      "ANALYZE ERROR:",
      error
    );

    if (error.response) {

      console.log(
        "BACKEND ERROR:",
        error.response.data
      );
    }

    throw error;
  }
};