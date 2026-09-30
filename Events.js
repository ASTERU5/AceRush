/* =====================================================================
 * ACE RUSH - EVENT MODULE  (HAUNTED HARVEST - Halloween 2026)
 * Put this file next to ace-rush.html. The game loads it automatically;
 * delete it (or let the end date pass) and the event disappears.
 * A file can call AceRush.event() several times to run several events.
 *
 *   id      unique string (progress + skins are saved under it)
 *   start / end   ISO dates - event is only playable in between
 *   icon    pixel icon name for the menu tile (pumpkin, skull, flame...)
 *   ui      { a, b, c } tile gradient top / bottom / border colour
 *   boss    { name, quote, color, hp, time, text, mods }
 *           mods = engine debuffs: nf (faces dead), ns (dead suit 0-3),
 *           dm (mult change), tr (time drain x), nb (no bonus time),
 *           hl (boss heals fraction of HP each hand), nh (no heat)
 *   tiers   [{ label, decks, coins, skin }]  beat the boss in <= decks
 *   skins   limited card styles, unlocked by a tier (tier.skin = skin id)
 *           { id, n, f, i, r, b1, b2, h, bk, bs }
 *           f/i/r = face / ink / red-suit colours, b1/b2 = back colours,
 *           h:1 = animated shine, bk = CSS image for the card BACK
 *           pattern, bs = size of one pattern tile
 * ===================================================================== */
(function(){
  // little pixel pumpkins, two per 16x16 tile, used as the card-back pattern
  const P=['...s...','.oodoo.','ooodooo','oxodoxo','ooodooo','oxxxxxo','.oodoo.'],
        C={s:'#3aa04a',o:'#ff7a1a',d:'#c24a00',x:'#1a0a10'};
  let r='';
  [[1,1],[9,9]].forEach(([ox,oy])=>P.forEach((row,y)=>[...row].forEach((v,x)=>{
    if(C[v])r+='<rect x="'+(x+ox)+'" y="'+(y+oy)+'" width="1" height="1" fill="'+C[v]+'"/>';
  })));
  const pumpkins="url('data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">'+r+'</svg>')+"')";

  AceRush.event({
    id:'haunted-harvest-1',
    name:'HAUNTED HARVEST',
    icon:'pumpkin',
    ui:{a:'#c25a00',b:'#2a0f3a',c:'#ff9a3c'},
    start:'2026-09-29',
    end:'2026-10-31T23:59:59',
    desc:'THE PUMPKIN KING RISES ON HALLOWS EVE. UNLIMITED HANDS, BUT ONE DECK AT A TIME - EVERY FRESH DECK ADDS TIME AND DISCARDS. BEAT HIM IN FEWER DECKS FOR SPOOKIER REWARDS. ENDS OCT 31!',
    boss:{name:'THE PUMPKIN KING',quote:'Trick... or DEFEAT!',color:'#ff7a1a',hp:30000,time:60,
          text:'Faces dead. -1 mult. He regrows.',mods:{nf:1,dm:-1,hl:.002}},
    tiers:[
      {label:'TRICK',decks:30,coins:150},
      {label:'TREAT',decks:22,coins:300},
      {label:'HAUNTED',decks:15,coins:600,skin:'pumpkin'}
    ],
    skins:[
      {id:'pumpkin',n:'PUMPKIN PATCH',f:'#20102c',i:'#ff9a3c',r:'#ff5a1f',b1:'#ff7a1a',b2:'#2a1238',h:1,bk:pumpkins,bs:'16px 16px'}
    ]
  });
})();
