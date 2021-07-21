class BoletimEscolar {
  Map<String, double> notaAluno;
  Aluno aluno;

  //construct
  BoletimEscolar({required this.aluno, required this.notaAluno});
}

class Aluno {
  Disciplina disciplina; //ele detem disciplinas
  String nomealuno;
  String turma;
  int matricula;

  //construtor
  Aluno(
      {required this.nomealuno,
      required this.turma,
      required this.matricula,
      required this.disciplina});
}

class Disciplina {
  List nomeDisciplina;

  //contrutor
  Disciplina({this.nomeDisciplina = const []});
}

void main() {
  var boletim1 = new BoletimEscolar(
      aluno: new Aluno(
          nomealuno: 'nigolas',
          turma: 'A',
          matricula: 123456,
          disciplina: new Disciplina(nomeDisciplina: ['mat', 'hist'])),
      notaAluno: {'n1': 10, 'n2': 8, 'n3': 10, 'n4': 9});

  print('Nome: ${boletim1.aluno.nomealuno}');
  print('Disciplina: ${boletim1.aluno.disciplina.nomeDisciplina[0]}');
  print('Notas:');
  boletim1.notaAluno.forEach((key, value) {
    print('$key: $value');
  });
  print('Disciplina: ${boletim1.aluno.disciplina.nomeDisciplina[1]}');
  print('Notas:');
  boletim1.notaAluno.forEach((key, value) {
    print('$key: $value');
  });
}
