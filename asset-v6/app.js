/* 0.5.1 2020-12-04 18:40:10 */
var app=new function(){this.name="Sky",this.version="6",this.date="2009",this.folder="asset-v6/",this.looptime=7999,this.bpm=120,this.totalframe=260,this.nbpolo=7,this.nbloopbonus=1,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=450,this.recminloop=10,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#121212",this.col0="#FFFFFF",this.col1="#81D2FE",this.col2="#008CFF",this.col3="#B2B89B6",this.col4="2F4264",this.animearray=[{name:"1_lead",color:"1DCEFF",uniqsnd:!0},{name:"2_deux",color:"1DCEFF",uniqsnd:!0},{name:"3_kosh",color:"1DCEFF",uniqsnd:!0},{name:"4_shpok",color:"1DCEFF",uniqsnd:!0},{name:"5_tom",color:"1DCEFF",uniqsnd:!0},{name:"6_nouana",color:"68A0C8",uniqsnd:!0},{name:"7_scratch",color:"68A0C8",uniqsnd:!0},{name:"8_trill",color:"68A0C8",uniqsnd:!1},{name:"9_bass",color:"68A0C8",uniqsnd:!0},{name:"10_uh",color:"68A0C8",uniqsnd:!0},{name:"11_nugu",color:"455871",uniqsnd:!0},{name:"12_guit",color:"455871",uniqsnd:!0},{name:"13_tromp",color:"455871",uniqsnd:!1},{name:"14_pouin",color:"455871",uniqsnd:!0},{name:"15_tung",color:"455871",uniqsnd:!0},{name:"16_Jiasha",color:"455871",uniqsnd:!1},{name:"17_cloud",color:"455871",uniqsnd:!0},{name:"18_Flash bomb",color:"455871",uniqsnd:!0}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
