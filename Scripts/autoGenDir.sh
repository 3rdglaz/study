#! /bin/bash
if [ -z "$1"]
then
	echo "Uso: ./autoGenDir.sh <Nome>"
	exit 1
fi
echo -e "\n    criando pasta...\n"
mkdir ~/Documentos/0025/ALUNOS/$1
cd ~/Documentos/0025/ALUNOS
touch $1/README.md
git pull
git add *
git commit -m "upload nome"
git push

