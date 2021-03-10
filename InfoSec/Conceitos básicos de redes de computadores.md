# Conceitos básicos de redes de computadores.md
## Módulo 1 | 2.1 a 2.2

__Modelo OSI:__
![ModeloOSI](https://user-images.githubusercontent.com/67568578/110685532-26853c00-81bd-11eb-9680-f9f41f7df939.png)

__Pacote no Modelo OSI:__
![DadosOSI](https://user-images.githubusercontent.com/67568578/110685775-677d5080-81bd-11eb-8596-00c230e6b404.png)

_O TCP e o UDP atuam na camada 4 do modelo OSI e o IP na camada 3. O
TCP fornece conexão com controle de fluxo de sessão, isso significa que há
sequenciamento no processamento dos pacotes. Assim, quando executo um
comando remotamente, por exemplo: “ps –ax” no caso do Linux, para listar os
processos da máquina, eu só devo receber a tela após a tecla ENTER ser
pressionada. Já o UDP não prevê este controle de fluxo e por isso é muito utilizado
em transmissões de voz e vídeo. Há de se destacar que o TCP possui um tamanho
de pacote maior para controles deste fluxo e é por isso mais lento que o UDP.
Em comunicações ao vivo, exemplo, ligação telefônica, o uso de UDP é mais
utilizado, pois se eu perco pacotes na comunicação da rede, por exemplo, conduzindo
a mensagem falada “estou bem”, não faz sentido eu reproduzir este pacote depois de
passado 10 segundos de conversa. No caso de mecanismos de streaming, o uso de
TCP é mais plausível, motivo pelo qual os principais serviços de streaming o
implementam, isso porque garante que a imagem ficará pouco distorcida (perda de
pacote). A forma como tais serviços diminuem o efeito da maior lentidão do protocolo
TCP é através do caching local. Desta forma, a informação que sua televisão recebe
agora na verdade vai ser reproduzida dentro de alguns segundos, desta forma, caso
alguma informação seja perdida, há tempo para que o TCP corrija as falhas e
entregue um conteúdo com melhor qualidade.
Quando falamos de IP, correlacionamos imediatamente com endereços IP,
não é mesmo? E esta é a sua função, prover endereçamento para que a comunicação
ocorra. Os endereços IPs, na versão mais popular e amplamente usada na internet
(IPv4), tem tipicamente um formato análogo a este: 192.168.0.1, ou seja, um conjunto
composto de quatro subconjuntos, compostos por até três números.
O que é importante reforçarmos, para o nosso conhecimento prático, com
relação ao IP, diz respeito a máscara de rede, isso porque é ela quem determina se
um pacote vai trafegar na rede local, ou precisará ser encaminhado para que o
roteador determine o seu destino._

