#!/bin/bash
echo "Starting restore proccess..."
# docker-compose exec postgres sh -c "PGPASSWORD='postgres' psql -h 192.168.0.121 -U postgres -c 'drop database dojot_auth_043'"
docker-compose exec postgres sh -c "PGPASSWORD='postgres' psql -h 192.168.0.121 -U postgres -c 'create database dojot_auth_043'"
docker-compose exec postgres sh -c "PGPASSWORD='postgres' pg_restore -c --verbose -h 192.168.0.121 -U postgres -d dojot_auth_043 /tmp/dojot_auth.sql"
echo "Postgres: dojot_auth database restored"
docker-compose exec postgres sh -c "PGPASSWORD='postgres' pg_restore -c --verbose --role devm -h 192.168.0.121 -U postgres -d dojot_devm /tmp/dojot_devm.sql"
# docker-compose exec postgres sh -c "PGPASSWORD='devm' psql -h 192.168.0.121 -U devm  -d dojot_devm -f /tmp/dojot_devm.sql"
echo "Postgres: dojot_devm database dumped"
docker-compose exec postgres sh -c "PGPASSWORD='postgres' pg_restore -c --verbose --role imgm -h 192.168.0.121 -U postgres -d dojot_imgm /tmp/dojot_imgm.sql"
# docker-compose exec postgres sh -c "PGPASSWORD='imgm' psql -h 192.168.0.121 -U imgm -d dojot_imgm -f /tmp/dojot_imgm.sql"
# echo "Postgres: dojot_imgm database dumped"
# docker-compose exec mongodb sh -c "mongodump --quiet --host=34.66.8.135 --port=27017 --out=/tmp/dumps"
# echo "MongoDB: all database dumped"   
echo "Restore proccess finished!"