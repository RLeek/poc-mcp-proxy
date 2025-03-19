#!/bin/bash

root=$(dirname "$0")

# There are some stupid quirks with this file
# Need to find a better alternative for running things like this
# hmm 

while read LINE; do
  key=$(echo $LINE | cut -d '=' -f 1)
  value=$(echo $LINE | cut -d '=' -f 2)
  export $key="$value"
done < $root/.env

npm run --silent start 2>> $root/log.txt

