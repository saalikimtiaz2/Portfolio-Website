import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{}` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}
