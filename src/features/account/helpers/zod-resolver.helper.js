import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import i18n from "../../../translations";

export const loginZodResolver = () => {
  const { t } = i18n;
  const schema = z.object({
    email: z.preprocess(
      (val) => (val ? val.trim() : val),
      z
        .string({
          required_error: t("input.rule_message.required"),
        })
        .email("Invalid email format")
    ),
    password: z.string({
      required_error: t("input.rule_message.required"),
    }),
  });

  return zodResolver(schema);
};
