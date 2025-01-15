import Link from "next/link";

export default function Editar(){
    return(
        <div className="bg-black w-screen h-screen
            flex items-center justify-center
        ">
            <form className="bg-white text-black p-10 w-450 flex flex-col gap-10 rounded-md">
                
                <header className="">
                    <nav className="flex justify-between">
                        <h1 className="font-bold text-3xl">Editar Perfil</h1>
                        <Link href="/">
                        <button className="text-3xl hover:bg-red-500 rounded-full h-10 w-10
                         hover:text-white duration-300">x</button>
                        </Link>
                    </nav>
                    <p>Deseja atualizar o perfil?</p>
                </header>

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex gap-2 justify-between items-center">
                        <label className="ml-20">Nome</label>
                        <input type="text" className="border-2 p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-2 justify-between items-center">
                            <label>Nome do usuário</label>
                            <input type="text" className="border-2 p-2 rounded-md"/>
                        </div>
                    </div>
                    <Link href="/">
                        <button className="bg-black text-white p-2 px-10 text-2xl mt-5 rounded-md 
                        hover:bg-violet-700 duration-300 w-full">Salvar</button>
                    </Link>
                </div>

            </form>
        </div>
    )
}