FROM python:3.6.9-stretch

WORKDIR /www/

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod 755 ./entrypoint.sh

ENTRYPOINT "./entrypoint.sh"

EXPOSE 5050