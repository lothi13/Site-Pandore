

var descriptionLieux = {
    "maisonGatien" : "La demeure de sir Gatien ne montre pas seulement que son propriétaire est riche, elle montre que sa richesse dépasse non seulement vos rêves les plus fous mais également les rêves d'abondance de tout architecte saint d'esprit. Si les pierres ne sont pas aussi pures que celles du château elles brillent d'un éclat bien plus travaillé et cristallin. Là où les maisons voisines brillent sous la Lune, celle-ci s'illumine. Derrière les fenêtres on aperçoit des rideaux de velours et autres tissus précieux, des filagrammes d'or parcourt la surface et détournent l'attention des gargouilles louchant vers la rue. Car si l'on regarde de plus près, on constate qu'il s'agit de gobelins comme figés dans le temps. Le jardin allie des espèces venant de nombreuses contrés exotiques dans un ensemble sombre.</br>\
    Attention à ne pas contrarier sir Gatien, il pourrait décider de varier l'espèce de ses gargouilles'",
    "ruines" : "Les ruines n'ont pas encore de description mais elle rappellent aux rêveurs qu'une civilisation s'est éteinte ici"
};





  function getAllZones(){
    //Les valeurs des zones actuelles sont arbitraires, il faudra les remplacer par des quartiers de Pandore
    
    var zones = Array();
    var coordsChateau = [
        [380, 278],
        [371, 251],
        [357, 214],
        [296, 218],
        [330, 284]
    ]    

    var coordsHorla = [
        [501, 288],
        [464, 335],
        [499, 349],
        [539, 349]
    ]

    var coordsPolice = [
        [542, 354],
        [573, 339],
        [605, 302],
        [625, 235],
        [586, 234],
        [560, 222],
        [529, 214],
        [511, 196],
        [512, 190],
        [474, 171],
        [465, 152],
        [421, 153],
        [420, 179],
        [438, 192],
        [489, 205],
        [504, 248],
        [501, 287]
    ]

    var coordsDocs = [
        [473, 82],
        [525, 92],
        [526, 116],
        [522, 139],
        [523, 159],
        [514, 170],
        [486, 158],
        [478, 136],
        [473, 85]
    ]

    var coordsTemples = [
        [374, 248],
        [356, 215],
        [420, 179],
        [490, 207],
        [497, 228]
    ]

    var coordsNecropole = [
        [464, 341],
        [537, 353],
        [564, 404],
        [447, 388]
    ]

    var coordsApadidé = [
        [374, 248],
        [379, 276],
        [458, 332],
        [499, 287],
        [504, 255],
        [496, 227]
    ]
    
    zones[0] = new Zone(coordsChateau, "Le chateau : Composé de trois hautes tour, le château domine la ville de toute sa splendeur. Les deux tours principales semblent partiellement fusionnés laissant d'innombrables passages ouverts ou secrets entre elles. La troisième tour est la plus fine et la plus ciselé. Elle n'a qu'une seule entré laquelle donne sur une passerelle vertigineuse rejoignant ses sœurs. Elle n'est pas accessible au grand publique et nombres histoires circules sur ce qui se trouve à l'intérieur. Les façades sont d'un blanc plus pur que sur les maisons de la ville et parfois des rayon de mana argentés irisent leur surface. Les jardins sont entretenus avec grand soin et comportent une horloge florale d'une merveilleuse précision; Pour qui sait la lire.", "rgba(255, 231, 37, 0.5)");
    zones[1] = new Zone(coordsHorla, "La Horla : La Horla est un quartier de la cité alliant les pires brigands et crapules aux ruelles les plus sombres et tortueuses. Le culte principal de ces rues est celui de Korn ce qui n'arrange rien à leur absence de sécurité. Lorsque l'on regarde vers le sud, on aperçoit derrière la muraille les bataillons de tombes et de mausolées de la nécropole. Ce qui a toujours empêché la garde de vider ce quartier par la force est la complexité des lieux, le nombre de cachettes est trop grand, les embuscades trop propices. C'est donc un lieu qui vous accueillera chaleureusement (dans un brasier de Korn) avant de vous allégé de tout objets de valeur et qui n'oubliera pas de vous souhaiter un bon voyage à travers les canalisations avec une brique pour vous aider à flotter.", "rgba(255, 0, 0, 0.5)");
    zones[2] = new Zone(coordsPolice, "Police", "rgba(164, 97, 40, 0.5)");
    zones[3] = new Zone(coordsDocs, "Les docs : C'est un quartier relativement calme, la quasi-totalité des trafics de la ville transites par ici. La population à repris une partie de la culture de Police, notamment que si on est tranquillement chez soit mais que quelqu'un cri dehors, on attend que la raison de son cri l'achève sans réagir. Le quartier est plutôt propre car les cadavres finissent vite dans la rivière.", "rgba(0, 0, 255, 0.5)");
    zones[4] = new Zone(coordsTemples, "Quartier des Temples", "rgba(255, 255, 255, 0.5)");
    zones[5] = new Zone(coordsNecropole, "Necropole", "rgba(0, 0, 0, 0.5)");
    zones[6] = new Zone(coordsApadidé, "Apididé", "rgba(255, 132, 179, 0.5)");
    return zones;
}

function getAllLieux(){
    
    var lieux = Array();
    
    var coordsMaisonGatien = [
        [399, 223],
        [392, 233],
        [385, 223],
        [392, 213]
    ]

    var coordsRuines = [
        [387, 108],
        [380, 118],
        [373, 108],
        [380, 98]
    ]

    lieux[0] = new Lieu(coordsMaisonGatien, "Demeure de sir Gatien : \n"+descriptionLieux["maisonGatien"], "red");
    lieux[1] = new Lieu(coordsRuines, "Les Ruines : \n"+descriptionLieux["ruines"], "red");

    return lieux;
}

