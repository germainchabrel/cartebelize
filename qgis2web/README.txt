 Carte web : les annonces Airbnb du Belize, une économie de la côte et des cayes ?

Auteur : Germain Chabrel
Cours : M2, Visualisation (TD Webmapping), 13 novembre 2026

 Description
Carte web interactive générée avec l'extension QGIS qgis2web (bibliothèque OpenLayers).
Elle explore la question : le prix et la nature des annonces Airbnb dépendent-ils de la distance à la côte ?

La carte affiche :
- Cellules de 5 km colorées par prix médian (5 classes en quantiles). Cellules de moins de 3 annonces masquées.
- Isolignes de distance à la côte (1, 5 et 20 km).
- Popups au clic : nombre d'annonces (densité), prix médian (€ / nuit), part de logements entiers (%).
- Liste des couches, zoom et échelle.

 Utilisation
1. Décompresser le dossier complet.
2. Ouvrir `index.html` dans un navigateur récent (Chrome, Firefox, Edge).
3. Si la carte reste blanche, lancer un petit serveur local dans le dossier :
   `python -m http.server`, puis ouvrir `http://localhost:8000`.
4. Cliquer sur une cellule pour afficher ses informations.

 Contenu du dossier
- `index.html` : page de la carte
- `layers/` : données au format GeoJSON (en fichiers JavaScript) et liste des couches
- `styles/` : symbologie de chaque couche
- `resources/` : bibliothèques (OpenLayers, sélecteur de couches, popups) et feuilles de style
- `README` : ce fichier

 Données et sources
- Inside Airbnb : annonces du Belize (2804 annonces exploitables), date du relevé : septembre 2026.
- geoBoundaries : contours du Belize, du Mexique, du Guatemala et du Honduras (niveau ADM0), récupérés par flux.
- Fond de carte : [OpenStreetMap / à adapter selon votre choix dans qgis2web].

 Méthode (résumé)
- Projection de calcul : UTM zone 16 Nord (EPSG:32616), pour mesurer en mètres.
- Distance de chaque annonce à la côte (contour ADM0, frontières terrestres retirées).
- Grille de 5 km : médiane des prix, nombre d'annonces et part de logements entiers par cellule.
- Export web : couches reprojetées en WGS 84 (EPSG:4326) par qgis2web.
- Détail de la méthode et commentaire : voir le document Word du rendu.

 Outils
QGIS 3.34, extension qgis2web, Python (PyQGIS), OpenLayers.