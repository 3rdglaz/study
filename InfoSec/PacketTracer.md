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
