import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../addToDb";
import Book from "../Book/Book";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div className="space-y-5">
      <h2 className="text-5xl text-center">Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I Read :{readList.length}</h2>
          {readList.map((book) => (
            <Book book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish Listed Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
