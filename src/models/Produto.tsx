import Categoria from './Categoria';

interface Produto {
    id: string;
    nome: string;
    preco: number;
    foto: string;
    categoria?: Categoria;
}

export default Produto;