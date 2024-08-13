"use server";

import { saveContact } from "@/utils/sheets";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
    required_error: "Name is required",
  }),
  name: z.string({
    required_error: "Name is required",
  }),
  message: z.string({
    required_error: "Message is required",
  }),
});

export async function saveContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const save = await saveContact({
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    message: validatedFields.data.message,
  });

  if (save) {
    return { message: "success" };
  } else {
    return { message: "failed" };
  }
}
