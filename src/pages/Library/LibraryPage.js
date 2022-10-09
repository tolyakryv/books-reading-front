import { LibraryModalOnFirstUse } from "../../components/LibraryModalOnFirstUse/LibraryModalOnFirstUse.jsx";
import { LibraryBooksList } from "../../components/LibraryBooksList/LibraryBooksList.jsx";
import { FormAddBook } from "../../components/FormAddBook/FormAddBook.jsx";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import operation from "../../redux/operation/books-operation";
import { useEffect } from "react";

const LibraryPage = () => {
  const addBook = useSelector((state) => state.books.addBook);
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const [formAddBook, setFormAddBook] = useState(false);

  useEffect(() => {
    dispatch(operation.getBooks());
  }, [dispatch, addBook]);

  const getFormAddBook = () => {
    setFormAddBook(!formAddBook);
  };

  return (
    <>
      <Mobile>
        {formAddBook ? (
          <FormAddBook data={books} getFormAddBook={getFormAddBook} />
        ) : (
          <>
            {books === undefined || books.length === 0 ? (
              <LibraryModalOnFirstUse getFormAddBook={getFormAddBook} />
            ) : (
              <LibraryBooksList data={books} getFormAddBook={getFormAddBook} />
            )}
          </>
        )}
      </Mobile>
      <Tablet>
        <FormAddBook data={books} />
        {books === undefined || books.length === 0 ? (
          <LibraryModalOnFirstUse />
        ) : (
          <LibraryBooksList data={books} />
        )}
      </Tablet>
      <Desktop>
        <FormAddBook data={books} />
        {books === undefined || books.length === 0 ? (
          <LibraryModalOnFirstUse />
        ) : (
          <LibraryBooksList data={books} />
        )}
      </Desktop>
    </>
  );
};

export default LibraryPage;
