# Ataque a redes de computadores - Conceitos
## Módulo 1 | Aula 4.1 a 4.6

### Tipos de ataque:
__Cada tipo de ataque a rede de computadores busca explorar um ou mais pilares de segurança da informação.
Alguns deles citados abaixo na tabela:__

![Tipos de ataque](https://user-images.githubusercontent.com/67568578/110851134-674d8580-828f-11eb-9258-9c827cd88fc5.png)
  
__DDoS:__ DDoS tem início com a infecção por malware ou software malicioso análogo em dezenas, centenas, as vezes milhares, e há alguns casos raros de milhões de
máquinas infectadas. Ao conjunto destas máquinas, denominamos botnets. Estas máquinas são então gerenciadas por outras máquinas também invadidas, chamadas
máster. O papel da máquina máster é importante, e é necessário que sejam várias, pois a perda de uma delas leva automaticamente a perda de controle de muitas
máquinas zumbis. Quando um atacante resolve fazer um ataque, ele envia um comando para que todas estas máquinas façam conexões simultâneas à vítima. Usualmente, a vítima, por mais que seja grande, não está preparada para receber um número tão gigante de conexões simultâneas, quando este limite é ultrapassado temos então a negação do serviço (Denial of Service).

Atualmente um serviço muito utilizado para proteção de ataques de DDoS
são as chamadas CDNs (Content Delivery Network). O propósito principal destas
redes é entregar conteúdos, como imagens, vídeos e páginas web numa velocidade
muito mais ágil. Elas fazem isso aproximando o servidor que atende a requisição do
browser do usuário que acessa o site, no entanto, como tais redes tem uma
capacidade de entrega inimaginável em termos de bits por segundo, é comum serem
usados também para defesa dos sites de empresas. Abaixo uma figura que compara,
do lado esquerdo, um cenário sem CDNs, e do direito a implementação de CDNs.

![cdns](https://user-images.githubusercontent.com/67568578/110852933-bdbbc380-8291-11eb-831c-034a0681d6b3.png)

Outro ataque muito comum em redes de computadores é o sequestro de DNS
(Domain Name System). O DNS é responsável por transformar nomes, como
www.meusite.com.br para IPs. Desta forma, quando nossos computadores fazem
consultas a servidores de DNS, eles recebem como retorno o IP que devem acessar.
Se estes DNSs são invadidos, é possível manipular o IP que é acessado, levando o
usuário a acessar algo que acredita ser o site correto, quando na verdade, este pode
cair em uma armadilha que irá capturar informações relevantes do usuário enganado.
Existem algumas formas de se proteger deste tipo de ataque:
1) Utilize diretamente nas máquinas (desktops ou servidores) o IP 8.8.8.8
(Google) ou 1.1.1.1 (Cloudfare).
2) Se o seu servidor de DNS for um roteador de banda larga, mantenha este
sempre atualizado e usado sempre como cache de serviços, serviços
confiáveis como 8.8.8.8 (Google) e 1.1.1.1 (Cloudfare).
3) Se o seu servidor de DNS está instalado em um servidor interno, garanta
que este atue apenas como resolver, ou seja, que ele preste serviços
apenas para a rede interna.

__Outras ameaças:__

![ameaças](https://user-images.githubusercontent.com/67568578/110853179-11c6a800-8292-11eb-902f-fb185bf952f7.png)

### Criptografia:

Atualmente, algoritmos criptográficos com fórmulas matemáticas complexas
e sofisticadas tornam o processo de quebra de criptografia um processo bem
demorado, de tal forma que havendo a quebra da criptografia, o que por si só exigiria
um arsenal gigantesco de processadores, a informação obtida aconteceria depois de
anos e, portanto, não seria mais relevante no contexto de sua obtenção.
A criptografia pode ser dividida em simétrica e assimétrica. Cada uma tem
seus prós e contras, sendo que o comum em ambas é uma chave; no caso da
primeira, chaves iguais compartilhadas entre a origem e o destino, e uma chave
diferente (privada e pública) no caso da criptografia assimétrica.

__Criptografia simétrica:__
![simetrica](https://user-images.githubusercontent.com/67568578/110853555-8699e200-8292-11eb-9321-51abb4b224ad.png)

__Criptografia assimétrica:__
![assimetrica](https://user-images.githubusercontent.com/67568578/110853768-c6f96000-8292-11eb-9da2-d11d6af3be1d.png)

O __hashing__ é uma técnica que transforma strings de tamanhos variáveis em
tamanhos fixos. O objetivo é garantir que uma informação não foi alterada durante
seu trânsito. Assim, se eu pretendo enviar uma mensagem ou mesmo um arquivo, eu
anexo, usualmente via outro canal de comunicação, o hash, e ao receber comparo.
Se as strings foram iguais, teremos, portanto, que a mensagem não foi alterada
durante o trânsito.

### Hardening:

A tradução de hardening, de acordo com o Google Translator, é
endurecimento, e é isso que buscamos ao configurar os sistemas operacionais e
banco de dados com regras mais rígidas para evitar acessos não autorizados. Abaixo
você encontra as melhores práticas para sistemas operacionais Linux, Windows e
sistemas gerenciadores de banco de dados.

__Hardening em Linux:__
![hardening linux](https://user-images.githubusercontent.com/67568578/110854243-70405600-8293-11eb-8dbe-16f370098fcd.png)

__Hardening em Windows:__
![hardening windows](https://user-images.githubusercontent.com/67568578/110854244-70405600-8293-11eb-963b-e78e148b4a70.png)

__Hardening em Banco de Dados:__
![hardening banco de dados](https://user-images.githubusercontent.com/67568578/110854242-6f0f2900-8293-11eb-90d7-b64476ba458c.png)

### Segurança em Cloud:

Ao implementarmos a segurança em cloud computing é importante entender
qual o modelo contratado. No modelo IaaS (Infraestrutura como Serviço) o contratante
tem domínio completo do sistema operacional e de todas as camadas instaladas
neste (plataformas, aplicações e banco de dados). No modelo PaaS (Plataforma
como Serviço), o contratante não consegue operar o sistema operacional, isso reduz
sua responsabilidade com relação a manutenção de segurança desta camada, no
entanto, mantém a responsabilidade no que tange manter as configurações da
plataforma configuradas de forma segura. Já no modelo de SaaS (Softwares como
Serviço), a segurança está diretamente relacionada com a aplicação, neste caso os
controles ligados às regras de negócio e autenticação/autorização, devem ser
tratados com lupa. O quadro abaixo destaca os itens que devem ser levados em
consideração em cada implementação de segurança.

![services](https://user-images.githubusercontent.com/67568578/110854247-71718300-8293-11eb-9654-eb7f8e019592.png)




