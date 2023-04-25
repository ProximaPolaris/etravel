DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front
BACK_DIR = e-travel-back

install:
	cd $(FRONT_DIR) && npm i next && npm i --force sass && npm run build
	cd $(BACK_DIR) && npm i -g @nestjs/cli && npm i && npm run build

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up -d

run-metabase:
	@docker run -d -p 6969:3000 --name metabase metabase/metabase

down:
	$(DOCKER_COMPOSE) down

all: install build up