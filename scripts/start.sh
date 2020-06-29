#!/bin/sh

echo "Running migrations ..."
for i in $(seq 1 30); do
    npm run migrate:prod
    [ $? = 0 ] && break
    echo "Reconnecting db ..." && sleep 1
done

if [ "$NODE_ENV" == "production" ]; then
    npm start
else
    npm run dev
fi