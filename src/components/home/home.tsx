import { BookCard } from "../book.card/book.card";
import { UseBooks } from "../../hooks/use.books";
import { useEffect } from "react";
import { Header } from "../header/header";
import "./home.scss";

export default function Home() {
  const { bookList, handleLoadBooks } = UseBooks();

  useEffect(() => {
    handleLoadBooks();
  }, [handleLoadBooks]);

  return (
    <>
      <Header></Header>

      <div className="home_page">
        <h1>New Books</h1>
        <ul className="book_list">
          {bookList.map((book) => (
            <BookCard item={book} key={book.id}></BookCard>
          ))}
        </ul>
      </div>
    </>
  );
}
