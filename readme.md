# Scratch

Projet réalisé par Antoine Coquelet, 
dans le cadre de l’[ARC `Édition — Nouvelles Formes`](http://arceditionnouvellesformes.tumblr.com/).

Le plugin « scratch.js » conçu pour le projet est réutilisable en l’état, en incluant 
[/www/js/scratch.js](https://github.com/ESAD-Orleans/Scratch/blob/master/www/js/scratch.js) 
et [/www/css/scratch.css](https://github.com/ESAD-Orleans/Scratch/blob/master/www/css/scratch.css).
Il requiert d’avoir aussi jQuery et le plugin [`jquery.finger`](http://ngryman.sh/jquery.finger/).

Ensuite, il suffit d’avoir deux images est de les intégrer en HTML, en utilisant l’attribut personnalisé `data-scratch-src` pour préciser l’image qui va être à afficher. 
```html
<div class="scratch">
  <img src="img/initiale.jpg" data-scratch-src="img/revelation.jpg"/>
</div>
```
L’objet exposé utilise `Apache Cordova` pour embarquer le code HTML/CSS/JS dans une application iPad iOS.

## Auteur

- Antoine Coquelet

## Professeurs

- Emmanuel Cyriaque
- Sophie Monville
- Nicolas Tilly

## Développement

- Antoine Coquelet
- ÉSAD Orléans — Arthur Violy

## License

Le code source est diffusé sous [license Art Libre](http://artlibre.org/)
