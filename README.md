# PokeKiyuWonder
Fait par Ogès Florian (PO), Bugnon Lucas (SCRUM master), Picquet Maxime (Git), Lutic Enzo (oui)

# Guide d’installation

## Pré-requis: 
- Avoir installé Node.js et npm en local sur l’ordinateur
- Avoir Git installé 

## 1. Cloner le Repository GitHub
Commencez par cloner le repository GitHub sur votre machine locale en utilisant la commande suivante dans votre terminal, dans le dossier où vous désirez avoir le projet:
```
git clone <nom du repository>
```
Ou en utilisant GitHub Desktop et en sélectionnant le dossier où vous souhaitez avoir le projet.

## 2. Installer les dépendances du Back-end
Accédez au dossier du back-end via le terminal depuis le dossier du projet en tapant cette commande :
```
cd pokekiyuwonder_nodejs
```
Puis, installez les dépendances Node.js en exécutant la commande :
```
npm install
```

## 3. Démarrer le Back-end
Lancez le serveur Node.js en exécutant la commande :
```
npm run dev
```

## 4. Installer les dépendances du Front-end
Accédez au dossier du front-end via le terminal :
```
cd pokekiyuwonder_vuejs
```
Ensuite, installez les dépendances Vue.js en exécutant la commande :
```
npm install
```

## 5. Démarrer le Front-end
Lancez le serveur de développement Vue.js en exécutant la commande :
```
npm run serve
```

## 6. Accéder à l'application
Ouvrez votre navigateur web et accédez à l'URL suivante : http://localhost:8080

Vous devriez maintenant voir votre application en cours d'exécution !

# Navigation dans l’application

L’application est simple d’utilisation: 

Lorsque l’on arrive dans l’application, l’on se retrouve en face d’une page de recherche de pokémon. La barre de recherche permet de rechercher un pokémon, avec un système de pagination regroupant les pokémon par 15. Lorsque l’on clique sur un pokémon, on peut accéder à ses informations, l’ajouter à une des deux équipes et pouvoir consulter sa ligne évolutive. 

Il est possible de cliquer sur la pokéball à côté, afin d’accéder à un menu. Il permet de passer de la recherche des pokémon à la consultation des équipes. 
La page de consultation des équipes permet d’avoir les faiblesses et résistances des deux équipes, et ainsi de les comparer. 

# Documentation technique

## Partie Front 

### /components 

BarreLateral : S'occupe de l'affichage et de la gestion du menu présent lorsque l'on clique sur la pokéball 

CompartmentPokemon : S'occupe de l'affichage des affiches "miniatures" des pokémon présents lors de la recherche 

ListPokemon : Regroupe toutes les affiches "miniatures" des pokémons présents lors de la recherche et s'occupe du système de pagination 

ProfilePokemon : S'occupe de l'affichage des fiches de pokémon qui s'affichent lorsque l'on clique sur un pokémon 

RecherchePokemon : S'occupe de la recherche des pokémon via ce qui est donné par la barre de recherche 

SearchBar : S'occupe de l'affichage de la barre de recherche 

TableauType : S'occupe de l'affichage du tableau d'efficacité des types pour chaque équipe 

TeamPage : S'occupe de la page d'affichage des deux équipes 

TeamPokemon : S'occupe de l'affichage de chaque équipe pokémon sur la page d'affichage des équipes 

### /pages 

MainPage : La page principale, qui regroupe la page actuelle du router et la barre latérale 

ResearchPokemon : S'occupe de la page de recherche de pokémon, regroupe tous les éléments de la recherche 

### /services 

getPokemonService.js : Contacte le back afin de récupérer la liste de tous les pokémons 

getTypeService.js : Contacte le back afin de récupérer la liste de tous les types 

index.js : Contient le router, qui permet de naviguer entre les différentes pages présentes dans le site 

## Partie Back 

### /controllers 

pokemons.js : Intermédiaire entre la route /pokemons et pokemonsService 

types.js : Intermédiaire entre la route /types et typesService 

### /routes 

index.js : Contient les différents chemins présents dans le back 

pokemons.js : La route /pokemons qui appelle pokemons.js dans le dossier controllers 

types.js : La route /types qui appelle types.js dans le dossier controllers 

### /services 

pokemonsService.js : Appelle l'API PokeBuild afin de récupérer la liste de tous les pokémon 

typesService.js : Appelle l'API PokeBuild afin de récupérer la liste de tous les types 