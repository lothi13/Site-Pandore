


/*
    On veux : 
    I) créer un canvas et afficher la carte en fond
    II) tracer des polygones de couleurs et des croix sur les quartiers et les lieux importants
    III) Activer une fonction quand on clique sur un quartier ou un lieux
    IV) faire une zone de texte à coté pour afficher les infos

    Pour cela :
    I) créer une classe Zone et une classe Lieu qui s'occupent des zones et des lieux
    II) Impolémenter dans ces classes des fonctions verifCoords, draw, isClick
    III) compléter la fonction isClick du canvas pour vérifier tout les élements sur la carte

*/


var canvas, zones, lieux; //zones contient toutes les zones



//------------------INITIALISATION66666666666666666666666666
//Executé au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Initiate a Canvas instance
    canvas = new fabric.Canvas("carte");

    //Creation de l'image pour le fond
    drawBackground("./aux_carte/images/map_pandore_inter.png");

    //Creation des zones 
    initZones();
    initLieux();
    
       
    }); //Fin de la fonction d'initialisation

function drawBackground(path){
    //Crée le fond sur le canvas, le path est un string qui contient l'addresse de l'image
    var img = new fabric.Image();
    img.onload = function() {
        context.drawImage(this, 0, 0, canvas.width, canvas.height);
    };
    img.src = path;
    canvas.setBackgroundImage(path, canvas.renderAll.bind(canvas));


}

function initZones() {
    //Initialise les valeurs en lien avec la variable zones. 
    zones = Array();
    setAllZones();
    //drawAllZones();
}

function initLieux(){
    lieux = Array();
    setAllLieux();
    drawAllLieux();
}
    
    //--------------------------------------------------------
    
    
//---------------------ECOUTEURS---------------------------------------
    //Ecoute de la souris pour le hover
    document.addEventListener("mousemove", function(e) { 

      
      var scroll = getScrollPosition();
      
      for(var i=0; i<zones.length; i++){
          if(pointInPolygon2([e.x+scroll[0], e.y+scroll[1]], zones[i].coords)){ //verifie si la souris est dans le polygone
              zones[i].isHover();
              document.getElementById('descriptionZone').innerHTML = zones[i].text;
          }
          else{
              zones[i].isNotHover();
          }
      }
    });

    //Detection des click dfe souris
    document.addEventListener("click", function(e) { 
        //console.log(e.x+" "+e.y);
        var scroll = getScrollPosition();


        for(var i=0; i<lieux.length; i++){
            if(pointInPolygon2([e.x+scroll[0], e.y+scroll[1]], lieux[i].coords)){ //verifie si la souris est sur un lieu
                document.getElementById('descriptionLieu').innerHTML = lieux[i].text;
            }
        }
    
    });

    //-------------------------------------------------------------------


    //------------------CLASSES-----------------------------------------



class canvasElement{ //Contient les infos et fonction sur une zone, un quartier de la ville
    constructor(coords, text, color) {
        /*
        points sous la forme { x: 200, y: 10 }, { x: 250, y: 50 }]
        */
        this.text = text;
        this.color = color;
        this.coords = coords;
        this.visible = false;
        var points = new Array();

        //Fabrication du tableau de point
        for(var i=0; i<coords.length; i++){
            points[i] = new fabric.Point(coords[i][0]-8, coords[i][1]-8); //Il faut enklever la margin du body
        }
        this.polygone = new fabric.Polygon(points, {
                fill: color,
                selectable: false,
                transparentCorners: true,
                hoverCursor: 'default'
            });
    }



    getPoly(){
        return this.polygone;
    }


    isHover(){
        if(!this.visible){
            canvas.add(this.polygone);
            this.visible = true;
        }
    }

    isNotHover(){
        if(this.visible){
            canvas.remove(this.polygone);
            this.visible = false;
        }
    }
   
    draw() {
        canvas.add(this.polygone);
        this.visible = true;
    }

  }



  class Zone extends canvasElement{ //Contient les elements commun à tout ce qu'on placera sur la carte
    constructor(coords, text, color){
        super(coords, text, color)
    }
}
  
class Lieu extends canvasElement{ //Contient les infos et fonction pour un point clé, un lieu important
    constructor(coords, text, color) {
        super(coords, text, color);
        this.coords = coords;
     }
  }

  //----------------------------------------------------------


    //----------------------STOCKAGE DES COORDONNEES DES POINTS DES ZONES--


    function setAllZones(){
        zones = getAllZones();
    }

    
    function setAllLieux(){
        lieux = getAllLieux();
    }


  function drawAllZones(){
    for(var i=0; i<zones.length; i++){
        zones[i].draw();
    }
}
  

function drawAllLieux(){
    for(var i=0; i<lieux.length; i++){
        lieux[i].draw();
    }
}
//-----------------------------------------------------------


//--------------GESTION DES POLYGONES----------------------------------
//Cette partie sert à vérifier si un point est dans un polygone


function cross(x, y, z) {
    //x, y et z trois points, retourne un float
    return (y.x - x.x) * (z.y - x.y) - (z.x - x.x) * (y.y - x.y);
  }
  
  function pointInPolygon(p, points) {
    //p est un point, points un array de point, retourne un boolean
    let wn = 0; // winding number
  
    points.forEach((a, i) => {
      const b = points[(i+1) % points.length];
      if (a.y <= p.y) {
        if (b.y > p.y && cross(a, b, p) > 0) {
          wn += 1;
        }
      } else if (b.y <= p.y && cross(a, b, p) < 0) {
        wn -= 1;
      }
    });
  
    return wn !== 0;
  }

  //Version avec liste de coordonnées
  function pointInPolygon2(point, vs) {
      //vs une liste de coordonnée
    const x = point[0], y = point[1];
    let wn = 0;
  
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i][0], yi = vs[i][1];
      let xj = vs[j][0], yj = vs[j][1];
  
      if (yj <= y) {
        if (yi > y) {
          if (isLeft([xj, yj], [xi, yi], [x,y]) > 0) {
            wn++;
          }
        }
      } else {
        if (yi <= y) {
          if (isLeft([xj, yj], [xi, yi], [x, y]) < 0) {
            wn--;
          }
        }
      }
    }
    return wn != 0;
  };
  
  function isLeft(P0, P1, P2) {
    let res = ( (P1[0] - P0[0]) * (P2[1] - P0[1])
              - (P2[0] -  P0[0]) * (P1[1] - P0[1]) );
    return res;
  }

  function getScrollPosition()
{
	return Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
}