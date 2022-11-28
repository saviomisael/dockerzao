# Swarm

docker swarm init --advertise-addr <ip> -> Cria uma máquina como Manager

docker node ls -> Lista os Nodes

docker swarm join --token <TOKEN> <IP>:<PORTA> -> Adiciona um Node
docker swarm join --token SWMTKN-1-567wxu919iserc7qsngub2zoe91klnbyvdhko8t84188lfaimm-9vuhttk12w9pjeo7z8mqsla32 192.168.0.8:2377

docker service create --name <nome> --replicas <número> <imagem> -> Cria um container

docker service ls

docker swarm join-token manager -> Consegue recuperar o token

docker node rm <id> -> Remove um Node

docker service inspect <id> -> Inspecionar serviço

docker stack deploy -c <arquivo.yaml> <nome> -> Utiliza o Compose

docker service scale <nome_serviço> = <número_de_replicas>