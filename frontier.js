(function(global){
  'use strict';
  const W=global.WSXZ,D=W.ALPHA_CONFIG,C=W.CONFIG;
  const order=['mortal','qi','foundation','core','nascent','spirit','void'];
  C.saveVersion='1.3.0';
  Object.assign(C.lifespan,{spirit:2200,void:4800});Object.assign(C.stages,{spirit:4,void:4});Object.assign(C.stageYears,{spirit:160,void:260});Object.assign(C.breakthrough,{spirit:.26,void:.20});
  Object.assign(C.failure,{spirit:[.45,.32,.18,.05],void:[.4,.32,.22,.06]});
  Object.assign(D.stabilization.stageYears,{spirit:140,void:220});
  Object.assign(D.stabilization.breakthroughCosts,{spirit:{stones:120000,herbs:10000,materials:5000},void:{stones:360000,herbs:24000,materials:12000}});
  Object.assign(D.stabilization.failureProgress,{spirit:[.8,.65,.4,.3],void:[.8,.65,.4,.25]});
  Object.assign(D.stabilization.failureRecoveryYears,{spirit:[8,14],void:[12,22]});
  Object.assign(D.upkeepPerYear,{spirit:650,void:1600});Object.assign(D.combatRealmBase,{spirit:260000,void:3400000});
  D.familyRanks[5]={name:'化神仙族',capacity:600,policySlots:3,requirements:{spirit:1,nascent:3,core:8,population:100,reputation:16000,spiritVein:'4',assets:160000}};
  D.familyRanks[6]={name:'炼虚古族',capacity:900,policySlots:3,requirements:{void:1,spirit:3,nascent:10,population:180,reputation:40000,spiritVein:'5',assets:500000}};
  for(const[key,b]of Object.entries(D.buildings))for(let level=5;level<=6;level++){
    const previous=b.levels[level-1],next={...previous,upgradeCost:Math.round(previous.upgradeCost*2.8),rankRequired:level};
    for(const field of ['herbsPerYear','stonesPerYear','materialsPerYear'])if(previous[field]!==undefined)next[field]=Math.round(previous[field]*2.5);
    if(previous.cultivationMultiplier)next.cultivationMultiplier=previous.cultivationMultiplier+.14;
    if(previous.breakthroughBonus!==undefined)next.breakthroughBonus=previous.breakthroughBonus+.025;
    if(previous.minorCultivationBonus!==undefined)next.minorCultivationBonus=previous.minorCultivationBonus+.035;
    if(key==='spiritVein')next.tier=String(level-1);
    b.levels[level]=next;
  }
  const goods=[
    {id:'foundationPill',name:'筑基丹',kind:'丹药',icon:0,price:1000,stock:3,min:0,description:'炼气圆满时使用。大境界突破窗口中选择服丹，成功率增加15个百分点。'},
    {id:'healing',name:'回春露',kind:'丹药',icon:1,price:140,stock:8,min:0,description:'为选中的轻伤或重伤族人疗伤，缩短6个月伤期；不能治疗濒危伤势。'},
    {id:'manual',name:'凝神残卷',kind:'传承',icon:2,price:300,stock:5,min:0,description:'族人阅卷后悟性永久+2，最多使用5卷。悟性最高100。'},
    {id:'crystal',name:'灵晶原矿',kind:'材料',icon:3,price:300,stock:12,min:0,description:'购入后开采入库，获得30灵材，用于山门和大境界突破。'},
    {id:'sword',name:'青锋灵剑',kind:'法器',icon:4,price:650,stock:3,min:1,description:'装备给修士，委托收益+15%，远征战力+12%；每名族人仅装备一件法器。'},
    {id:'talisman',name:'护身玉符',kind:'法器',icon:5,price:480,stock:4,min:1,description:'装备后委托险情概率减半，远征战力+8%；与灵剑占用同一法器位。'},
    {id:'lotus',name:'玄灵莲',kind:'材料',icon:6,price:1800,stock:4,min:4,description:'玄天界珍材。炼丹时与药材、灵材一同消耗，炼制化神丹或炼虚丹。'},
    {id:'ring',name:'聚灵珠',kind:'法器',icon:7,price:1600,stock:2,min:2,description:'装备后修炼速度+10%，远征战力+5%。不提供额外法器位。'},
    {id:'spiritPill',name:'化神丹',kind:'丹药',icon:8,price:16000,stock:1,min:4,description:'元婴圆满冲击化神时服用，成功率+12个百分点。玄天界炼丹台也可炼制。'},
    {id:'voidPill',name:'炼虚丹',kind:'丹药',icon:9,price:45000,stock:1,min:5,description:'化神圆满冲击炼虚时服用，成功率+12个百分点。需要玄天珍材。'},
    {id:'herbBundle',name:'百年灵药',kind:'材料',icon:10,price:210,stock:12,min:0,description:'购入后整理入药库，获得60药材，供突破、研习和炼丹使用。'},
    {id:'supply',name:'远行锦囊',kind:'补给',icon:11,price:160,stock:6,min:0,description:'下一次族人委托自动消耗一份，收益+20%，险情概率再降低30%。'}
  ];
  const sites=[
    {id:'garden',name:'瑶池药圃',min:4,months:6,cost:1200,risk:.04,reward:{herbs:1700,materials:300,stones:3500},lotus:2,x:66,y:60,description:'守护灵植，与玄天药师交换炼丹珍材。'},
    {id:'snow',name:'霜天灵矿',min:4,months:9,cost:2500,risk:.12,reward:{materials:1800,stones:7500},lotus:1,x:18,y:20,description:'深入浮岛冰脉，采集高阶矿材。'},
    {id:'palace',name:'太初道宫',min:5,months:12,cost:6000,risk:.14,reward:{stones:24000,reputation:300,herbs:2000},lotus:4,x:53,y:22,description:'与化神道宫论道，获得炼虚所需的道藏与材料。'},
    {id:'rift',name:'归墟裂隙',min:6,months:18,cost:15000,risk:.24,reward:{stones:85000,materials:6000,reputation:700},lotus:8,x:85,y:20,description:'炼虚修士可踏入的空间裂隙，风险与机缘并存。'}
  ];
  function ensure(s){if(!s.frontier)s.frontier={version:1,region:'yunzhou',unlocked:false,bag:{},equipment:{},manualUses:{},stocks:Object.fromEntries(goods.map(g=>[g.id,g.stock])),stockYear:s.meta.gameYear,journeys:[],completed:0,postponed:[]};s.frontier.postponed??=[];return s.frontier;}
  function hasRealm(e,rank){return e.world.residents().some(c=>order.indexOf(c.realm)>=rank);}
  function add(e,key,n){if(key==='stones')e.state.playerFamily.spiritStones+=n;else e.state.alpha[key]+=n;}
  function note(e,text){e.world.log('frontier_result',text);}
  function inventory(e,id){return id==='foundationPill'?e.state.alpha.inventory.foundationPill:ensure(e.state).bag[id]||0;}
  function blocked(s){return !!s.alpha?.worldModal||s.pendingDecisions.length>0;}
  function tick(e){const s=e.state,f=ensure(s);let dirty=false;if(f.stockYear<s.meta.gameYear){f.stockYear=s.meta.gameYear;f.stocks=Object.fromEntries(goods.map(g=>[g.id,g.stock]));dirty=true;}
    for(const delayed of [...f.postponed])if(delayed.at<=W.absoluteMonth(s)){f.postponed=f.postponed.filter(x=>x!==delayed);const d=delayed.decision;if((!d.characterId||s.characters.alive[d.characterId])&&!s.pendingDecisions.some(x=>x.type==='event'&&x.payload.eventId===d.payload.eventId))s.pendingDecisions.push(d);dirty=true;}if(dirty)e.save();
    for(const j of [...f.journeys])if(j.ends<=W.absoluteMonth(s)){f.journeys=f.journeys.filter(x=>x.id!==j.id);const site=sites.find(x=>x.id===j.site),c=s.characters.alive[j.agent];if(!c||!c.isResident){note(e,'玄天远行中止：'+(W.findCharacter(s,j.agent)?.name||'族人')+'无法继续。');continue;}const accident=e.rng.chance(site.risk*(1-c.fortune/250)),factor=accident?.6:1;for(const[k,n]of Object.entries(site.reward))add(e,k,Math.round(n*factor));f.bag.lotus=(f.bag.lotus||0)+Math.max(1,Math.round(site.lotus*factor));f.completed++;if(accident){c.health='light';c.injuryMonths=Math.max(c.injuryMonths,6);}note(e,c.name+'自'+site.name+'归来：'+global.ClanExpansion.rewardText(Object.fromEntries(Object.entries(site.reward).map(([k,n])=>[k,Math.round(n*factor)])))+' · 玄灵莲 +'+Math.max(1,Math.round(site.lotus*factor))+(accident?'；轻伤休养6个月。':'。'));e.save();}}
  function attach(e){if(e._frontierAttached)return;e._frontierAttached=true;ensure(e.state);
    const oldTick=e.time.tick.bind(e.time);e.time.tick=()=>{if(blocked(e.state)||e.pauseGuard?.())return;const before=W.absoluteMonth(e.state);oldTick();if(W.absoluteMonth(e.state)>before)tick(e);};
    const offline=e.time.offline.bind(e.time);e.time.offline=now=>{const unit=C.offlineHourMs/12,carry=e.state.meta.offlineCarryMs,elapsed=Math.max(0,now-e.state.meta.lastExitAt)+carry,planned=Math.min(C.offlineMaxYears*12,Math.floor(elapsed/unit)),report=offline(now);if(report.months<planned)e.state.meta.offlineCarryMs=Math.min(C.offlineMaxYears*C.offlineHourMs,e.state.meta.offlineCarryMs+(planned-report.months)*unit);return report;};
    const env=e.cultivation.environmentReady.bind(e.cultivation);e.cultivation.environmentReady=c=>{const target=e.cultivation.target(c);if(!['spirit','void'].includes(target))return env(c);const f=ensure(e.state);if(c.factionId&&c.factionId!==e.state.playerFamily.id)return false;const level=target==='spirit'?4:5;return f.unlocked&&e.state.alpha.buildings.spiritVein>=level&&e.state.alpha.buildings.library>=level;};
    const important=e.cultivation.important.bind(e.cultivation);e.cultivation.important=c=>['nascent','spirit'].includes(c.realm)||important(c);
    const multiplier=e.cultivation.multiplier.bind(e.cultivation);e.cultivation.multiplier=c=>multiplier(c)*(ensure(e.state).equipment[c.id]==='ring'?1.1:1);
    const chance=e.cultivation.chance.bind(e.cultivation);e.cultivation.chance=(c,pill)=>Math.min(C.majorMax,chance(c,pill)+(e._higherPillTarget===e.cultivation.target(c)?.12:0));
    const attempt=e.cultivation.attempt.bind(e.cultivation);e.cultivation.attempt=(c,pill,automatic)=>{const target=e.cultivation.target(c),f=ensure(e.state),id=target==='spirit'?'spiritPill':target==='void'?'voidPill':null;const use=pill&&id;if(use){if(!inventory(e,id)||!e.cultivation.resourcesReady(c,automatic)||!c.isBottleneck||W.absoluteMonth(e.state)<c.retryAtMonth)return false;e._higherPillTarget=target;}try{const executed=attempt(c,use?false:pill,automatic);if(executed&&use)f.bag[id]--;return executed;}finally{e._higherPillTarget=null;}};
    const combat=e.world.combat.bind(e.world);e.world.combat=(team,realm)=>{const values=team.map(c=>c.techniqueAffinity);try{team.forEach(c=>{const gear=ensure(e.state).equipment[c.id];c.techniqueAffinity*=gear==='sword'?1.12:gear==='talisman'?1.08:gear==='ring'?1.05:1;});return combat(team,realm);}finally{team.forEach((c,i)=>c.techniqueAffinity=values[i]);}};
    const start=e.world.startExpedition.bind(e.world);e.world.startExpedition=(location,ids)=>ids.some(id=>ensure(e.state).journeys.some(j=>j.agent===id))?false:start(location,ids);
  }
  function buy(e,id,count=1){const g=goods.find(g=>g.id===id),f=ensure(e.state),s=e.state;count=Number(count);if(!g||![1,5].includes(count))return '购买数量无效。';if(g.min>=4&&!f.unlocked)return '此物仅在玄天坊市出售。';if(g.min>0&&!hasRealm(e,g.min))return '本家修士境界尚未达到购买条件。';const price=id==='foundationPill'?s.alpha.market.price:g.price;if(f.stocks[id]<count)return '本年度库存不足。';if(s.playerFamily.spiritStones<price*count)return '灵石不足。';s.playerFamily.spiritStones-=price*count;f.stocks[id]-=count;if(id==='foundationPill')s.alpha.inventory.foundationPill+=count;else if(id==='crystal')s.alpha.materials+=30*count;else if(id==='herbBundle')s.alpha.herbs+=60*count;else f.bag[id]=(f.bag[id]||0)+count;e.save();return '购入'+g.name+' ×'+count+' · 灵石 −'+price*count;}
  function use(e,id,character){const f=ensure(e.state),c=e.world.residents().find(c=>c.id===character),g=goods.find(g=>g.id===id);if(!g||!c||!inventory(e,id))return '请选择在族人物，并确认拥有该物品。';let effect='';if(['sword','talisman','ring'].includes(id)){if(!c.cultivationStarted)return '凡人无法驾驭法器。';if(global.ClanExpansion.busy(e.state,c.id))return '远行中的族人不能更换法器。';const old=f.equipment[c.id];if(old)f.bag[old]=(f.bag[old]||0)+1;f.bag[id]--;f.equipment[c.id]=id;effect=g.description;}else if(id==='healing'){if(!['light','severe'].includes(c.health)||c.injuryMonths<=0)return '仅能治疗正在休养的轻伤或重伤族人。';const before=c.injuryMonths;c.injuryMonths=Math.max(0,c.injuryMonths-6);if(!c.injuryMonths)c.health='healthy';f.bag[id]--;effect='伤期 '+before+' → '+c.injuryMonths+' 个月';}else if(id==='manual'){if((f.manualUses[c.id]||0)>=5||c.comprehension>=100)return '该人物已达到残卷使用上限。';const before=c.comprehension;c.comprehension=Math.min(100,c.comprehension+2);f.manualUses[c.id]=(f.manualUses[c.id]||0)+1;f.bag[id]--;effect='悟性 '+before+' → '+c.comprehension+' · 已阅 '+f.manualUses[c.id]+'/5 卷';}else return '此物在突破、炼丹或派遣时使用。';note(e,c.name+'使用'+g.name+'。\n'+effect);e.save();return c.name+'已'+(['sword','talisman','ring'].includes(id)?'装备':'使用')+g.name;}
  function sell(e,key,count){count=Number(count);if(!['herbs','materials'].includes(key)||![10,50].includes(count))return '出售数量无效。';if(e.state.alpha[key]<count)return '库存不足。';const n=count*(key==='herbs'?3:8);e.state.alpha[key]-=count;e.state.playerFamily.spiritStones+=n;e.save();return '出售'+(key==='herbs'?'药材':'灵材')+' '+count+' · 灵石 +'+n;}
  function action(e,id,agent){const parts=id.split(':'),f=ensure(e.state),s=e.state;
    if(parts[0]==='shopbuy')return buy(e,parts[1],parts[2]||1);
    if(parts[0]==='baguse')return use(e,parts[1],agent);
    if(parts[0]==='postpone'){const d=s.pendingDecisions.find(d=>d.id===parts[1]);if(!d||!['rank','event'].includes(d.type))return '此事无法暂缓。';s.pendingDecisions=s.pendingDecisions.filter(x=>x.id!==d.id);if(d.type==='event'){f.postponed.push({decision:JSON.parse(JSON.stringify(d)),at:W.absoluteMonth(s)+12});note(e,'此事延后一年，届时保留原抉择重新请示。');}else note(e,'本次晋阶已暂缓，年度条件核查后会重新请示。');e.save();return d.type==='event'?'此事延后一年。':'本次晋阶已暂缓。';}
    if(parts[0]==='bagunequip'){const c=e.world.residents().find(c=>c.id===parts[1]),gear=f.equipment[parts[1]];if(!c||!gear)return '该族人没有装备法器。';if(global.ClanExpansion.busy(s,c.id))return '远行中的族人不能卸下法器。';f.bag[gear]=(f.bag[gear]||0)+1;delete f.equipment[c.id];note(e,c.name+'卸下'+goods.find(g=>g.id===gear).name+'，法器已归入族库。');e.save();return '法器已归入行囊。';}
    if(parts[0]==='shopsell')return sell(e,parts[1],parts[2]);
    if(id==='frontier_open'){if(f.unlocked)return '界门已开辟。';if(!hasRealm(e,4))return '需要至少一名本家元婴修士。';if(s.playerFamily.spiritStones<5000||s.alpha.materials<200)return '开辟界门需要5000灵石和200灵材。';s.playerFamily.spiritStones-=5000;s.alpha.materials-=200;f.unlocked=true;f.region='xuantian';note(e,'本家开辟玄天界门，化神、炼虚道途已现。');e.save();return '玄天界门已开辟。';}
    if(parts[0]==='region'){if(!['yunzhou','xuantian'].includes(parts[1]))return '地图无效。';f.region=parts[1];return '';}
    if(parts[0]==='journey'){const site=sites.find(x=>x.id===parts[1]),c=e.world.residents().find(c=>c.id===agent);if(!f.unlocked||!site||!c||order.indexOf(c.realm)<site.min)return '需要已开放玄天界及符合境界条件的修士。';if(c.health!=='healthy'||c.isInRetreat||global.ClanExpansion.busy(s,c.id)||f.journeys.some(j=>j.agent===c.id))return '该族人正在远行、闭关或休养。';if(f.journeys.length>=2)return '玄天远行最多同时派遣两人。';if(s.playerFamily.spiritStones<site.cost)return '灵石不足。';s.playerFamily.spiritStones-=site.cost;f.journeys.push({id:W.newId(s,'journey'),site:site.id,agent:c.id,started:W.absoluteMonth(s),ends:W.absoluteMonth(s)+site.months});e.save();return c.name+'已前往'+site.name+'，预计'+site.months+'个月归来。';}
    if(parts[0]==='alchemy'){const target=parts[1],valid=target==='spiritPill'||target==='voidPill';if(!valid||!f.unlocked)return '炼丹配方尚未开放。';const high=target==='voidPill',lotus=high?6:2,herbs=high?1800:800,materials=high?900:300,stones=high?6000:2000;if(!hasRealm(e,high?5:4))return '需要对应境界修士主持炼丹。';if(inventory(e,'lotus')<lotus||s.alpha.herbs<herbs||s.alpha.materials<materials||s.playerFamily.spiritStones<stones)return '炼丹所需玄灵莲、药材、灵材或灵石不足。';f.bag.lotus-=lotus;s.alpha.herbs-=herbs;s.alpha.materials-=materials;s.playerFamily.spiritStones-=stones;f.bag[target]=(f.bag[target]||0)+1;e.save();return '炼制'+goods.find(g=>g.id===target).name+' ×1。';}
    return '';
  }
  function validate(s){const f=s.frontier;if(!f)return;const integer=n=>Number.isSafeInteger(n)&&n>=0;if(f.version!==1||!['yunzhou','xuantian'].includes(f.region)||typeof f.unlocked!=='boolean'||!integer(f.stockYear)||!integer(f.completed)||!Array.isArray(f.journeys)||f.journeys.length>2)throw Error('玄天存档结构无效');for(const key of ['bag','stocks','equipment','manualUses'])if(!f[key]||typeof f[key]!=='object'||Array.isArray(f[key]))throw Error('背包存档无效');if(goods.some(g=>!integer(f.stocks[g.id])))throw Error('坊市库存字段无效');for(const key of ['bag','stocks'])for(const[id,n]of Object.entries(f[key]))if(!goods.some(g=>g.id===id)||!integer(n))throw Error('物品数量无效');for(const[id,gear]of Object.entries(f.equipment))if(!W.findCharacter(s,id)||!['sword','ring','talisman'].includes(gear))throw Error('法器引用无效');const seen=new Set();for(const j of f.journeys){if(!sites.some(site=>site.id===j.site)||!W.findCharacter(s,j.agent)||!integer(j.started)||!integer(j.ends)||j.ends<=j.started||seen.has(j.agent)||typeof j.id!=='string')throw Error('玄天远行无效');seen.add(j.agent);}if(f.postponed!==undefined){if(!Array.isArray(f.postponed)||f.postponed.length>120)throw Error('延期记录无效');for(const x of f.postponed){const d=x.decision;if(!integer(x.at)||!d||d.type!=='event'||typeof d.id!=='string'||!W.EVENT_PACK.events.some(t=>t.id===d.payload?.eventId)||d.characterId&&!W.findCharacter(s,d.characterId))throw Error('延期事件无效');}}for(const[id,n]of Object.entries(f.manualUses))if(!W.findCharacter(s,id)||!integer(n)||n>5)throw Error('残卷记录无效');}
  global.Frontier={order,goods,sites,ensure,attach,action,validate,inventory,hasRealm,blocked};
  if(typeof module!=='undefined')module.exports=global.Frontier;
})(typeof window!=='undefined'?window:globalThis);
