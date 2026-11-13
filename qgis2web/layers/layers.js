var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cellules_1 = new ol.format.GeoJSON();
var features_cellules_1 = format_cellules_1.readFeatures(json_cellules_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cellules_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cellules_1.addFeatures(features_cellules_1);
var lyr_cellules_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cellules_1, 
                style: style_cellules_1,
                popuplayertitle: 'cellules',
                interactive: true,
    title: 'cellules<br />\
    <img src="styles/legend/cellules_1_0.png" /> 60 - 181 €<br />\
    <img src="styles/legend/cellules_1_1.png" /> 181 - 234 €<br />\
    <img src="styles/legend/cellules_1_2.png" /> 234 - 321 €<br />\
    <img src="styles/legend/cellules_1_3.png" /> 321 - 610 €<br />\
    <img src="styles/legend/cellules_1_4.png" /> 610 - 5161 €<br />' });
var format_isolignecoteisolignes_cte_2 = new ol.format.GeoJSON();
var features_isolignecoteisolignes_cte_2 = format_isolignecoteisolignes_cte_2.readFeatures(json_isolignecoteisolignes_cte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isolignecoteisolignes_cte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isolignecoteisolignes_cte_2.addFeatures(features_isolignecoteisolignes_cte_2);
var lyr_isolignecoteisolignes_cte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isolignecoteisolignes_cte_2, 
                style: style_isolignecoteisolignes_cte_2,
                popuplayertitle: 'isolignecote — isolignes_cte',
                interactive: true,
                title: '<img src="styles/legend/isolignecoteisolignes_cte_2.png" /> isolignecote — isolignes_cte'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_cellules_1.setVisible(true);lyr_isolignecoteisolignes_cte_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_cellules_1,lyr_isolignecoteisolignes_cte_2];
lyr_cellules_1.set('fieldAliases', {'fid': 'fid', 'n': 'Nombre d\'annonces', 'prix_med': 'Prix médian (€ / nuit)', 'entier': 'Logements entiers (%)', });
lyr_isolignecoteisolignes_cte_2.set('fieldAliases', {'fid': 'fid', 'km': 'km', });
lyr_cellules_1.set('fieldImages', {'fid': 'TextEdit', 'n': 'Range', 'prix_med': 'TextEdit', 'entier': 'TextEdit', });
lyr_isolignecoteisolignes_cte_2.set('fieldImages', {'fid': '', 'km': '', });
lyr_cellules_1.set('fieldLabels', {'fid': 'hidden field', 'n': 'inline label - visible with data', 'prix_med': 'inline label - always visible', 'entier': 'inline label - always visible', });
lyr_isolignecoteisolignes_cte_2.set('fieldLabels', {'fid': 'no label', 'km': 'inline label - always visible', });
lyr_isolignecoteisolignes_cte_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});