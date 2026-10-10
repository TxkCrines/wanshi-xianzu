const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'dist');
fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','style.css','experience.css','game-ui.css','core.js','app.js','expansion.js','experience.js','frontier.js','mature-ui.js','_headers','package.json','README_玄天纪.md','Start-Game.ps1'])fs.copyFileSync(path.join(root,name),path.join(out,name));
for(const name of ['art','portraits','audio','icons','tests','scripts'])fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true,filter:source=>!source.endsWith('v2'+path.sep+'sanctuary.png')&&!source.endsWith('v2'+path.sep+'portraits.png')&&!(source.includes(path.sep+'v3'+path.sep)&&source.endsWith('.png'))&&!['encode-art.cjs','upgrade-core-v3.py','qa-fixtures.cjs'].some(file=>source.endsWith(file))});
const legacyReadme=path.join(out,'README_山河新卷.md');if(fs.existsSync(legacyReadme))fs.unlinkSync(legacyReadme);
console.log('Static release ready: '+out);
