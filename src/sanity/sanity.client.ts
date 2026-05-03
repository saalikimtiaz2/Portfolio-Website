import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "0hh2ln46",
  dataset: "production",
  apiVersion: "2023-11-06",
  // Dev: API directly (fresh). Prod: CDN by default (fast). Set SANITY_USE_CDN=false to bypass CDN.
  useCdn:
    process.env.NODE_ENV === "production" &&
    process.env.SANITY_USE_CDN !== "false",
};

const client = createClient(config);

const builder = imageUrlBuilder(client);
export const imageUrlFor = (source: any) => {
  return builder.image(source);
};

export default client;
