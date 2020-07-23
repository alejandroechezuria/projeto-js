var idade;
var nome;
nome=prompt('qual e seu nome ');
idade=prompt('qual e sua idade');


if(idade>=18 && idade <= 45) {

    document.write (nome  +"tiene" + idade + "anos, es maior de idade, ainda e jovem ");

}

else {
    document.write(nome+ "tiene"+idade+"anos, es menor de idade, anda a estudiar");
}
