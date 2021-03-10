# Comandos básicos de Linux e configuração do ambiente para as práticas
## Módulo 1

__Segue uma listagem de comandos utilizados para subir serviços no ubunto server:__

  - apt install net-tools
  > Pacote de ferramentas para controle para controle de rede. (Ex's: ifconfig, arp, hostname, netstat, route...)
  - apt install vsftpd
  > Servidor FTP
  - apt install apache2
  > Servidor HTTP
  - apt install mysql-server
  > Servidor de banco de dados  
  - create user teste;
  > Criar usuario no mysql server
  - grant all on . to 'teste'@'%';
  > Dando todas permissões ao usuario teste no mysql  
  - CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
  > Criando usuário com senha 
  >ALL PRIVILEGES: Assigns all permissions on the chosen database.
  
  >CREATE: This privilege allows you to create new tables or databases.
  
  >DROP: In this case, it allows you to delete tables and databases.
  
  >DELETE: It allows deleting records from the tables.
  
  >INSERT: With this privilege, you can create records in the tables.
  
  >SELECT: This privilege is required to read the records from the tables.
  
  >UPDATE: It allows you to update the records of a table.
  
  >GRANT OPTION: With this privilege, the user can remove privileges from certain users.
  
  >GRANT CREATE ON test.* TO 'user'@'localhost';
  
  - mysql -uteste -p
  > Logar com o usuario teste no mysql
  
  - Comandos para liberar acesso a todos endereços no mysql
  >vim /etc/mysqld/mysql.confi.d/mysqld.cnf(editado)
  
  >bind-addrs = 0.0.0.0
  
  >/etc/init.d/mysql restart
 
  - apt install postfix
  > Agente de transferência de e-mails / Cliente e-mail
  
  - apt install docker
  - apt install docker.io
  > Conteiners Docker
  
  - docker pull phpmyadmin/phpmyadmin
  > Inserindo phpmyadmin nos conteiners docker
  
  - docker pull wordpress
  > Inserindo Wordpress nos conteiners docker
    - docker run --name phpmyadmin -d -e PMA_HOST=192.168.0.1 -p 8080:80 phpmyadmin/phpmyadmin 
    > Aplicando phpmyadmin no docker. (IP 192.168.0.1 a fim de exemplo | Subistituir pelo ip do server ubunto)
    
  - apt update
  - apt upgrade
  > Atualização do pacote 'apt'
  
  - apt install bind9
  > Servidor DNS (Necessita de: 'apt update' e 'apt upgrade')
  

