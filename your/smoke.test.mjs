// YOUR vertical slice static smoke checks (no third-party packages).
import {readFileSync} from "node:fs";
import {test} from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
const source=readFileSync(new URL("./index.html",import.meta.url),"utf8");
const scripts=[...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
test("YOUR app has valid JavaScript",()=>{assert.ok(scripts.length);for(const s of scripts)new vm.Script(s);});
test("all eight canonical Brantacles have navigable doors",()=>{for(const id of ["valence","wishborn","creature","gridiron","metal","ghouly","worldbuilder","arcade"]){assert.ok(source.includes('data-world="'+id+'"'),id);}});
test("one versioned save with event ledger and export/import",()=>{for(const token of ["wir.your.vertical.v1","wir.your.slice.v0.1","function event(","function clean(","localStorage.setItem","JSON.stringify(state)","YOUR_MELLA_SAVE.json","importSave"]){assert.ok(source.includes(token),token);}});
test("cross-world gameplay verbs are present",()=>{for(const token of ["DreamSeed planted","persistent companion","Timed catch","Precision hit","Worked a four-hour shift","Recovered at home"]){assert.ok(source.includes(token),token);}});
test("unported worlds are not misrepresented",()=>{assert.ok(source.includes("ORIGINAL SOURCE NOT YET IMPORTED"));assert.ok(source.includes("No invented progress"));});
test("no third-party script dependencies or embedded secrets",()=>{assert.equal((source.match(/<script\s+src=/gi)||[]).length,0);assert.equal((source.match(/sk-proj-|ghp_[A-Za-z0-9]{30}|AIza[0-9A-Za-z_-]{30}/g)||[]).length,0);});
