'use client'

import Link from "next/link"

export default function Home(){
  return(
    <div className="flex flex-col items-center justify-center bg-black text-white w-screen h-screen">
        <h1 className="text-4xl font-semibold">Sejava bem vindo 2</h1>

      <Link href="/editar" >
          <button className="p-2 text-white text-2xl bg-zinc-700 px-10 
            mt-10 rounded-md hover:bg-violet-700 duration-200">Editar</button>
      </Link>
    </div>
  )
}