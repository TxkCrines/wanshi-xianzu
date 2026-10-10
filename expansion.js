(function (global) {
  'use strict';
  const W = global.WSXZ;
  const missions = [
    {id:'herbs', name:'灵谷采药', icon:'herbs', months:3, cost:40, risk:0, stat:'comprehension', reward:{herbs:42, stones:60}, description:'沿山间灵谷采集药材。稳妥经营，为突破储备灵药。'},
    {id:'caravan', name:'坊市护商', icon:'market', months:4, cost:80, risk:.12, stat:'constitution', reward:{stones:300, reputation:12}, description:'护送商队前往天河坊市。略有风险，适合体魄出众的族人。'},
    {id:'ore', name:'青崖寻矿', icon:'materials', months:5, cost:100, risk:.18, stat:'fortune', reward:{materials:45, stones:160}, description:'寻访青崖矿脉。福缘越高，越容易避开山中险情。'},
    {id:'teaching', name:'乡里传道', icon:'family', months:3, cost:60, risk:0, stat:'comprehension', reward:{reputation:25, stones:80}, description:'讲授养生与识灵之法，积累仙族声望。'}
  ];
  const studies = [
    {id:'breath', name:'太清吐纳', tag:'修行', cost:260, herbs:0, months:6, requires:null, effect:'全体本家修炼速度 +8%', description:'整理先祖吐纳心得，奠定家族修行根基。'},
    {id:'herbal', name:'灵植培育', tag:'经营', cost:350, herbs:35, months:6, requires:null, effect:'每年额外获得药材 36', description:'辨识灵植生长规律，让山门药圃四季常青。'},
    {id:'commerce', name:'云州商道', tag:'经营', cost:650, herbs:0, months:9, requires:'herbal', effect:'每年额外获得灵石 160；委托收益 +10%', description:'建立固定商路，以灵植贸易积累家业。'},
    {id:'meridian', name:'周天经脉', tag:'修行', cost:800, herbs:100, months:12, requires:'breath', effect:'全体本家修炼速度再 +10%', description:'将吐纳法融入周天，拓宽后辈修行之路。'},
    {id:'formation', name:'护山阵解', tag:'远行', cost:1000, herbs:60, months:12, requires:'breath', effect:'委托受伤概率降低 50%；每年灵材 +12', description:'以阵理护持族人，降低山野行走的损耗。'},
    {id:'legacy', name:'万世道藏', tag:'传承', cost:2000, herbs:240, months:18, requires:'meridian', effect:'全体本家修炼速度再 +12%；委托收益再 +15%', description:'汇编历代经验，留下一部真正的家族道藏。'}
  ];
  const seasons = ['春','夏','秋','冬'];
  const events = [
    {title:'春雨润灵田', text:'春雨初歇，药圃新芽竞发。执事请示是否追加灵石，为今年的灵植培土。', choices:[{name:'精心培土',cost:80,gain:{herbs:45},effect:'灵石 −80 · 药材 +45'}, {name:'顺应天时',cost:0,gain:{herbs:12},effect:'药材 +12'}]},
    {title:'夏日传功会', text:'年轻族人聚于演武场，希望请长辈开坛讲道。资助传功会，能加深族人的修行积累。', choices:[{name:'开坛传功',cost:100,gain:{reputation:12},cultivation:.03,effect:'灵石 −100 · 声望 +12 · 修为 +3个百分点'}, {name:'族人互学',cost:0,gain:{reputation:4},effect:'声望 +4'}]},
    {title:'秋市来客', text:'行商携山外灵材来到山门，愿与本家交易。储备灵材有助于未来的大境界突破。', choices:[{name:'购入灵材',cost:120,gain:{materials:24},effect:'灵石 −120 · 灵材 +24'}, {name:'礼送来客',cost:0,gain:{reputation:6},effect:'声望 +6'}]},
    {title:'冬雪护乡', text:'山下村落遭遇大雪，乡民求助。仙族可以调拨灵石赈济，也可以安排族人协助清雪。', choices:[{name:'赈济乡民',cost:100,gain:{reputation:30},effect:'灵石 −100 · 声望 +30'}, {name:'清雪护路',cost:0,gain:{reputation:8},effect:'声望 +8'}]}
  ];
  function ensure(s) {
    if (!s.expansion) s.expansion={version:2,jobs:[],completedJobs:0,studies:[],research:null,claimed:[],seasonEvent:null,lastSeason:-1};
    return s.expansion;
  }
  const month = s => W.absoluteMonth(s);
  const busy = (s,id) => ensure(s).jobs.some(j=>j.agent===id) || !!s.alpha.expedition?.members.includes(id) || !!s.frontier?.journeys.some(j=>j.agent===id);
  function agents(e) { return e.world.residents().filter(c=>c.age>=18 && c.health==='healthy' && !c.isInRetreat && !busy(e.state,c.id)); }
  function log(e,text) { e.world.log('clan_management',text); }
  function gain(e,reward,multiplier=1) {
    for(const [key,n] of Object.entries(reward)) {
      const amount=Math.round(n*multiplier);
      if(key==='stones') e.state.playerFamily.spiritStones+=amount;
      else e.state.alpha[key]+=amount;
    }
  }
  function rewardText(reward) { const names={stones:'灵石',herbs:'药材',materials:'灵材',reputation:'声望'}; return Object.entries(reward).map(([k,v])=>names[k]+' +'+v).join(' · '); }
  function risk(e,mission,c,supplied=false) { return Math.max(0,mission.risk*(1-(c?.[mission.stat]||0)/200)*(ensure(e.state).studies.includes('formation')?.5:1)*(e.state.frontier?.equipment[c?.id]==='talisman'?.5:1)*(supplied?.7:1)); }
  function goals(e) {
    const s=e.state,x=ensure(s),a=s.alpha;
    return [
      {id:'first_job',name:'初涉云州',detail:'完成一次族人委托',done:x.completedJobs>=1,value:x.completedJobs,target:1,reward:{stones:100}},
      {id:'first_study',name:'薪火相传',detail:'完成一项传承研习',done:x.studies.length>=1,value:x.studies.length,target:1,reward:{herbs:35,reputation:15}},
      {id:'vein',name:'灵脉初成',detail:'将灵脉升至二级',done:a.buildings.spiritVein>=2,value:a.buildings.spiritVein,target:2,reward:{stones:200,materials:20}},
      {id:'population',name:'枝繁叶茂',detail:'在族人口达到十二人',done:e.world.residents().length>=12,value:e.world.residents().length,target:12,reward:{stones:350,reputation:40}},
      {id:'foundation',name:'筑基之光',detail:'培养一位本家筑基修士',done:e.world.residents().some(c=>['foundation','core','nascent'].includes(c.realm)),value:e.world.residents().filter(c=>c.realm!=='mortal'&&c.realm!=='qi').length,target:1,reward:{stones:500,herbs:100}},
      {id:'legacy',name:'一族道藏',detail:'完成全部六项传承研习',done:x.studies.length>=6,value:x.studies.length,target:6,reward:{stones:1200,reputation:180}}
    ];
  }
  function tick(e) {
    const s=e.state;if(!s.meta.started)return;
    const x=ensure(s), now=month(s);
    for(const j of [...x.jobs]) {
      if(j.ends>now)continue;
      const m=missions.find(m=>m.id===j.type),c=s.characters.alive[j.agent];
      x.jobs=x.jobs.filter(other=>other.id!==j.id);
      if(!c || !c.isResident){ log(e,'委托中止：'+(W.findCharacter(s,j.agent)?.name||'族人')+'已无法继续'+m.name+'，启动费用不退还。');continue; }
      const accident=e.rng.chance(risk(e,m,c,j.supplied));
      const bonus=1+(x.studies.includes('commerce')?.1:0)+(x.studies.includes('legacy')?.15:0)+(e.state.frontier?.equipment[c.id]==='sword'?.15:0)+(j.supplied?.2:0);
      gain(e,m.reward,bonus*(accident?.6:1));x.completedJobs++;
      if(accident){c.health='light';c.injuryMonths=Math.max(c.injuryMonths,3);}
      log(e,c.name+'完成「'+m.name+'」：'+rewardText(Object.fromEntries(Object.entries(m.reward).map(([k,n])=>[k,Math.round(n*bonus*(accident?.6:1))])))+(accident?'；遭遇险情，轻伤休养三个月。':'。'));
    }
    if(x.research && x.research.ends<=now) {
      const study=studies.find(t=>t.id===x.research.id);x.studies.push(study.id);x.research=null;
      log(e,'家族完成「'+study.name+'」研习：'+study.effect+'。');
    }
    if(s.meta.gameMonth===1) {
      if(x.studies.includes('herbal'))gain(e,{herbs:36});
      if(x.studies.includes('commerce'))gain(e,{stones:160});
      if(x.studies.includes('formation'))gain(e,{materials:12});
    }
    const season=Math.floor(now/3);
    if(x.lastSeason!==season) {x.lastSeason=season;if(!x.seasonEvent)x.seasonEvent={index:season%4,created:now};}
  }
  function attach(e) {
    if(e._expansionAttached){tickInitial(e);return;}e._expansionAttached=true;ensure(e.state);
    const start=e.start.bind(e);e.start=()=>{start();tickInitial(e);e.save();};
    const originalTick=e.time.tick.bind(e.time);
    e.time.tick=()=>{const before=month(e.state),x=ensure(e.state),season=x.lastSeason,jobs=x.completedJobs,research=x.research?.id;originalTick();if(month(e.state)!==before){tick(e);if(e.state.meta.gameMonth===1||season!==x.lastSeason||jobs!==x.completedJobs||research!==x.research?.id)e.save();}};
    const multiplier=e.cultivation.multiplier.bind(e.cultivation);
    e.cultivation.multiplier=c=>{
      let value=multiplier(c);if(c.factionId && c.factionId!==e.state.playerFamily.id)return value;
      const x=ensure(e.state);for(const [id,n] of [['breath',.08],['meridian',.1],['legacy',.12]])if(x.studies.includes(id))value*=1+n;
      if(x.jobs.some(j=>j.agent===c.id))value*=.75;return value;
    };
    const depart=e.world.startExpedition.bind(e.world);
    e.world.startExpedition=(location,ids)=>ids.some(id=>busy(e.state,id))?false:depart(location,ids);
    tickInitial(e);
  }
  function tickInitial(e) { const x=ensure(e.state);if(x.lastSeason<0 && e.state.meta.started){x.lastSeason=Math.floor(month(e.state)/3);x.seasonEvent={index:x.lastSeason%4,created:month(e.state)};} }
  function action(e,id,agentId) {
    const s=e.state,x=ensure(s),[kind,key]=id.split(':');
    if(kind==='commission') {
      const m=missions.find(v=>v.id===key),c=agents(e).find(c=>c.id===agentId);
      if(!m||!c)return '请选择一位健康、成年且空闲的族人。';
      if(x.jobs.length>=Math.min(4,s.playerFamily.rank+1))return '委托槽位已满；提升家族星级可增加槽位。';
      if(s.playerFamily.spiritStones<m.cost)return '灵石不足，无法支付委托费用。';
      const supplied=(s.frontier?.bag.supply||0)>0;if(supplied)s.frontier.bag.supply--;
      s.playerFamily.spiritStones-=m.cost;x.jobs.push({id:W.newId(s,'job'),type:key,agent:c.id,started:month(s),ends:month(s)+m.months,supplied});
      log(e,c.name+'领命「'+m.name+'」，预计'+m.months+'个月归来。');return '委托已派出。推进时间后将自动结算。';
    }
    if(kind==='study') {
      const t=studies.find(t=>t.id===key);
      if(!t||x.studies.includes(key))return '此项传承已经掌握。';
      if(x.research)return '藏经阁正在研习，请等待当前研习完成。';
      if(t.requires&&!x.studies.includes(t.requires))return '请先完成前置传承。';
      if(s.playerFamily.spiritStones<t.cost||s.alpha.herbs<t.herbs)return '灵石或药材不足。';
      s.playerFamily.spiritStones-=t.cost;s.alpha.herbs-=t.herbs;x.research={id:key,started:month(s),ends:month(s)+t.months};
      log(e,'藏经阁开始研习「'+t.name+'」。');return '研习已开始，完成后永久生效。';
    }
    if(kind==='season') {
      if(!x.seasonEvent)return '本季议事已处理。';
      const event=events[x.seasonEvent.index],choice=event.choices[Number(key)];if(!choice)return '选项无效。';
      if(s.playerFamily.spiritStones<choice.cost)return '灵石不足，请选择另一项方案。';
      s.playerFamily.spiritStones-=choice.cost;gain(e,choice.gain);
      if(choice.cultivation)for(const c of e.world.residents())if(c.cultivationStarted&&!c.isBottleneck)c.cultivationProgress=Math.min(.99,c.cultivationProgress+choice.cultivation);
      log(e,event.title+'：'+choice.name+'（'+choice.effect+'）。');x.seasonEvent=null;return '议事已结算：'+choice.effect;
    }
    if(kind==='claim') {
      const g=goals(e).find(g=>g.id===key);if(!g?.done||x.claimed.includes(key))return '目标尚未完成或奖励已领取。';
      gain(e,g.reward);x.claimed.push(key);log(e,'完成家族志「'+g.name+'」：'+rewardText(g.reward));return '家族志奖励已入库。';
    }
    return '';
  }
  function validate(s) {
    const x=s.expansion;if(!x)return;
    const integer=n=>Number.isSafeInteger(n)&&n>=0;
    if(x.version!==2||!Array.isArray(x.jobs)||x.jobs.length>4||!Array.isArray(x.studies)||!Array.isArray(x.claimed)||!integer(x.completedJobs)||!Number.isInteger(x.lastSeason)||x.lastSeason< -1)throw Error('新版经营存档结构无效');
    if(x.studies.some(id=>!studies.some(t=>t.id===id))||new Set(x.studies).size!==x.studies.length)throw Error('传承记录无效');
    const goalIds=['first_job','first_study','vein','population','foundation','legacy'];if(x.claimed.some(id=>!goalIds.includes(id))||new Set(x.claimed).size!==x.claimed.length)throw Error('家族志记录无效');
    const ids=new Set(),people=new Set();for(const j of x.jobs){if(!missions.some(m=>m.id===j.type)||!W.findCharacter(s,j.agent)||!integer(j.started)||!integer(j.ends)||j.ends<=j.started||typeof j.id!=='string'||ids.has(j.id)||people.has(j.agent))throw Error('委托记录无效');ids.add(j.id);people.add(j.agent);}
    if(x.research&&(!studies.some(t=>t.id===x.research.id)||x.studies.includes(x.research.id)||!integer(x.research.started)||!integer(x.research.ends)||x.research.ends<=x.research.started))throw Error('研习记录无效');
    if(x.seasonEvent&&(!integer(x.seasonEvent.index)||x.seasonEvent.index>3||!integer(x.seasonEvent.created)))throw Error('季节议事无效');
  }
  global.ClanExpansion={missions,studies,seasons,events,ensure,attach,agents,busy,goals,action,risk,rewardText,validate};
  if(typeof module!=='undefined')module.exports=global.ClanExpansion;
})(typeof window!=='undefined'?window:globalThis);
