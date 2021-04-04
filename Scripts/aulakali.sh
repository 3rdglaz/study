#! /bin/bash
apt-get update && apt-get upgrade -y
apt-get install ssh vim vim-commom samba postgresql apache2 mysql* -y
apt-get update
/etc/init.d/ssh start
/etc/init.d/mysql start
/etc/init.d/apache2 start
/etc/init.d/postgresql start
systemctl enable --now ssh mysql apache2 postgresql
