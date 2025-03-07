import Link from 'next/link';
import '../globals.css';
import Image from 'next/image';
import FormularioDialog from './_components/form';
import Video from './_components/video';


export default function Home() {

  const produtos = [
    {
      image: "/medidores/item-1.avif",
      titulo: "medidor de Umidade de grãos de bancada g2000",
      descricao: "Específico para transações comerciais de grãos,com possibilidade de conectividade.Simples e intuitivo com resultado em segundos.",
      link: "/"
    },
    {
      image: "/medidores/item-2.jpg",
      titulo: "medidor de umidade grãos de bancada g810",
      descricao: "Corrige a umidade em função da temperatura e da densidade dos grãos. Totalmente automático. Indicado para recebimento e expedição de grãos",
      link: "/"
    },
    {
      image: "/medidores/item-3.jpg",
      titulo: "Medidor de umidade de grãos de bancada G939",
      descricao: "Melhor custo / benefício para recebimento e expedição de grãos e o mais adequado para acompanhamento da secagem dos grãos.",
      link: "/"
    },
    {
      image: "/medidores/item-4.jpg",
      titulo: "Medidor de umidade de grãos de bancada G650i",
      descricao: "O G650i é indicado para o campo, recebimento e expedição de grãos, secador e especialmente para compras Fob. Sistema de auto-calibração que reajusta o equipamento a cada medida.",
      link: "/"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white min-w-full overflow-x-hidden ">

      <section className="flex flex-col justify-between text-white  w-full bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat min-h-[85vh] py-[14px] px-[18vw] max-md:px-5 ">
        <div className="bg-transparent w-full flex justify-between items-center  py-4 ">
          <Image
            src="/logo.png"
            width={100}
            height={60}
            alt={'logo'}
          ></Image>
          <nav className="flex gap-4 max-md:hidden">
            <p>Inicio</p>
            <p>Serviço</p>
            <p>Produtos</p>
            <p>Sobre</p>
            <p>Contato</p>

            <p>Blog</p>
          </nav>
        </div>
        <div className='w-[55%] max-md:w-full flex-col flex gap-2'>
          <p>EQUIPAMENTOS PARA CLASSIFICAÇÃO DE GRÃOS</p>
          <h1 className='text-5xl font-bold '>
            Acompanhe com precisão a qualidade dos grãos
          </h1>
          <h2>A  Labstore possui uma linha completa de medidores de umidade de grãos

            altamente precisos e confiáveis.</h2>

          <FormularioDialog></FormularioDialog>
        </div>
        <div className=''></div>
      </section>
      <section className='flex flex-col py-[28px] px-[18vw]  max-md:px-5'>
        <div className='flex  items-center justify-evenly font-medium text-sm text-center pb-[28px]'>
          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/ervilha.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Medição na lavoura</p>
          </div>
          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/lupa.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Salas de classificação</p>
          </div>

          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/secadora.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Secadores</p>
          </div>
          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/microscopio.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Laboratórios</p>
          </div>
        </div>
        <div className='mt-9 flex flex-col justify-center items-center'>
          <p className='text-green-800 font-semibold self-start'> SOBRE NÓS</p>
          <h2 className='font-bold text-4xl  border-l-2 border-green-800 pl-4'>Entenda porque a Labstore é referência no setor agrícola -<span className='text-green-800'> Produtos de Alta Precisão</span></h2>
          <div className='w-full  bg-gray-300 rounded-md mt-4 flex justify-center items-center mb-4'><Video src='/video-home.mp4' /></div>

          <FormularioDialog></FormularioDialog>
        </div>
      </section>
      <section className='flex flex-col py-[28px] px-[18vw]  max-md:px-5'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-green-800 font-semibold self-start'> MEDIDORES</p>
          <h2 className='font-bold text-4xl border-l-[1px] border-green-800 self-start px-2'>Medidores de Umidade de Grãos com qualidade e tradição GEHAKA</h2>
          <p className='self-start mt-4 text-sm'>Aparelhos de altíssima precisão, para todos os tipos de grãos e necessidades.</p>
        </div>
        <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 py-[80px]'>


          {produtos.map((item, index) => (
            <article key={index} className='border shadow-sm flex flex-col gap-4 pb-4 px-4 justify-center items-center '>
              <Image src={item.image} width={300} height={50} alt='imagem do equipamento'></Image>
              <h1 className='font-semibold'>{item.titulo}</h1>
              <p className='text-center text-sm text-green-800'>{item.descricao}</p>
              <Link href={item.link}>
                <button className='bg-green-600 p-[12px] text-white text-sm mt-4 rounded-md'>
                  CONHECER
                </button></Link>
            </article>
          ))}
        </div>
        <div className=' flex justify-center'>
          <button className='bg-green-600 p-[8px] text-white text-sm  rounded-md'>
            MAIS PRODUTOS
          </button></div>


        <div className='flex justify-center items-center mt-[128px] max-md:flex-col  gap-4'>
          <div className='flex flex-col text-center'>
            <div className='flex flex-col border-gray-100 hover:bg-gray-50 transition-all duration-300 border-b-[1px] p-4 justify-center items-center'>
              <h2 className=' text-green-800 font-bold text-6xl'>38</h2>
              <p className=" text-sm font-semibold">ANOS DE EXPERIÊNCIA</p>
            </div>
            <div className='flex flex-col border-gray-100 border-b-[1px] hover:bg-gray-50 transition-all duration-300 p-4 justify-center items-center'>
              <h2 className=' text-green-800 font-bold text-6xl'>+2,000</h2>
              <p className=" text-sm font-semibold">VENDIDOS</p>
            </div>
            <div className='flex flex-col border-gray-100 relative border-b-[1px] hover:bg-gray-50 transition-all duration-300 p-4 justify-center items-center gap-0'>
              <Image src={"/PR.png"} alt='Estado' width={300} height={0} ></Image>
              <p className=" text-sm font-semibold absolute bottom-4">ATENDIMENTO EM TODO O ESTADO DO PR</p>
            </div>

          </div>
          <div className='bg-[url("/medidores.avif")] bg-cover  rounded-md min-h-[600px] min-w-[300px] w-[20vw] h-[65vh] max-w-[600px] max-h-[900px]'>
          </div>
          <div className='flex flex-col max-w-[35vw] max-md:max-w-[500px] px-4'>
            <p className='text-green-800 font-semibold self-start'> SERVIÇOS</p>
            <h2 className='font-bold text-4xl border-l-[1px] border-green-800 self-start px-2'>Oficina autorizada para conserto de medidores de umidade de grãos</h2>
            <p className='self-start mt-4 text-sm'>Somos uma oficina autorizada pelo Fabricante e pelo IPEM-PR para manutenção e reparo de medidores de umidade de grãos, garantindo serviços dentro das normas exigidas para equipamentos homologados pelo Inmetro. Conte com nossa expertise para manter a precisão e confiabilidade dos seus medidores.</p>
            <div className='grid grid-cols-2 mt-4 gap-4'>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/medalha.svg"} alt='icon' width={65} height={65}></Image>Oficina autorizada pelo IPEM/PR</div>

              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/mao-obra.png"} alt='icon' width={65} height={65}></Image> Mão de obra especializada</div>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/certificated.png"} alt='icon' width={65} height={65}></Image> Certificações rastreáveis</div>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/config.png"} alt='icon' width={65} height={65}></Image> Manutenções corretivas e preventivas</div>
              <div className='col-span-2 flex items-center justify-center'>
                <button className='bg-green-600 p-[8px] text-sm text-white mt-4 rounded-md'>
                  QUERO SABER MAIS
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='p-8 bg-white max-md:p-0'>
        <div className='flex flex-col py-[28px] px-[18vw] rounded-md min-h-screen text-white bg-green-800 justify-center items-center'>
          <h2>BENEFÍCIOS</h2>
          <h1 className='text-4xl font-semibold max-md:text-center'>Controle de qualidade de grãos com excelência</h1>
          <div className='grid grid-cols-2  gap-8 max-md:grid-cols-1  mt-10'>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Image width={300} className='rounded-full' height={50} src={"/card-1.png"} alt='card' />
              <h2 className="font-semibold">Tecnologia Labstore</h2>
              <p>Tecnologia exclusiva da Labstore e a única no mundo homologada pelo INMETRO e pela USDA.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Image width={300} className='rounded-full' height={50} src={"/card-2.png"} alt='card' />
              <h2 className="font-semibold">Perfeito para a lavoura</h2>
              <p>A Labstore atende às necessidades do campo, proporcionando uma experiência eficiente e facilitando a rotina dos trabalhadores rurais.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Image width={300} className='rounded-full' height={50} src={"/card-3.png"} alt='card' />
              <h2 className="font-semibold">Ampla variedade de grãos</h2>
              <p>Projetados para medirem uma grande variedade de grãos, os medidores Labstore se adaptam facilmente a diferentes tipos de culturas.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Image width={300} className='rounded-full' height={50} src={"/card-4.png"} alt='card' />
              <h2 className="font-semibold">Medidor de alta precisão</h2>
              <p>
                Graças à sua tecnologia avançada, os modelos GEHAKA oferecem leituras extremamente precisas, garantindo confiança nos resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex gap-4 py-[170px] px-[18vw] justify-center items-center max-md:flex-col  max-md:px-5'>
        <div>
          <Image src={"/local.jpg"} width={750} height={400} alt='teste' className='border-2 border-green-800'></Image>
        </div>
        <div className='flex flex-col gap-4 justify-between min-h-[35vh]'>
          <h2 className='text-5xl font-semibold border-l-2 border-green-800 pl-1'>Procure a labstore mais próxima</h2>
          <p className='text-gray-600'>Conheça nossas unidades e revendas pelo Brasil</p>
          <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 mt-3'>
            <div className='px-4'>
              <p className='text-green-800 text-lg'>Cidade: Curitiba – PR</p>
              <p className=' text-lg'>Tel: (41) 3269-8900</p>
              <p className=' text-lg'>E-mail: labstore@labstore.com.br</p>
              <p className='text-gray-500'>Endereço: Rua da Divina Providência, 79 Santa Quitéria</p>
              <p className='text-gray-700 mt-4'>CEP: 80310-010</p>
            </div>
            <div className='px-4'>
              <p className='text-green-800 text-lg'>Cidade: Curitiba – PR</p>
              <p className=' text-lg'>Tel: (43) 3327-4110</p>
              <p className=' text-lg'>E-mail: labstore@labstore.com.br</p>
              <p className='text-gray-500'>Endereço: Rua Deputado Nilson Ribas, 711Jd. Bancários</p>
              <p className='text-gray-700 mt-4'>CEP: 86062-090</p>
            </div>
          </div>
        </div>

      </section>

      <div className='bg-[#23622C] w-full min-w-[300px] max-w-[1000px]  p-8 pb-10 mb-[-20px]   hidden max-md:flex flex-col z-10  max-md:px-5'>
        <div className='flex flex-col text-white justify-center p-4'>
          <p>NEWSLETTER</p>
          <h2 className='text-4xl font-semibold'>Cadastre-se na Newsletter da Labstore!</h2>
          <p>Faça seu cadastro gratuitamente e comece a ficar por dentro de todas as novidades e promoções da Labstore!</p>
        </div>
        <div className='flex flex-col gap-4 justify-center text-white items-start w-full p-4'>
          <label>Nome</label>
          <input type='text' placeholder='Digite seu nome aqui ...' className='p-2 rounded-sm w-full text-black'></input>
          <label>Email</label>
          <input type='text' placeholder='Digite seu email aqui ...' className='p-2 rounded-sm w-full text-black'></input>
          <button className='bg-green-600 hover:bg-green-900 transition-all duration-300 p-4 self-end text-sm mt-4 rounded-md'>
            Enviar Email
          </button>
        </div>

      </div>
      <footer className='min-h-[50vh] bg-[#091F0C] relative flex flex-col justify-center items-center  rounded-t-3xl z-20 shadow-md'>
        <div className='bg-[#23622C] w-[65vw] min-w-[300px] max-w-[1000px] top-[-80px] rounded-3xl absolute p-8  flex max-md:hidden  max-md:px-5'>
          <div className='flex flex-col text-white justify-center p-4'>
            <p>NEWSLETTER</p>
            <h2 className='text-4xl font-semibold'>Cadastre-se na Newsletter da Labstore!</h2>
            <p>Faça seu cadastro gratuitamente e comece a ficar por dentro de todas as novidades e promoções da Labstore!</p>
          </div>
          <div className='flex flex-col gap-4 justify-center text-white items-start w-full p-4'>
            <label>Nome</label>
            <input type='text' placeholder='Digite seu nome aqui ...' className='p-2 rounded-sm w-full text-black'></input>
            <label>Email</label>
            <input type='text' placeholder='Digite seu email aqui ...' className='p-2 rounded-sm w-full text-black'></input>
            <button className='bg-green-600 hover:bg-green-900 transition-all duration-300 p-4 self-end text-sm mt-4 rounded-md'>
              Enviar Email
            </button>
          </div>

        </div>

      </footer>

    </div>
  );
}
