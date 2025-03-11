#!/bin/bash

root=$(dirname "$0")

for line in $(cat $root/.env); do
  key=$(echo $line | cut -d '=' -f 1)
  value=$(echo $line | cut -d '=' -f 2)
  export $key=$value
done

cd $root

npm run start 2>> $root/log.txt

