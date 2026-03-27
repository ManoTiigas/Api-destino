const destinos = [
  { nome: 'Brasilit', pais: 'Recife - PE', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Recife_-_PE_%2826%29.jpg/1280px-Recife_-_PE_%2826%29.jpg' },
  { nome: 'Coque', pais: 'Recife - PE', imagem: 'https://habitatbrasil.org.br/wp-content/uploads/2018/07/HFH-Brazil_Settlements-reuzido.jpg' },
  { nome: 'Ibura', pais: 'Recife - PE', imagem: 'https://midias.diariodepernambuco.com.br/static/app/noticia_127983242361/2015/03/31/569042/20150331112102279529a.jpg' },
  { nome: 'Alto do Céu', pais: 'Recife - PE', imagem: 'https://igarassu.pe.gov.br/wp-content/uploads/2019/05/31FED29E-62E0-44DA-9105-18D813F7CFA8.jpeg' },
  { nome: 'Caruaru - Sítio dos Pintos', pais: 'Caruaru - PE', imagem: 'https://i.ytimg.com/vi/xvD7WGgmG0E/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGIgZShAMA8=&rs=AOn4CLBuUWxpt09owlmUV8dMTdKCZdhV9A' },
  { nome: 'Cabo de Santo Agostinho', pais: 'Cabo - PE', imagem: 'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2024/12/18/597x330/1_whatsapp_image_2024_12_17_at_15_25_43-33366928.jpeg?20241219132652' },
  { nome: 'Camaragibe', pais: 'Camaragibe - PE', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrui5je2ZqjLmYawpNq3CJio5ebqrpwueJQg&s' },
  { nome: 'Olinda - Aguazinha', pais: 'Olinda - PE', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdliQZAsoVgvy-MQLgu3B4FiMHgEhDE_dhpg&s' },
  { nome: 'Jaboatão dos Guararapes', pais: 'Jaboatão - PE', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlWqXeIhBcE33e7yDnSuTu9R7NrGDehNU8g&s' },
  { nome: 'Paulista - Arthur Lundgren', pais: 'Paulista - PE', imagem: 'https://s2-g1.glbimg.com/IkDDiM3sgHxXbgcnRTS-ZELv1sg=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/2/hSA8xPQTKAwX1XGQOWQw/ladeira.jpg' },
];

module.exports = function(req, res) {
  const sorteado = destinos[Math.floor(Math.random() * destinos.length)];
  res.json(sorteado);
};