import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should be able to register a new user", async () => {
    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "john@doe.com");
    await userEvent.click(button);

    const name = screen.getByRole("cell", { name: /john doe/i });
    const email = screen.getByRole("cell", { name: /john@doe.com/i });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
