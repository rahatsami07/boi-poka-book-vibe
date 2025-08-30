import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, tags, category, author, image, rating } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="border border-gray-200 p-6 rounded-xl space-y-5">
        <div className="bg-[#f0f0f0] p-8 rounded-3xl">
          <img className="w-36 mx-auto h-52 rounded-xl" src={image} alt="" />
        </div>
        <div className="flex items-center space-x-5">
          {tags.map((tag, idx) => (
            <p
              key={idx}
              className="bg-[#eeffec] rounded-lg px-3 py-1 text-[#23BE0A] text-xl"
            >
              {tag}
            </p>
          ))}
        </div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-lg text-gray-600">By : {author}</p>
        <div className="border-b border-gray-400 border-dashed"></div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-600">{category}</p>
          <p className="text-lg text-gray-600">{rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
