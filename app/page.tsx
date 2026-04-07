export default function Home() {
  return(
    <div className="bg-white h-full w-full px-48">
      {/* navbar */}
      <div className="h-14 w-full flex items-center font-mono font-bold justify-between">
        <img className="h-14" src="https://www.creativefabrica.com/wp-content/uploads/2023/06/14/Open-book-icon-Reading-club-logo-Knowl-Graphics-72117356-1.png" alt="" />
        <div className="flex text-black justify-around w-96">
          <h1>Main</h1>
          <h1>Books</h1>
          <h1>Popular</h1>
          <h1>Rating</h1>
          <h1>Contact</h1>
        </div>
      </div>

      {/* hero */}
      <div className="w-full h-136 bg-red-300"></div>

      {/* features */}
      <div className="w-full h-96 bg-yellow-300"></div>

      {/* kards */}
      <div className="w-full h-96 bg-green-300"></div>

      {/* qoshimcha */}
      <div className="w-full h-96 bg-purple-300"></div>

      {/* footer */}
      <div className="w-full h-74 bg-gray-800"></div>
    </div>
  )
}