import { Button } from "@/components/ui/button";
import Card from "./features/card";
import Link from "next/link";
import { DivideSignCircleFreeIcons } from "@hugeicons/core-free-icons";



export default function Home() {
  return (
    
    <div className="bg-white h-full w-full px-48">
      {/* navbar */}
        <div>
          <Link className="underline text-1xl text-gray-500 " href={'/json'}>
            View JSON Data
          </Link>
        </div>        
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
      <div className="w-full h-full">
        <div>
          <h1 className="text-5xl font-bold font-mono bg-gradient-to-br from-red-700 to-black bg-clip-text text-transparent p-10">Top free Books about WW2</h1>
        </div>
        <div>
          <div className="flex border-2  rounded-lg p-4 w-158 shadow-lg">
            <div>
              <img className="w-65 rounded-lg" src="https://nomadpress.net/wp-content/uploads/2017/09/WorldWarII_Cover.jpg" alt="" />
            </div>
            <div className="pl-5">
              <div className="border-red-700 border-3 rounded-lg w-75">
                <h1 className="pl-5 text-4xl font-bold font-mono text-black">World War II</h1>
                <h1 className=" pl-5 font-bold text-1xl text-red-700">by Diane C.Taylor</h1>
              </div>
              <div className="p-6 pl-14">
                <Link className="text-3xl text-white bg-red-700 rounded-lg p-2 " href={'/worldwar2'}>Read Now...</Link>
              </div>
              <div>
                <h1 className="w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ad, dignissimos ducimus beatae nihil quia possimus optio eveniet corporis, vero quas saepe consectetur eius voluptates. Repellat perspiciatis neque consequuntur. Corrupti.</h1>
              </div>
            </div>
          </div>
        </div>


        <div className="flex border-2  rounded-lg p-4 w-158 shadow-lg ">
          <div>
            <img className="w-65 rounded-lg" src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781855329959.jpg" alt="" />
          </div>
          <div className="pl-5">
            <div className="border-red-700 border-3 rounded-lg w-75">
              <h1 className="pl-5 text-4xl font-bold font-mono text-black">US army WW2</h1>
              <h1 className=" pl-5 font-bold text-1xl text-red-700">by Mark R Henry</h1>
            </div>
            <div className="p-6 pl-14">
              <Link className="text-3xl text-white bg-red-700 rounded-lg p-2 " href={'/usarmy'}>Read Now...</Link>
            </div>
            <div>
              <h1 className="w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ad, dignissimos ducimus beatae nihil quia possimus optio eveniet corporis, vero quas saepe consectetur eius voluptates. Repellat perspiciatis neque consequuntur. Corrupti.</h1>
            </div>
          </div>
        </div>
      </div>

      {/* qoshimcha */}
      <div>
        <h1>ddw</h1>
        <h1>deefe</h1>
      </div>

      {/* footer */}

    </div>
  )
}