import { IError } from "../types";

export const checkIfI18nmConfigIsValid = (json: any): IError | boolean => {
  if (!json.localsPath) return { error: "config missing localesPath" };
  if (!json.localsFileType) return { error: "config missing localesFileType" };
  return true;
};
export const formatToJson = (json: Buffer) => JSON.parse(json.toString());
