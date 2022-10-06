import { LibraryModalOnFirstUse } from "../../components/LibraryModalOnFirstUse/LibraryModalOnFirstUse.jsx";
import { useGetAllBookQuery } from "../../services/booksAPI";
import { LibraryBooksList } from "../../components/LibraryBooksList/LibraryBooksList.jsx";
import { FormAddBook } from "../../components/FormAddBook/FormAddBook.jsx";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents.js";
import { useState } from "react";

const LibraryPage = () => {
  const { data = [] } = useGetAllBookQuery();
  const [formAddBook, setFormAddBook] = useState(false);

  const getFormAddBook = () => {
    setFormAddBook(!formAddBook);
  };

  return (
    <>
      <Mobile>
        {formAddBook ? (
          <FormAddBook getFormAddBook={getFormAddBook} />
        ) : (
          <>
            {data.result === undefined || data.result.length === 0 ? (
              <LibraryModalOnFirstUse getFormAddBook={getFormAddBook} />
            ) : (
              <LibraryBooksList getFormAddBook={getFormAddBook} />
            )}
          </>
        )}
      </Mobile>
      <Tablet>
        <FormAddBook />
        {data.result === undefined || data.result.length === 0 ? (
          <LibraryModalOnFirstUse />
        ) : (
          <LibraryBooksList />
        )}
      </Tablet>
      <Desktop>
        <FormAddBook />
        {data.result === undefined || data.result.length === 0 ? (
          <LibraryModalOnFirstUse />
        ) : (
          <LibraryBooksList />
        )}
      </Desktop>
    </>
  );
};

export default LibraryPage;
