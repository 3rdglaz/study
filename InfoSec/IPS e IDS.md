webmin sophos

192.168.1.254:4444


sudo apt install fail2ban

vim /etc/fail2ban/jail.local

foco em

bantime=apos o numero de tentativas IP ban

findtime= tempo entre tentativas

maxretry = Numero de tentativas


./fail2ban start

(systemctl start fail2ban)

tail -F /var/log/fail2ban.log

----------

suricata IDS
```sh
apt install suricata 
cd /tmp/
wget http://rules.emerginthreats.net/open/suricata/emerging.rules.tar.gz
tar -zxvf emerging.rules.tar.gz
cd rules
mv  * /etc/suricata/rules
vim /etc/suricata/suricata.yaml
```

linha 

  HOMENET[priemria linha]

final do arquivo
	
  defaul-rule-path: /etc/suricata/rules

rule files:
  - alerta-regra.rules

:wq


CRIA REGRA

$vim alegra-regra.rules:
```sh
alert icmp any any -> $HOME_NET any (msg:"ALERTA ATAQUE ICMP"; sid: 1000002; rev:1;
:wq
```

ifconfig(pega interface de rede)

$suricata -i enp0s8 --init-erros-fatal

-----------
tail - F /var/log/suricata/fast.log
