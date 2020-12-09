# Interrogation : Devinez un nombre

> JS test given at HEPL

* * *

**js-tp-interrogation-devine-nombre** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *

## Énoncé

* Choisissez un nombre entre 1 et 100 et enregistrez-le dans une variable.

* Quand l'utilisateur clique sur le bouton de soumission du formulaire ou qu'il soumet le formulaire avec la touche entrer, vous devez vérifier si le nombre saisi est plus petit ou plus grand que le nombre recherché. Dans ce cas, vous devez mettre à jour la balise `<p class="message">` en lui ajoutant la classe `error` et en mettant à jour le contenu texte. 

* Si l'utilisateur entre le bon nombre alors il faut mettre à jour la balise p, en retirant la classe `error`.  De plus, vous devez afficher avant la fermeture de la balise body l'image de Dolly Parton comme ceci : 
 ```html
<div class="center-img">
	<img src="https://media.giphy.com/media/l3cyxQvWJ4P8r3VQsb/source.gif" alt="Dolly Parton">
</div>
 ```

* Comptez le nombre de coups déjà joués et affichez-les dans la balise `.message`.
* Permettez de jouer à l'infini, en retirant l'image, en remettant le compteur à 0 et en générant un nouveau nombre aléatoire. 

![readme](./readme.gif)
