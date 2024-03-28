import { object, z } from "zod";


const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const FormDataSchema = object({
  type: z.string(),
  passports_department: z.string(),
  first_name: z.string(),
  second_name: z.string(),
  third_name: z.string(),
  last_name: z.string(),
  national_id: z.number(),
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
  data_of_birth: z.number(),
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
  phone: z.number(),
  home_phone: z.number(),
  age: z.number(),
  academic_Qualtifiction: z.string(),
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
  universty_id: z.number(),
  marital_status: z.string(),
  job: z.string(),
  address: z.string(),
  governorate: z.string(),
  gander: z.string(),
  houband_name: z.string(),
  religion: z.string(),
});