import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
    return (

        <div>
            <div>
          <Link className="underline text-1xl text-gray-500 " href={'/json'}>
            View JSON Data
          </Link>
        </div>        
      <div className="h-14 w-full flex items-center font-mono font-bold my-4 border-2 rounded-2xl justify-between  px-4 shadow-lg">
        <Link href={'/'}><img className="h-14" src="https://i.pinimg.com/originals/e8/2e/c4/e82ec4007494891eac542ac464b9ec30.png" alt="" /></Link>
        



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
        </div>

    );
}                                       