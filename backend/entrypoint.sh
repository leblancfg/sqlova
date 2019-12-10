#!/bin/sh

python setup.py
python predict.py --bert_type_abb uL --model_file pretrained/model_best.pt --bert_model_file pretrained/model_bert_best.pt --bert_path pretrained --data_path . --result_path .
