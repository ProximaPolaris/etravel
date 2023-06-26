DOCKER_COMPOSE = docker-compose
FRONT_DIR = e-travel-front
BACK_DIR = e-travel-back
NGINX_CONF_FILE = /etc/nginx/sites-available/etravel.click

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
	sudo $(DOCKER_COMPOSE) build

up:
	sudo $(DOCKER_COMPOSE) up

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

nginx:
	@echo "server {" > $(NGINX_CONF_FILE)
	@echo "    listen 80;" >> $(NGINX_CONF_FILE)
	@echo "    listen [::]:80;" >> $(NGINX_CONF_FILE)
	@echo "    server_name etravel.click;" >> $(NGINX_CONF_FILE)
	@echo "" >> $(NGINX_CONF_FILE)
	@echo "    location / {" >> $(NGINX_CONF_FILE)
	@echo "        proxy_pass http://13.80.156.135:3000/;" >> $(NGINX_CONF_FILE)
	@echo "        proxy_set_header Host $$host;" >> $(NGINX_CONF_FILE)
	@echo "        proxy_set_header X-Real-IP $$remote_addr;" >> $(NGINX_CONF_FILE)
	@echo "    }" >> $(NGINX_CONF_FILE)
	@echo "}" >> $(NGINX_CONF_FILE)

all: install up
