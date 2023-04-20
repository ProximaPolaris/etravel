DOCKER_COMPOSE = docker-compose
FRONT_DIR = etravel-front
BACK_DIR = etravel-back

install:
	cd $(FRONT_DIR) && npm install
	cd $(BACK_DIR) && npm install

build:
	$(DOCKER_COMPOSE) build

start:
	$(DOCKER_COMPOSE) up -d

all: install build start