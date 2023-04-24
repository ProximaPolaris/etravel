DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front

install:
	cd $(FRONT_DIR) && npm i next && npm i --force sass && npm run build
	
build:
	$(DOCKER_COMPOSE) build

start:
	$(DOCKER_COMPOSE) up -d

all: install build start
