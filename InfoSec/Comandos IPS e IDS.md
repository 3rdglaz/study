# Comandos de instalaçãoo e configuração dO IDS(suricata) e IPS(Sophos, fail2ban)
## Módulo 1 | Aula 2.5.1 a 2.5.2

### Webmin sophos
```sh
192.168.1.254:4444
```
-----------------
### fail2ban
```sh
sudo apt install fail2ban

vim /etc/fail2ban/jail.local
```
ir para:
```sh
bantime=apos o numero de tentativas IP ban

findtime= tempo entre tentativas

maxretry = Numero de tentativas
```
Após editado:
```sh
./fail2ban start

(systemctl start fail2ban)

tail -F /var/log/fail2ban.log
```
----------
### suricata

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
```sh
  HOME_NET[primeira linha]
```
final do arquivo
```sh	
  defaul-rule-path: /etc/suricata/rules
```
rule files:
```sh
  - alerta-regra.rules

:wq
```
Criar regra:
```sh
$vim alegra-regra.rules:

alert icmp any any -> $HOME_NET any (msg:"ALERTA ATAQUE ICMP"; sid: 1000002; rev:1;
:wq

ifconfig(pega interface de rede)

$suricata -i enp0s8 --init-erros-fatal

tail - F /var/log/suricata/fast.log
```
