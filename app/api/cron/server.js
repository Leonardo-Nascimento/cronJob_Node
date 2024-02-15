const express = require('express')
const cron = require("node-cron");
const app = express();
import { NextResponse } from 'next/server';


const list = ['05/01  João Manoel De França Silva',
'05/01  Samuel Cleber Souza',
'06/01  Maria Salete Ferreira Gomes',
'07/01  Gabriela Albuquerque Brandão',
'10/01  Allana Rayna Ribeiro Campos',
'18/01  Stefane Ricardo de Sales',
'26/01  Raimunda Nenzinha Moreira',
'28/01  Lohan Oliveira da Silva',
'31/01  Joana Gomes do Nascimento',
'03/02  Williams Bezerra da Silva',
'11/02  Thiago Ferreira Ribeiro',
'17/02  Maria Neide Batista da Silva',
'26/02  Ana Quezia Ribeiro De Moura',
'15/03  João Vitor Santos de Almeida',
'16/03  Thayssa Pamela Soares Mota',
'18/03  Celia Silvia de Franca Silva',
'18/03  Sophia Stefany Oliveira Soares',
'24/03  Francinar Freire De Oliveira',
'31/03  Elizete Ivone de Lima Lopes',
'31/03  Francisco Leonardo do Nascimento',
'06/04  Ana Laisa Oliveira Sousa',
'09/04  Fernanda Gomes do Nascimento',
'09/04  Valdiane Gomes Santiago',
'10/04  Richard Lael Ribeiro Fernandes',
'16/04  Bianka Do Nascimento Ricardo',
'21/04  Kaleb De Souza Carvalho ',
'21/04  Raquel Correia de Oliveira',
'23/04  Maria Lucelene Pereira da Silva',
'29/04  Ariane Nayara Gomes Da Silva',
'01/05  Aderson Felix de Souza',
'03/05  Brena Pereira da Silva',
'06/05  Antônia Tayná de Oliveira Silva',
'06/05  Josenilton De Souza',
'09/05  Guilherme Amorim de Araujo',
'11/05  Leda Maria Pereira Da Silva',
'20/05  Jackes de Oliveira Fernandes',
'21/05  Jessica Maria do Nascimento Ricardo',
'21/05  Wagner Barros da Silva',
'22/05  Wescley Goncalves Rodrigues',
'24/05  Isaias Bezerra Ferreira',
'27/05  Francisco Edvan Oliveira',
'29/05  Keilane Pereira Dos Anjos',
'01/06  Ana Carolina Silva Cardoso',
'07/06  Antonio Miqueias Moreira De Oliveira',
'07/06  Davi Wesley Lima Da Silva',
'07/06  Ivens Igor Alves Tragano',
'07/06  Paula Renata Ferreira Ribeiro',
'12/06  Hiéroclys Barreto da Costa',
'12/06  Thiago Do Nascimento Ricardo',
'15/06  Maria de Lourdes Do Nascimento',
'19/06  Pedro Cauã Neri de Holanda',
'21/06  Eliude Maria Vieira Ribeiro De Souza',
'23/06  David Ronald Santos Pereira',
'26/06  Francisco Xavier Dos Santos',
'28/06  Mizael Ferreira De Carvalho',
'01/07  Laila Lorena Ferreira Pereira',
'01/07  Odorico Ferreira Do Nascimento',
'05/07  Melquisedeque Franco Porfirio',
'08/07  Maria Carvalho Ferreira',
'09/07  Keila Gomes da Silva',
'15/07  Jose Iranildo Almeida de Paula',,
'15/07  Rodrigo Sabino Martins',
'16/07  Samily de Sousa Santos',,
'24/07  Antonio Rodrigues De Oliveira',
'14/08  Oséias Vieira Ribeiro',
'17/08  Carla Silva Sampaio',
'22/08  Maria das Graças da Silva dos Santos',
'27/08  Gabriel Cristian de Sena Braúna',
'28/08  Evellyn Garcia Nogueira Pereira',
'28/08  Joao Paulo De Franca Silva',
'31/08  Ana Kelly De Franca Silva',
'31/08  Francisco Paulo de Sousa da Costa',,
'01/09  Francinelda Barbosa De Sena',
'17/09  Ilkaren Mendes de Paula Felix',
'19/09  Luciane do Nascimento Ricardo',
'02/10  Matheus Santos de Almeida',
'12/10  José Wildemberg da Silva Souza',
'29/10  Antonio Jeferson da Silva Lima',
'18/11  Sara Ivina Ferreira Ribeiro',
'19/11  Iashena Mendes de Paula',
'21/11  Kemilly Catleya Costa Souza',
'23/11  Maria Pereira de Sousa',
'11/11  José Airton Caetano De Souza',
'14/11  Juésia de Araujo Dutra',
'14/11  Simone Kerce Fernandes Viana Araujo',
'15/11  João Pedro Castro Pereira',
'15/11  Ramon Luiz Jacinto de Sousa',
'15/11  Tania Maria De Souza',
'29/11  Francisca Velma Mendes de Paula',
'30/11  Maria Izabela Alves de Menezes',
'04/12  Antonia Aurina de Souza',
'08/12  Juesia de Araújo Dutra',
'15/12  Chirleia Rodrigues de Almeida',
'15/12  Chirleia Rodrigues de Almeida',
'16/12  Francisca Elida Santos de Almeida',
'15/02 Filhinha',
'15/02 Felaozão',
];



function buscaAniversariante(){
	
	let listaAniversariantes = [];

	list.forEach((element) => {
		let dataAniversario =  element.substring(0, 5);
		let dataAtual =  new Date().toLocaleString('pt-BR').substring(0, 5);
		if(dataAniversario == dataAtual){
			let data = element.substring(0, 5);
			let nome = element.substring(5).trim();
			
			const aniversariante = {
				nome: nome,
				data: data
			};
			
			listaAniversariantes.push(aniversariante);
		}
	});

	listaAniversariantes.forEach((element) => {
		console.log(element)
		let menssagem = `hoje é ${element.data}, aniversário do(a) ${element.nome}!`;		
		const response = fetch(`https://api.callmebot.com/whatsapp.php?phone=558594097307&text=${menssagem}&apikey=4861215`);
	});	

	
}

cron.schedule("20 20 1-31 1-12 *", () => buscaAniversariante());


app.listen(3000);

