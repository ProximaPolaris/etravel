DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front
BACK_DIR = e-travel-back

install:
	@if [ -d "$(FRONT_DIR)/.next" ]; then rm -rf $(FRONT_DIR)/.next; fi
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

kiki:
	git status; \
	read -p "Are you sure you want to commit these changes (y/n)? " answer; \
	if [ "$$answer" != "y" ]; then \
	    echo "Commit aborted"; \
	    exit 1; \
	fi; \
	@read -p "Enter commit message: " message; \
	git add .; \
	git commit -m "feat: $${message}"; \
	git push;


all: install build up run-metabase