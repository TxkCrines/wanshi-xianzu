const {Presenter}=WSXZ;
let storage,persistentStorage=true;
try{storage=localStorage;storage.setItem('wx_storage_probe','1');storage.removeItem('wx_storage_probe');}catch{storage=new WSXZ.MemoryStorage();persistentStorage=false;}
const saves=new WSXZ.SaveSystem(storage);
const originalAttach=Presenter.prototype.attach;
Presenter.prototype.attach=function(){originalAttach.call(this);if(this.engine){ClanExpansion.attach(this.engine);Frontier.attach(this.engine);this.engine.pauseGuard=()=>!!this.presentation.active||!!this.ui.modal;const detach=this.detach,extra=this.engine.bus.subscribe(event=>{if(['clan_management','frontier_result'].includes(event.type)&&!/领命|开始研习/.test(event.text))this.presentation.push({key:'management:'+event.year+':'+event.month+':'+event.text,year:event.year,month:event.month,title:event.type==='frontier_result'?'族务纪事':'山门纪事',body:event.text,kind:'card'});});this.detach=()=>{detach?.();extra();};}};
const originalDecode=saves.decode.bind(saves);
saves.decode=text=>{const s=originalDecode(text);ClanExpansion.validate(s);Frontier.validate(s);return s;};
let p=new Presenter(saves),running=false,accumulator=0,last=performance.now();
p.development=false;
const $=id=>document.getElementById(id),tabs=['家族','族人','族谱','世界','经营','传承','坊市','行囊','大事'],gate=new WSXZ.UIRefreshGate();
for(const key of ['bgm_home','bgm_world','bgm_explore'])WSXZ.RESOURCES[key]='audio/v3/'+key;
WSXZ.RESOURCES.bgm_main='audio/v3/bgm_home';WSXZ.RESOURCES.bgm_event='audio/v3/bgm_home';
function syncBlocker(){if(!p.engine?.state.meta.started)return;if(!p.ui.modal&&!p.presentation.active&&!p.engine.state.alpha.worldModal&&p.engine.state.pendingDecisions.length)p.ui.modal='decision:'+p.engine.state.pendingDecisions[0].id;}
function timeBlocked(){return !!p.ui.modal||!!p.presentation.active||!!p.engine?.state.alpha.worldModal||!!p.engine?.state.pendingDecisions.length||!!document.querySelector('dialog[open]');}
const treeOffsets=new Map();let lastMusicStatus='',lastPopupSound='';
function icon(kind){const span=document.createElement('span');span.className='ui-icon';span.setAttribute('aria-hidden','true');span.innerHTML=WSXZ.iconSVG(kind);return span;}
function button(title,id){const b=document.createElement('button');b.textContent=title;b.dataset.action=id;b.type='button';if(WSXZ.selectedAction(id,p.ui,p.audio,p.engine?.state.settings.timeSpeed))b.classList.add('selected');if(id==='prev'&&p.ui.page===0||id==='depart'&&(p.ui.team.length<3||p.ui.team.length>5))b.disabled=true;if(id.startsWith('team:')&&p.engine&&ClanExpansion.ensure(p.engine.state).jobs.some(j=>j.agent===id.slice(5))){b.disabled=true;b.title='该族人已有委托在身';}b.onclick=()=>act(id);return b;}
function exportJSON(){const json=p.exportJSON();if(!json)return;const url=URL.createObjectURL(new Blob([json],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='万世仙族_存档.json';a.click();URL.revokeObjectURL(url);}
function act(id){
    if(running)return;running=true;
    try{const modal=p.ui.modal;
        p.audio.activate();
        if(p.presentation.active&&!p.ui.modal&&!p.engine?.state.alpha.worldModal&&!['notice_close','notice_detail','messages','notice_clear'].includes(id))return;
        if(id==='create'||id==='clan_setup'){p.pendingSurname=p.engine&&!p.engine.state.meta.started?p.engine.state.playerFamily.surname:$('surname').value;p.ui.modal='clan_setup';}
        else if(id==='clan_generate'){if(!p.pendingSurname?.trim()||p.pendingSurname.trim().length>8){p.ui.message='请输入1至8字姓氏。';}else{$('surname').value=p.pendingSurname.trim();p.action('create',p.pendingSurname.trim());}}
        else if(MatureUI.action(p,id)){}
        else if(/^(shopbuy|shopsell|baguse|bagunequip|journey|alchemy|region|postpone):/.test(id)||id==='frontier_open'){p.ui.message=Frontier.action(p.engine,id,MatureUI.agent(id.split(':')[1]));p.engine.save();if(id.startsWith('journey:')&&p.ui.message.includes('已前往')||id.startsWith('postpone:')&&/已暂缓|延后一年/.test(p.ui.message))p.ui.modal=null;}
        else if(/^(commission|study|season|claim):/.test(id)&&p.isPlaying){p.ui.message=ClanExpansion.action(p.engine,id,Experience.agent(id.split(':')[1]));p.engine.save();}
        else if(id==='advance_quarter'&&p.isPlaying){if(timeBlocked()){p.ui.message='请先处理当前弹窗，再推进时间。';}else{const before=WSXZ.absoluteMonth(p.engine.state),jobs=ClanExpansion.ensure(p.engine.state).completedJobs;p.ui.message='';for(let i=0;i<3;i++){p.tick();syncBlocker();if(timeBlocked())break;}const completed=ClanExpansion.ensure(p.engine.state).completedJobs-jobs;p.ui.message='已推进 '+(WSXZ.absoluteMonth(p.engine.state)-before)+' 个月'+(completed?' · 完成委托 '+completed+' 项':'');p.engine.save();}}
        else if(id==='guide')p.ui.modal='guide';
        else if(id==='export_json')exportJSON();else p.action(id,$('surname').value);
        if(/^(shopbuy|shopsell|baguse|bagunequip|alchemy):/.test(id)&&/购入|出售|已装备|已使用|炼制|已归入/.test(p.ui.message))void p.audio.playSFX('sfx_bell');
        if(id.startsWith('tree:')){p.ui.tab='族谱';p.engine._genealogyFocus=p.ui.selectedId;}syncBlocker();
        render(/^(tab:|panel:|faction:|select:|tree:|explore:|prepare_expedition|continue|create|new_|start|title|save_title|menu|messages|notice_detail|history:|filter:|next$|prev$)/.test(id)||modal!==p.ui.modal);
    }catch(e){$('message').textContent=String(e);$('message').style.display='block';}finally{running=false;}
}
function portrait(parent,id){
    const c=WSXZ.findCharacter(p.engine.state,id),port=document.createElement('div');port.className='portrait'+(c?.lifeStatus==='dead'?' deceased':'');
    port.dataset.realm=c?.realm||'mortal';
    const style=WSXZ.portraitStyle(c,p.engine.state,id===p.ui.selectedId);port.style.setProperty('--portrait-frame',style.color);if(style.external)port.classList.add('external');if(id===p.ui.selectedId)port.classList.add('focused');
    const fallback=document.createElement('span');fallback.className='portrait-placeholder';fallback.textContent='仙';port.append(fallback);
    const age=c?.deathAge??c?.age??25,stage=age<18?0:age<40?1:age<70?2:3;
    const img=document.createElement('span');img.className='portrait-art';img.setAttribute('role','img');img.setAttribute('aria-label',(c?.name||'人物')+'头像');img.style.backgroundPosition=`${stage*100/3}% ${c?.gender==='female'?'100%':'0%'}`;
    fallback.hidden=true;port.append(img);if(style.badge){const badge=document.createElement('span');badge.className='portrait-badge';badge.textContent=style.badge;port.append(badge);}parent.append(port);
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
    if(p.engine&&!p.engine.state.meta.started&&row.actions?.some(a=>a.id==='start'))row={...row,actions:[...row.actions,{title:'重新选择姓氏',id:'clan_setup'}]};
    if(p.engine&&!p.engine.state.meta.started&&!row.portraitId){const selected=row.actions?.find(a=>a.id.startsWith('select:'));if(selected)row={...row,portraitId:selected.id.slice(7)};}
    const div=document.createElement('article');div.className='card '+(row.tone||'')+(row.fullscreen?' presentation-fullscreen':'');
    const h=document.createElement('h2');h.textContent=p.translate(row.title);const mark=WSXZ.rowIcon(row);if(mark){h.prepend(icon(mark));div.classList.add('accent-'+mark);}
    if(row.fullscreen){const bar=document.createElement('div');bar.className='presentation-toolbar';bar.append(h);if(row.actions?.[0])bar.append(button(row.actions[0].title,row.actions[0].id));div.append(bar);}else div.append(h);
    if(row.image){const art=document.createElement('div');art.className='art-container'+(row.map?' world-map':'');
        const fallback=document.createElement('span');fallback.className='art-placeholder';fallback.textContent=row.map?'云州山河':'家族山门';
        const img=document.createElement('img');img.src=WSXZ.resourcePath(row.image)+'.png';img.className='landscape';img.alt=row.map?'云州地图':'山门';img.onload=()=>{fallback.hidden=true;};img.onerror=()=>{img.remove();fallback.hidden=false;};art.append(fallback,img);div.append(art);}
    if(row.portraitId)div.classList.add('person-card');
    const body=document.createElement('div');body.className=row.portraitId?'person-content':'card-content';
    if(row.portraitId)portrait(body,row.portraitId);
    if(row.body){const text=document.createElement('p');text.textContent=p.ui.modal==='debug'?row.body:p.translate(row.body);body.append(text);}if(body.childNodes.length)div.append(body);
    const badges=WSXZ.resourceBadges(row.body);if(badges.length>=2){const rail=document.createElement('div');rail.className='resource-badges';for(const kind of badges){const item=document.createElement('span');item.append(icon(kind),document.createTextNode(WSXZ.ICON_ART[kind].label));rail.append(item);}div.append(rail);}
    if(row.search){const form=document.createElement('div');form.className='search-row';const input=document.createElement('input');input.placeholder='搜索族人姓名';input.setAttribute('aria-label','搜索族人姓名');input.value=p.ui.search;
        input.oninput=()=>{p.ui.search=input.value;};const submit=()=>{p.action('search',input.value);render(true);};input.onkeydown=e=>{if(e.key==='Enter')submit();};const search=button('搜索','search');search.onclick=submit;form.append(input,search);div.append(form);}
    if(row.effect){const fx=document.createElement('div');fx.className='effect '+row.effect;fx.textContent=row.effect==='root'?'金 · 木 · 水 · 火 · 土':row.effect==='death'?'谨记此生 · 血脉长存':row.effect==='nascent'?'元婴现世':row.effect==='core'?'金丹凝结':row.effect==='spirit'?'化神凝意':row.effect==='void'?'炼虚破界':'灵气汇聚';div.append(fx);}
    if(row.treeView){div.classList.add('tree-card');tree(div,row.treeView);}
    Experience.enrich(div,row,p,button);
    if(row.actions?.length){const actions=document.createElement('div');actions.className=row.map?'actions map-actions':'actions';for(const a of row.actions)actions.append(button(a.title,a.id));div.append(actions);}return div;
}
function render(reset=false){
    const scroll=window.scrollY;
    for(const viewport of document.querySelectorAll('.tree-viewport'))treeOffsets.set(viewport.dataset.focus,{x:viewport.scrollLeft,y:viewport.scrollTop});
    const s=p.engine?.state;$('date').textContent=s?`${s.meta.gameYear}年 · ${s.meta.gameMonth}月 | ${s.playerFamily.name}`:'开卷 · 立族';
    const warning=p.saves.lastWarning||p.ui.message;$('message').textContent=p.translate(warning);$('message').style.display=warning?'block':'none';$('input').style.display=p.engine||p.ui.modal?'none':'flex';
    syncBlocker();const modal=p.ui.modal,world=!!s?.alpha.worldModal,notice=!modal&&!world&&p.presentation.active;
    let overlayNodes=[];
    if(modal||world)overlayNodes=MatureUI.modal(p,card,button);
    else if(notice)overlayNodes=[card({title:notice.title,body:notice.body,effect:notice.effect,portraitId:notice.characterId,actions:[{title:'已阅，继续',id:'notice_close'}]})];
    if(notice&&notice.key!==lastPopupSound){lastPopupSound=notice.key;if(notice.effect)void p.audio.playSFX(['spirit','void'].includes(notice.effect)?'sfx_thunder':['core','nascent'].includes(notice.effect)?'sfx_breakthrough':notice.effect==='root'?'sfx_root_test':'sfx_bell');}
    const queued=p.presentation.items,worldFlag=s?.alpha.worldModal;
    try{p.ui.modal=null;p.presentation.items=[];if(s)s.alpha.worldModal=false;Experience.shell(p,button,portrait);$('content').replaceChildren();if(!Experience.render(p,card,button,portrait)){const rows=p.rows();for(const row of rows)$('content').append(card(row));}}finally{p.ui.modal=modal;p.presentation.items=queued;if(s)s.alpha.worldModal=worldFlag;}
    const overlay=$('event-overlay'),host=$('overlay-content'),wasOpen=!overlay.hidden;host.replaceChildren(...overlayNodes);const open=overlayNodes.length>0;overlay.hidden=!open;document.body.classList.toggle('window-open',open);$('app').inert=open;
    $('overlay-feedback').textContent=p.ui.message||p.saves.lastWarning||'';
    if(open){overlay.setAttribute('aria-modal','true');$('overlay-caption').textContent=notice?'岁月已暂停 · 族中纪事 · 待阅 '+p.presentation.items.length:(modal?.startsWith('decision:')?'岁月已暂停 · 请作抉择':'岁月已暂停 · 山门事务');$('overlay-caption').tabIndex=-1;const next=modal?.startsWith('decision:')?$('overlay-caption'):host.querySelector('button:not(:disabled),input,select');if(!overlay.contains(document.activeElement)&&next)next.focus({preventScroll:true});if(modal?.startsWith('decision:'))for(const bt of host.querySelectorAll('[data-action="close"]'))bt.remove();}else if(wasOpen){$('tabs').querySelector('button.active')?.focus({preventScroll:true});}
    $('tabs').replaceChildren();$('tabs').style.display=s?.meta.started?'flex':'none';if(s?.meta.started){const visibleTabs=window.innerWidth<=740?['家族','族人','族谱','世界']:tabs;for(const tab of visibleTabs){const b=button(tab,'tab:'+tab);b.prepend(Experience.navIcon(tab));if(tab===p.ui.tab){b.classList.add('active');b.setAttribute('aria-current','page');}if(tab==='大事'&&s.pendingDecisions.length){const n=document.createElement('span');n.className='nav-count';n.textContent=s.pendingDecisions.length;b.append(n);}$('tabs').append(b);}if(window.innerWidth<=740){const more=button('更多','quick_menu');more.prepend(Experience.navIcon('更多'));if(!visibleTabs.includes(p.ui.tab))more.classList.add('active');$('tabs').append(more);}}
    $('speeds').replaceChildren();if(s?.meta.started)for(const [title,speed] of [['暂停','paused'],['常速','normal'],['加速','fast'],['高速','high']]){const b=button(title,'speed:'+speed);if(s.settings.timeSpeed===speed)b.classList.add('active');$('speeds').append(b);}
    $('export').disabled=!p.engine&&!saves.hasData();$('audio').replaceChildren(button('设置','menu'));
    $('save-status').textContent=persistentStorage?'本地单机 · 自动保存':'临时模式 · 请导出存档';
    window.scrollTo(0,reset?0:scroll);
}
$('export').onclick=exportJSON;
$('guide').onclick=()=>act('guide');
$('import').onclick=()=>{$('import-file').click();};
$('import-file').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>32*1024*1024)throw Error('存档文件超过32MB');const state=saves.migrate(JSON.parse(await file.text()));WSXZ.validateState(state);ClanExpansion.validate(state);Frontier.validate(state);Experience.confirmImport(state,()=>{try{if(saves.hasData()&&!saves.backupCurrent())throw Error('当前存档备份失败，导入已取消');saves.preserveNextBackup=true;if(!saves.save(state))throw Error(saves.lastWarning);p.returnTitle(false);p.action('continue');render(true);}catch(err){p.ui.message='导入失败：'+err.message;render();}},button);}catch(err){p.ui.message='导入失败：'+err.message;render();}finally{e.target.value='';}};
function frame(now){
    const delta=Math.min(1,Math.max(0,(now-last)/1000));last=now;p.syncAudio();p.audio.update(delta);if(p.ui.modal==='menu'&&p.audio.status!==lastMusicStatus)gate.markDirty();lastMusicStatus=p.audio.status;if(p.updatePresentation(delta))gate.markDirty();
    const s=p.engine?.state,yearSeconds=s?WSXZ.CONFIG.speeds[s.settings.timeSpeed]:0;let urgent=false;
    if(s?.meta.started&&yearSeconds>0&&!timeBlocked()&&!document.hidden){accumulator+=delta;while(accumulator>=yearSeconds/12){p.tick();syncBlocker();gate.markTick();accumulator-=yearSeconds/12;if(timeBlocked()){accumulator=0;urgent=true;break;}}}else accumulator=0;
    if(!document.activeElement?.matches('input,select')&&gate.refresh(delta,urgent))render();requestAnimationFrame(frame);
}
window.addEventListener('pagehide',()=>p.onHide());document.addEventListener('visibilitychange',()=>{if(document.hidden)p.onHide();else{p.onShow();render();}});
window.addEventListener('resize',()=>gate.markDirty());
document.addEventListener('keydown',event=>{const overlay=$('event-overlay');if(overlay.hidden)return;if(event.key==='Escape'){event.preventDefault();if(p.ui.modal&&!p.ui.modal.startsWith('decision:')&&!p.engine?.state.alpha.worldModal)act('close');}if(event.key==='Tab'){const items=[...overlay.querySelectorAll('button:not(:disabled),input,select,a[href]')].filter(el=>el.getClientRects().length);if(!items.length)return;const first=items[0],last=items.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
render();requestAnimationFrame(frame);
