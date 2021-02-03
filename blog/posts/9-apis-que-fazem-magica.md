---
title: "9 Web API's que fazem mágica ⚡🧙🏻‍♀️🧙🏾‍♂️✨"
description: "O poder do browser como nunca antes. Web api's assemble! "
date: 2021-01-15
---
### *Se voltássemos no tempo uns 20 anos, ou até menos, e falassemos pros devs daquela época o que os navegadores conseguem fazer hoje, definitivamente não acreditariam. Olhando em perspectiva o que os browsers fazem hoje com certeza garantiriam a entrada do Chrome, Firefox, Edge e outros em Hogwarts. Sabemos também quem ficaria de fora 👀 (aqueles que não devem ser mencionados ~~IE/Safari~~)*

Vamos dar um panorama de algumas Web Api's que fazem verdadeiras mágicas, especialmente em dispositivos móveis.

## Ambient Light Events 💡

Quando o sensor de luz de um dispositivo detecta uma mudança no nível de luz, ele notifica o navegador dessa mudança. Imagine o que dá pra fazer com fotografias, ambientes escuros ou contrastes de acessibilidade Instantâneos!

Exemplo:
```javascript
    if ('ondevicelight' in window) {
      window.addEventListener('devicelight', function(event) {
        var body = document.querySelector('body');
        if (event.value < 50) {
          body.classList.add('darklight');
          body.classList.remove('brightlight');
        } else {
          body.classList.add('brightlight');
          body.classList.remove('darklight');
        }
      });
    } else {
      console.log('devicelight event not supported');
    }
```
> Compatibilidade - Firefox, Firefox Android	


## Web Bluetooth API 📲

Isso mesmo, você tem acesso ao bluetooth via browser 💙

> Compatibilidade - Chrome, Edge,	Opera, Chrome Android, Opera Android, Samsung Internet


## Broadcast Channel API 🛰️

Compartilhando de informações entre janelas, tabs, iframes etc, quem já teve problema em precisar integrar esse tipo de comunicação, essa api é salvação.

> Compatibilidade - Chrome, Edge,	Firefox, Opera, WebView Android, Chrome Android, Opera Android, Samsung Internet

## Contact Picker API 👥👥

Você tem acesso aos contatos do telefone via browser (: Usar informações como nome, email, telefone, endereço e ícone se estiverem disponíveis, a aplicabilidade disso é quase infinita. 

> Compatibilidade - Opera, WebView Android,	Chrome Android, Opera Android, Samsung Internet


## Web Video Text Tracks Format (WebVTT) 🔠

Outra grande amiga da acessibilidade, quer colocar legenda nos seus vídeos? usando a tag ``<video>``? É possível costumizar via css as legendas também. Vai fundo nessa lindeza =D

Exemplo: 

track.vtt
```text
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.
```

```html
  <video controls autoplay src="video.webm">
    <track default src="track.vtt">
  </video>
```
> Compatibilidade - Todos os browsers modernos

## The WebSocket API 🔁

Essa é uma verdadeira mágica! Com essa API, você pode enviar mensagens a um servidor e receber respostas orientadas a eventos sem precisar consultar o servidor para obter uma resposta. Realtime meus amigos <3
> Compatibilidade - Todos os browsers modernos

## Screen Capture API  🖥️

A mágica do print! Super simples de usar!

Exemplo:
```js
  async function startCapture(displayMediaOptions) {
    let captureStream = null;

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch(err) {
      console.error("Error: " + err);
    }
    return captureStream;
  }
```
> Compatibilidade - Chrome, Edge,	Firefox, Opera, Safari

## Proximity Events 🤳

Sabe quando a tela desliga quando coloca o telefone no ouvido? Então, essa api te dá esse poder. Detecta quando o usuário está longe do dispositivo.

Bem intuitiva a implementação:
```js
  window.addEventListener('userproximity', function(event) {
    if (event.near) {
      // let's power off the screen
      navigator.mozPower.screenEnabled = false;
    } else {
      // Otherwise, let's power on the screen
      navigator.mozPower.screenEnabled = true;
    }
  });
```

> Compatibilidade -	Firefox, Firefox Android


## Picture-in-Picture API

Comum no whatsapp, facebook, youtube. Essa API permite criar o vídeo flutuante em cima de outras janelas para que os usuários possam continuar a consumir mídia enquanto interagem com outros sites de conteúdo ou aplicativos em seus dispositivos.

> Compatibilidade - Chrome, Edge, Opera, Safari, iOS Safari



### E tem muito mais! São 77 API's com capacidades incríveis. Cada uma merece um artigo dedicado, vale a pena conferir e brincar com elas.
  


<br/>


Fonte: [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API) 
