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



document.getElementById("botaoClicado").addEventListener("click", function() {
    document.getElementById("titulo").innerText = "Novo título";
    document.getElementById("autor").innerText = "Novo autor";
    document.getElementById("tradudor").innerText = "Novo tradutor";
    document.getElementById("img_classificacao").src = "caminho/para/nova/imagem.jpg";
    document.getElementById("img_classificacao").alt = "Nova descrição da imagem";
    document.getElementById("classificacao").getElementsByTagName("p")[0].innerText = "Nova classificação";
    document.getElementById("descricao").getElementsByTagName("p")[0].innerText = "Nova sinopse";
    document.getElementById("descricao").getElementsByTagName("p")[1].innerText = "Novo parágrafo 1";
});
