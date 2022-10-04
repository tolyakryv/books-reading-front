import { LibraryModalOnFirstUse } from "../../components/LibraryModalOnFirstUse/LibraryModalOnFirstUse.jsx";

import { LibraryBooksList } from "../../components/LibraryBooksList/LibraryBooksList.jsx";
import { FormAddBook } from "../../components/FormAddBook/FormAddBook.jsx";
export const LibraryPage = () => {
  return (
    <>
      {/* <LibraryModalOnFirstUse /> */}
      <FormAddBook />
      <LibraryBooksList />
    </>
  );
};
