import AuthorMinifiedItem from "./components/authors/AuthorMinifiedItem";
import AuthorWithDetailsItem from "./components/authors/AuthorWithDetailsItem";
import BookMinifiedItem from "./components/books/BookMinifiedItem";
import BookWithDetailsItem from "./components/books/BookWithDetailsItem";
import { CardList } from "./components/core/CardList";
import { NumberedList } from "./components/core/NumberedList";
import { RegularList } from "./components/core/RegularList";
import PublicationWithDetailsItem from "./components/publications/PublicationWithDetailsItem";
import { authors, books, publications } from "./data";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        resourceName="author"
        itemComponent={AuthorMinifiedItem}
      />
      <hr />
      <NumberedList
        items={books}
        resourceName="book"
        itemComponent={BookWithDetailsItem}
      />
      <hr />
      <CardList
        items={publications}
        resourceName="publication"
        itemComponent={PublicationWithDetailsItem}
      />
    </>
  );
}

export default App;
