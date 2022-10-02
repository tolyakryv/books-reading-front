import { LibraryModalOnFirstUse } from "../../components/LibraryModalOnFirstUse/LibraryModalOnFirstUse.jsx";
import { FormAddBook } from "../../components/FormAddBook/FormAddBook.jsx";
import { LibraryBooksList } from "../../components/LibraryBooksList/LibraryBooksList.jsx";
export const LibraryPage = () => {
  return (
    <>
      <FormAddBook />
      <LibraryBooksList />
      <LibraryModalOnFirstUse />
    </>
  );
};
