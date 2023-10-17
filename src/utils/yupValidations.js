import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please choose a First Name."),
  lastName: Yup.string().required("Please choose a Last Name."),
  userName: Yup.string().required("Please choose a User Name."),
  mobileNo: Yup.string().required("Please choose a Mobile No."),
  address: Yup.string().required("Please fill the Address."),
  pinCode: Yup.string().required("Please enter the PIN Code."),
});
