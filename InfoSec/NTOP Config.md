#Configuração NTOP 

## Módulo 2 | Aula 2.7

NTOP é uma ferramenta de monitoramento da 4 Camada.

Instalando:

```sh
apt install ntopng
```

config NTOP

```sh
vim /etc/ntopng.conf
```

Adiciona a INTERFACE após:

```sh
-i=enp0s8 //i de INTERFACE
-w=3000 // porta na qual dara listen
```

Abre o IP da máquina:3000 (porta 3000 ).

  > user: admin
  > 
  > psswd: admin

requerido trocar a senha

  
