import { Button } from "@/components/ui/button";
import Card from "./features/card";
import Link from "next/link";
import { DivideSignCircleFreeIcons } from "@hugeicons/core-free-icons";
import Lenta from "@/components/ui/lenta";
import Navbar from "@/components/ui/Navbar";



export default function Home() {
  return (

    <div className="bg-white h-full w-full px-48">
      {/* navbar */}
      <Navbar />

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
        <div>
          <h1 className="text-5xl font-mono font-bold p-10 my-10 bg-gradient-to-br from-red-700 to-black bg-clip-text text-transparent">All Books of ADOLF HITLER</h1>
        </div>
        <div className="">
          <Lenta />

        </div>
      </div>

      {/* footer */}
      <div className="bg-gray-200 my-50 rounded-lg border-gray-300 border-2">
        <div className="text-center">
          <h1 className="text-3xl font-mono font-bold my-5">Footer Content</h1>
        </div>
        <div className="flex justify-around p-5">
          <div className="text-blue-500 text-1xl font-bold font-mono underline">
            <h1>Support</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
            <h1>Follow Us</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>telegram</h1>
          </div>
          <div className="text-blue-500 text-1xl font-bold font-mono underline">
            <h1>Support</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
            <h1>Follow Us</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>telegram</h1>
          </div>
          <div className="text-blue-500 text-1xl font-bold font-mono underline">
            <h1>Support</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
            <h1>Follow Us</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>telegram</h1>
          </div>
          <div className="text-blue-500 text-1xl font-bold font-mono underline">
            <h1>Support</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
            <h1>Follow Us</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>telegram</h1>
          </div>
        </div>
      </div>

    </div>
  )
}