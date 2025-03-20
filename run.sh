#!/bin/bash

root=$(dirname "$0")

while read LINE; do
  key=$(echo $LINE | cut -d '=' -f 1)
  value=$(echo $LINE | cut -d '=' -f 2)
  export $key="$value"
done < $root/.env

cd $root

npm run --silent start

