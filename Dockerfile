FROM node:12.16.0-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN adduser --disabled-password app

COPY . /opt/app

RUN chown -R app:app /opt/app
RUN npm install

EXPOSE 3000 9229
CMD ./scripts/start.sh