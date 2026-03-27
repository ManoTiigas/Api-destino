const destinos = [
  { nome: 'Brasilit', pais: 'Recife - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Recife_-_PE_%2826%29.jpg/1280px-Recife_-_PE_%2826%29.jpg' },
  { nome: 'Coque', pais: 'Recife - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Recife_Aerial.jpg/1280px-Recife_Aerial.jpg' },
  { nome: 'Ibura', pais: 'Recife - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Recife_-_PE_%2826%29.jpg/1280px-Recife_-_PE_%2826%29.jpg' },
  { nome: 'Alto do Céu', pais: 'Recife - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Recife_Aerial.jpg/1280px-Recife_Aerial.jpg' },
  { nome: 'Caruaru - Sítio dos Pintos', pais: 'Caruaru - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Caruaru_Pernambuco.jpg/1280px-Caruaru_Pernambuco.jpg' },
  { nome: 'Cabo de Santo Agostinho', pais: 'Cabo - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cabo_de_Santo_Agostinho.jpg/1280px-Cabo_de_Santo_Agostinho.jpg' },
  { nome: 'Camaragibe', pais: 'Camaragibe - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Recife_Aerial.jpg/1280px-Recife_Aerial.jpg' },
  { nome: 'Olinda - Aguazinha', pais: 'Olinda - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Olinda_-_PE%2C_Brazil.jpg/1280px-Olinda_-_PE%2C_Brazil.jpg' },
  { nome: 'Jaboatão dos Guararapes', pais: 'Jaboatão - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Recife_Aerial.jpg/1280px-Recife_Aerial.jpg' },
  { nome: 'Paulista - Arthur Lundgren', pais: 'Paulista - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Recife_Aerial.jpg/1280px-Recife_Aerial.jpg' },
];

module.exports = function(req, res) {
  const sorteado = destinos[Math.floor(Math.random() * destinos.length)];
  res.json(sorteado);
};