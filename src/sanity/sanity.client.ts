import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "0hh2ln46",
  dataset: "production",
  apiVersion: "2023-11-06",
  useCdn: false,
};

const client = createClient(config);

export default client;
