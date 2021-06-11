var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FAC_1 = new ol.format.GeoJSON();
var features_FAC_1 = format_FAC_1.readFeatures(json_FAC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAC_1.addFeatures(features_FAC_1);
var lyr_FAC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FAC_1, 
                style: style_FAC_1,
                interactive: true,
    title: 'FAC<br />\
    <img src="styles/legend/FAC_1_0.png" /> 0,00012 - 0,00028 <br />\
    <img src="styles/legend/FAC_1_1.png" /> 0,00028 - 0,00057 <br />\
    <img src="styles/legend/FAC_1_2.png" /> 0,00057 - 0,00080 <br />\
    <img src="styles/legend/FAC_1_3.png" /> 0,00080 - 0,00097 <br />\
    <img src="styles/legend/FAC_1_4.png" /> 0,00097 - 0,00109 <br />\
    <img src="styles/legend/FAC_1_5.png" /> 0,00109 - 0,00136 <br />'
        });
var format_Jalan_Antapani_2 = new ol.format.GeoJSON();
var features_Jalan_Antapani_2 = format_Jalan_Antapani_2.readFeatures(json_Jalan_Antapani_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Antapani_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Antapani_2.addFeatures(features_Jalan_Antapani_2);
var lyr_Jalan_Antapani_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_Antapani_2, 
                style: style_Jalan_Antapani_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_Antapani_2.png" /> Jalan Antapani'
            });
var format_Kelurahan_3 = new ol.format.GeoJSON();
var features_Kelurahan_3 = format_Kelurahan_3.readFeatures(json_Kelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_3.addFeatures(features_Kelurahan_3);
var lyr_Kelurahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelurahan_3, 
                style: style_Kelurahan_3,
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_3.png" /> Kelurahan'
            });
var format_Fasilitas_Kesehatan_Antapani_Klinik_4 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_Antapani_Klinik_4 = format_Fasilitas_Kesehatan_Antapani_Klinik_4.readFeatures(json_Fasilitas_Kesehatan_Antapani_Klinik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_Antapani_Klinik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_Antapani_Klinik_4.addFeatures(features_Fasilitas_Kesehatan_Antapani_Klinik_4);
var lyr_Fasilitas_Kesehatan_Antapani_Klinik_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fasilitas_Kesehatan_Antapani_Klinik_4, 
                style: style_Fasilitas_Kesehatan_Antapani_Klinik_4,
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_Antapani_Klinik_4.png" /> Fasilitas Kesehatan Antapani Klinik'
            });
var format_Fasilitas_Kesehatan_Antapani_Puskesmas_5 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_Antapani_Puskesmas_5 = format_Fasilitas_Kesehatan_Antapani_Puskesmas_5.readFeatures(json_Fasilitas_Kesehatan_Antapani_Puskesmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_Antapani_Puskesmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_Antapani_Puskesmas_5.addFeatures(features_Fasilitas_Kesehatan_Antapani_Puskesmas_5);
var lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fasilitas_Kesehatan_Antapani_Puskesmas_5, 
                style: style_Fasilitas_Kesehatan_Antapani_Puskesmas_5,
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_Antapani_Puskesmas_5.png" /> Fasilitas Kesehatan Antapani Puskesmas'
            });
