import axios, { AxiosRequestConfig } from "axios";
import { NextRequest, NextResponse } from "next/server";

// Tratamento do método OPTIONS (preflight CORS)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const name = data.name;
    const phones: string[] = Array.isArray(data.phone)
      ? data.phone
      : [data.phone];

    if (!phones.length) {
      return NextResponse.json(
        { error: "Nenhum número de telefone fornecido" },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const message = ` Bem-vindo à Labstore – Estamos à disposição para você!

Prezado(a), ${name || "cliente"}! 👋

É com grande satisfação que recebemos seu interesse em nossos produtos e serviços! Na Labstore, somos especializados em fornecer equipamentos de alta precisão para a classificação de grãos, garantindo qualidade e eficiência em suas operações agrícolas.

Oferecemos uma linha completa de medidores de umidade de grãos, desenvolvidos para atender às diversas necessidades do campo, desde medições na lavoura até salas de classificação e laboratórios. Nossos produtos são reconhecidos pela confiabilidade e precisão, auxiliando produtores a obterem resultados mais assertivos em suas colheitas.

Além disso, contamos com uma oficina autorizada pelo IPEM-PR para manutenção e reparo de medidores de umidade de grãos, assegurando que seus equipamentos estejam sempre em conformidade com as normas exigidas pelo Inmetro. Nossa equipe especializada está pronta para oferecer suporte técnico de qualidade, garantindo a longevidade e o desempenho ideal dos seus aparelhos.

Nosso setor comercial entrará em contato em breve para entender melhor suas necessidades e apresentar as melhores soluções para o seu negócio. Enquanto isso, caso tenha alguma dúvida ou precise de mais informações, estamos à disposição.

📍 Curitiba: Rua da Divina Providência, 79. Santa Quitéria, Curitiba - PR, CEP: 80310-010
📞 Telefone: (41) 3269-8900

📍 Londrina: Rua Deputado Nilson Ribas, 711, Jd. Bancários, Londrina - PR, CEP: 86062-090
📞 Telefone: (43) 3327-4110

✉ E-mail: labstore@labstore.com.br

Agradecemos sua confiança e esperamos contribuir para o sucesso da sua produção agrícola!

Atenciosamente,
Equipe Labstore`;

    const sendMultiplesWhatsappNotification = async ({
      phones,
      messages,
    }: {
      phones: string[];
      messages: string[];
    }) => {
      try {
        const config: AxiosRequestConfig = {
          method: "POST",
          url: `${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE_ID}`,
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.EVOLUTION_API_KEY!,
          },
        };

        const delay = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        for (const phone of phones) {
          for (const message of messages) {
            try {
              await axios({
                ...config,
                data: {
                  delay: 120,
                  number: phone,
                  text: message,
                  linkPreview: false,
                },
              });

              console.log(`Mensagem enviada para ${phone}`);
              await delay(1000);
            } catch (error) {
              console.error(`Erro ao enviar para ${phone}:`, error);
            }
          }
        }
      } catch (error) {
        console.error("Erro ao enviar mensagens em massa:", error);
      }
    };

    await sendMultiplesWhatsappNotification({
      messages: [message],
      phones: phones,
    });

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Erro na API de leads:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
