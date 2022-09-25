import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-next254356",
    apiKey: process.env.API_KEY,
});
