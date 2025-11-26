import * as yup from 'yup';


export const globalSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  name: yup.string().required().min(3).max(30),
});



export const couponSchema = yup.object({
  coupon_code : yup.string().trim().min(6, 'coupon code must be at least 6 characters long'),
});



export const checkoutSchema = yup.object().shape({
  full_name: yup.string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters long')
    .max(50, 'Full name must be at most 50 characters long'),
  governorate: yup.string()
    .required('Governerate is required')
    .min(10, 'Governerate must be at least 10 characters long')
    .max(100, 'Governerate must be at most 100 characters long'),
  city: yup.string()
    .required('City is required')
    .min(3, 'City must be at least 3 characters long')
    .max(50, 'City must be at most 50 characters long'),
  full_address: yup.string()
    .required('Full address is required')
    .min(10, 'Full address must be at least 10 characters long')
    .max(200, 'Full address must be at most 200 characters long'),
  phone_number_1: yup.string()
    .required('Phone number is required')
    .length(11, 'Phone number must be 11 characters long'),
    phone_number_2: yup.string()
    .length(11, 'Phone number must be 11 characters long'),
});
