FROM python:3.6.9-stretch

WORKDIR /www/

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod 755 ./entrypoint.sh
RUN cd backend/pretrained && curl -OL https://github.com/naver/sqlova/releases/download/SQLova-parameters/model_bert_best.pt
RUN cd backend/pretrained && curl -OL https://github.com/naver/sqlova/releases/download/SQLova-parameters/model_best.pt

ENTRYPOINT "./entrypoint.sh"

EXPOSE 5050
