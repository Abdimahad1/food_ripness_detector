// services/fruitDetectionService.js
import axios from "axios";

// =====================================================
// API BASE URL
// =====================================================

const API_URL = import.meta.env.DEV 
  ? 'http://localhost:5000'  // Local backend
  : import.meta.env.VITE_API_URL || 'https://fruit-ripness-backend.onrender.com';

const API = axios.create({
  baseURL: `${API_URL}/api`,
});

console.log("🔗 API URL:", API_URL);
console.log("🤖 Using Custom ML Model (86.84% accuracy)");

// =====================================================
// ANALYZE FRUIT IMAGE
// =====================================================

export const analyzeFruitImage = async (file) => {
  try {
    console.log("===================================");
    console.log("📤 SENDING IMAGE TO BACKEND...");
    console.log("API URL:", `${API_URL}/api/analyze`);
    console.log("🤖 Model: Custom CNN (86.84% accuracy)");
    console.log("===================================");

    // Validate file
    validateImageFile(file);
    console.log("✅ File validation passed:", file.type, (file.size / 1024 / 1024).toFixed(2) + "MB");

    // Convert file to base64
    const base64Image = await fileToBase64(file);
    
    console.log("✅ Image converted to base64, length:", base64Image.length);
    
    // Send to backend
    const response = await API.post(
      "/analyze",
      { image: base64Image },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 seconds
      }
    );

    console.log("===================================");
    console.log("✅ BACKEND RESPONSE:", response.data);
    console.log("===================================");

    return response.data;

  } catch (error) {
    console.log("===================================");
    console.log("❌ ANALYZE ERROR:");
    console.log(error.message);
    
    if (error.response) {
      console.log("Backend status:", error.response.status);
      console.log("Backend error:", error.response.data);
    } else if (error.request) {
      console.log("No response from server");
      console.log("Make sure backend is running on:", API_URL);
    }

    console.log("===================================");
    throw error;
  }
};

// =====================================================
// VALIDATE IMAGE FILE
// =====================================================

const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!validTypes.includes(file.type)) {
    throw new Error(`Invalid file type. Please upload ${validTypes.join(', ')}`);
  }
  
  if (file.size > maxSize) {
    throw new Error('Image too large. Please upload an image under 10MB');
  }
  
  return true;
};

// =====================================================
// CONVERT FILE TO BASE64
// =====================================================

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};