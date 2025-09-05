bash:
	docker exec -it reddit-clone bash
composer-update:
	docker exec reddit-clone bash -c "composer update"
data:
	docker exec reddit-clone bash -c 
stop:
	docker-compose stop