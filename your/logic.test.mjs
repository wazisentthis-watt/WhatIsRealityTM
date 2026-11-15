import {readFileSync} from "node:fs";
import {test} from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";

const html=readFileSync(new URL("./index.html",import.meta.url),"utf8");
const program=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(program,"inline game engine must exist");

function example(){
 return {schema:"wir.your.slice.v0.1",player:{id:"your-demo-mella",name:"MELLA",crown:"Carbon",core:["Hydrogen","Oxygen"],root:["Earth","Water"],x:15,y:4},progress:{coins:25,energy:80,xp:0,day:1,hour:8,trust:0,seeds:2,growth:0,gardenStage:0,gridiron:0,metalHits:0,wins:0},companions:[],inventory:{relics:[]},sections:{},log:[]};
}
function boot(start){
 let time=10000,callback,events={},printed=[];
 const storage=new Map(start?[["wir.your.vertical.v1",JSON.stringify(start)]]:[]);
 const brush={fillRect(){},beginPath(){},ellipse(){},fill(){},arc(){},fillText(s){printed.push(String(s))},moveTo(){},lineTo(){},stroke(){},createLinearGradient(){return{addColorStop(){}}}};
 const el=()=>({dataset:{},value:"",textContent:"",classList:{toggle(){}},listeners:{},addEventListener(k,f){this.listeners[k]=f},replaceChildren(){},append(){},getContext(){return brush},setPointerCapture(){},click(){}});
 const elements={};const worlds={};for(const w of ["valence","wishborn","creature","gridiron","metal","ghouly","worldbuilder","arcade"]){worlds[w]=el();worlds[w].dataset.world=w}
 const controls=["left","right","up","down"].map(n=>{const b=el();b.dataset.move=n;return b});
 const dom={getElementById(k){return elements[k]||(elements[k]=el())},querySelectorAll(q){return q==="[data-world]"?Object.values(worlds):q==="[data-move]"?controls:[]},createElement(){return el()},activeElement:{tagName:"BODY"}};
 const scope={document:dom,window:{addEventListener(k,f){events[k]=f}},localStorage:{getItem(k){return storage.get(k)||null},setItem(k,v){storage.set(k,v)}},navigator:{getGamepads(){return []}},performance:{now(){return time}},requestAnimationFrame(f){callback=f},setTimeout(){},confirm(){return true}};
 vm.runInNewContext(program,scope,{filename:"your/index.html",timeout:1000});
 return {
   data(){return JSON.parse(storage.get("wir.your.vertical.v1")||"null")},
   ui:elements,
   printed,
   world(w){worlds[w].listeners.click();},
   action(){time+=600;elements.action.onclick();},
   now(ms){time=ms;},
   move(dir,frames){const key={right:"ArrowRight",left:"ArrowLeft",up:"ArrowUp",down:"ArrowDown"}[dir];events.keydown({key,preventDefault(){}});for(let i=0;i<frames;i++){time+=16;callback(time)}events.keyup({key});},
   frame(frames){for(let i=0;i<frames;i++){time+=16;callback(time);}},
 };
}
test("Valence job updates one shared wallet and survives reload",()=>{
 const h=boot(example());h.action();const state=h.data();
 assert.equal(state.progress.coins,43);assert.equal(state.progress.energy,62);
 assert.equal(state.log.length,1);assert.equal(state.log[0].type,"coins_earned");
 const later=boot(state);assert.equal(later.ui.coins.textContent,43);
});
test("DreamSeed plant / water / harvest is recorded in one save",()=>{
 const h=boot(example());h.world("wishborn");h.move("right",86);
 for(let i=0;i<4;i++)h.action();
 const p=h.data().progress;assert.equal(p.gardenStage,0);assert.equal(p.seeds,3);assert.equal(p.growth,10);
 assert.equal(h.data().log.filter(x=>x.game==="wishborn").length,4);
});
test("KoPani Na is uniquely registered and trust persists",()=>{
 const h=boot(example());h.world("creature");h.move("right",86);h.action();h.action();
 const s=h.data();assert.equal(s.companions.length,1);assert.equal(s.companions[0].id,"Na");assert.equal(s.progress.trust,4);
 assert.equal(s.log.filter(x=>x.type==="companion_met").length,1);
});
test("Gridiron skill window gives reward on three accurate catches",()=>{
 const h=boot(example());h.world("gridiron");
 for(let i=0;i<3;i++){h.now(600*Math.PI*(2*i+1)-600);h.action()}
 const p=h.data().progress;assert.equal(p.gridiron,3);assert.equal(p.wins,1);assert.equal(p.coins,45);
});
test("Metal drone receives three precision strikes and lands",()=>{
 const h=boot(example());h.world("metal");h.move("right",135);
 for(let i=3;i<6;i++){h.now(500*(Math.PI/2+2*Math.PI*i)-600);h.action()}
 const p=h.data().progress;assert.equal(p.metalHits,3);assert.equal(p.wins,1);
 h.printed.length=0;h.frame(300);
 assert.ok(h.printed.includes("DRONE"),"drone must return to ground rather than fall indefinitely");
});
test("unimported worlds never award false accomplishments",()=>{
 const h=boot(example());h.world("worldbuilder");h.action();
 const s=h.data();assert.equal(s.progress.xp,0);assert.equal(s.log.length,0);
});
