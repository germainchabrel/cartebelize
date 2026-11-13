 Carte web : les annonces Airbnb du Belize, une économie de la côte et des cayes ?

Auteur : Germain Chabrel
Cours : M2, Visualisation (TD Webmapping), 13 novembre 2026

 Description
 le prix et des annonces Airbnb dépendent-ils de la distance à la côte ?

La carte affiche :
- Cellules de 5 km colorées par prix médian (5 classes en quantiles). Cellules de moins de 3 annonces masquées.
- Popups au clic : nombre d'annonces (densité), prix médian (€ / nuit), part de logements entiers (%).
- Liste des couches, zoom et échelle.


 Données et sources
- Inside Airbnb : septembre 2026.
- geoBoundaries : contours du Belize, du Mexique, du Guatemala et du Honduras (niveau ADM0), flux
- Fond de carte : OSM

 Méthode 
- Projection de calcul : UTM zone 16 Nord (EPSG:32616), mètres.
- Distance de chaque annonce à la côte (contour ADM0, frontières terrestres retirées).
- Grille de 5 km : médiane des prix, nombre d'annonces et part de logements entiers par cellule.
- Export web : couches reprojetées en WGS 84 (EPSG:4326) par qgis2web.
- Détail de la méthode et commentaire : voir le document Word du rendu.

 Outils
QGIS 3.34, extension qgis2web, Python (PyQGIS), OpenLayers.
