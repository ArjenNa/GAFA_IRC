var wms_layers = [];

var format_worldadministrativeboundaries_0 = new ol.format.GeoJSON();
var features_worldadministrativeboundaries_0 = format_worldadministrativeboundaries_0.readFeatures(json_worldadministrativeboundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundaries_0.addFeatures(features_worldadministrativeboundaries_0);
var lyr_worldadministrativeboundaries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_worldadministrativeboundaries_0, 
                style: style_worldadministrativeboundaries_0,
                popuplayertitle: 'world-administrative-boundaries',
                interactive: true,
    title: 'world-administrative-boundaries<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_0.png" /> Abyei<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_1.png" /> Afghanistan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_2.png" /> Aksai Chin<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_3.png" /> Albania<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_4.png" /> Algeria<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_5.png" /> American Samoa<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_6.png" /> Andorra<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_7.png" /> Angola<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_8.png" /> Anguilla<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_9.png" /> Antigua & Barbuda<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_10.png" /> Argentina<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_11.png" /> Armenia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_12.png" /> Aruba<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_13.png" /> Arunachal Pradesh<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_14.png" /> Australia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_15.png" /> Austria<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_16.png" /> Azerbaijan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_17.png" /> Azores Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_18.png" /> Bahamas<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_19.png" /> Bahrain<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_20.png" /> Bangladesh<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_21.png" /> Barbados<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_22.png" /> Belarus<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_23.png" /> Belgium<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_24.png" /> Belize<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_25.png" /> Benin<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_26.png" /> Bermuda<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_27.png" /> Bhutan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_28.png" /> Bolivia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_29.png" /> Bosnia & Herzegovina<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_30.png" /> Botswana<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_31.png" /> Bouvet Island<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_32.png" /> Brazil<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_33.png" /> British Indian Ocean Territory<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_34.png" /> British Virgin Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_35.png" /> Brunei Darussalam<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_36.png" /> Bulgaria<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_37.png" /> Burkina Faso<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_38.png" /> Burundi<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_39.png" /> Cambodia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_40.png" /> Cameroon<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_41.png" /> Canada<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_42.png" /> Cape Verde<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_43.png" /> Cayman Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_44.png" /> Central African Republic<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_45.png" /> Chad<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_46.png" /> Chile<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_47.png" /> China<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_48.png" /> Christmas Island<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_49.png" /> Cocos (Keeling) Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_50.png" /> Colombia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_51.png" /> Comoros<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_52.png" /> Congo<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_53.png" /> Cook Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_54.png" /> Costa Rica<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_55.png" /> Côte d\'Ivoire<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_56.png" /> Croatia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_57.png" /> Cuba<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_58.png" /> Cyprus<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_59.png" /> Czech Republic<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_60.png" /> Democratic People\'s Republic of Korea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_61.png" /> Democratic Republic of the Congo<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_62.png" /> Denmark<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_63.png" /> Djibouti<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_64.png" /> Dominica<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_65.png" /> Dominican Republic<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_66.png" /> Ecuador<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_67.png" /> Egypt<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_68.png" /> El Salvador<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_69.png" /> Equatorial Guinea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_70.png" /> Eritrea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_71.png" /> Estonia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_72.png" /> Ethiopia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_73.png" /> Falkland Islands (Malvinas)<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_74.png" /> Faroe Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_75.png" /> Fiji<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_76.png" /> Finland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_77.png" /> France<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_78.png" /> French Guiana<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_79.png" /> French Polynesia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_80.png" /> French Southern and Antarctic Territories<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_81.png" /> Gabon<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_82.png" /> Gambia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_83.png" /> Gaza Strip<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_84.png" /> Georgia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_85.png" /> Germany<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_86.png" /> Ghana<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_87.png" /> Gibraltar<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_88.png" /> Glorioso Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_89.png" /> Greece<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_90.png" /> Greenland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_91.png" /> Grenada<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_92.png" /> Guadeloupe<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_93.png" /> Guam<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_94.png" /> Guantanamo<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_95.png" /> Guatemala<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_96.png" /> Guernsey<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_97.png" /> Guinea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_98.png" /> Guinea-Bissau<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_99.png" /> Guyana<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_100.png" /> Haiti<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_101.png" /> Hala\'ib Triangle<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_102.png" /> Heard Island and McDonald Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_103.png" /> Holy See<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_104.png" /> Honduras<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_105.png" /> Hong Kong<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_106.png" /> Hungary<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_107.png" /> Iceland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_108.png" /> Ilemi Triangle<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_109.png" /> India<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_110.png" /> Indonesia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_111.png" /> Iran (Islamic Republic of)<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_112.png" /> Iraq<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_113.png" /> Ireland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_114.png" /> Isle of Man<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_115.png" /> Israel<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_116.png" /> Italy<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_117.png" /> Jamaica<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_118.png" /> Jammu-Kashmir<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_119.png" /> Japan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_120.png" /> Jarvis Island<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_121.png" /> Jersey<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_122.png" /> Jordan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_123.png" /> Kazakhstan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_124.png" /> Kenya<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_125.png" /> Kiribati<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_126.png" /> Kuril Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_127.png" /> Kuwait<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_128.png" /> Kyrgyzstan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_129.png" /> Lao People\'s Democratic Republic<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_130.png" /> Latvia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_131.png" /> Lebanon<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_132.png" /> Lesotho<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_133.png" /> Liberia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_134.png" /> Libyan Arab Jamahiriya<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_135.png" /> Liechtenstein<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_136.png" /> Lithuania<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_137.png" /> Luxembourg<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_138.png" /> Ma\'tan al-Sarra<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_139.png" /> Macao<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_140.png" /> Madagascar<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_141.png" /> Madeira Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_142.png" /> Malawi<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_143.png" /> Malaysia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_144.png" /> Maldives<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_145.png" /> Mali<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_146.png" /> Malta<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_147.png" /> Marshall Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_148.png" /> Martinique<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_149.png" /> Mauritania<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_150.png" /> Mauritius<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_151.png" /> Mayotte<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_152.png" /> Mexico<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_153.png" /> Micronesia (Federated States of)<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_154.png" /> Midway Is.<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_155.png" /> Moldova, Republic of<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_156.png" /> Monaco<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_157.png" /> Mongolia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_158.png" /> Montenegro<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_159.png" /> Montserrat<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_160.png" /> Morocco<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_161.png" /> Mozambique<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_162.png" /> Myanmar<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_163.png" /> Namibia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_164.png" /> Nauru<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_165.png" /> Nepal<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_166.png" /> Netherlands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_167.png" /> Netherlands Antilles<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_168.png" /> New Caledonia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_169.png" /> New Zealand<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_170.png" /> Nicaragua<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_171.png" /> Niger<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_172.png" /> Nigeria<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_173.png" /> Niue<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_174.png" /> Norfolk Island<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_175.png" /> Northern Mariana Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_176.png" /> Norway<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_177.png" /> Oman<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_178.png" /> Pakistan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_179.png" /> Palau<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_180.png" /> Panama<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_181.png" /> Papua New Guinea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_182.png" /> Paracel Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_183.png" /> Paraguay<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_184.png" /> Peru<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_185.png" /> Philippines<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_186.png" /> Pitcairn Island<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_187.png" /> Poland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_188.png" /> Portugal<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_189.png" /> Puerto Rico<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_190.png" /> Qatar<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_191.png" /> Republic of Korea<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_192.png" /> Reunion<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_193.png" /> Romania<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_194.png" /> Russian Federation<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_195.png" /> Rwanda<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_196.png" /> Saint Kitts and Nevis<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_197.png" /> Saint Lucia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_198.png" /> Saint Vincent and the Grenadines<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_199.png" /> Samoa<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_200.png" /> San Marino<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_201.png" /> Sao Tome and Principe<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_202.png" /> Saudi Arabia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_203.png" /> Senegal<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_204.png" /> Serbia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_205.png" /> Seychelles<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_206.png" /> Sierra Leone<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_207.png" /> Singapore<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_208.png" /> Slovakia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_209.png" /> Slovenia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_210.png" /> Solomon Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_211.png" /> Somalia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_212.png" /> South Africa<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_213.png" /> South Georgia & the South Sandwich Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_214.png" /> South Sudan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_215.png" /> Spain<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_216.png" /> Spratly Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_217.png" /> Sri Lanka<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_218.png" /> Sudan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_219.png" /> Suriname<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_220.png" /> Svalbard and Jan Mayen Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_221.png" /> Swaziland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_222.png" /> Sweden<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_223.png" /> Switzerland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_224.png" /> Syrian Arab Republic<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_225.png" /> Taiwan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_226.png" /> Tajikistan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_227.png" /> Thailand<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_228.png" /> The former Yugoslav Republic of Macedonia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_229.png" /> Timor-Leste<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_230.png" /> Togo<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_231.png" /> Tokelau<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_232.png" /> Tonga<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_233.png" /> Trinidad and Tobago<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_234.png" /> Tunisia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_235.png" /> Turkey<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_236.png" /> Turkmenistan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_237.png" /> Turks and Caicos Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_238.png" /> Tuvalu<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_239.png" /> U.K. of Great Britain and Northern Ireland<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_240.png" /> Uganda<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_241.png" /> Ukraine<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_242.png" /> United Arab Emirates<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_243.png" /> United Republic of Tanzania<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_244.png" /> United States of America<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_245.png" /> United States Virgin Islands<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_246.png" /> Uruguay<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_247.png" /> Uzbekistan<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_248.png" /> Vanuatu<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_249.png" /> Venezuela<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_250.png" /> Vietnam<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_251.png" /> West Bank<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_252.png" /> Western Sahara<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_253.png" /> Yemen<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_254.png" /> Zambia<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_255.png" /> Zimbabwe<br />\
    <img src="styles/legend/worldadministrativeboundaries_0_256.png" /> <br />' });
