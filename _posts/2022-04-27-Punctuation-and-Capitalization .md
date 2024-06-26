---
title: 'Punctuation and Capitalization'
date: 2022-04-27
permalink: /posts/2022/04/Punctuation-and-Capitalization/
tags:
  - Punctuation and Capitalization
  - Catalan Punctuation
  - Catalan Capitalization
  - Catalan Speech
  - Catalan
  - Catalan Speech To Text
  - Catalan ASR
  - Catalan Speech DataSet
  - NeMo Punctuation
  - Catalan Speech To Text
  - Catalan ASR
  - Catalan Tacotron2
image: logan-armstrong-hVhfqhDYciU-unsplash.jpg
---

This Repo Contains Implementation and explanation of Punctuation and Capitalization System for ASR models

![patrick-tomasso-Oaqk7qqNh_c-unsplash](https://user-images.githubusercontent.com/53477752/165603578-ed8d1003-f513-4412-aaf9-f488fa9dabcb.jpg)

## Introduction

Almost all automatic speech recognition(ASR) systems convert speech into text that has no capitalization or punctuation, which can result in miss understanding the generated text. In this blog I explain and implement capitalization or punctuation model with [Roberta](https://huggingface.co/PlanTL-GOB-ES/roberta-base-ca) language model for Catalan language. This tutorial is mainly based on Nvidia Nemo tutorial on capitalization or punctuation model [here](https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/nlp/punctuation_and_capitalization.html#training-punctuation-and-capitalization-model).

## Language Model Based Capitalization and Punctuation model
- This model predicts if a sentence needs commas, periods, question marks, ...
- Also model predicts if a given word should be Capitelized.

As in [here](https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/nlp/punctuation_and_capitalization.html#training-punctuation-and-capitalization-model) this model (this method) is a jointly training two token-level classifier on top of a pretrained language model.

## Data Format

The Punctuation and Capitalization model expects the data in the following format:

The training and evaluation data is divided into 2 files:  ``text.txt`` , ``labels.txt``

Each line of the ``text.txt`` file contains text sequences, where words are separated with spaces.

[WORD] [SPACE] [WORD] [SPACE] [WORD], for example:

`` when is the next flight to new york``
<br>
``the next flight is ...
``

The `labels.txt` file contains corresponding labels for each word in `text.txt`, the labels are separated with spaces. Each label in `labels.txt` file consists of 2 symbols:

the first symbol of the label indicates what punctuation mark should follow the word (where `O` means no punctuation needed)

the second symbol determines if a word needs to be capitalized or not (where `U` indicates that the word should be upper cased, and `O` - no capitalization needed)

By default, the following punctuation marks are considered: commas, periods, and question marks; the remaining punctuation marks were removed from the data. This can be changed by introducing new labels in the `labels.txt` files.

Each line of the `labels.txt` should follow the format: [LABEL] [SPACE] [LABEL] [SPACE] [LABEL] (for `labels.txt`). For example, labels for the above `text.txt` file should be:

`OU OO OO OO OO OO OU ?U`
<br>
`OU OO OO OO ...`

## Catalan Punctuation and Capitalization Data

For this tutorial I used [this repo](https://github.com/Softcatala/ca-text-corpus/tree/master/data) and mereged `common-voice-sentences.txt`,
              `dogc.txt`,
              `dogv.txt`,
              `riuraueditors.txt`,
              `softcatala.txt`,
              `wiki.ca.txt`,
              `wiki.ca-mozilla_script.txt`
              files.
              <br>
 Using the following script you can convert any correctly capitalized and punctuated text into mentioned training data format.
 
 ```py
 import string
import random


data_into_list=[line.strip() for line in open('/content/output_file.txt')]


text_train = open("text_train.txt", "a")  # append modea
labels_train = open("labels_train.txt", "a")  # append modea

text_dev = open("text_dev.txt", "a")  # append modea
labels_dev = open("labels_dev.txt", "a")  # append modea


for j in data_into_list:
  if len(j)< 100:
    label = ""
    text = ""
    for i in j.split(" "):
      try:
          if i[-1] in string.punctuation and i[0].isupper():
            label = label + f"{i[-1]}U "
            text = text + f"{i[:-1].lower()} "

          elif (i[-1] not in string.punctuation and i[0].isupper()):
            label+="OU " 
            text = text + f"{i.lower()} " 

          elif (i[-1] in string.punctuation and i[0].islower()):  
            label+=f"{i[-1]}O "
            text = text + f"{i[:-1].lower()} "

          elif (i[-1] not in string.punctuation and i[0].islower()):  
            label+="OO "
            text = text + f"{i.lower()} "
      except:
        pass
    if len(text.split())== len(label.split()) and len(text)>0:
        if random.random() < .15:       
            text_dev.write(text+"\n")
            labels_dev.write(label+"\n")  
        else:
            text_train.write(text+"\n")
            labels_train.write(label+"\n")   
    else:
      pass                    
text_dev.close()
labels_dev.close()
text_train.close()
labels_train.close()
 
 ```
 <br>    
     
Once you make the training and validation data ready, then it is time to train your model.

<br>
--------------------------------------------------------------------------------------------
## Model

For this tutorial I used about `60000` sample sentences and trained them on top of [
roberta-base-ca](https://huggingface.co/PlanTL-GOB-ES/roberta-base-ca).
Complete notebook for data gathering as well as training the Punctuation and Capitalization model for catalan language can be found here [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1Yp0FQyn03PsL_Qy5TGLdrU-RTKjJ-mLK#scrollTo=us_WH_dlCQsq)

<br>

Also pretrained model for inference can be found here 
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1IjI6KTGcs-afl_CY8tnUw-g2Qgn1MIXe?authuser=5#scrollTo=cWBpRHD3wjcr)
-----------------------------------------------------------------------

## Install with pip

```py
import os


os.system("pip install nemo_toolkit['all']")

```
----------------------------------------------------------------
```py
os.system('git clone https://github.com/NVIDIA/apex')
os.system('cd apex')

os.system('pip install -v --disable-pip-version-check --no-cache-dir --global-option="--cpp_ext" --global-option="--cuda_ext" --global-option="--fast_layer_norm" ./')
```
----------------------------------------------------------------

```py
pip install CatCorrection
```
----------------------------------------------------------------
```py
from pun.main import setpath, init_model, correct
```
----------------------------------------------------------------
```py
setpath("/content/Punctuation_and_Capitalization.nemo")
```
----------------------------------------------------------------
```py
init_model()
```
----------------------------------------------------------------
```py
correct(["si acabo d'hora aniré a mirar roba"])
```
----------------------------------------------------------------
<br>
Also can try here [![Open In Colab](https://colab.research.google.com/drive/1ZfDAWyf6IQCq5J7vhm4TRpGCMTiTaEn8?authuser=5#scrollTo=5RN0CyzrsdkM)

<br>

## Some examples from the model

Original Text witt Capitalization & Puntuation:
<br>

`Si acabo d'hora, aniré a mirar roba.`
<br>
`Necessitem vacances.`
<br>
`A partir d'aquí?`
<br>
`Acabat el debat, procedirem a la votació.`
<br>
`Ah, Déu meu!`
<br>
`Bona tarda, diputats, diputades.`
<br>
`A Barcelona i a Cubells, deu mules són cinc parells.`
<br>
`A beure i a menjar, mesura has de posar.`
<br>


And Model Output:
<br>
<br>

---------------------------------------------------------------------------------------<br>
`Query   : si acabo d'hora aniré a mirar roba`
<br>
`Combined: Si acabo d'hora, aniré a mirar roba.`
<br>
---------------------------------------------------------------------------------------<br>
`Query   : necessitem vacances`
<br>
`Combined: Necessitem vacances.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : a partir d'aquí`
<br>
`Combined: A partir d'aquí.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : acabat el debat procedirem a la votació`
<br>
`Combined: Acabat el debat, procedirem a la votació.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : ah déu meu`
<br>
`Combined: Ah, Déu meu.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : bona tarda diputats diputades`
<br>
`Combined: Bona tarda Diputats diputades.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : a barcelona i a cubells deu mules són cinc parells`
<br>
`Combined: A Barcelona i a Cubells, deu mules són cinc parells.`
<br>
--------------------------------------------------------------------------------------- <br>
`Query   : a beure i a menjar mesura has de posar`
<br>
`Combined: A beure i a menjar mesura, has de posar.`
<br>
--------------------------------------------------------------------------------------- <br>


Due to the low frequency of question and exclamation mark, as it can be seen from the results, they are not accurate as commas and periods, this problem can be easily addressed by increasing their frequency.

--------------------------------------------------------------------------------------

Here are some statistics for punctuation and capitalization model for catalan language

<img width="798" alt="Screen Shot 2022-04-28 at 6 56 52 PM" src="https://user-images.githubusercontent.com/53477752/165775263-29c266e5-5ca5-4e63-be39-470c76e935c6.png">


              
