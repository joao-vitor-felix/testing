import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";

const renderComponent = () => {
  const repository = {
    name: "react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    full_name: "facebook/react",
    language: "JavaScript",
    owner: {
      login: "facebook",
    },
    html_url: "github.com/facebook/react",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
};

describe("RepositoriesListItem", () => {
  it("should display the link to the repository", async () => {
    const { repository } = renderComponent();

    await screen.findByRole("img", { name: "JavaScript" });

    const link = screen.getByRole("link", { name: /github repository/i });
    expect(link).toHaveAttribute("href", repository.html_url);
  });

  it("should shows the file icon with the correct icon", async () => {
    renderComponent();

    const icon = await screen.findByRole("img", { name: "JavaScript" });

    expect(icon).toHaveClass("js-icon");
  });

  it("should provide the correct url", async () => {
    const { repository } = renderComponent();

    await screen.findByRole("img", { name: "JavaScript" });

    const link = screen.getByRole("link", {
      name: new RegExp(repository.owner.login),
    });
    expect(link).toHaveAttribute(
      "href",
      `/repositories/${repository.full_name}`
    );
  });
});
