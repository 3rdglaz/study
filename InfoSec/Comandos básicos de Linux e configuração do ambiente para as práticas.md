# Comandos básicos de Linux e configuração do ambiente para as práticas
## Módulo 1

__Segue uma listagem de comandos utilizados para subir serviços no ubunto server:__

 
 1. Pacote de ferramentas para controle para controle de rede. (Ex's: ifconfig, arp, hostname, netstat, route...)
  
      >  apt install net-tools
 
 2. Servidor FTP

      > apt install vsftpd
 3. Servidor HTTP 
 
      > apt install apache2
 4. Servidor DB
 
      > apt install mysql-server
      >>  create user teste; // cria user teste
      >>  
      >>  grant all on *.* to 'teste'@'%'; // garante permissão completa ao usuário 'teste'
      >>  
      >>  CREATE USER 'user'@'localhost' IDENTIFIED BY 'password'; // cria 'user' com senha 'password'
       

### resumo raso mysql

  >ALL PRIVILEGES: Assigns all permissions on the chosen database.
  
  >CREATE: This privilege allows you to create new tables or databases.
  
  >DROP: In this case, it allows you to delete tables and databases.
  
  >DELETE: It allows deleting records from the tables.
  
  >INSERT: With this privilege, you can create records in the tables.
  
  >SELECT: This privilege is required to read the records from the tables.
  
  >UPDATE: It allows you to update the records of a table.
  
  >GRANT OPTION: With this privilege, the user can remove privileges from certain users.
  
  >GRANT CREATE ON test.* TO 'user'@'localhost';
