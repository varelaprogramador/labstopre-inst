import Image from "next/image"
export const HeaderPublic=()=>{
    return(
<div className="bg-transparent fixed top-0 left-0 w-full flex justify-between items-center px-12 py-4">

    <Image
    src="/logo.png"
    width={100}
    height={60}
    alt={'logo'}
    ></Image>
    <nav className="flex gap-4">
        <p>Inicio</p>
        <p>Serviço</p>
        <p>Produtos</p>
        <p>Sobre</p>
        <p>Contato</p>

        <p>Blog</p>
    </nav>
  
</div>)
}