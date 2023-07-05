import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { BookCard } from "./book.card";
import { Book } from "../../models/book";

const mockBook = {
  id: "1",
  title: "Walden",
  image: {
    url: "walden.jpg",
  },
};
describe("Given Card component", () => {
  describe("When it is intantiate", () => {
    beforeEach(() => {
      render(
        <Router>
          <BookCard item={mockBook as Book}></BookCard>
        </Router>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
