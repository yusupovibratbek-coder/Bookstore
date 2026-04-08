import { Button } from "@/components/ui/button";
import Card from "./features/card";

export default function Home() {
  return (
    <div className="bg-white h-full w-full px-48">
      {/* navbar */}
      <div className="h-14 w-full flex items-center font-mono font-bold my-4 border-2 rounded-2xl justify-between  px-4 shadow-lg">
        <img className="h-14" src="https://i.pinimg.com/originals/e8/2e/c4/e82ec4007494891eac542ac464b9ec30.png" alt="" />
        
        <div>
          <input className="border-1 rounded-4xl p-1 pl-3 " placeholder="Search books" type="text" />
        </div>
        <div className="flex text-black justify-around w-96 text-shadow-lg">
          <h1>Main</h1>
          <h1>Books</h1>
          <h1>Popular</h1>
          <h1>Rating</h1>
          <h1>Contact</h1>
        </div>
        <Button>Log in</Button>
      </div>

      {/* hero */}
      <div className="w-full h-136  flex items-center justify-between border-2 rounded-2xl shadow-lg mb-4">
        <div className="w-full h-136 flex flex-col items-start justify-center pl-18">
          <h1 className="text-4xl font-bold font-mono text-gray-800">World of</h1>
          <h1 className="text-9xl font-black font-mono bg-gradient-to-br from-red-700 to-gray-600 bg-clip-text text-transparent">Books</h1>
          <p className="text-sm font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt ipsum ducimus, nobis minima voluptate voluptatum aperiam quaerat voluptatem culpa at officiis itaque ea mollitia provident labore est maiores magni?</p>
        </div>
        <div className="w-full h-136 flex items-center justify-center">
          <img className="h-112" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Minha_Luta_-_Mein_Kampf_-_Adolf_Hitler.jpg" alt="" />
        </div>
      </div>

      {/* features */}
      <div className="w-full h-112">
        <Card></Card>
      </div>

      {/* kards */}
      <div className="w-full h-96 bg-green-300"></div>

      {/* qoshimcha */}
      <div className="w-full h-96 bg-purple-300"></div>

      {/* footer */}
      <div className="w-full h-74 bg-gray-800"></div>
    </div>
  )
}