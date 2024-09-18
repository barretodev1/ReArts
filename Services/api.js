import axios from 'axios';

const conexao = axios.create({
  baseURL: 'http://localhost:3000'
});

export default conexao;