var format_GAFAcountries_1 = new ol.format.GeoJSON();
var features_GAFAcountries_1 = format_GAFAcountries_1.readFeatures(json_GAFAcountries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAFAcountries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAFAcountries_1.addFeatures(features_GAFAcountries_1);
var lyr_GAFAcountries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAFAcountries_1, 
                style: style_GAFAcountries_1,
                popuplayertitle: 'GAFA countries',
                interactive: true,
    title: 'GAFA countries<br />\
    <img src="styles/legend/GAFAcountries_1_0.png" /> <br />\
    <img src="styles/legend/GAFAcountries_1_1.png" /> Djibouti<br />\
    <img src="styles/legend/GAFAcountries_1_2.png" /> Eritrea<br />\
    <img src="styles/legend/GAFAcountries_1_3.png" /> Ethiopia<br />\
    <img src="styles/legend/GAFAcountries_1_4.png" /> Kenya<br />\
    <img src="styles/legend/GAFAcountries_1_5.png" /> Somalia<br />\
    <img src="styles/legend/GAFAcountries_1_6.png" /> South Sudan<br />\
    <img src="styles/legend/GAFAcountries_1_7.png" /> Sudan<br />\
    <img src="styles/legend/GAFAcountries_1_8.png" /> Uganda<br />' });
