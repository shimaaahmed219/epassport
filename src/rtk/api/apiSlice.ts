import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../Components/URL";
// import { object, z } from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

// const FormDataSchema = object({
//   type: z.string(),
//   passports_department:z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   first_name: z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   second_name:z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   third_name:z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   last_name: z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   national_id: z.number(),
//   photo: z
//     .any()
//     .refine(
//       (files) => files?.[0]?.size <= MAX_FILE_SIZE,
//       `Max image size is 5MB.`
//     )
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       "Only .jpg, .jpeg, .png and  formats are supported."
//     ),
//   national_id_photo: z
//     .any()
//     .refine(
//       (files) => files?.[0]?.size <= MAX_FILE_SIZE,
//       `Max image size is 5MB.`
//     )
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       "Only .jpg, .jpeg, .png and  formats are supported."
//     ),
//   date_of_birth: z.number(),
//   birth_cert: z
//     .any()
//     .refine(
//       (files) => files?.[0]?.size <= MAX_FILE_SIZE,
//       `Max image size is 5MB.`
//     )
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       "Only .jpg, .jpeg, .png and  formats are supported."
//     ),
//   phone: z.string().min(10).max(15),
//   phone_home:z.string().min(10).max(15),
//   age: z.number(),
//   academic_Qualtifiction: z.string(),
//   graduation_cert: z
//     .any()
//     .refine(
//       (files) => files?.[0]?.size <= MAX_FILE_SIZE,
//       `Max image size is 5MB.`
//     )
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       "Only .jpg, .jpeg, .png and  formats are supported."
//     ),
//   universty_id: z.number(),
//   marital_status: z.string(),
//   job: z.string().refine((value) => value.trim() !== '', { message: 'Job is required' }),
//   address: z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   governorate: z.string().refine((value) => value.trim() !== '', { message: 'This field is required' }),
//   gender: z.string(),
//   houband_name: z.string(),
//   religion: z.string(),
// });



export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    postFormData: builder.mutation({
      query: (formData: FormData) => ({
        url: "client",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { usePostFormDataMutation } = apiSlice;
// export function validateFormData(formData: unknown) {
//   const result = FormDataSchema.safeParse(formData);
//   if (!result.success) {
//     throw new Error(result.error.message);
//   }
// }