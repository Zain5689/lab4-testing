import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.get("https://api.escuelajs.co/api/v1/users", async () => {
    await delay(150);

    return HttpResponse.json([
      { id: 1, email: "zain@yahoo.com", role: "admin" },
    ]);
  }),
];

export const server = setupServer(...handlers);
