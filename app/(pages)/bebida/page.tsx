import Image from 'next/image';
import Link from 'next/link';
export default function bebida() {
  return (
    <div className="flex flex-col min-h-screen bg-white min-w-full overflow-x-hidden ">

      <section className="flex flex-col justify-between text-white  w-full bg-[url('/banner-bebida.png')] bg-cover bg-center bg-no-repeat min-h-[85vh] py-[14px] px-[18vw] max-md:px-5 ">
        <div className="bg-transparent w-full flex justify-between items-center  py-4 ">
          <Image
            src="/logo.png"
            width={100}
            height={60}
            alt={'logo'}
          ></Image>
          <nav className="flex gap-4 max-md:hidden">
            <Link href={"/"}><p>Inicio</p></Link>
            <Link href={"/"}><p>Serviço</p></Link>
            <Link href={"/"}><p>Produtos</p></Link>
            <Link href={"/"}><p>Sobre</p></Link>
            <Link href={"/"}><p>Contato</p></Link>
            <Link href={"/"}><p>Blog</p></Link>
            
          

            
          </nav>
        </div>
        <div className='w-[55%] max-md:w-full flex-col flex gap-2'>
          <p>EQUIPAMENTOS PARA CLASSIFICAÇÃO DE GRÃOS</p>
          <h1 className='text-5xl font-bold '>
          Acompanhe com precisão a qualidade da indústria de equipamentos de laboratórios da Labstore
          </h1>
          <h2>A Labstore possui uma linha completa com o segmento alimentício.</h2>
          <button className='bg-[#00BBFF] p-[16px] text-sm mt-4 rounded-md font-semibold'>
            VER MEDIDORES
          </button>
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
            <Image src="/microscopio.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Laboratórios</p>
          </div>
          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/secadora.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Secadores</p>
          </div>
          <div className='flex flex-col min-h-[100px] gap-4  justify-center items-center '>
            <Image src="/lupa.svg" width={50} height={100} alt='icon-ervilha'></Image>
            <p>Salas de classificação</p>
          </div>
        </div>
        <div className='mt-9 flex flex-col justify-center items-center'>
          <p className='text-[#00BBFF] font-semibold self-start'> SOBRE NÓS</p>
          <h2 className='font-bold text-4xl'>Entenda porque a Labstore é referência no setor agrícola -<span className='text-[#00BBFF]'> Produtos de Alta Precisão</span></h2>
          <div className='w-full min-h-[550px] bg-gray-300 rounded-md mt-4 flex justify-center items-center'>VIDEO</div>
          <button className='bg-[#00BBFF] p-[8px] text-sm mt-4 rounded-md text-white'>
            VER MEDIDORES
          </button>
        </div>
      </section>
      <section className='flex flex-col py-[28px] px-[18vw]  max-md:px-5'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#00BBFF] font-semibold self-start'> MEDIDORES</p>
          <h2 className='font-bold text-4xl border-l-[1px] border-[#00BBFF] self-start px-2'>Medidores de Umidade de Grãos com qualidade Labstore</h2>
          <p className='self-start mt-4 text-sm'>Aparelhos de altíssima precisão, para todos os tipos de grãos e necessidades.</p>
        </div>
        <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 py-[80px]'>
          <article className='border shadow-sm flex flex-col gap-4 pb-4 px-4 justify-center items-center '>
            <Image src={"/item-1.avif"} width={300} height={50} alt='imagem do equipamento'></Image>
            <h1 className='font-semibold'>medidor de Umidade de grãos de bancada g2000  </h1>
            <p className='text-center text-sm'>Específico para transações comerciais de grãos,
              com possibilidade de conectividade.
              Simples e intuitivo com resultado em segundos.</p>
            <button className='bg-[#00BBFF] p-[8px] text-white text-sm mt-4 rounded-md'>
              CONHECER
            </button>
          </article>
          <article className='border shadow-sm flex flex-col gap-4 pb-4 px-4 justify-center items-center '>
            <Image src={"/item-1.avif"} width={300} height={50} alt='imagem do equipamento'></Image>
            <h1 className='font-semibold'>medidor de Umidade de grãos de bancada g2000  </h1>
            <p className='text-center text-sm'>Específico para transações comerciais de grãos,
              com possibilidade de conectividade.
              Simples e intuitivo com resultado em segundos.</p>
            <button className='bg-[#00BBFF] p-[8px] text-white text-sm mt-4 rounded-md'>
              CONHECER
            </button>
          </article>
          <article className='border shadow-sm flex flex-col gap-4 pb-4 px-4 justify-center items-center '>
            <Image src={"/item-1.avif"} width={300} height={50} alt='imagem do equipamento'></Image>
            <h1 className='font-semibold'>medidor de Umidade de grãos de bancada g2000  </h1>
            <p className='text-center text-sm'>Específico para transações comerciais de grãos,
              com possibilidade de conectividade.
              Simples e intuitivo com resultado em segundos.</p>
            <button className='bg-[#00BBFF] p-[8px] text-white text-sm mt-4 rounded-md'>
              CONHECER
            </button>
          </article>
          <article className='border shadow-sm flex flex-col gap-4 pb-4 px-4 justify-center items-center '>
            <Image src={"/item-1.avif"} width={300} height={50} alt='imagem do equipamento'></Image>
            <h1 className='font-semibold'>medidor de Umidade de grãos de bancada g2000  </h1>
            <p className='text-center text-sm'>Específico para transações comerciais de grãos,
              com possibilidade de conectividade.
              Simples e intuitivo com resultado em segundos.</p>
            <button className='bg-[#00BBFF] p-[8px] text-white text-sm mt-4 rounded-md'>
              CONHECER
            </button>
          </article>
        </div>
        <div className=' flex justify-center'>
          <button className='bg-[#00BBFF] p-[8px] text-white text-sm  rounded-md'>
            MAIS PRODUTOS
          </button></div>


        <div className='flex justify-center items-center mt-[128px] max-md:flex-col  gap-4'>
          <div className='flex flex-col text-center'>
            <div className='flex flex-col border-gray-100 hover:bg-gray-50 transition-all duration-300 border-b-[1px] p-4 justify-center items-center'>
              <h2 className=' text-[#00BBFF] font-bold text-6xl'>38</h2>
              <p className=" text-sm font-semibold">ANOS DE EXPERIÊNCIA</p>
            </div>
            <div className='flex flex-col border-gray-100 border-b-[1px] hover:bg-gray-50 transition-all duration-300 p-4 justify-center items-center'>
              <h2 className=' text-[#00BBFF] font-bold text-6xl'>+1,000</h2>
              <p className=" text-sm font-semibold">VENDIDOS</p>
            </div>
            <div className='flex flex-col border-gray-100 border-b-[1px] hover:bg-gray-50 transition-all duration-300 p-4 justify-center items-center'>
              <h2 className=' text-[#00BBFF] font-bold text-6xl'>255</h2>
              <p className=" text-sm font-semibold">CIDADES ATENDIDAS</p>
            </div>
            <div className='flex flex-col justify-center p-4 hover:bg-gray-50 transition-all duration-300 items-center'>
              <h2 className=' text-[#00BBFF] font-bold text-6xl'>15</h2>
              <p className=" text-sm font-semibold">ESTADOS ATENDIDOS</p>
            </div>

          </div>
          <div className='bg-[url("/medidores.avif")] bg-cover  rounded-md min-h-[600px] min-w-[300px] w-[20vw] h-[65vh] max-w-[600px] max-h-[900px]'>
          </div>
          <div className='flex flex-col max-w-[35vw] max-md:max-w-[500px] px-4'>
            <p className='text-[#00BBFF] font-semibold self-start'> SERVIÇOS</p>
            <h2 className='font-bold text-4xl border-l-[1px] border-[#00BBFF] self-start px-2'>Você sabia que nós também somos especializados em manutenções?</h2>
            <p className='self-start mt-4 text-sm'>A Labstore é a solução completa que você precisa, criada especialmente para atender os profissionais que buscam adquirir equipamentos de qualidade e contar com serviços de manutenção especializados. </p>
            <div className='grid grid-cols-2 mt-4 gap-4'>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/medalha.svg"} alt='icon' width={65} height={65}></Image> Qualidade Labstore.</div>

              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/refresh.svg"} alt='icon' width={65} height={65}></Image> Equipamento Atualizado.</div>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/money.svg"} alt='icon' width={65} height={65}></Image> Preços acessíveis.</div>
              <div className='flex gap-4 items-center bg-gray-50 rounded-md text-sm p-2'><Image src={"/SAC.svg"} alt='icon' width={65} height={65}></Image> Assistência Técnica.</div>
         <div className='col-span-2 flex items-center justify-center'>
         <button className='bg-[#00BBFF] p-[8px] text-sm text-white mt-4 rounded-md'>
           QUERO SABER MAIS
          </button>
         </div>
            </div>
            
             </div>
        </div>
      </section>
      <section className='p-8 bg-white max-md:p-0'>
        <div className='flex flex-col py-[28px] px-[18vw] rounded-md min-h-screen text-white bg-[#00BBFF] justify-center items-center'>
        <h2>BENEFÍCIOS</h2>
        <h1 className='text-4xl font-semibold max-md:text-center'>Controle de qualidade de grãos com excelência</h1>
        <div className='grid grid-cols-2  gap-8 max-md:grid-cols-1  mt-10'> 
<div className="flex flex-col items-center justify-center text-center gap-2">
  <Image  width={300}  className='rounded-full' height={50} src={"/card-1.png"} alt='card' />
  <h2 className="font-semibold">Tecnologia Labstore</h2>
  <p>Tecnologia exclusiva da Labstore e a única no mundo homologada pelo INMETRO e pela USDA.</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
  <Image  width={300} className='rounded-full'  height={50} src={"/card-2.png"} alt='card' />
  <h2 className="font-semibold">Perfeito para a lavoura</h2>
  <p>A Labstore atende às necessidades do campo, proporcionando uma experiência eficiente e facilitando a rotina dos trabalhadores rurais.</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
  <Image  width={300} className='rounded-full'  height={50} src={"/card-3.png"} alt='card' />
  <h2 className="font-semibold">Todos os tipos de grãos</h2>
  <p>Projetados para medirem uma grande variedade de grãos, os medidores Labstore se adaptam facilmente a diferentes tipos de culturas.</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
  <Image  width={300} className='rounded-full'  height={50} src={"/card-4.png"} alt='card' />
  <h2 className="font-semibold">Medidor de alta precisão</h2>
  <p>Graças à sua tecnologia avançada, os modelos Labstore oferecem leituras extremamente precisas, garantindo confiança nos resultados.</p>
</div>
        </div>
        </div>
         </section>
         <section className='flex gap-4 py-[170px] px-[18vw] justify-center items-center max-md:flex-col  max-md:px-5'>
          <div>
<Image src={"/local.jpg"} width={750} height={400} alt='teste' className='border-2 border-[#00BBFF]'></Image>
          </div>
          <div className='flex flex-col gap-4 justify-between min-h-[35vh]'>
            <h2 className='text-5xl font-semibold border-l-2 border-[#00BBFF] pl-1'>Procure a labstore mais próxima</h2>
            <p className='text-gray-600'>Conheça nossas unidades e revendas pelo Brasil</p>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 mt-3'>
              <div className='px-4'>
                <p className='text-[#00BBFF] text-lg'>Cidade: Curitiba – PR</p>
                <p className=' text-lg'>Tel: (41) 3269-8900</p>
                <p className=' text-lg'>E-mail: labstore@labstore.com.br</p>
                <p className='text-gray-500'>Endereço: Rua da Divina Providência, 79 Santa Quitéria</p>
                <p className='text-gray-700 mt-4'>CEP: 80310-010</p>
              </div>
              <div className='px-4'>
                <p className='text-[#00BBFF] text-lg'>Cidade: Curitiba – PR</p>
                <p className=' text-lg'>Tel: (43) 3327-4110</p>
                <p className=' text-lg'>E-mail: labstore@labstore.com.br</p>
                <p className='text-gray-500'>Endereço: Rua Deputado Nilson Ribas, 711Jd. Bancários</p>
                <p className='text-gray-700 mt-4'>CEP: 86062-090</p>
              </div>
            </div>
          </div>

         </section>
         <section className='flex flex-col  gap-4 py-[170px] px-[18vw] justify-center items-center  bg-[#F5FAEE]  max-md:px-5'>
         <p className='text-[#00BBFF] font-semibold '>DEPOIMENTOS DE CLIENTES</p>
         <h2 className='text-5xl font-semibold border-l-2 border-[#00BBFF] pl-1'>Conheça a opinião de quem conhece e usa os Medidores de Umidade Labstore</h2>
         <div className=' grid grid-cols-2 gap-8 max-md:grid-cols-1'>
          <div className='flex flex-col gap-4'>
          <div className='p-4 bg-white shadow-sm text-gray-400 font-light' >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oiNUSIlgGj4?si=wW5S3kNz6oCHbfZW" title="YouTube video player" ></iframe>
          </div>
          <div className='text-center'>
          {/* <h2>Valéria Ribeiro</h2>
          <p className='text-[#00BBFF]'>Rossato e Filhas - Sertanópolis (PR)</p> */}
        </div>
          </div>
          <div  className='flex flex-col gap-4'>
          <div className='p-4 bg-white shadow-sm text-gray-400 font-light' >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bSdZHRJSh04?si=p8jTE5fTcOyq85w8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          
          <div className='text-center'>
            {/* <h2>Renan Coelho</h2>
            <p className='text-[#00BBFF]'>Fazenda Flor da Serra - Cornélio Procópio (PR)</p> */}
          </div>
          </div>
         </div>
            
         </section>
         <section className='flex flex-col  py-[170px] px-[18vw] justify-center items-center min-h-[70vh]  max-md:px-5'>
          <p className='text-[#00BBFF] font-bold'>BLOG</p>
          <h2 className='text-4xl font-medium'>Saiba mais sobre a Labstore</h2>
          <div className='grid grid-cols-3 gap-8 mt-16 max-md:grid-cols-1'>
            <div className='border flex flex-col rounded-md gap-4 transition-all duration-300 hover:scale-110'>
              <div className='bg-[url("/noticia-1.png")] bg-cover min-h-[300px] min-w-full rounded-md '></div>
              <div className='p-4'>
              <h1>Aliados a Tecnologia</h1>
              <p className='text-gray-400'>Aliada à tecnologia, produção de soja no Paraná deve superar 22 milhões de toneladas...</p>
</div>
            </div>
            <div className='border flex flex-col rounded-md gap-4 transition-all duration-300 hover:scale-110'>
              <div className='bg-[url("/noticia-2.png")] bg-cover min-h-[300px] min-w-full rounded-md '></div>
              <div className='p-4'>
              <h1>Nova tecnologia de ponta</h1>
              <p className='text-gray-400'>Nova tecnologia de ponta para melhorar a qualidade no armazenamento de grãos...</p>
</div>
            </div>
            <div className='border flex flex-col rounded-md gap-4 transition-all duration-300 hover:scale-110'>
              <div className='bg-[url("/noticia-3.jpg")] bg-cover min-h-[300px] min-w-full rounded-md '></div>
              <div className='p-4'>
              <h1>Parceria entre Labstore e UEM </h1>
              <p className='text-gray-400'>Parceria entre Labstore e UEM fortalece formação prática em Engenharia Agrícola</p>
</div>
            </div>
          </div>
          <button className='bg-[#00BBFF] text-white p-[16px] text-sm mt-16 rounded-md'>
          CONHECER BLOG
          </button>
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
              <input type='text' placeholder='Digite seu email aqui ...'  className='p-2 rounded-sm w-full text-black'></input>
              <button className='bg-[#24a7d6]  transition-all duration-300 p-4 self-end text-sm mt-4 rounded-md'>
            Enviar Email
          </button>
            </div>

          </div>
         <footer className='min-h-[50vh] bg-[#2ab1ff] relative flex flex-col justify-center items-center  rounded-t-3xl z-20 shadow-md'>
          <div className='bg-[#00BBFF] w-[65vw] min-w-[300px] max-w-[1000px] top-[-80px] rounded-3xl absolute p-8  flex max-md:hidden  max-md:px-5'>
            <div className='flex flex-col text-white justify-center p-4'>
              <p>NEWSLETTER</p>
              <h2 className='text-4xl font-semibold'>Cadastre-se na Newsletter da Labstore!</h2>
              <p>Faça seu cadastro gratuitamente e comece a ficar por dentro de todas as novidades e promoções da Labstore!</p>
            </div>
            <div className='flex flex-col gap-4 justify-center text-white items-start w-full p-4'>
            <label>Nome</label>
              <input type='text' placeholder='Digite seu nome aqui ...' className='p-2 rounded-sm w-full text-black'></input>
              <label>Email</label>
              <input type='text' placeholder='Digite seu email aqui ...'  className='p-2 rounded-sm w-full text-black'></input>
              <button className='bg-[#24a7d6]  transition-all duration-300 p-4 self-end text-sm mt-4 rounded-md'>
            Enviar Email
          </button>
            </div>

          </div>
          
         </footer>

    </div>
  );
}