var format_GAFA_simple_database_2 = new ol.format.GeoJSON();
var features_GAFA_simple_database_2 = format_GAFA_simple_database_2.readFeatures(json_GAFA_simple_database_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAFA_simple_database_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAFA_simple_database_2.addFeatures(features_GAFA_simple_database_2);
var lyr_GAFA_simple_database_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAFA_simple_database_2, 
                style: style_GAFA_simple_database_2,
                popuplayertitle: 'GAFA_simple_database',
                interactive: true,
                title: '<img src="styles/legend/GAFA_simple_database_2.png" /> GAFA_simple_database'
            });

lyr_worldadministrativeboundaries_0.setVisible(true);lyr_GAFAcountries_1.setVisible(true);lyr_GAFA_simple_database_2.setVisible(true);
var layersList = [lyr_worldadministrativeboundaries_0,lyr_GAFAcountries_1,lyr_GAFA_simple_database_2];
lyr_worldadministrativeboundaries_0.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_alpha_2_codes': 'iso_3166_1_alpha_2_codes', 'french_short': 'french_short', });
lyr_GAFAcountries_1.set('fieldAliases', {'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1': 'iso_3166_1', 'french_sho': 'french_sho', });
lyr_GAFA_simple_database_2.set('fieldAliases', {'id': 'id', 'Title': 'Title', 'Location (coordinates)': 'Location (coordinates)', 'Location: local administration unit': 'Location: local administration unit', 'Location: local administration name': 'Location: local administration name', 'Country': 'Country', 'Lead agency': 'Lead agency', 'Contact name': 'Contact name', 'Contact function': 'Contact function', 'Contact email': 'Contact email', 'Contact phone': 'Contact phone', 'Partners': 'Partners', 'Project description': 'Project description', 'Project type': 'Project type', 'Water utilization category': 'Water utilization category', 'Proposed financing structure': 'Proposed financing structure', 'Indicative investment ($ million)': 'Indicative investment ($ million)', 'Estimated income ($ million, year)': 'Estimated income ($ million, year)', 'Other benefits (that can either be monetized or not)': 'Other benefits (that can either be monetized or not)', 'Operating costs are identified': 'Operating costs are identified', 'Engaged and contacted financiers': 'Engaged and contacted financiers', 'Risk assessment available': 'Risk assessment available', 'Project business case available': 'Project business case available', 'Proposed water source': 'Proposed water source', 'Proposed water abstraction infrastructure, indicative': 'Proposed water abstraction infrastructure, indicative', 'Proposed surface water abstraction': 'Proposed surface water abstraction', 'Proposed groundwater abstraction': 'Proposed groundwater abstraction', 'Specific water quality requirements, if any': 'Specific water quality requirements, if any', 'Aquifer type': 'Aquifer type', 'Aquifer productivity': 'Aquifer productivity', '  Main likely environmental risks identified': '  Main likely environmental risks identified', 'Main likely social risks identified (e': 'Main likely social risks identified (e', 'Climate stressors and shocks': 'Climate stressors and shocks', 'Exposure': 'Exposure', 'Vulnerability and coping capacity': 'Vulnerability and coping capacity', 'Additional information': 'Additional information', 'Project code': 'Project code', 'File name': 'File name', 'URL': 'URL', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'icon_url': 'icon_url', });
lyr_worldadministrativeboundaries_0.set('fieldImages', {'geo_point_2d': 'KeyValue', 'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_alpha_2_codes': 'TextEdit', 'french_short': 'TextEdit', });
lyr_GAFAcountries_1.set('fieldImages', {'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1': 'TextEdit', 'french_sho': 'TextEdit', });
lyr_GAFA_simple_database_2.set('fieldImages', {'id': '', 'Title': '', 'Location (coordinates)': '', 'Location: local administration unit': '', 'Location: local administration name': '', 'Country': '', 'Lead agency': '', 'Contact name': '', 'Contact function': '', 'Contact email': '', 'Contact phone': '', 'Partners': '', 'Project description': '', 'Project type': '', 'Water utilization category': '', 'Proposed financing structure': '', 'Indicative investment ($ million)': '', 'Estimated income ($ million, year)': '', 'Other benefits (that can either be monetized or not)': '', 'Operating costs are identified': '', 'Engaged and contacted financiers': '', 'Risk assessment available': '', 'Project business case available': '', 'Proposed water source': '', 'Proposed water abstraction infrastructure, indicative': '', 'Proposed surface water abstraction': '', 'Proposed groundwater abstraction': '', 'Specific water quality requirements, if any': '', 'Aquifer type': '', 'Aquifer productivity': '', '  Main likely environmental risks identified': '', 'Main likely social risks identified (e': '', 'Climate stressors and shocks': '', 'Exposure': '', 'Vulnerability and coping capacity': '', 'Additional information': '', 'Project code': '', 'File name': '', 'URL': '', 'Latitude': '', 'Longitude': '', 'icon_url': '', });
lyr_worldadministrativeboundaries_0.set('fieldLabels', {'geo_point_2d': 'no label', 'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_alpha_2_codes': 'no label', 'french_short': 'no label', });
lyr_GAFAcountries_1.set('fieldLabels', {'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1': 'no label', 'french_sho': 'no label', });
lyr_GAFA_simple_database_2.set('fieldLabels', {'id': 'no label', 'Title': 'no label', 'Location (coordinates)': 'no label', 'Location: local administration unit': 'no label', 'Location: local administration name': 'no label', 'Country': 'no label', 'Lead agency': 'no label', 'Contact name': 'no label', 'Contact function': 'no label', 'Contact email': 'no label', 'Contact phone': 'no label', 'Partners': 'no label', 'Project description': 'no label', 'Project type': 'no label', 'Water utilization category': 'no label', 'Proposed financing structure': 'no label', 'Indicative investment ($ million)': 'no label', 'Estimated income ($ million, year)': 'no label', 'Other benefits (that can either be monetized or not)': 'no label', 'Operating costs are identified': 'no label', 'Engaged and contacted financiers': 'no label', 'Risk assessment available': 'no label', 'Project business case available': 'no label', 'Proposed water source': 'no label', 'Proposed water abstraction infrastructure, indicative': 'no label', 'Proposed surface water abstraction': 'no label', 'Proposed groundwater abstraction': 'no label', 'Specific water quality requirements, if any': 'no label', 'Aquifer type': 'no label', 'Aquifer productivity': 'no label', '  Main likely environmental risks identified': 'no label', 'Main likely social risks identified (e': 'no label', 'Climate stressors and shocks': 'no label', 'Exposure': 'no label', 'Vulnerability and coping capacity': 'no label', 'Additional information': 'no label', 'Project code': 'no label', 'File name': 'no label', 'URL': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'icon_url': 'no label', });
lyr_GAFA_simple_database_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});