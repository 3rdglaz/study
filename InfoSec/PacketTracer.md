No packet tracer rodar:

  - 1 Roteador
    - 0/0 - 192.168.1.1
    - 0/1 - 192.168.2.1
  
  - 2 Switchs Conect a 3 PCS
    - rede1 - 192.168.1.1
      - 3 PCS 255.255.255.n+1
      
    - rede2 - 192.168.2.1
      - 3 PCS 255.255.255.n+1
    
    
  Depois configurar o Roteador VIA CLI

```sh
  enable
  configure
  access-list 1 permit host 192.168.2.2
  access-list 1 permit host 192.168.2.3
  access-list 1 deny host 192.168.2.4
```


Testar com ping. Resultado esperado: máquina 192.168.2.4 não comunica com outras.


-------------------------------

Aula 2.4.1

  - 1 Server Firewall 192.168.0.254/gateway e DNS igual
  - 1 Switch
  - 3 máquina -DNS e Gateway (IP Firewall)
    - 192.168.0.1[PC 0] 
    - 192.168.0.2[PC 1]
    - 192.168.0.3[PC 2]

Firewall allow :
  - 192.168.0.1
  - 192.168.0.3
  
Firewall deny:
  - 192.168.0.2

-----------------------------------------------
