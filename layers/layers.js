var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LVCable_1 = new ol.format.GeoJSON();
var features_LVCable_1 = format_LVCable_1.readFeatures(json_LVCable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LVCable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LVCable_1.addFeatures(features_LVCable_1);
var lyr_LVCable_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LVCable_1, 
                style: style_LVCable_1,
                interactive: true,
                title: '<img src="styles/legend/LVCable_1.png" /> LV-Cable'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: 'أعمدة<br />\
    <img src="styles/legend/_2_0.png" /> New<br />\
    <img src="styles/legend/_2_1.png" /> Old<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LVCable_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LVCable_1,lyr__2];
lyr_LVCable_1.set('fieldAliases', {'id': 'id', });
lyr__2.set('fieldAliases', {'id': 'الكود', 'النوع': 'النوع', 'الحال': 'الحالة', 'الشرك': 'الشركة المنفذة', 'صورة': 'صورة العمود', });
lyr_LVCable_1.set('fieldImages', {'id': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'النوع': 'TextEdit', 'الحال': 'TextEdit', 'الشرك': 'TextEdit', 'صورة': 'ExternalResource', });
lyr_LVCable_1.set('fieldLabels', {'id': 'inline label', });
lyr__2.set('fieldLabels', {'id': 'inline label', 'النوع': 'inline label', 'الحال': 'inline label', 'الشرك': 'inline label', 'صورة': 'inline label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});