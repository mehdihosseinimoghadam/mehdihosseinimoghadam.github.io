---
title: 'Vq-VAE Methods for Sound Reconstruction 🎻'
date: 2022-02-25
permalink: /posts/2022/02/sound-reconstruction-with-Vq-VAE/     
tags:
  - Sound Reconstruction
  - VAE
  - Vq-VAE
  - Vector Quantization Methods
  - Variational Auto Encoder
  - Auto Encoder
image: architecture.jpeg
---

This Repo Contains Implementation of Vq-VAE methods for sound reconstruction in Pytorch

![elijah-m-henderson-xgT3iQDIijU-unsplash](https://user-images.githubusercontent.com/53477752/155848248-49f62114-0ff2-4605-927c-6d15c1726264.jpg)



# Signal-Processing
Signal Processing with Python and Librosa


## Voice Reconstruction Using Vq-VAE

This notebook proposes a method on how to reconstruct speech using vq-vae which has been first introduced by Oord et. al
<embed src="https://arxiv.org/pdf/1711.00937.pdf" type="application/pdf" width="800px" height="800px">




## Vq-VAE vs VAE
Main difference between Vq-VAE & VAE is that VAE learns a continuous latent representation of a given dataset, but Vq-VAE learns a discrete latent representation of dataset.  



## Architecture


![picture](https://drive.google.com/uc?export=view&id=1hVMCRd4ZeBMM581iLa5ZKV1C-gT4IUsQ)


- At the begining, encoder takes a batch of images with input shape of $X:(n, h, w, c)$ and outputs $Z_{e}:(n, h, w, d)$

- Then vector quantization layer takes $Z_{e}$ and for each vector in $Z_{e}$ it selects the nearest vector from the codebook based on $L_{2}$ norm and outputs $Z_{q}$ 

- Finally decoder takes $Z_{q}$ and reconstructs the input $X$.

## Detailed View on Vq-VAE Architecture

![picture](https://drive.google.com/uc?export=view&id=1a---6D9Nzvf7VJpfR_zDGujXSpJwG6cJ)


- Reshaping: First of all we need to reshape input from $(n, h, w, d)$ to $(n \times h \times w, d)$ .

- Calculating Distances: For each of d-dimensional vectors, we calculate their distance from each $k$, d-dimensional vectors in codebook and get a matrix of $(n \times h \times w, k)$.

- Argmin: Next for each row of the matrix, we apply argmin function to get the nearest vector index from codebook and do one-hot encoding no each row (in fact the value of the nearest vector will be 1 and rest would be 0).

- Index from Codebook: After that we multiply the one-hotted matrix to the whole codebook and we get a matrix of $(n \times h \times w, d)$ dimension.

- Finally we reshape $(n \times h \times w, d)$ to $(n, h, w, d)$ and give it to the decoder to reconstruct the input data 



##  Some High Resolution Constructed Images


![picture](https://drive.google.com/uc?export=view&id=1rAicXUoCWrLEKtA-Wyvwj2ydNhsbQzk3)


### References
[1] https://shashank7-iitd.medium.com/understanding-vector-quantized-variational-autoencoders-vq-vae-323d710a888a

[2] https://arxiv.org/pdf/1711.00937.pdf


<!-- 
<embed src="https://arxiv.org/pdf/1703.10135.pdf" type="application/pdf" width="800px" height="800px">.

 -->



### Dataset:
  To train vq-vae model I used [speech commands tensorflow](https://www.kaggle.com/luantm/speech-commands-tensorflow) dataset, for simplicity I just used **Right**
  wav files, some wav samples with their spectrograms can be found below:
  

![download (2)](https://user-images.githubusercontent.com/53477752/155896723-51ad44d7-46ed-466a-8566-71a48a9e8c59.png)
 
<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/download%20(1).wav?raw=true" controls preload="metadata"></audio>

---

![wav1](https://user-images.githubusercontent.com/53477752/155848854-0b8e1b63-4384-464a-be2c-c54b81cdd852.png)

<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/download.wav?raw=true" controls preload="metadata"></audio>

---

## Reconstructed Sounds:
After ~40k epochs of training the network here are some results with their spectrograms:


![recon1](https://user-images.githubusercontent.com/53477752/155897443-7aa051da-04d2-42ed-84a4-7558627f1946.png)
<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/recon1.wav?raw=true" controls preload="metadata"></audio>
---


![recon2](https://user-images.githubusercontent.com/53477752/155897450-ccbc2c04-21f2-49ed-92a1-4b2edff988ce.png)
<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/recon2.wav?raw=true" controls preload="metadata"></audio>
---


![recon3](https://user-images.githubusercontent.com/53477752/155897455-9839f412-73c4-476e-9d20-2fe0fa71ce59.png)
<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/recon3.wav?raw=true" controls preload="metadata"></audio>
---

<!-- Sample1            |  Sample2
:-------------------------:|:-------------------------:
![wav1](https://user-images.githubusercontent.com/53477752/155848854-0b8e1b63-4384-464a-be2c-c54b81cdd852.png) |  ![wav1](https://user-images.githubusercontent.com/53477752/155848854-0b8e1b63-4384-464a-be2c-c54b81cdd852.png)|
<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/download.wav?raw=true" controls preload="metadata"></audio>|<audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/download.wav?raw=true" controls preload="metadata"></audio>

 -->

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/mehdihosseinimoghadam/Complex-Neural-Networks/blob/main/Complex_Deep_Neural_Network.ipynb)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/LICENSE)






## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/LICENSE)

Released 2022 by [Mehdi Hosseini Moghadam](https://github.com/mehdihosseinimoghadam)
