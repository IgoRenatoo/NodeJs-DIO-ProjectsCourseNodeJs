interface Club {
  nome: string;
  jogadores: Jogador[];
}

interface Jogador {
  id: number;
  nome: string;
  camisa: number;
  time: string;
  posicao: string;
  habilidade: Habilidade;
}

interface Habilidade {
  ataque: number;
  defesa: number;
  drible: number;
  passe: number;
  resistencia: number;
  forca: number;
}