var format_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6 = format_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.readFeatures(json_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.addFeatures(features_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6);
var lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6, 
                style: style_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6,
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.png" /> Fasilitas Kesehatan Antapani Rumah Sakit'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FAC_1.setVisible(true);lyr_Jalan_Antapani_2.setVisible(true);lyr_Kelurahan_3.setVisible(true);lyr_Fasilitas_Kesehatan_Antapani_Klinik_4.setVisible(true);lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5.setVisible(true);lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FAC_1,lyr_Jalan_Antapani_2,lyr_Kelurahan_3,lyr_Fasilitas_Kesehatan_Antapani_Klinik_4,lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5,lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6];
lyr_FAC_1.set('fieldAliases', {'FID_Kelura': 'FID_Kelura', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'Populasi': 'Populasi', 'Covid': 'Covid', 'FID_Servic': 'FID_Servic', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ObjectID': 'ObjectID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'Kapasitas_': 'Kapasitas_', 'Shape_Area': 'Shape_Area', 'FAC': 'FAC', });
lyr_Jalan_Antapani_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'avgspeed': 'avgspeed', 'bicycle': 'bicycle', 'cycleway': 'cycleway', 'foot': 'foot', 'highway': 'highway', 'lanes': 'lanes', 'name': 'name', 'oneway': 'oneway', 'surface': 'surface', 'street_nam': 'street_nam', 'access': 'access', 'motor_vehi': 'motor_vehi', 'alt_name': 'alt_name', 'horse': 'horse', 'ref': 'ref', 'maxspeed': 'maxspeed', 'lit': 'lit', 'maxspeed_t': 'maxspeed_t', 'area': 'area', 'lane_marki': 'lane_marki', 'motorcycle': 'motorcycle', 'smoothness': 'smoothness', 'width': 'width', 'leisure': 'leisure', 'waterway': 'waterway', 'destinatio': 'destinatio', 'est_width': 'est_width', 'bridge': 'bridge', 'layer': 'layer', 'electrifie': 'electrifie', 'gauge': 'gauge', 'passenger_': 'passenger_', 'railway': 'railway', 'usage': 'usage', 'oneway_mot': 'oneway_mot', 'sidewalk': 'sidewalk', 'motorcar': 'motorcar', 'noname': 'noname', 'service': 'service', 'power': 'power', 'voltage': 'voltage', 'location': 'location', 'substation': 'substation', 'tunnel': 'tunnel', 'mofa': 'mofa', 'moped': 'moped', 'oneway_con': 'oneway_con', 'junction': 'junction', 'maxweight': 'maxweight', 'destinat_1': 'destinat_1', 'wikipedia_': 'wikipedia_', 'addr_stree': 'addr_stree', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'addr_city': 'addr_city', 'addr_postc': 'addr_postc', 'bridge_str': 'bridge_str', 'destinat_2': 'destinat_2', 'maxheight': 'maxheight', 'int_name': 'int_name', 'covered': 'covered', 'streetname': 'streetname', 'oneway_m_1': 'oneway_m_1', 'ford': 'ford', 'place': 'place', 'population': 'population', 'boundary': 'boundary', 'hgv': 'hgv', 'destinat_3': 'destinat_3', 'building': 'building', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'toll': 'toll', 'access_con': 'access_con', 'turn_lanes': 'turn_lanes', });
lyr_Kelurahan_3.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'Populasi': 'Populasi', });
lyr_Fasilitas_Kesehatan_Antapani_Klinik_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_FAC_1.set('fieldImages', {'FID_Kelura': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'Populasi': 'TextEdit', 'Covid': 'TextEdit', 'FID_Servic': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'ObjectID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', 'Kapasitas_': 'TextEdit', 'Shape_Area': 'TextEdit', 'FAC': 'TextEdit', });
lyr_Jalan_Antapani_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'avgspeed': 'TextEdit', 'bicycle': 'TextEdit', 'cycleway': 'TextEdit', 'foot': 'TextEdit', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'street_nam': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'alt_name': 'TextEdit', 'horse': 'TextEdit', 'ref': 'TextEdit', 'maxspeed': 'TextEdit', 'lit': 'TextEdit', 'maxspeed_t': 'TextEdit', 'area': 'TextEdit', 'lane_marki': 'TextEdit', 'motorcycle': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'leisure': 'TextEdit', 'waterway': 'TextEdit', 'destinatio': 'TextEdit', 'est_width': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'electrifie': 'TextEdit', 'gauge': 'TextEdit', 'passenger_': 'TextEdit', 'railway': 'TextEdit', 'usage': 'TextEdit', 'oneway_mot': 'TextEdit', 'sidewalk': 'TextEdit', 'motorcar': 'TextEdit', 'noname': 'TextEdit', 'service': 'TextEdit', 'power': 'TextEdit', 'voltage': 'TextEdit', 'location': 'TextEdit', 'substation': 'TextEdit', 'tunnel': 'TextEdit', 'mofa': 'TextEdit', 'moped': 'TextEdit', 'oneway_con': 'TextEdit', 'junction': 'TextEdit', 'maxweight': 'TextEdit', 'destinat_1': 'TextEdit', 'wikipedia_': 'TextEdit', 'addr_stree': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'addr_city': 'TextEdit', 'addr_postc': 'TextEdit', 'bridge_str': 'TextEdit', 'destinat_2': 'TextEdit', 'maxheight': 'TextEdit', 'int_name': 'TextEdit', 'covered': 'TextEdit', 'streetname': 'TextEdit', 'oneway_m_1': 'TextEdit', 'ford': 'TextEdit', 'place': 'TextEdit', 'population': 'TextEdit', 'boundary': 'TextEdit', 'hgv': 'TextEdit', 'destinat_3': 'TextEdit', 'building': 'TextEdit', 'lanes_back': 'TextEdit', 'lanes_forw': 'TextEdit', 'toll': 'TextEdit', 'access_con': 'TextEdit', 'turn_lanes': 'TextEdit', });
lyr_Kelurahan_3.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'Populasi': 'TextEdit', });
lyr_Fasilitas_Kesehatan_Antapani_Klinik_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', });
lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', });
lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', });
lyr_FAC_1.set('fieldLabels', {'FID_Kelura': 'inline label', 'GID_0': 'inline label', 'NAME_0': 'inline label', 'GID_1': 'inline label', 'NAME_1': 'inline label', 'GID_2': 'inline label', 'NAME_2': 'inline label', 'GID_3': 'inline label', 'NAME_3': 'inline label', 'GID_4': 'inline label', 'NAME_4': 'inline label', 'VARNAME_4': 'inline label', 'TYPE_4': 'inline label', 'ENGTYPE_4': 'inline label', 'CC_4': 'inline label', 'Populasi': 'inline label', 'Covid': 'inline label', 'FID_Servic': 'inline label', 'Join_Count': 'inline label', 'TARGET_FID': 'inline label', 'ObjectID': 'inline label', 'Name': 'inline label', 'FromBreak': 'inline label', 'ToBreak': 'inline label', 'Kapasitas_': 'inline label', 'Shape_Area': 'inline label', 'FAC': 'inline label', });
lyr_Jalan_Antapani_2.set('fieldLabels', {'full_id': 'inline label', 'osm_id': 'inline label', 'osm_type': 'inline label', 'avgspeed': 'inline label', 'bicycle': 'inline label', 'cycleway': 'inline label', 'foot': 'inline label', 'highway': 'inline label', 'lanes': 'inline label', 'name': 'inline label', 'oneway': 'inline label', 'surface': 'inline label', 'street_nam': 'inline label', 'access': 'inline label', 'motor_vehi': 'inline label', 'alt_name': 'inline label', 'horse': 'inline label', 'ref': 'inline label', 'maxspeed': 'inline label', 'lit': 'inline label', 'maxspeed_t': 'inline label', 'area': 'inline label', 'lane_marki': 'inline label', 'motorcycle': 'inline label', 'smoothness': 'inline label', 'width': 'inline label', 'leisure': 'inline label', 'waterway': 'inline label', 'destinatio': 'inline label', 'est_width': 'inline label', 'bridge': 'inline label', 'layer': 'inline label', 'electrifie': 'inline label', 'gauge': 'inline label', 'passenger_': 'inline label', 'railway': 'inline label', 'usage': 'inline label', 'oneway_mot': 'inline label', 'sidewalk': 'inline label', 'motorcar': 'inline label', 'noname': 'inline label', 'service': 'inline label', 'power': 'inline label', 'voltage': 'inline label', 'location': 'inline label', 'substation': 'inline label', 'tunnel': 'inline label', 'mofa': 'inline label', 'moped': 'inline label', 'oneway_con': 'inline label', 'junction': 'inline label', 'maxweight': 'inline label', 'destinat_1': 'inline label', 'wikipedia_': 'inline label', 'addr_stree': 'inline label', 'Kecamatan': 'inline label', 'Kelurahan': 'inline label', 'addr_city': 'inline label', 'addr_postc': 'inline label', 'bridge_str': 'inline label', 'destinat_2': 'inline label', 'maxheight': 'inline label', 'int_name': 'inline label', 'covered': 'inline label', 'streetname': 'inline label', 'oneway_m_1': 'inline label', 'ford': 'inline label', 'place': 'inline label', 'population': 'inline label', 'boundary': 'inline label', 'hgv': 'inline label', 'destinat_3': 'inline label', 'building': 'inline label', 'lanes_back': 'inline label', 'lanes_forw': 'inline label', 'toll': 'inline label', 'access_con': 'inline label', 'turn_lanes': 'inline label', });
lyr_Kelurahan_3.set('fieldLabels', {'GID_0': 'inline label', 'NAME_0': 'inline label', 'GID_1': 'inline label', 'NAME_1': 'inline label', 'GID_2': 'inline label', 'NAME_2': 'inline label', 'GID_3': 'inline label', 'NAME_3': 'inline label', 'GID_4': 'inline label', 'NAME_4': 'inline label', 'VARNAME_4': 'inline label', 'TYPE_4': 'inline label', 'ENGTYPE_4': 'inline label', 'CC_4': 'inline label', 'Populasi': 'inline label', });
lyr_Fasilitas_Kesehatan_Antapani_Klinik_4.set('fieldLabels', {'OID_': 'inline label', 'Name': 'inline label', 'FolderPath': 'inline label', 'SymbolID': 'inline label', 'AltMode': 'inline label', 'Base': 'inline label', 'Snippet': 'inline label', 'PopupInfo': 'inline label', 'HasLabel': 'inline label', 'LabelID': 'inline label', });
lyr_Fasilitas_Kesehatan_Antapani_Puskesmas_5.set('fieldLabels', {'OID_': 'inline label', 'Name': 'inline label', 'FolderPath': 'inline label', 'SymbolID': 'inline label', 'AltMode': 'inline label', 'Base': 'inline label', 'Snippet': 'inline label', 'PopupInfo': 'inline label', 'HasLabel': 'inline label', 'LabelID': 'inline label', });
lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.set('fieldLabels', {'OID_': 'inline label', 'Name': 'inline label', 'FolderPath': 'inline label', 'SymbolID': 'inline label', 'AltMode': 'inline label', 'Base': 'inline label', 'Snippet': 'inline label', 'PopupInfo': 'inline label', 'HasLabel': 'inline label', 'LabelID': 'inline label', });
lyr_Fasilitas_Kesehatan_Antapani_Rumah_Sakit_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});