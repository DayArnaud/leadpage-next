export const sendFormData = (
  formData: any
): Promise<{ success: boolean; data?: any }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Form data sent.", formData);
      resolve({ success: true, data: formData });
    }, 1000);
  });
};
