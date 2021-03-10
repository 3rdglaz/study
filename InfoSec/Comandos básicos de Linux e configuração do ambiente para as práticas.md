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
      
      - Logar com o usuario teste no mysql
      
      >  mysql -uteste -p 
      
      
      - Editar acesso de qualquer end ip
      
      > vim /etc/mysqld/mysql.confi.d/mysqld.cnf(editado)
      
      > bind-addrs = 0.0.0.0 // mudar 
      
      - reiniciar o serviço DB
      
      >/etc/init.d/mysql restart
              
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
 

 
 
 --------------------
 
 
 
 

 5. Agente de transferência de e-mails / Cliente e-mail
  
  > apt install postfix
  
 6. Conteiners Docker
 
  > apt install docker
  >
  > apt install docker.io

        - Inserindo phpmyadmin nos conteiners docker  
        
        > docker pull phpmyadmin/phpmyadmin
  
        - Inserindo Wordpress nos conteiners docker
        
        > docker pull wordpress
  
        - Aplicando phpmyadmin no docker. (IP 192.168.0.1 a fim de exemplo | Subistituir pelo ip do server ubunto)
        
        > docker run --name phpmyadmin -d -e PMA_HOST=192.168.0.1 -p 8080:80 phpmyadmin/phpmyadmin 
   
  
  7. Atualização do pacote 'apt'
  
  > apt update && upgrade

 8. Servidor DNS (Necessita de: 'apt update' e 'apt upgrade')
  
  > apt install bind9
  
  

