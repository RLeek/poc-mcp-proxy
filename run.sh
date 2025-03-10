#!/bin/bash

root=$(dirname "$0")

token=$(cat $root/.env | head -n 1 | cut -d '=' -f 2)

cd $root

npm run start $token 2>> $root/log.txt

