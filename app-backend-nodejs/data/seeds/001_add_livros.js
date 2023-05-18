exports.seed = function (knex){
  return knex("livros").del()
  .then(function() {
      return knex("livros").insert([
          {
              titulo:"Web Design Responsivo", 
              autor: "Mauricio Silva", 
              ano: 2014, 
              preco: 73.0, 
              foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
          },
          {
              titulo:"Fundamentos de HTML5 e CSS3",
              autor: " Maurício Samy Silva", 
              ano:2015,
              preco:51.99, 
              foto: "https://m.media-amazon.com/images/I/51lMsgv7s8L._SX357_BO1,204,203,200_.jpg"
          },
          {
              titulo:"Mobile HTML5: Usando o que há de Mais Moderno Atualmente", 
              autor: "Estelle Weyl", 
              ano:2014,
              preco:49.50, 
              foto: "https://m.media-amazon.com/images/I/41ew-ozEwZL._SX360_BO1,204,203,200_.jpg"
          },
          {
              titulo:"Use a cabeça! HTML e CSS", 
              autor: "Eric Freeman", 
              ano:2015,
              preco:122.93, 
              foto: "https://m.media-amazon.com/images/I/51xFDSjOpJL._SX323_BO1,204,203,200_.jpg"
          },
          {
              titulo:"Java®: Como Programar", 
              autor: "Paul Deitel", 
              ano:2016,
              preco:340.00, 
              foto: "https://m.media-amazon.com/images/I/51esGT9hveL._SX371_BO1,204,203,200_.jpg"
          },


      ]);
  });
}
