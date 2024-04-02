import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const schema = z.object({
  type:z.string(),

  passports_department: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  first_name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  second_name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  third_name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  last_name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  national_id: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  photo: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and  formats are supported."
    ),
  national_id_photo: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and  formats are supported."
    ),
  date_of_birth: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  birth_cert: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and  formats are supported."
    ),
  phone: z
    .string()
    .min(10)
    .max(15)
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  home_phone: z
    .string()
    .min(10)
    .max(15)
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  age: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  academic_qualification: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  graduation_cert: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and  formats are supported."
    ),
  university_id: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),

  marital_status:z.object({
    marital_status: z.enum(["Under 16 years old", "Married", "Unmarried"]),
  }),

  job: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  address: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  governorate: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  gender: z.string(),
  husband_name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  religion: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
});
