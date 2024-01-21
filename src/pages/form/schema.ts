import * as z from "zod";

export const formSchema = z
  .object({
    author: z.string().min(3),
    message: z.string().min(3),
    github: z
      .string()
      .regex(
        /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
        "Github url invalid"
      ),
    linkedin: z.string().nullish(),
    twitter: z.string().nullish(),
  })
  .superRefine(({ linkedin, twitter }, ctx) => {
    const linkedinRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    const twitterRegex =
      /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/;
    const xRegex = /^(https?:\/\/)?(www\.)?x\.com\/[a-zA-Z0-9_]+\/?$/;

    if (linkedin) {
      const isValid = linkedin.match(linkedinRegex);
      if (!isValid) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_string,
          message: "URL invalid",
          path: ["linkedin"],
          validation: "regex",
        });
      }
    }
    if (twitter) {
      const isValidTwitter = twitter.match(twitterRegex);
      const isValidX = twitter.match(xRegex);
      if (!isValidTwitter && !isValidX) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_string,
          message: "URL invalid",
          path: ["twitter"],
          validation: "regex",
        });
      }
    }
  });

export type FormData = z.infer<typeof formSchema>;
