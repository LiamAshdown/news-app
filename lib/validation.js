import * as yup from "yup";

export const createAccountSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  agree: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms and Conditions"),
});

export const additionalDetailsSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 39 characters")
    .required("Username is required"),
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters")
    .required("Full name is required"),
  bio: yup
    .string()
    .max(1000, "Bio must be less than 1000 characters")
    .min(3, "Bio must be at least 3 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(255, "Title must be less than 255 characters")
    .required("Title is required"),
  content: yup
    .string()
    .min(3, "Content must be at least 3 characters")
    .max(10000, "Content must be less than 10000 characters")
    .required("Content is required"),
  image: yup.object().required("Image is required"),
});

export const tagPostSchema = yup.object().shape({
  postTopicId: yup.string().required("Topic is required"),
  postTags: yup.array().min(1, "You must enter at least 1 tag"),
});

export const validate = async (schema, data) => {
  const validation = await schema.validate(data, { abortEarly: false });
  return validation;
};

export const ValidationError = () => {
  return yup.ValidationError;
};
