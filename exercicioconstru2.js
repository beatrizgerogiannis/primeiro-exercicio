debugger
nomeAluno1 = prompt("Digite o nome do aluno(a)")
notasAluno1 = prompt("Digite as notas do(a) " + nomeAluno1)
    notasAluno1 = notasAluno1.split(",")
    nota1Aluno1 = notasAluno1[0]
    nota2Aluno1 = notasAluno1[1]
    nota3Aluno1 = notasAluno1[2]

nomeAluno2 = prompt("Digite o nome do aluno(a) ")
notasAluno2 = prompt("Digite as notas do(a)" + nomeAluno2)
    notasAluno2 = notasAluno2.split(",")
    nota1Aluno2 = notasAluno2[0]
    nota2Aluno2 = notasAluno2[1]
    nota3Aluno2 = notasAluno2[2]

nomeAluno3 = prompt("Digite o nome do aluno(a) ")
notasAluno3 = prompt("Digite as notas do(a)" + nomeAluno3)
    notasAluno3 = notasAluno3.split(",")
    nota1Aluno3 = notasAluno3[0]
    nota2Aluno3 = notasAluno3[1]
    nota3Aluno3 = notasAluno3[2]

nomeAluno4 = prompt("Digite o nome do aluno(a) ")
notasAluno4 = prompt("Digite as notas do(a)" + nomeAluno4)
    notasAluno4 = notasAluno4.split(",")
    nota1Aluno4 = notasAluno4[0]
    nota2Aluno4 = notasAluno4[1]
    nota3Aluno4 = notasAluno4[2] 
    
nomeAluno5 = prompt("Digite o nome do aluno(a) ")
 notasAluno5 = prompt("Digite as notas do(a)" + nomeAluno5)
    notasAluno5 = notasAluno5.split(",")
    nota1Aluno5 = notasAluno5[0]
    nota2Aluno5 = notasAluno5[1]
    nota3Aluno5 = notasAluno5[2]

mediaAluno1 = ( parseFloat(nota1Aluno1) + parseFloat(nota2Aluno1) + parseFloat(nota3Aluno1)) / 3
mediaAluno2 = ( parseFloat(nota1Aluno2) + parseFloat(nota2Aluno2) + parseFloat(nota3Aluno2)) / 3
mediaAluno3 = ( parseFloat(nota1Aluno3) + parseFloat(nota2Aluno3) + parseFloat(nota3Aluno3)) / 3
mediaAluno4 = ( parseFloat(nota1Aluno4) + parseFloat(nota2Aluno4) + parseFloat(nota3Aluno4)) / 3
mediaAluno5 = ( parseFloat(nota1Aluno5) + parseFloat(nota2Aluno5) + parseFloat(nota3Aluno5)) / 3

mensagem = ""

 if( mediaAluno1 >= 5){
    mensagem +=( nomeAluno1 + " foi APROVADO(A)" + "\n")
}
else if( mediaAluno1 < 5){
    mensagem +=( nomeAluno1 + " foi REPROVADO(A)" + "\n")
}
 if( mediaAluno2 >= 5){
    mensagem +=( nomeAluno2 + " foi APROVADO(A)" + "\n")
}
else if( mediaAluno2 < 5){
    mensagem +=( nomeAluno2 + " foi REPROVADO(A)" + "\n")
}
 if( mediaAluno3 >= 5){
    mensagem +=( nomeAluno3 + " foi APROVADO(A)" + "\n")
}
else if( mediaAluno3 < 5){
    mensagem +=( nomeAluno3 + " foi REPROVADO(A)" + "\n")
}
  if( mediaAluno4 >= 5){
    mensagem +=( nomeAluno4 + " foi APROVADO(A)" + "\n")
}
else if( mediaAluno4 < 5){
    mensagem +=( nomeAluno4 + " foi REPROVADO(A)" + "\n")
}
 if( mediaAluno5 >= 5){
    mensagem +=( nomeAluno5 + " foi APROVADO(A)" + "\n")
}
else if( mediaAluno5 < 5){
    mensagem +=( nomeAluno5 + " foi REPROVADO(A)" + "\n")
}

alert(mensagem)

