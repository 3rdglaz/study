#! /bin/bash
if [ -z "$1" ]
then
	echo "Uso: ./autoGenDir.sh <Nome>"
	exit 1
fi
echo -e "\n    criando pasta...\n"
mkdir ~/Documentos/0025/ALUNOS/$1
cd ~/Documentos/0025/ALUNOS
touch $1/README.md
echo "   - [$1](https://github.com/3rdglaz/0025/tree/main/ALUNOS/$1)" >>     /home/anao/Documentos/0025/README.md
git pull
git add ~/Documentos/0025/*
git commit -m "upload nome"
git push

