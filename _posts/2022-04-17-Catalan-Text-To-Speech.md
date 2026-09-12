---
title: 'Catalan Text To Speech'
date: 2022-04-17
permalink: /posts/2022/04/Catalan-Text-To-Speech/
tags:
  - Catalan Text To Speech
  - Catalan TTS
  - Catalan 
  - Catalan Speech
  - Catalan Speech Synthesis
  - Catalan Speech To Text
  - Catalan A.I.
  - Catalan Speech DataSet
  - Melgan
  - Catalan Speech Vocoder
  - Catalan Tacotron
  - Catalan FastSpeech
  - Catalan Speech To Text
  - Catalan ASR
  - Catalan Tacotron2
image: logan-armstrong-hVhfqhDYciU-unsplash.jpg
---

This Repo Contains Implementation of Catalan Text To Speech With Some Samples

![logan-armstrong-hVhfqhDYciU-unsplash](https://user-images.githubusercontent.com/53477752/163730241-b83bd381-90a9-4235-9322-363fe0c04390.jpg)



Based on Microsoft's [FastSpeech](https://www.microsoft.com/en-us/research/blog/fastspeech-new-text-to-speech-model-improves-on-speed-accuracy-and-controllability/)

Catalan Version of [FastSpeech Repo](https://github.com/as-ideas/ForwardTacotron)


<img width="897" alt="fast_speech" src="https://user-images.githubusercontent.com/53477752/164887535-20ac8f83-476b-4174-8ba8-8387674213f9.png">
<br>


The model has following advantages:
- **Robustness:** No repeats and failed attention modes for challenging sentences.
- **Speed:** The generation of a mel spectogram takes about 0.04s on a GeForce RTX 2080.
- **Controllability:** It is possible to control the speed of the generated utterance.
- **Efficiency:** In contrast to FastSpeech and Tacotron, the model of ForwardTacotron
does not use any attention. Hence, the required memory grows linearly with text size, which makes it possible to synthesize large articles at once.



Check out the latest [audio samples](https://mehdihosseinimoghadam.github.io//posts/2022/04/Catalan-Text-To-Speech/) (ForwardTacotron + WaveRNN)!
The samples are generated with a model trained on 2 hoours of data from [Catalan Common Voice](https://commonvoice.mozilla.org/en/datasets) and vocoded with WaveRNN, [MelGAN](https://github.com/seungwonpark/melgan), or [HiFiGAN](https://github.com/jik876/hifi-gan). 
You can try out the latest pretrained model with the following notebook:  

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/mehdihosseinimoghadam/Catalan-Text-to-Speech/blob/master/Catalan_Text_To_Speeh_Demo.ipynb)





Samples 🔉
----------

Comparing Ground Truth voices with model generated voices.



Text                 | Ground Truth            |  WaveRNN              |
--------------------- | :-------------------: | 
És un edifici entre mitgeres fent xamfrà | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/G_És un edifici entre mitgeres fent xamfrà.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/W_És un edifici entre mitgeres fent xamfrà.wav?raw=true" controls preload="metadata"></audio> | 
Igualment, el propietari no va acceptar vendre | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/G_Igualment, el propietari no va acceptar vendre.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/W_Igualment, el propietari no va acceptar vendre.wav?raw=true" controls preload="metadata"></audio> |  
La resta de la vora és aproximadament circular  | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/G_La resta de la vora és aproximadament circular.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/W_La resta de la vora és aproximadament circular.wav?raw=true" controls preload="metadata"></audio> | 
Només s'ha descrit a la seva localitat tipus | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/G_Només s'ha descrit a la seva localitat tipus.wav?raw=true" controls preload="metadata"></audio>  | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/W_Només s'ha descrit a la seva localitat tipus.wav?raw=true" controls preload="metadata"></audio> | 

<br>


------------------------------------------------------------------------------------

<br>


More model generated voices with Catalan Text To Speech (Long and challenging sentences) 


Text                 | WaveRNN            |  
--------------------- | :-------------------: | 
L'àliga no caça mosques. | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/L’àliga no caça mosques.wav?raw=true" controls preload="metadata"></audio>  | 
Entrar per una orella i sortir per l'altre.|  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Entrar per una orella i sortir per l’altre..wav?raw=true" controls preload="metadata"></audio>  | 
La paraula bona molt val i poc costa.|  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/La%20paraula%20bona%20molt%20val%20i%20poc%20costa%20%20.wav?raw=true" controls preload="metadata"></audio>  | 
Quan el gat no hi es, les rates ballen.|  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Quan el gat no hi es, les rates ballen.wav?raw=true" controls preload="metadata"></audio>  | 
Val més mala avinença que bona sentencia.|  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Val%20me%CC%81s%20mala%20avinenc%CC%A7a%20que%20bona%20sentencia.wav?raw=true" controls preload="metadata"></audio>  | 
El president Trump es va reunir amb altres líders a la conferència del Grup dels 20.|  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/El%20president%20Trump%20es%20va%20reunir%20amb%20altres%20li%CC%81ders%20a%20la%20confere%CC%80ncia%20del%20Grup%20dels%2020.wav?raw=true" controls preload="metadata"></audio>  | 
De mica en mica s'omple la pica i de gota en gota s'omple la bota. |  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/De%20mica%20en%20mica%20s%E2%80%99omple%20la%20pica%20i%20de%20gota%20en%20gota%20s%E2%80%99omple%20la%20bota.wav?raw=true" controls preload="metadata"></audio>  | 
Científics del laboratori del CERN diuen que han descobert una nova partícula. |  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Cienti%CC%81fics%20del%20laboratori%20del%20CERN%20diuen%20que%20han%20descobert%20una%20nova%20parti%CC%81cula.wav?raw=true" controls preload="metadata"></audio>  | 
La normativa del català és establerta, d'una manera general, per l'Institut d'Estudis Catalans, que pren com a base l'ortografia, la gramàtica i el diccionari elaborats per Pompeu Fabra, i per a les variants específiques del valencià, per l'Acadèmia Valenciana de la Llengua, que pren com a base les Normes de Castelló, és a dir, l'ortografia de Pompeu Fabra però més adaptada a la pronunciació del català occidental i als trets que caracteritzen les varietats valencianes.| <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/La%20normativa%20del%20catala%CC%80%20.wav?raw=true" controls preload="metadata"></audio>  | 


<br>



----------------------------------------------------------------------------------------------------------------------------------

<br>

Speed controlibility of Catalan Text To Speech with different factors




Text                  | Normal (Speed = 1)         |  Fast(Speed = 1.5)              |  Slow(Speed = .5)  |
--------------------- | :-------------------: | :-------------------- | 
Les persones es troben, les muntanyes no.| <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Les%20persones%20es%20troben%2C%20les%20muntanyes%20no1.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Les%20persones%20es%20troben%2C%20les%20muntanyes%20no15.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/Les%20persones%20es%20troben%2C%20les%20muntanyes%20no5.wav?raw=true" controls preload="metadata"></audio> |
La paciència és la mare de la ciència | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/La%20pacie%CC%80ncia%20e%CC%81s%20la%20mare%20de%20la%20cie%CC%80ncia1.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/La%20pacie%CC%80ncia%20e%CC%81s%20la%20mare%20de%20la%20cie%CC%80ncia15.wav?raw=true" controls preload="metadata"></audio> |  <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/La%20pacie%CC%80ncia%20e%CC%81s%20la%20mare%20de%20la%20cie%CC%80ncia5.wav?raw=true" controls preload="metadata"></audio> |
L’àliga no caça mosques  | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/L%E2%80%99a%CC%80liga%20no%20cac%CC%A7a%20mosques_1.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/L%E2%80%99a%CC%80liga%20no%20cac%CC%A7a%20mosques_15.wav?raw=true" controls preload="metadata"></audio> | <audio src="https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/images/L%E2%80%99a%CC%80liga%20no%20cac%CC%A7a%20mosques5.wav?raw=true" controls preload="metadata"></audio> | 



---------------------------------------------------------------------------------------------------------------




## References

* [FastSpeech: Fast, Robust and Controllable Text to Speech](https://arxiv.org/abs/1905.09263)
* [FastPitch: Parallel Text-to-speech with Pitch Prediction](https://arxiv.org/abs/2006.06873)
* [HiFi-GAN: Generative Adversarial Networks for Efficient and High Fidelity Speech Synthesis](https://arxiv.org/abs/2010.05646)
* [MelGAN: Generative Adversarial Networks for Conditional Waveform Synthesis](https://arxiv.org/abs/1910.06711)

## Acknowlegements

* [https://github.com/keithito/tacotron](https://github.com/keithito/tacotron)
* [https://github.com/fatchord/WaveRNN](https://github.com/fatchord/WaveRNN)
* [https://github.com/seungwonpark/melgan](https://github.com/seungwonpark/melgan)
* [https://github.com/jik876/hifi-gan](https://github.com/jik876/hifi-gan)
* [https://github.com/xcmyz/LightSpeech](https://github.com/xcmyz/LightSpeech)
* [https://github.com/resemble-ai/Resemblyzer](https://github.com/resemble-ai/Resemblyzer)
* [https://github.com/NVIDIA/DeepLearningExamples/tree/master/PyTorch/SpeechSynthesis/FastPitch](https://github.com/NVIDIA/DeepLearningExamples/tree/master/PyTorch/SpeechSynthesis/FastPitch)

## Maintainers

* Mehdi Hosseini Moghadam, github: [mehdihosseinimoghadam](https://github.com/mehdihosseinimoghadam) 

## Copyright

See [LICENSE](https://github.com/mehdihosseinimoghadam/mehdihosseinimoghadam.github.io/blob/master/LICENSE) for details.









