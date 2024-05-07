let livro1 = getElementById("l1")
let livro2 = getElementById("l2")
let livro3 = getElementById("l3")
let livro4 = getElementById("l4")
let livro5 = getElementById("l5")
let livro6 = getElementById("l6")
let livro7 = getElementById("l7")
let livro8 = getElementById("l8")
let livro9 = getElementById("l9")
let livro10 = getElementById("l10")

document.getElementById("l1").addEventListener("click", function() {
    document.getElementById("titulo").innerText = "Novembro 9";
    document.getElementById("autor").innerText = "Collen Hoover ";
    document.getElementById("tradutor").innerText = "Ryta Vinagre";
    document.getElementById("img_classificacao").src = "Biblioteca/Capas dos livros/Novembro9.jpg";
    document.getElementById("img_classificacao").alt = "Biblioteca/Classificação indicativa/classificacao_16.jpg";
    document.getElementById("classificacao").getElementsByTagName("p")[0].innerText = "NÃO RECOMENDADO PARA MENORES DE 16 ANOS.";
    document.getElementById("descricao").getElementsByTagName("p")[0].innerText = "Novembro, 9 é uma história de amor inesquecível entre um aspirante a escritor e sua musa improvável. Da autora da série Hopeless.<b>Apesar de ter apenas 18 anos, Fallon já passou por muita coisa. Sobreviveu a um incêndio que a deixou desfigurada, e viu a carreira de atriz desmoronar por conta das cicatrizes. Agora, no aniversário do fatídico acidente, ela finalmente se sente pronta para sair de Los Angeles e recomeçar a vida em Nova York.<b>No almoço de despedida com o pai, bem na véspera da mudança, Fallon conhece Ben, um aspirante a escritor. A atração entre os dois faz com que passem o dia inteiro juntos, mas a partida iminente de Fallon os impede de viver esse amor. Decididos a vencer o destino, fazem uma promessa: se encontrar todo ano nessa mesma data.<b>Ao longo do tempo, muitas coisas mudam na vida dos dois, mas o ritual dos encontros e sua história de amor viram enredo do livro de Ben. E, quando parece que o destino finalmente conspira para que fiquem juntos, Fallon descobre algo que a faz questionar as motivações do homem por quem está apaixonada. Será que ela não passa de mais uma personagem na trama de Ben?";
    //document.getElementById("descricao").getElementsByTagName("p")[1].innerText = "Novo parágrafo 1";
});

//Código para teste do .modal <span>

 // Função para abrir o modal
 function openModal() {
    document.getElementById("myModal").style.display = "block";
}
// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
