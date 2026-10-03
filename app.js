const {Presenter}=WSXZ;
const saves=new WSXZ.SaveSystem(localStorage);
let p=new Presenter(saves),running=false,accumulator=0,last=performance.now();
p.development=false;
const $=id=>document.getElementById(id),tabs=['家族','族人','族谱','世界','大事'],gate=new WSXZ.UIRefreshGate();
const treeOffsets=new Map();let lastMusicStatus='';
function icon(kind){const span=document.createElement('span');span.className='ui-icon';span.setAttribute('aria-hidden','true');span.innerHTML=WSXZ.iconSVG(kind);return span;}
function button(title,id){const b=document.createElement('button');b.textContent=title;b.dataset.action=id;b.type='button';if(WSXZ.selectedAction(id,p.ui,p.audio,p.engine?.state.settings.timeSpeed))b.classList.add('selected');if(id==='prev'&&p.ui.page===0||id==='depart'&&(p.ui.team.length<3||p.ui.team.length>5))b.disabled=true;b.onclick=()=>act(id);return b;}
function exportJSON(){const json=p.exportJSON();if(!json)return;const url=URL.createObjectURL(new Blob([json],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='万世仙族_存档.json';a.click();URL.revokeObjectURL(url);}
function act(id){
    if(running)return;running=true;
    try{const modal=p.ui.modal;if(id==='export_json')exportJSON();else p.action(id,$('surname').value);
        render(/^(tab:|panel:|faction:|select:|tree:|explore:|prepare_expedition|continue|create|new_|start|title|save_title|menu|messages|notice_detail|history:|filter:|next$|prev$)/.test(id)||modal!==p.ui.modal);
    }catch(e){$('message').textContent=String(e);$('message').style.display='block';}finally{running=false;}
}
function portrait(parent,id){
    const c=WSXZ.findCharacter(p.engine.state,id),port=document.createElement('div');port.className='portrait'+(c?.lifeStatus==='dead'?' deceased':'');
    const style=WSXZ.portraitStyle(c,p.engine.state,id===p.ui.selectedId);port.style.setProperty('--portrait-frame',style.color);if(style.external)port.classList.add('external');if(id===p.ui.selectedId)port.classList.add('focused');
    const fallback=document.createElement('span');fallback.className='portrait-placeholder';fallback.textContent='仙';port.append(fallback);
    const key=WSXZ.portraitKeys(id,c?.gender,c?.deathAge??c?.age)[0],img=document.createElement('img');img.src=key+'.png';img.alt=(c?.name||'人物')+'头像';
    img.onload=()=>{fallback.hidden=true;};img.onerror=()=>{img.remove();fallback.hidden=false;};port.append(img);if(style.badge){const badge=document.createElement('span');badge.className='portrait-badge';badge.textContent=style.badge;port.append(badge);}parent.append(port);
}
function tree(parent,view){
    const factor=.85,m=WSXZ.UI_METRICS,viewport=document.createElement('div');viewport.className='tree-viewport';viewport.dataset.focus=p.ui.selectedId;
    const canvas=document.createElement('div');canvas.className='tree-canvas';canvas.style.width=view.width*factor+'px';canvas.style.height=view.height*factor+'px';viewport.append(canvas);parent.append(viewport);
    function line(x1,y1,x2,y2,dash,spouse){const l=document.createElement('div');l.className='tree-line';l.style.left=x1*factor+'px';l.style.top=y1*factor+'px';l.style.width=Math.hypot(x2-x1,y2-y1)*factor+'px';l.style.transform='rotate('+Math.atan2(y2-y1,x2-x1)+'rad)';l.style.borderTop='2px '+(dash?'dashed':'solid')+' '+(spouse?'#b79a59':'#6f8d7c');canvas.append(l);}
    for(const edge of view.edges){const a=view.nodes.find(n=>n.id===edge.from),b=view.nodes.find(n=>n.id===edge.to);if(!a||!b)continue;
        if(edge.spouse)line(a.x,a.y,b.x,b.y,edge.external,true);
        else{const y1=a.y+m.nodeHeight/2,y2=b.y-m.nodeHeight/2,mid=(y1+y2)/2;line(a.x,y1,a.x,mid,edge.external);line(a.x,mid,b.x,mid,edge.external);line(b.x,mid,b.x,y2,edge.external);}}
    for(const n of view.nodes){const b=button('','tree:'+n.id);b.className='tree-person '+(n.dead?'deceased':'')+(n.external?' external':'')+' realm-'+n.realm+(n.id===p.ui.selectedId?' focused':'');
        b.style.left=(n.x-m.nodeWidth/2)*factor+'px';b.style.top=(n.y-m.nodeHeight/2)*factor+'px';b.style.width=m.nodeWidth*factor+'px';b.style.height=m.nodeHeight*factor+'px';
        portrait(b,n.id);const name=document.createElement('strong');name.textContent=(n.dead?'† ':'')+n.name+(n.leader?' · 印':'');const detail=document.createElement('span');detail.textContent=n.relation+(n.external?' · 外迁':'')+'\n'+n.detail;b.append(name,detail);canvas.append(b);}
    const focus=view.nodes.find(n=>n.id===p.ui.selectedId),saved=treeOffsets.get(p.ui.selectedId);
    viewport.scrollLeft=saved?.x??Math.max(0,(focus?.x||view.width/2)*factor-viewport.clientWidth/2);
    viewport.scrollTop=saved?.y??Math.max(0,(focus?.y||128)*factor-230);
    viewport.onscroll=()=>treeOffsets.set(p.ui.selectedId,{x:viewport.scrollLeft,y:viewport.scrollTop});
    requestAnimationFrame(()=>{if(!saved)viewport.scrollLeft=Math.max(0,(focus?.x||view.width/2)*factor-viewport.clientWidth/2);});
}
function card(row){
    const div=document.createElement('article');div.className='card '+(row.tone||'')+(row.fullscreen?' presentation-fullscreen':'');
    const h=document.createElement('h2');h.textContent=p.translate(row.title);const mark=WSXZ.rowIcon(row);if(mark){h.prepend(icon(mark));div.classList.add('accent-'+mark);}
    if(row.fullscreen){const bar=document.createElement('div');bar.className='presentation-toolbar';bar.append(h);if(row.actions?.[0])bar.append(button(row.actions[0].title,row.actions[0].id));div.append(bar);}else div.append(h);
    if(row.image){const art=document.createElement('div');art.className='art-container'+(row.map?' world-map':'');
        const fallback=document.createElement('span');fallback.className='art-placeholder';fallback.textContent=row.map?'云州山河':'家族山门';
        const img=document.createElement('img');img.src=WSXZ.resourcePath(row.image)+'.png';img.className='landscape';img.alt=row.map?'云州地图':'山门';img.onload=()=>{fallback.hidden=true;};img.onerror=()=>{img.remove();fallback.hidden=false;};art.append(fallback,img);div.append(art);}
    const body=document.createElement('div');body.className=row.portraitId?'person-content':'card-content';
    if(row.portraitId)portrait(body,row.portraitId);
    if(row.body){const text=document.createElement('p');text.textContent=p.ui.modal==='debug'?row.body:p.translate(row.body);body.append(text);}if(body.childNodes.length)div.append(body);
    const badges=WSXZ.resourceBadges(row.body);if(badges.length>=2){const rail=document.createElement('div');rail.className='resource-badges';for(const kind of badges){const item=document.createElement('span');item.append(icon(kind),document.createTextNode(WSXZ.ICON_ART[kind].label));rail.append(item);}div.append(rail);}
    if(row.search){const form=document.createElement('div');form.className='search-row';const input=document.createElement('input');input.placeholder='搜索族人姓名';input.setAttribute('aria-label','搜索族人姓名');input.value=p.ui.search;
        input.oninput=()=>{p.ui.search=input.value;};const submit=()=>{p.action('search',input.value);render(true);};input.onkeydown=e=>{if(e.key==='Enter')submit();};const search=button('搜索','search');search.onclick=submit;form.append(input,search);div.append(form);}
    if(row.effect){const fx=document.createElement('div');fx.className='effect '+row.effect;fx.textContent=row.effect==='root'?'金 · 木 · 水 · 火 · 土':row.effect==='death'?'谨记此生 · 血脉长存':row.effect==='nascent'?'元婴现世':row.effect==='core'?'金丹凝结':'灵气汇聚';div.append(fx);}
    if(row.treeView)tree(div,row.treeView);
    if(row.actions?.length){const actions=document.createElement('div');actions.className=row.map?'actions map-actions':'actions';for(const a of row.actions)actions.append(button(a.title,a.id));div.append(actions);}return div;
}
function render(reset=false){
    const scroll=window.scrollY;
    for(const viewport of document.querySelectorAll('.tree-viewport'))treeOffsets.set(viewport.dataset.focus,{x:viewport.scrollLeft,y:viewport.scrollTop});
    const s=p.engine?.state;$('date').textContent=s?`${s.meta.gameYear}年 · ${s.meta.gameMonth}月 | ${s.playerFamily.name}`:'开卷 · 立族';
    const warning=p.saves.lastWarning||p.ui.message;$('message').textContent=p.translate(warning);$('message').style.display=warning?'block':'none';$('input').style.display=p.engine||p.ui.modal?'none':'flex';
    $('content').replaceChildren();for(const row of p.rows())$('content').append(card(row));
    if(p.presentation.active&&!p.presentation.paused){const active=p.presentation.active,row={title:active.title+' · 待阅 '+p.presentation.items.length,body:active.body.split('\n').slice(0,2).join('\n'),actions:[{title:'查看详情',id:'notice_detail'},{title:'已阅',id:'notice_close'}]};const div=card(row);div.classList.add('toast');div.setAttribute('role','status');$('content').append(div);}
    $('tabs').replaceChildren();$('tabs').style.display=s?.meta.started?'flex':'none';if(s?.meta.started)for(const tab of tabs){const b=button(tab,'tab:'+tab);if(tab===p.ui.tab)b.classList.add('active');$('tabs').append(b);}
    $('speeds').replaceChildren();if(s?.meta.started)for(const [title,speed] of [['暂停','paused'],['常速','normal'],['加速','fast'],['高速','high']]){const b=button(title,'speed:'+speed);if(s.settings.timeSpeed===speed)b.classList.add('active');$('speeds').append(b);}
    $('export').disabled=!p.exportJSON();$('audio').replaceChildren(button('设置','menu'));
    window.scrollTo(0,reset?0:scroll);
}
$('export').onclick=exportJSON;
function frame(now){
    const delta=Math.min(1,Math.max(0,(now-last)/1000));last=now;p.syncAudio();p.audio.update(delta);if(p.ui.modal==='menu'&&p.audio.status!==lastMusicStatus)gate.markDirty();lastMusicStatus=p.audio.status;if(p.updatePresentation(delta))gate.markDirty();
    const s=p.engine?.state,yearSeconds=s?WSXZ.CONFIG.speeds[s.settings.timeSpeed]:0;let urgent=false;
    if(s?.meta.started&&yearSeconds>0&&!p.ui.modal&&!p.pausedByPresentation&&!s.alpha.worldModal&&!document.hidden){accumulator+=delta;while(accumulator>=yearSeconds/12){p.tick();gate.markTick();accumulator-=yearSeconds/12;if(p.pausedByPresentation||s.alpha.worldModal||p.ui.modal){accumulator=0;urgent=true;break;}}}else accumulator=0;
    if(!document.activeElement?.matches('input')&&gate.refresh(delta,urgent))render();requestAnimationFrame(frame);
}
window.addEventListener('pagehide',()=>p.onHide());document.addEventListener('visibilitychange',()=>{if(document.hidden)p.onHide();else{p.onShow();render();}});
render();requestAnimationFrame(frame);
