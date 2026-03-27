const destinos = [
  { nome: 'Ilha de Páscoa', pais: 'Chile', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/1280px-Moai_Rano_raraku.jpg' },
  { nome: 'Monte Fuji', pais: 'Japão', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/1280px-080103_hakkai_fuji.jpg' },
  { nome: 'Chichén Itzá', pais: 'México', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg' },
  { nome: 'Taj Mahal', pais: 'Índia', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1280px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg' },
  { nome: 'Coliseu', pais: 'Itália', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg' },
  { nome: 'Grand Canyon', pais: 'EUA', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg/1280px-Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg' },
  { nome: 'Machu Picchu', pais: 'Peru', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg' },
  { nome: 'Torre Eiffel', pais: 'França', imagem: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg' },
  { nome: 'Angkor Wat', pais: 'Camboja', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Angkor_Wat_general_view.jpg/1280px-Angkor_Wat_general_view.jpg' },
  { nome: 'Petra', pais: 'Jordânia', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Petra_Jordan_BW_21.JPG/1280px-Petra_Jordan_BW_21.JPG' },
  { nome: 'Cappadócia', pais: 'Turquia', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Balloon_Cappadocia.jpg/1280px-Balloon_Cappadocia.jpg' },
  { nome: 'Santorini', pais: 'Grécia', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Santorini_iv.jpg/1280px-Santorini_iv.jpg' },
  { nome: 'Aurora Boreal', pais: 'Islândia', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aurora_borealis_above_Lyngenfjorden%2C_2012_March.jpg/1280px-Aurora_borealis_above_Lyngenfjorden%2C_2012_March.jpg' },
  { nome: 'Cataratas do Iguaçu', pais: 'Brasil / Argentina', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Iguazu_-_Garganta_del_Diablo.jpg/1280px-Iguazu_-_Garganta_del_Diablo.jpg' },
  { nome: 'Fernando de Noronha', pais: 'Brasil', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fernando_de_Noronha_-_PE_-_Brazil.jpg/1280px-Fernando_de_Noronha_-_PE_-_Brazil.jpg' },
];

module.exports = function(req, res) {
  const sorteado = destinos[Math.floor(Math.random() * destinos.length)];
  res.json(sorteado);
};