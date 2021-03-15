#! /bin/bash
## instala arquivos
echo -e "\n\n      Instalando ferramentas principais ...     \n\n"
sudo apt install net-tools vsftpd apache2 mysql-server postfix docker docker.io -y
echo -e "\n\n      Baixando e aplicando atualizações ...     \n\n"
sudo apt update -y
sudo apt upgrade -y
echo -e "\n\n         Finalizando instalação ...             \n\n"
sudo apt install bind9 -y
echo -e "\n\n    Não se esqueça de configurar o banco de dados\n\n"






