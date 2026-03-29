import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

function renderApp(initialPath = "/") {
  const router = createMemoryRouter(
    [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
    { initialEntries: [initialPath] },
  );
  return render(<RouterProvider router={router} />);
}

describe("Customer Portal Integration Test", () => {
  test("Async API works", async () => {
    renderApp("/");

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    const email = await screen.findByText("zain@yahoo.com");
    expect(email).toBeInTheDocument();
  });

  test("Navigation works", async () => {
    renderApp("/");

    const link = screen.getByRole("link", { name: /Go to About/i });
    await userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /About Us/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).toBeNull();
  });

  test("User Interaction works", async () => {
    renderApp("/about");

    const button = screen.getByRole("button", { name: /Increment/i });
    await userEvent.click(button);

    expect(screen.getByText(/Current Count: 1/i)).toBeInTheDocument();
  });
});
