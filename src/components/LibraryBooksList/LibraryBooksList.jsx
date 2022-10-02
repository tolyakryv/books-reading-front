import * as booksAPI from "../../services/booksAPI";

export const LibraryBooksList = () => {
  const { data } = booksAPI.useGetAllBookQuery();
  //   console.log(data);
  if (data) {
    const bookGoingToRead = data.result.filter(
      (item) => item.status === "goingToRead"
    );
    console.log(bookGoingToRead);
    return (
      <div>
        {bookGoingToRead.map((item) => (
          <ul key={item._id}>
            <li>{item.title}</li>
            <li>{item.author}</li>
            <li>{item.publicDate}</li>
            <li>{item.amountPages}</li>
            <li>{item.rating}</li>
            <button></button>
          </ul>
        ))}
      </div>
    );
  }
};
