#!/bin/bash

if grep -Fq "Post" ./src/routes/hello.js
then
    echo "FOUND!!"
    exit 1
else
    echo "Code is clean no API Key"
fi

exec "$@"