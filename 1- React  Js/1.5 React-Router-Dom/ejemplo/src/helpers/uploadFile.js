export const uploadFile = async (file) => {
  console.log("Entre a upload", file);
  const urlUpload = "https://api.cloudinary.com/v1_1/danimel/upload";

  let formData = new FormData();
  formData.append("upload_preset", "cali-01");
  formData.append("file", file);
  console.log(formData);

  const response = await fetch(urlUpload, {
    method: "POST",
    body: formData,
  })
  const data = await response.json();

  console.log("lo que cargo en cloudynar",data);
  return data.secure_url
};
