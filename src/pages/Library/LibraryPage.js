import { LibraryModalOnFirstUse } from "../../components/LibraryModalOnFirstUse/LibraryModalOnFirstUse.jsx";
import { FormAddBook } from "../../components/FormAddBook/FormAddBook.jsx";

export const LibraryPage = () => {
  return (
    <>
      <FormAddBook />

      <LibraryModalOnFirstUse />
    </>
  );
};
