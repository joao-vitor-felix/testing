import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";
import { SWRConfig } from "swr";

const renderComponent = async () => {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );
  await screen.findAllByRole("link");
};

describe("AuthButtons", () => {
  describe("user is not logged in", () => {
    createServer([
      {
        path: "/api/user",
        res: () => {
          return { user: null };
        },
      },
    ]);
    it("should display sign in and sign up buttons", async () => {
      await renderComponent();

      const signInButton = screen.getByRole("link", { name: /sign in/i });
      const signUpButton = screen.getByRole("link", { name: /sign up/i });

      expect(signInButton).toBeInTheDocument();
      expect(signInButton).toHaveAttribute("href", "/signin");
      expect(signUpButton).toBeInTheDocument();
      expect(signUpButton).toHaveAttribute("href", "/signup");
    });
    it("should not display sign out", async () => {
      await renderComponent();

      const signOutButton = screen.queryByRole("link", { name: /sign out/i });

      expect(signOutButton).not.toBeInTheDocument();
    });
  });

  describe("user is logged in", () => {
    createServer([
      {
        path: "/api/user",
        res: () => {
          return { user: { id: 1, email: "bla@bla.com" } };
        },
      },
    ]);
    it("should not display sign in and sign up buttons", async () => {
      await renderComponent();

      const signInButton = screen.queryByRole("link", { name: /sign in/i });
      const signUpButton = screen.queryByRole("link", { name: /sign up/i });

      expect(signInButton).not.toBeInTheDocument();
      expect(signUpButton).not.toBeInTheDocument();
    });
    it("should display sign out", async () => {
      await renderComponent();

      const signOutButton = screen.getByRole("link", { name: /sign out/i });
      expect(signOutButton).toBeInTheDocument();
      expect(signOutButton).toHaveAttribute("href", "/signout");
    });
  });
});
