import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  const renderComponent = () => {
    const users = [
      {
        name: "Robin",
        email: "robin@robin.com",
      },
      {
        name: "Batman",
        email: "batman@robin.com",
      },
    ];

    render(<UserList users={users} />);

    return { users };
  };

  it("should render one row per user", () => {
    renderComponent();

    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(2);
  });

  it("should render the name and email of each user", () => {
    const { users } = renderComponent();

    for (let user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
