import { SelectChangeEvent } from "@mui/material";
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

// login data type
export type User = {
  status: any;
  id(event: SelectChangeEvent<any>, id: any): void;
  name: string;
  email: string;
  token: string;
  phone: number;
};

// login validation
export const schima = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must be at last 8 characters"),
});

// my profile data type (get data)
export interface ProfileData {
  name: string;
  email: string;
  photo: string;
}

// updateemployee (getData)
export interface EmployeeData {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
}

export const updatEmployeeDataschema = z.object({
  name: z.string().min(6).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),

  job: z
    .string()
    .refine((value) => value.trim() !== "", { message: "Job is required" }),
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
});

// get client data type
export type client = {
  id: number;
  first_name: string;
  second_name: string;
  third_name: string;
  national_id: string;
  Request_date: string;
  updated_at: string;
  photo: string;
  status: string;
  reject_reason: string;
  rejectedMessage:string;
  
};
export type dataColum = {
  id: string;
  name: string;
};