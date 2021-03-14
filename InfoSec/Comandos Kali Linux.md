# Comandos no Kali 
## Módulo 1 | Aula 4.7.4 a 4.7.7

{ rodar containers instalados:
docker container run -d <nome_imagem>
--restart always
}



nmap <ip> // scan de portas
nmap -A <ip> // pega fingerprint, mostra portas aberta
nmap -Pn <ip> //Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times will be slower.

no atacado:

iptables -A INPUT -j LOG --log-prefix "SCAN NMAP: "

tail -f /var/log/kern.log | grep -v "DPT=22"

__________________________________
fingerprint: reconhecer infos do servidor, versão, config ativa, etc. Requisita 'x' avalia return 'y' >> entende as config.
___________________________________
telnet <ip> <porta> // conecta a <ip><p> + get pega info
____________________________________

__iptables:__

  -A = append, adiciona 1 ou + regra
  
  -C = check, se existe ou não a regra
  
  -D = deleta 1 ou + regras
  
  -I = para especificar qual Cadeia ira receber a regra
  
  -R = Troca regra
  
  -L = Listar regras 
  
  -S  = Printar regras
  
  -F = Limpar as regras da cadeia selecionada
  
  -Z = zera o pacote e contador em todas as cadeias
  
  -N = insere nova Cadeia usando nome em seguida
  
  -X = Deleta cadeia com nome especifico
  
  -P = Aceita ou Dropa a cadeia
  
  -E = renomear cadeia
  
  -h = Help

-----------------------------------

parametros:
  
  -p = protocolo
  
  -s = source/fonte/ip
  
  -d = destino
  
  -m = gera uma combinação para criar uma testagem
  
  -j = especifica alvo da regra, o que fazer. pode ser usuario,alvo,pacote
  
  -g = direcionar um processamento
  
  -i = por onde entrar/interface nome
  
  -o = por onde sair/interface nome
  
  -f = fragmenta a regra para partes de IPs.
  
  -c = inicia contador


-------------------------------

Hardening utilizando SEC do APACHE
gera confusão na leitura de portas.

sudo apt install libapache2-mod-security2

edita "apache2.conf", última linha insere o mod:

<IfModule mod_security2.c>
SecServerSignature "Server unkown"
</IfModule>
-----------------------------
