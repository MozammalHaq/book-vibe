import BookCover from "../../../assets/book-cover.jpg"

export default function Banner() {
  return (
    <div className="flex gap-5 bg-gray-100 p-20 rounded-3xl my-10">
      <div className="flex-2 flex items-start justify-center flex-col space-y-7">
        <h2 className='text-6xl font-semibold'>Books to freshen up your bookshelf</h2>
        <button className="btn btn-[#23BE0A] btn-xs sm:btn-sm md:btn-md lg:btn-lg">View The List</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img className="max-w-sm" src={BookCover} alt="" />
      </div>
    </div>
  )
}
