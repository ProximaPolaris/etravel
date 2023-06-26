DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front
BACK_DIR = e-travel-back

install:
ifeq ($(OS),Windows_NT)
	@if exist "$(FRONT_DIR)\.next" rd /s /q $(FRONT_DIR)\.next
else
	@if [ -d "$(FRONT_DIR)/.next" ]; then rm -rf $(FRONT_DIR)/.next; fi
endif
	npm i
	cd $(FRONT_DIR) && npm i 
	cd $(BACK_DIR) && npm i

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up

run-metabase:
	@docker run -d -p 6969:3000 --name metabase metabase/metabase

down:
	$(DOCKER_COMPOSE) down

kiki:
	@read -p "Enter commit message: " message; \
	git status; \
	read -p "Are you sure you want to commit these changes (y/n)? " answer; \
	if [ "$$answer" != "y" ]; then \
	    echo "Commit aborted"; \
	    exit 1; \
	fi; \
	git add .; \
	git commit -m "feat: $${message}"; \
	git push;

all: install build up
