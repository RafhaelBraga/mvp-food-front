import Pratos from "./pratos";

export default interface Restaurantes {
	id: number,
	nome: string,
	bairro: string,
	logradouro: string,
	numero: number,
	telefone: number,
	pratos: Pratos[],
}