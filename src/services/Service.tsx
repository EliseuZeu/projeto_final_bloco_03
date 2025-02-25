import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmacia-nest.onrender.com' // Certifique-se de que esta é a URL correta
});

export const listar = async (url: string, setDado: Function) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const cadastrar = async (url: string, dados: any, setDado: Function) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};

export const atualizar = async (url: string, dados: any, setDado: Function) => {
  const resposta = await api.put(url, dados);
  setDado(resposta.data);
};

export const deletar = async(url: string) => {
  await api.delete(url)
}