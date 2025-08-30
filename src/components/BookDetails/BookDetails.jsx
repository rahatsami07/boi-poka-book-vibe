import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../addToDb";
import { addToStoredWishList } from "../wishlistToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  // console.log(bookId);

  const data = useLoaderData();
  // console.log(data);

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(book);

  const handleMarkAsRead = (id) => {
    /**
     * 1. underastand what to store or save : => bookId
     * 2. where to store : database
     * 3. array, list, collection
     * 4. check: if the book is already in the readlist:
     * if yes, do not add the book to the list
     * if not, then add the book to the list
     */
    addToStoredReadList(id);
    addToStoredWishList(id);
  };

  return (
    <div className="bg-gray-100 p-10 rounded-2xl">
      <div className="lg:flex justify-between space-x-10">
        <img src={image} className="max-w-[485px] h-[711px] rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>

          <p className=" text-gray-600 mt-3 font-semibold">By : {author}</p>
          <div className="divider"></div>
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="divider"></div>
          <p className="py-6">
            <span className="text-lg font-semibold">Review : </span>
            {review}
          </p>

          <div>
            <div className="flex items-center space-x-5">
              <p className="font-bold text-lg">Tag</p>
              {tags.map((tag, idx) => (
                <p
                  key={idx}
                  className="bg-[#d3f0d0] rounded-lg px-3 py-1 text-[#23BE0A] text-lg font-semibold"
                >
                  #{tag}
                </p>
              ))}
            </div>
            <div className="divider"></div>

            <div className="space-y-5  w-6/12 mb-5">
              <div className="flex justify-between font-semibold">
                <p>Number of Pages:</p>
                <p className="fotn-bold">{totalPages}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Publisher:</p>
                <p className="fotn-bold">{publisher}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Year of Publishing::</p>
                <p className="fotn-bold">{yearOfPublishing}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Rating:</p>
                <p className="fotn-bold">{rating}</p>
              </div>
            </div>

            <div className="flex space-x-5">
              <button
                onClick={() => handleMarkAsRead(bookId)}
                className="btn text-lg font-semibold bg-[#23BE0A] text-white p-5 rounded-xl"
              >
                Read
              </button>
              <button
                onClick={() => addToStoredWishList(bookId)}
                className="btn text-lg font-semibold bg-[#59C6D2] text-white p-5 rounded-xl"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
