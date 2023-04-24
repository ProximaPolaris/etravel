DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front
BACK_DIR = e-travel-back

install:
	cd $(FRONT_DIR) && npm i next && npm i --force sass && npm run build
	cd $(BACK_DIR) && npm i -g @nestjs/cli && npm i && npm run build

build:
	$(DOCKER_COMPOSE) build

start:
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down

all: install build start