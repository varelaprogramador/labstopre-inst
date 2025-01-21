import './globals.css'; import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white ">

      <section className="flex flex-col justify-between  w-full bg-[url('/banner-home.png')] bg-cover bg-center bg-no-repeat min-h-[70vh] px-[12vw] ">
        <div className="bg-transparent w-full flex justify-between items-center  py-4 ">
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
        </div>
        <div className='w-[55%]'>
          <p>EQUIPAMENTOS PARA CLASSIFICAÇÃO DE GRÃOS</p>
          <h1 className='text-4xl font-semibold'>
            Acompanhe com precisão a qualidade dos grãos
          </h1>
          <h2>A  Labstore possui uma linha completa de medidores de umidade de grãos

            altamente precisos e confiáveis.</h2>
          <button>
            VER MEDIDORES
          </button>
        </div>
        <h1>Taks</h1>
        op
      </section>

    </div>
  );
}
