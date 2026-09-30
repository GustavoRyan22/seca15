/* ---------- BANCO DE ALIMENTOS (kcal por 100 g/ml já pronto, base TACO aproximada) ---------- */
const F={
 arroz:{n:'Arroz branco',k:128,g:['carb']},
 arroz_int:{n:'Arroz integral',k:124,g:['carb']},
 macarrao:{n:'Macarrão',k:125,g:['carb']},
 mandioca:{n:'Mandioca (aipim)',k:125,g:['carb']},
 batata_doce:{n:'Batata doce',k:77,g:['carb'],t:'Pesar já cozida'},
 batata:{n:'Batata inglesa',k:52,g:['carb'],t:'Pesar já cozida'},
 baroa:{n:'Batata baroa',k:80,g:['carb'],t:'Pesar já cozida'},
 inhame:{n:'Inhame',k:97,g:['carb']},
 abobora:{n:'Abóbora cabotiá',k:48,g:['carb'],t:'Porção grande, poucas calorias'},
 milho:{n:'Milho verde',k:98,g:['carb']},
 cuscuz:{n:'Cuscuz de milho',k:113,g:['carb']},
 quinoa:{n:'Quinoa',k:120,g:['carb']},
 feijao:{n:'Feijão',k:76,g:['leg']},
 feijao_preto:{n:'Feijão preto',k:77,g:['leg']},
 lentilha:{n:'Lentilha',k:93,g:['leg']},
 grao:{n:'Grão-de-bico',k:164,g:['leg']},
 ervilha:{n:'Ervilha',k:80,g:['leg']},
 frango:{n:'Frango grelhado',k:159,g:['prot']},
 sassami:{n:'Frango grelhado (sassami)',k:159,g:['prot']},
 carne_moida:{n:'Carne moída (patinho)',k:219,g:['prot']},
 bife:{n:'Bife grelhado',k:220,g:['prot'],t:'Alcatra ou contrafilé'},
 tilapia:{n:'Peixe grelhado (tilápia)',k:128,g:['prot']},
 salmao:{n:'Salmão',k:229,g:['prot'],t:'Comer no máximo 2x na semana'},
 merluza:{n:'Merluza assada',k:122,g:['prot']},
 lombo:{n:'Lombo suíno assado',k:210,g:['prot']},
 camarao:{n:'Camarão cozido',k:90,g:['prot']},
 atum:{n:'Atum light',k:118,g:['prot','lp'],t:'Em água, escorrido'},
 frango_desf:{n:'Frango desfiado',k:159,g:['lp']},
 ovo:{n:'Ovo cozido',u:['ovo','ovos'],uk:73,g:['lp']},
 ovos_mex:{n:'Ovos mexidos',u:['porção','porções'],uk:106,g:['lp'],t:'3 claras + 1 gema'},
 peru:{n:'Peito de peru',k:100,g:['lp']},
 cottage:{n:'Queijo cottage',k:98,g:['lp','queijo','whey']},
 melao:{n:'Melão',k:29,g:['fruta']},
 morango:{n:'Morango',k:30,g:['fruta']},
 mamao:{n:'Mamão',k:40,g:['fruta']},
 banana:{n:'Banana',k:98,g:['fruta']},
 maca:{n:'Maçã',k:56,g:['fruta']},
 kiwi:{n:'Kiwi',k:51,g:['fruta']},
 melancia:{n:'Melancia',k:33,g:['fruta']},
 abacaxi:{n:'Abacaxi',k:48,g:['fruta']},
 pera:{n:'Pera',k:53,g:['fruta']},
 laranja:{n:'Laranja',k:37,g:['fruta']},
 tangerina:{n:'Tangerina',k:38,g:['fruta']},
 goiaba:{n:'Goiaba',k:54,g:['fruta']},
 manga:{n:'Manga',k:64,g:['fruta']},
 torrada:{n:'Torrada integral',u:['unidade','unidades'],uk:30,g:['pao']},
 pao_forma:{n:'Pão de forma integral',u:['fatia','fatias'],uk:63,g:['pao']},
 pao_frances:{n:'Pão francês',u:['unidade','unidades'],uk:150,g:['pao']},
 tapioca:{n:'Tapioca',k:240,g:['pao'],t:'Goma hidratada'},
 bisc_arroz:{n:'Biscoito de arroz',u:['unidade','unidades'],uk:35,g:['pao']},
 wrap:{n:'Wrap integral',u:['unidade','unidades'],uk:120,g:['pao']},
 aveia:{n:'Aveia em flocos',k:394,g:['cereal']},
 farelo:{n:'Farelo de aveia',k:246,g:['cereal']},
 granola:{n:'Granola sem açúcar',k:420,g:['cereal']},
 flocos_milho:{n:'Flocos de milho sem açúcar',k:370,g:['cereal']},
 chia:{n:'Chia',k:490,g:['cereal']},
 leite_desn:{n:'Leite desnatado',k:35,ml:1,g:['lat']},
 iog_desn:{n:'Iogurte desnatado',k:41,ml:1,g:['lat']},
 iog_grego:{n:'Iogurte grego zero',k:55,g:['lat']},
 leite_semi:{n:'Leite semidesnatado',k:42,ml:1,g:['lat']},
 soja:{n:'Bebida de soja sem açúcar',k:40,ml:1,g:['lat']},
 queijo_branco:{n:'Queijo branco',k:264,g:['queijo'],t:'Minas frescal'},
 requeijao:{n:'Requeijão light',k:180,g:['queijo']},
 ricota:{n:'Ricota',k:140,g:['queijo']},
 minas_light:{n:'Queijo minas light',k:200,g:['queijo']},
 cream_light:{n:'Cream cheese light',k:200,g:['queijo']},
 whey:{n:'Whey protein',k:400,g:['whey']},
 albumina:{n:'Albumina',k:380,g:['whey']},
 iog_prot:{n:'Iogurte proteico',k:60,g:['whey']},
 claras:{n:'Claras cozidas',u:['clara','claras'],uk:17,g:['whey']},
};
const GROUP={carb:'Carboidrato',leg:'Leguminosa',prot:'Proteína',lp:'Proteína do lanche',fruta:'Fruta',pao:'Pão e torradas',cereal:'Cereal',lat:'Leite e iogurte',queijo:'Queijos e pastas',whey:'Proteína em pó'};

/* ---------- DIETAS (dos PDFs) ---------- */
const KCAL={m:{almoco:516,lanche:273,jantar:516,total:1305},f:{almoco:290,lanche:320,jantar:290,total:900}};
const DIETS={
 m:[
  {almoco:[['arroz',165],['feijao',140],['frango',140]],lanche:[['whey',30],['aveia',15],['melao',300]],jantar:[['mandioca',120],['frango',140]]},
  {almoco:[['macarrao',200],['carne_moida',130]],lanche:[['pao_forma',1],['frango_desf',60],['requeijao',20],['morango',205]],jantar:[['arroz',165],['feijao',140],['frango',140]]},
  {almoco:[['arroz',165],['lentilha',120],['bife',130]],lanche:[['torrada',4],['queijo_branco',40],['melao',100]],jantar:[['mandioca',120],['frango',140]]},
  {almoco:[['arroz',165],['milho',110],['tilapia',155]],lanche:[['leite_desn',300],['banana',85],['aveia',20]],jantar:[['macarrao',200],['carne_moida',130]]},
  {almoco:[['arroz',225],['salmao',140]],lanche:[['iog_desn',300],['granola',20],['mamao',135]],jantar:[['inhame',225],['frango',140]]},
  {almoco:[['batata_doce',345],['frango',140]],lanche:[['pao_frances',1],['ovos_mex',1],['requeijao',15]],jantar:[['arroz',165],['feijao',140],['tilapia',155]]},
  {almoco:[['baroa',335],['bife',130]],lanche:[['pao_forma',2],['atum',75],['requeijao',30]],jantar:[['macarrao',200],['frango',140]]},
 ],
 f:[
  {almoco:[['batata',200],['sassami',120]],lanche:[['iog_desn',300],['aveia',20],['morango',250]],jantar:[['batata_doce',130],['sassami',120]]},
  {almoco:[['batata_doce',130],['bife',110]],lanche:[['pao_forma',2],['frango_desf',60],['requeijao',20],['morango',150]],jantar:[['arroz',55],['feijao',70],['sassami',120]]},
  {almoco:[['abobora',260],['tilapia',135]],lanche:[['torrada',5],['queijo_branco',40],['melao',140]],jantar:[['arroz',55],['lentilha',60],['sassami',120]]},
  {almoco:[['mandioca',75],['carne_moida',110]],lanche:[['leite_desn',300],['banana',110],['aveia',25]],jantar:[['batata',200],['carne_moida',110]]},
  {almoco:[['arroz',80],['salmao',120]],lanche:[['leite_desn',300],['granola',30],['mamao',170]],jantar:[['batata_doce',130],['sassami',120]]},
  {almoco:[['inhame',80],['sassami',120]],lanche:[['pao_frances',1],['ovos_mex',1],['requeijao',20],['maca',65]],jantar:[['arroz',80],['bife',110]]},
  {almoco:[['macarrao',75],['carne_moida',110]],lanche:[['pao_forma',2],['atum',75],['requeijao',30],['kiwi',110]],jantar:[['abobora',260],['sassami',120]]},
 ]
};
const MEALS=[['almoco','Almoço'],['lanche','Lanche da tarde'],['jantar','Jantar']];
const VEG_F=['Alface','Cebola','Pepino','Agrião','Chicória','Rabanete','Acelga','Couve','Repolho','Almeirão','Escarola','Rúcula','Berinjela','Espinafre','Alcachofra','Brócolis','Chuchu','Tomate','Palmito','Pimentão','Vagem','Couve-flor','Broto de alfafa','Quiabo'];

/* ---------- TREINOS (dos PDFs) ---------- */
const YT='https://www.youtube.com/watch?v=';
const E=(n,s,v)=>({t:'ex',n,s,v:v?(v.startsWith('http')?v:YT+v):null});
const N=(n)=>({t:'note',n});
const C=(n)=>({t:'cardio',n});
const HIIT_M={ini:{warm:'5 a 8 min de corrida leve',rounds:10,work:30,rest:60,post:'3 min de caminhada leve'},int:{warm:'5 a 8 min de corrida leve',rounds:12,work:30,rest:30,post:'3 min de caminhada leve'},adv:{warm:'5 a 8 min de corrida leve',rounds:25,work:30,rest:15,post:'3 min de caminhada leve'}};
const HIIT_F={ini:{warm:'4 a 6 min de corrida leve',rounds:8,work:30,rest:60,post:'5 min de caminhada leve'},int:{warm:'4 a 6 min de corrida leve',rounds:10,work:30,rest:30,post:'5 min de caminhada leve'},adv:{warm:'4 a 6 min de corrida leve',rounds:20,work:30,rest:15,post:'5 min de caminhada leve'}};
const TAB_M=['Salto com agachamento','Polichinelo','Burpee','Abdominal supra','Corrida parado','Mountain climber (corrida contra o chão)','Avanço','Abdominal remador'];
const TAB_F=['Salto com agachamento','Polichinelo','Meio-burpee (meio-sugado)','Abdominal supra','Corrida parado','Mountain climber (corrida contra o chão)','Avanço','Abdominal remador'];
const W={
 m:{
  casa:{label:'Em casa',info:'Recomenda-se ter elásticos, pesinho (halteres) e step para mais eficácia.',
   A:[N('Alongamento'),E('Agachamento livre','4x 10 a 15','tOHz03j-Pnw'),E('Búlgaro','4x 10 a 15','2y6yH4m_nIY'),E('Afundo','4x 10 a 12','_7XQzpYwpLg'),E('Elevação de quadril','4x 10 a 12','0EPx_-k98nE'),E('Stiff (com pesinho)','4x 10 a 12','u-Ha_ZO4Y_0'),E('Abdução com elástico','4x 10 a 12','ESGNpdYdJlU'),E('Panturrilha em pé','4x 15 · intervalo 30s','CIqh-NvmcSc')],
   B:[N('Alongamento'),E('Flexão de braço','4x 12 a 15','nd7wToepHxM'),E('Crucifixo com halteres','4x 10 a 12','uQIPgsELvgs'),E('Desenvolvimento com halteres','4x 10 a 12','bFuat5b4QFA'),E('Elevação frontal','4x 10 a 12','dmihuuva9KU'),E('Remada sentado','4x 10 a 12','EZ4_pOlhvSc'),E('Tríceps francês unilateral','4x 10 a 12','MK51n80n-q8'),E('Tríceps francês','4x 10 a 12','MfnyIWfbiLI'),E('Abdominal infra','4x 15','x1k5uNcszXk'),E('Abdominal supra','4x 15','swU-01O_hk8'),E('Prancha isométrica','3x 30 seg','ldMjBgrYEfg')]},
  aerobico:{label:'Aeróbico',info:'HIIT: alta intensidade entre 90% e 100% da FC máxima e recuperação entre 60% e 70%. Dura de 15 a 30 min. Faça em dias alternados.',
   A:{kind:'hiit',title:'HIIT na esteira ou na rua',lv:HIIT_M},
   B:{kind:'tabata',title:'HIIT com peso corporal',seq:TAB_M}}
 },
 f:{
  academia:{label:'Academia',info:'Técnica FullBody: 3 séries de 15 a 20 repetições em cada exercício, com 30 a 40 seg de intervalo entre as séries.',
   A:[C('Aquecimento: 10 min de esteira'),N('Alongamento'),E('Supino máquina','3x 15 a 20','_4KDAZ59jkw'),E('Puxador frente','3x 15 a 20','sm8Y2oN0dWw'),E('Rosca direta (barra W)','3x 15 a 20','mVJ09kXWMhg'),C('Esteira, bike ou elíptico: 5 min'),E('Tríceps corda','3x 15 a 20','sgs7VfTbhfk'),E('Elevação lateral','3x 15 a 20','qIq5thMEws0'),E('Máquina flexora','3x 15 a 20','Mqe6s-ueopo'),E('Máquina extensora','3x 15 a 20','BHxNa16VQ7A'),C('Esteira, bike ou elíptico: 5 min'),E('Máquina abdutora','3x 15 a 20','cMtyzQPGTkM'),E('Panturrilha máquina','3x 15 a 20','e-vJ6lvyeyg'),E('Abdominal supra','3x 15 a 20','swU-01O_hk8')],
   B:[C('Aquecimento: 10 min de esteira'),N('Alongamento'),E('Crucifixo inclinado','3x 15 a 20','s71yh_Pxvk8'),E('Remada baixa','3x 15 a 20','yZtFixy6_ek'),E('Rosca alternada (banco 45°)','3x 15 a 20','xcDpo1Ubi5k'),C('Esteira, bike ou elíptico: 5 min'),E('Tríceps testa (barra W)','3x 15 a 20','ERxhR3rxkns'),E('Desenvolvimento máquina','3x 15 a 20','065aBb6e74U'),E('Stiff','3x 15 a 20','u-Ha_ZO4Y_0'),E('Agachamento sumô','3x 15 a 20','SQ480aJMCaE'),C('Esteira, bike ou elíptico: 5 min'),E('Máquina adutora','3x 15 a 20','LPwZtIv2b6g'),E('Avanço','3x 15 a 20','IR4d_FTqHKU'),E('Panturrilha no leg','3x 15 a 20','z-mIKVxAVS4'),E('Abdominal infra','3x 15 a 20','x1k5uNcszXk')]},
  casa:{label:'Em casa',info:'Recomenda-se ter elásticos, pesinho (halteres) e step para mais eficácia.',
   A:[C('Aquecer: 4 a 6 min de corrida leve'),{t:'hiitmini',n:'HIIT: 8 tiros de 30s intensos com 60s de descanso',rounds:8,work:30,rest:60},C('Pós: 5 min de caminhada leve'),E('Elevação de quadril','4x 10 a 12','0EPx_-k98nE'),E('Stiff (com pesinho)','4x 10 a 12','u-Ha_ZO4Y_0'),E('Sumô','4x 10 a 12','SQ480aJMCaE'),E('Abdução com elástico','4x 10 a 12','ESGNpdYdJlU'),E('Panturrilha em pé','4x 15 · intervalo 30s','CIqh-NvmcSc')],
   B:[N('Alongamento'),E('Flexão de braço','4x 12 a 15','nd7wToepHxM'),E('Crucifixo com halteres','4x 10 a 12','uQIPgsELvgs'),E('Elevação lateral','4x 10 a 12','qIq5thMEws0'),E('Elevação frontal','4x 10 a 12','dmihuuva9KU'),E('Remada sentado','4x 10 a 12','EZ4_pOlhvSc'),E('Tríceps francês','4x 10 a 12','MfnyIWfbiLI'),E('Abdominal infra','4x 15','x1k5uNcszXk'),E('Abdominal supra','4x 15','swU-01O_hk8'),E('Prancha isométrica','3x 30 seg','ldMjBgrYEfg')]},
  aerobico:{label:'Aeróbico',info:'HIIT: alta intensidade entre 90% e 100% da FC máxima e recuperação entre 60% e 70%. Dura de 15 a 30 min. Faça em dias alternados.',
   A:{kind:'hiit',title:'HIIT na esteira ou na rua',lv:HIIT_F},
   B:{kind:'tabata',title:'HIIT com peso corporal',seq:TAB_F}}
 }
};
const SCHED={6:{1:'A',2:'B',3:'A',4:'B',5:'A',6:'B'},5:{1:'A',2:'B',3:'A',4:'B',5:'A'},4:{1:'A',2:'B',4:'A',5:'B'},3:{1:'A',3:'B',5:'A'},2:{2:'A',4:'B'}};
const WD=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const WDO=[1,2,3,4,5,6,0];

const RULES=['Mantenha o foco, a dedicação e a disciplina do início ao fim. Tem gente que começa com tudo e aos poucos relaxa no cardápio e na suplementação, e quando percebe já saiu do tratamento.','Siga o cardápio: evite comer fora de hora, comer o que não está no cardápio e inverter alimentos ou refeições. Use as trocas deste app quando precisar variar.','Na fome ou ansiedade: chiclete, gelatina diet zero açúcar, café preto, água, chá, chimarrão, Clight ou limão natural. Folhas verdes, pepino, cebola e tomate (sem tempero) também estão liberados.','Durma no mínimo 6 a 7 horas por dia. Dormir até meia-noite é uma ótima dica.','Tome no mínimo 2 a 3 litros de água por dia. Pode complementar com chá e chimarrão.','Pode tomar líquidos permitidos durante as refeições, mas sem exagero para não atrapalhar a digestão.','Mantenha fora da vista e do alcance os alimentos que engordam.','Se fugir do cardápio, não desanime: retome o controle rápido e compense na atividade física.','Mastigue bem, coma devagar e aprecie a comida.','O paladar leva cerca de 15 dias para se acostumar com sabores novos. Continue mesmo que no início não goste.','Planeje antes de começar: tenha os alimentos em casa para 1 ou 2 semanas.','A maioria dos alimentos está em supermercados grandes ou lojas de produtos naturais.','Se o resultado não estiver vindo como esperado, ajuste com o seu profissional.','Foque no processo, não no resultado. Cardápio, suplementação e atividade física feitos certo trazem o resultado.','Sem dedicação e disciplina nada de concreto acontece. O resultado é do tamanho do seu esforço.'];

/* ---------- ESTADO ---------- */
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parse=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const TODAY=iso(new Date());
const defaults={onboarded:false,name:'',sex:'m',start:TODAY,freq:5,mod:'casa',weight:75,tab:'hoje',dietDay:null,wk:'A',lvl:'ini',eaten:{},done:{},swaps:{},water:{}};
/* ---------- CONTA E NUVEM (Supabase) ---------- */
const CFG=window.SECA15_CONFIG||{};
const CONFIGURED=CFG.SUPABASE_URL&&!/COLE_AQUI/.test(CFG.SUPABASE_URL)&&CFG.SUPABASE_ANON_KEY&&!/COLE_AQUI/.test(CFG.SUPABASE_ANON_KEY);
const sb=CONFIGURED&&window.supabase?window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY):null;
let S=Object.assign({},defaults);
let USER=null,IS_ADMIN=false,BOOTED=false;
let AUTH={mode:'login',email:'',msg:'',err:'',busy:false};
let saveT=null,saveState='';
function cacheKey(){return USER?'seca15:'+USER.id:null}
function save(){
  if(!USER)return;
  try{localStorage.setItem(cacheKey(),JSON.stringify(S))}catch(e){}
  clearTimeout(saveT);saveState='pending';
  saveT=setTimeout(pushState,700);
}
async function pushState(){
  if(!sb||!USER)return;
  const row={user_id:USER.id,email:USER.email,name:S.name||null,sex:S.onboarded?S.sex:null,state:S,updated_at:new Date().toISOString()};
  const {error}=await sb.from('user_state').upsert(row,{onConflict:'user_id'});
  saveState=error?'error':'ok';
  if(error)console.warn('Falha ao salvar',error.message);
}
async function loadState(){
  let cached=null;try{cached=JSON.parse(localStorage.getItem(cacheKey())||'null')}catch(e){}
  const {data,error}=await sb.from('user_state').select('state').eq('user_id',USER.id).maybeSingle();
  const remote=!error&&data?data.state:null;
  S=Object.assign({},defaults,remote||cached||{});
  const {data:adm}=await sb.from('admins').select('user_id').eq('user_id',USER.id).maybeSingle();
  IS_ADMIN=!!adm;
}
async function onSession(session){
  const newUser=session?session.user:null;
  if(newUser&&USER&&newUser.id===USER.id&&BOOTED)return;
  USER=newUser;
  if(USER){await loadState()}else{S=Object.assign({},defaults);IS_ADMIN=false}
  BOOTED=true;render();
}
async function boot(){
  if(!sb){BOOTED=true;render();return}
  sb.auth.onAuthStateChange((ev,session)=>{
    if(ev==='PASSWORD_RECOVERY'){AUTH={mode:'newpass',email:'',msg:'',err:'',busy:false};USER=session?.user||null;BOOTED=true;render();return}
    if(AUTH.mode==='newpass'&&ev!=='SIGNED_OUT')return;
    setTimeout(()=>onSession(session),0);
  });
  const {data}=await sb.auth.getSession();
  if(AUTH.mode!=='newpass')await onSession(data.session);
}
function authMsg(e){
  const m=(e&&e.message||'').toLowerCase();
  if(m.includes('invalid login'))return 'E-mail ou senha incorretos.';
  if(m.includes('email not confirmed'))return 'Confirme seu e-mail antes de entrar. Procure a mensagem na caixa de entrada ou no spam.';
  if(m.includes('already registered')||m.includes('already been registered'))return 'Este e-mail já tem cadastro. Use Entrar ou Esqueci minha senha.';
  if(m.includes('password')&&m.includes('6'))return 'A senha precisa ter pelo menos 6 caracteres.';
  if(m.includes('rate limit')||m.includes('seconds'))return 'Muitas tentativas seguidas. Espere um minuto e tente de novo.';
  if(m.includes('invalid')&&m.includes('email'))return 'Esse e-mail não parece válido.';
  return 'Não deu certo: '+(e&&e.message||'erro desconhecido')+'.';
}
async function authSubmit(form){
  const f=new FormData(form),email=(f.get('email')||'').trim(),pass=f.get('pass')||'',pass2=f.get('pass2')||'';
  AUTH.email=email;AUTH.err='';AUTH.msg='';
  const redirect=location.origin+location.pathname;
  if(AUTH.mode!=='newpass'&&!/^\S+@\S+\.\S+$/.test(email)){AUTH.err='Digite um e-mail válido.';return render()}
  if((AUTH.mode==='signup'||AUTH.mode==='newpass')&&pass.length<6){AUTH.err='A senha precisa ter pelo menos 6 caracteres.';return render()}
  if((AUTH.mode==='signup'||AUTH.mode==='newpass')&&pass!==pass2){AUTH.err='As duas senhas não são iguais.';return render()}
  AUTH.busy=true;render();
  let r;
  if(AUTH.mode==='login')r=await sb.auth.signInWithPassword({email,password:pass});
  else if(AUTH.mode==='signup'){
    r=await sb.auth.signUp({email,password:pass,options:{emailRedirectTo:redirect}});
    if(!r.error&&!r.data.session){AUTH={mode:'check',email,msg:'',err:'',busy:false};return render()}
  }
  else if(AUTH.mode==='forgot'){
    r=await sb.auth.resetPasswordForEmail(email,{redirectTo:redirect});
    if(!r.error){AUTH={mode:'login',email,msg:'Se existir uma conta com esse e-mail, enviamos um link para criar uma nova senha.',err:'',busy:false};return render()}
  }
  else if(AUTH.mode==='newpass'){
    r=await sb.auth.updateUser({password:pass});
    if(!r.error){AUTH={mode:'login',email:'',msg:'',err:'',busy:false};history.replaceState(null,'',location.pathname);const {data}=await sb.auth.getSession();BOOTED=false;await onSession(data.session);return}
  }
  AUTH.busy=false;
  if(r&&r.error)AUTH.err=authMsg(r.error);
  render();
}
async function logout(){clearTimeout(saveT);if(saveState==='pending')await pushState();await sb.auth.signOut();sheet=null;renderLayer();USER=null;S=Object.assign({},defaults);AUTH={mode:'login',email:'',msg:'',err:'',busy:false};render()}

function vAuth(){
  const M=AUTH.mode;
  if(!CONFIGURED)return `<div class="section" style="padding-top:24px"><div class="brand" style="font-size:26px">Seca <b>15</b></div><h1 style="margin-top:14px">Falta conectar o banco de dados</h1>
    <p class="muted">Abra o arquivo <b>config.js</b> e cole a URL e a chave <i>anon</i> do seu projeto Supabase. O passo a passo está no arquivo LEIA-ME.</p></div>`;
  if(M==='check')return `<div class="section" style="padding-top:24px"><div class="brand" style="font-size:26px">Seca <b>15</b></div><h1 style="margin-top:14px">Confirme seu e-mail</h1>
    <p>Enviamos um link para <b>${esc(AUTH.email)}</b>. Abra o e-mail e toque no link para ativar sua conta. Se não aparecer em alguns minutos, olhe o spam.</p>
    <button class="btn ghost block" data-act="amode" data-m="login">Já confirmei, quero entrar</button></div>`;
  const T={login:['Entrar','Acesse seu protocolo de 15 dias.','Entrar'],signup:['Criar conta','Crie seu acesso para salvar seu progresso em qualquer aparelho.','Criar conta'],forgot:['Esqueci minha senha','Digite seu e-mail e enviaremos um link para criar uma senha nova.','Enviar link'],newpass:['Nova senha','Escolha uma senha nova para sua conta.','Salvar nova senha']}[M];
  return `<div class="section" style="padding-top:24px"><div class="brand" style="font-size:26px">Seca <b>15</b></div>
    <h1 style="margin-top:14px">${T[0]}</h1><p class="muted" style="margin:0">${T[1]}</p></div>
  <form class="stack" id="authform" novalidate>
    ${M!=='newpass'?`<div><label class="eyebrow" for="a-email" style="display:block;margin-bottom:6px">E-mail</label><input id="a-email" name="email" type="email" autocomplete="email" inputmode="email" value="${esc(AUTH.email)}" placeholder="voce@email.com"></div>`:''}
    ${M!=='forgot'?`<div><label class="eyebrow" for="a-pass" style="display:block;margin-bottom:6px">${M==='newpass'?'Nova senha':'Senha'}</label><input id="a-pass" name="pass" type="password" autocomplete="${M==='login'?'current-password':'new-password'}" placeholder="${M==='login'?'Sua senha':'Mínimo de 6 caracteres'}"></div>`:''}
    ${M==='signup'||M==='newpass'?`<div><label class="eyebrow" for="a-pass2" style="display:block;margin-bottom:6px">Repita a senha</label><input id="a-pass2" name="pass2" type="password" autocomplete="new-password"></div>`:''}
    ${AUTH.err?`<div class="tip" style="background:var(--bad-soft)" role="alert"><span>${esc(AUTH.err)}</span></div>`:''}
    ${AUTH.msg?`<div class="tip" style="background:var(--good-soft)" role="status"><span>${esc(AUTH.msg)}</span></div>`:''}
    <button type="submit" class="btn block" style="padding:15px" ${AUTH.busy?'disabled':''}>${AUTH.busy?'Aguarde…':T[2]}</button>
    ${M==='login'?`<button type="button" class="btn ghost block" data-act="amode" data-m="signup">Não tenho conta, quero criar</button><button type="button" class="linkbtn" data-act="amode" data-m="forgot">Esqueci minha senha</button>`:''}
    ${M==='signup'||M==='forgot'?`<button type="button" class="btn ghost block" data-act="amode" data-m="login">Voltar para Entrar</button>`:''}
  </form>`;
}

/* ---------- PAINEL DO ADMIN ---------- */
let ADM={rows:null,err:'',q:''};
async function loadAdmin(){
  ADM.err='';const {data,error}=await sb.from('user_state').select('email,name,sex,state,created_at,updated_at').order('created_at',{ascending:false});
  if(error)ADM.err=error.message;else ADM.rows=data;render();
}
function vAlunos(){
  if(!ADM.rows&&!ADM.err){loadAdmin();return `<div class="section"><h1>Alunos</h1><p class="muted">Carregando…</p></div>`}
  if(ADM.err)return `<div class="section"><h1>Alunos</h1><div class="tip" style="background:var(--bad-soft)"><span>${esc(ADM.err)}</span></div></div>`;
  const rows=ADM.rows,q=ADM.q.toLowerCase();
  const list=rows.filter(r=>!q||(r.name||'').toLowerCase().includes(q)||(r.email||'').toLowerCase().includes(q));
  const nm=rows.filter(r=>r.sex==='m').length,nf=rows.filter(r=>r.sex==='f').length;
  const since=d=>{const days=Math.floor((Date.now()-new Date(d))/864e5);return days<=0?'hoje':days===1?'ontem':`há ${days} dias`};
  const day=r=>{const st=r.state&&r.state.start;if(!st)return '·';const n=Math.floor((parse(TODAY)-parse(st))/864e5)+1;return n<1?'não começou':n>15?'concluiu':`dia ${n}`};
  return `<div class="section"><div class="eyebrow">Só você vê esta aba</div><h1>Alunos</h1></div>
  <div class="stack">
    <div class="row" style="gap:10px">${[['Cadastros',rows.length],['Masculino',nm],['Feminino',nf]].map(([l,v])=>`<div class="card" style="flex:1;padding:12px"><div class="eyebrow">${l}</div><div style="font-family:var(--f-display);font-size:26px;font-weight:800">${v}</div></div>`).join('')}</div>
    <input type="text" id="adm-q" placeholder="Buscar por nome ou e-mail" value="${esc(ADM.q)}" data-adm="q">
    <div class="card" style="padding:0;overflow:hidden">${list.length?list.map(r=>`<div class="ex"><span class="dot" style="width:32px;height:32px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font-weight:700;flex:0 0 auto">${esc(((r.name||r.email||'?')[0]).toUpperCase())}</span>
      <div class="nm"><b>${esc(r.name||'Sem cadastro ainda')}</b><span style="font-family:var(--f-body)">${esc(r.email||'')}</span></div>
      <div style="text-align:right;font-size:12px"><div style="font-weight:600">${r.sex==='m'?'Masc.':r.sex==='f'?'Fem.':'·'} · ${day(r)}</div><div class="muted">ativo ${since(r.updated_at)}</div></div></div>`).join(''):`<p class="muted" style="padding:16px;margin:0">Nenhum aluno encontrado.</p>`}</div>
    <button class="btn ghost block" data-act="admreload">Atualizar lista</button>
  </div>`;
}

function progDay(){return Math.floor((parse(TODAY)-parse(S.start))/864e5)+1}
function dietIdx(){const d=progDay();return d<1?0:(d-1)%7}
function mods(){return Object.keys(W[S.sex])}
function modOk(){if(!W[S.sex][S.mod])S.mod='casa';}
function weekParity(dateStr){const st=parse(S.start);const mon=new Date(st);mon.setDate(st.getDate()-((st.getDay()+6)%7));return Math.floor((parse(dateStr)-mon)/(7*864e5))%2===1}
function workoutFor(dateStr){const d=parse(dateStr).getDay();let w=SCHED[S.freq][d]||null;if(w&&(S.freq===5||S.freq===3)&&weekParity(dateStr))w=w==='A'?'B':'A';return w}

/* ---------- UTIL ---------- */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function frac(q){const w=Math.floor(q),h=q-w>=.5;return w===0?(h?'½':'0'):w+(h?'½':'')}
function fmtQty(key,q){const f=F[key];if(f.u)return `${frac(q)} ${q<=1?f.u[0]:f.u[1]}`;return `${q} ${f.ml?'ml':'g'}`}
function kcalOf(key,q){const f=F[key];return f.u?q*f.uk:q*f.k/100}
function equiv(fromKey,q,toKey){const kc=kcalOf(fromKey,q),t=F[toKey];if(t.u){return Math.max(.5,Math.round(kc/t.uk*2)/2)}const g=kc/(t.k/100);return g>=30?Math.round(g/5)*5:Math.max(1,Math.round(g))}
function subsFor(key){const g=F[key].g[0];return Object.keys(F).filter(k=>k!==key&&F[k].g.includes(g)).filter(k=>!(key==='frango'&&k==='sassami')&&!(key==='sassami'&&k==='frango'))}
const ic={
 swap:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4 3 8l4 4"/><path d="M3 8h14"/><path d="m17 20 4-4-4-4"/><path d="M21 16H7"/></svg>',
 ok:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
 play:'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',
 info:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
 stretch:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M4 10l8 1 8-1M12 11v4l-3 6M12 15l3 6"/></svg>',
 run:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="4.5" r="2"/><path d="M6 21l3-6 3 2 1-5 3 3h3M9 11l3-3 3 1"/></svg>',
 timer:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>',
 gear:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
};
const ADMIN_NAV=['alunos','Alunos','<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/>'];
const NAV=[['hoje','Hoje','<path d="M4 11 12 4l8 7v9H4z"/><path d="M10 20v-5h4v5"/>'],['dieta','Dieta','<path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10"/><path d="M17 21V3c-2 1-3 4-3 8h3"/>'],['treino','Treino','<path d="M6 8v8M3 10v4M18 8v8M21 10v4M6 12h12"/>'],['guia','Guia','<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>']];

/* ---------- COMPONENTES ---------- */
function mealCard(sex,di,mk,label,opts={}){
  const items=DIETS[sex][di][mk];
  const rows=items.map(([key,q],i)=>{
    const sid=`${sex}-${di}-${mk}-${i}`,sw=S.swaps[sid];
    const curKey=sw||key,curQ=sw?equiv(key,q,sw):q,f=F[curKey];
    const eid=`${TODAY}|${sid}`,on=!!S.eaten[eid];
    const note=sw?`<span class="was">no lugar de ${esc(F[key].n)} (${fmtQty(key,q)})</span>`:(f.t?`<span>${esc(f.t)}</span>`:'');
    return `<li class="item">${opts.check?`<button class="check ${on?'on':''}" data-act="eat" data-id="${eid}" aria-pressed="${on}" aria-label="Marcar ${esc(f.n)} como comido">${ic.ok}</button>`:''}
      <div class="nm"><b>${esc(f.n)}</b>${note}</div>
      <span class="qty">${fmtQty(curKey,curQ)}</span>
      <button class="swap ${sw?'on':''}" data-act="swap" data-sid="${sid}" data-key="${key}" data-q="${q}" aria-label="Ver substituições de ${esc(F[key].n)}">${ic.swap}</button></li>`}).join('');
  const veg=mk==='lanche'?'':(sex==='m'
    ?`<div class="veg"><b>+ À vontade:</b> folhas (alface, rúcula, agrião) e legumes (brócolis, tomate, abobrinha, chuchu, couve, palmito 1 pedaço). Tempere com sal, limão ou molho zero.</div>`
    :`<div class="veg"><b>+ Vegetais à vontade.</b> Tempere com sal, limão ou molho zero. <button class="linkish" data-act="tab" data-tab="guia" style="color:var(--accent);font-weight:600">Ver lista</button></div>`);
  return `<div class="card meal"><div class="meal-h"><h3>${label}</h3><span class="kcal">${KCAL[sex][mk]} kcal</span></div><ul class="items">${rows}</ul>${veg}</div>`;
}

function weekGrid(){
  const now=new Date(),dow=now.getDay(),mon=new Date(now);mon.setDate(now.getDate()-((dow+6)%7));
  return `<div class="week">${WDO.map((d,i)=>{const dt=new Date(mon);dt.setDate(mon.getDate()+i);const w=workoutFor(iso(dt));
    return `<div class="${w?'':'off'} ${iso(dt)===TODAY?'today':''}">${WD[d]}<b>${w||'·'}</b></div>`}).join('')}</div>`;
}

/* ---------- TELAS ---------- */
function vHoje(){
  const d=progDay(),di=dietIdx(),wk=workoutFor(TODAY),M=W[S.sex][S.mod];
  const dt=new Date().toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
  let head;
  if(d<1)head=`<h1>Começa em ${1-d} ${1-d===1?'dia':'dias'}</h1>`;
  else if(d>15)head=`<h1>Protocolo concluído</h1><p class="muted" style="margin:4px 0 0">Você passou dos 15 dias. O cardápio segue girando nos 7 dias.</p>`;
  else head=`<h1>Dia ${d} <span class="muted" style="font-weight:600">de 15</span></h1>`;
  const bars=Array.from({length:15},(_,i)=>`<i class="${i+1<d?'done':i+1===d?'now':''}"></i>`).join('');
  const eatenCount=MEALS.reduce((a,[mk])=>a+DIETS[S.sex][di][mk].filter((_,i)=>S.eaten[`${TODAY}|${S.sex}-${di}-${mk}-${i}`]).length,0);
  const allCount=MEALS.reduce((a,[mk])=>a+DIETS[S.sex][di][mk].length,0);
  let wcard;
  if(!wk)wcard=`<div class="card flat"><div class="eyebrow">Treino de hoje</div><h2 style="margin-top:4px">Descanso</h2><p class="muted" style="margin:6px 0 0">Na frequência de ${S.freq}x por semana, hoje é dia livre. Mantenha a dieta e a água.</p></div>`;
  else{
    const plan=M[wk];let preview;
    if(Array.isArray(plan))preview=plan.filter(s=>s.t==='ex').slice(0,4).map(s=>esc(s.n)).join(' · ')+(plan.filter(s=>s.t==='ex').length>4?' …':'');
    else preview=esc(plan.title);
    wcard=`<div class="card"><div class="row between"><div class="eyebrow">Treino de hoje · ${esc(M.label)}</div><span class="kcal">${S.freq}x/sem</span></div>
      <h2 style="margin:6px 0 4px">Treino ${wk}</h2><p class="muted" style="margin:0 0 12px;font-size:13.5px">${preview}</p>
      <button class="btn block" data-act="openwk" data-wk="${wk}">Abrir treino</button></div>`;
  }
  const goal=Math.round(S.weight*35/250),cups=S.water[TODAY]||0;
  return `<div class="section">
    <div class="eyebrow">Olá, ${esc(S.name.split(' ')[0])} · ${esc(dt)}</div>${head}
    <div class="days15" aria-label="Progresso de 15 dias">${bars}</div>
  </div>
  <div class="stack">
    ${wcard}
    <div class="row between" style="margin-top:6px"><h2>Dieta ${di+1}</h2><span class="kcal">${eatenCount}/${allCount} itens · ${KCAL[S.sex].total} kcal</span></div>
    <div class="tip">${ic.info}<span>Jejum intermitente: comece a comer a partir do almoço. Café preto e chás sem açúcar estão liberados a qualquer hora.</span></div>
    ${MEALS.map(([mk,l])=>mealCard(S.sex,di,mk,l,{check:true})).join('')}
    <div class="card">
      <div class="row between"><h3>Água</h3><span class="kcal mono">${(cups*0.25).toFixed(2).replace('.',',')} de ${(S.weight*0.035).toFixed(1).replace('.',',')} L</span></div>
      <div class="water" style="margin-top:12px">
        <div class="glasses" aria-label="${cups} copos de 250 ml">${Array.from({length:Math.max(goal,cups)},(_,i)=>`<i class="${i<cups?'full':''}"></i>`).join('')}</div>
        <div class="stepper"><button data-act="water" data-d="-1" aria-label="Tirar um copo">−</button><button data-act="water" data-d="1" aria-label="Adicionar um copo">+</button></div>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12.5px">Copos de 250 ml. Meta de 35 ml por kg (faixa do protocolo: 30 a 50 ml/kg).</p>
    </div>
  </div>`;
}

function vDieta(){
  const di=S.dietDay??dietIdx();
  const chips=DIETS[S.sex].map((_,i)=>`<button class="chip" data-act="dday" data-i="${i}" aria-pressed="${i===di}"><small>Dieta</small>${i+1}</button>`).join('');
  const nsw=Object.keys(S.swaps).filter(k=>k.startsWith(`${S.sex}-${di}-`)).length;
  return `<div class="section"><div class="eyebrow">Cardápio · ${S.sex==='m'?'Masculino':'Feminino'}</div><h1>Dieta ${di+1}</h1>
    <div class="chips" role="group" aria-label="Escolher dieta">${chips}</div></div>
  <div class="stack">
    <div class="tip" style="background:var(--accent-soft)"><span style="color:var(--accent)">${ic.swap}</span><span>Toque no botão de troca de qualquer alimento para ver substituições com a quantidade equivalente em calorias.${nsw?` <b>${nsw} ${nsw===1?'troca ativa':'trocas ativas'} nesta dieta.</b>`:''}</span></div>
    ${MEALS.map(([mk,l])=>mealCard(S.sex,di,mk,l)).join('')}
    <div class="total"><div><div class="eyebrow" style="color:inherit;opacity:.8">Total do dia</div><div class="big">${KCAL[S.sex].total.toLocaleString('pt-BR')} kcal</div></div><div style="font-size:12.5px;text-align:right;max-width:52%">Todos os alimentos pesados já prontos</div></div>
    ${nsw?`<button class="btn ghost block" data-act="clearsw" data-di="${di}">Desfazer trocas desta dieta</button>`:''}
  </div>`;
}

function vTreino(){
  modOk();const M=W[S.sex][S.mod],plan=M[S.wk];
  const mseg=mods().map(k=>`<button data-act="mod" data-m="${k}" aria-pressed="${k===S.mod}">${W[S.sex][k].label}</button>`).join('');
  const wseg=['A','B'].map(k=>`<button data-act="wk" data-wk="${k}" aria-pressed="${k===S.wk}">Treino ${k}</button>`).join('');
  let body='';
  if(Array.isArray(plan)){
    body=`<div class="card" style="padding:0;overflow:hidden">${plan.map((s,i)=>{
      if(s.t==='note'||s.t==='cardio')return `<div class="ex note"><span class="ico">${s.t==='note'?ic.stretch:ic.run}</span><div class="nm"><b>${esc(s.n)}</b></div></div>`;
      if(s.t==='hiitmini')return `<div class="ex note"><span class="ico">${ic.timer}</span><div class="nm"><b style="color:var(--ink)">${esc(s.n)}</b></div><button class="play" data-act="timer" data-kind="mini" data-r="${s.rounds}" data-w="${s.work}" data-rs="${s.rest}">${ic.timer} Timer</button></div>`;
      const id=`${TODAY}|${S.sex}-${S.mod}-${S.wk}-${i}`,on=!!S.done[id];
      return `<div class="ex ${on?'done':''}"><button class="check ${on?'on':''}" data-act="done" data-id="${id}" aria-pressed="${on}" aria-label="Marcar ${esc(s.n)} como feito">${ic.ok}</button>
        <div class="nm"><b>${esc(s.n)}</b><span>${esc(s.s)}</span></div>
        ${s.v?`<a class="play" href="${s.v}" target="_blank" rel="noopener">${ic.play} Execução</a>`:''}</div>`}).join('')}</div>
      <div class="card flat"><div class="row between" style="margin-bottom:10px"><h3>Descanso entre séries</h3>${restLive?`<span class="mono" style="font-weight:600">${restLive}s</span>`:''}</div>
      <div class="restbar">${[30,40,60].map(s=>`<button data-act="rest" data-s="${s}">${s}s</button>`).join('')}${restLive?`<button data-act="reststop">Parar</button>`:''}</div></div>`;
  }else if(plan.kind==='hiit'){
    const L=plan.lv[S.lvl];
    body=`<div class="seg" role="group" aria-label="Nível">${[['ini','Iniciante'],['int','Intermediário'],['adv','Avançado']].map(([k,l])=>`<button data-act="lvl" data-l="${k}" aria-pressed="${k===S.lvl}">${l}</button>`).join('')}</div>
    <div class="card" style="padding:0;overflow:hidden">
      <div class="ex note"><span class="ico">${ic.run}</span><div class="nm"><b>Aquecer: ${L.warm}</b></div></div>
      <div class="ex"><span class="ico" style="color:var(--accent)">${ic.timer}</span><div class="nm"><b>${L.rounds} tiros de ${L.work}s intensos</b><span>${L.rest}s de descanso entre os tiros</span></div></div>
      <div class="ex note"><span class="ico">${ic.run}</span><div class="nm"><b>Pós treino: ${L.post}</b></div></div>
    </div>
    <button class="btn block" data-act="timer" data-kind="hiit">${ic.timer} Iniciar timer HIIT</button>`;
  }else{
    body=`<div class="card"><p style="margin:0 0 10px">Faça os 8 exercícios em sequência, <b>20s de exercício por 10s de intervalo</b>, sem parar. Repita a sequência <b>5 vezes</b>. Média de 20 a 25 min. Comece com alongamento.</p>
      <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px">${plan.seq.map(n=>`<li>${esc(n)}</li>`).join('')}</ol></div>
    <button class="btn block" data-act="timer" data-kind="tabata">${ic.timer} Iniciar timer 20/10</button>`;
  }
  return `<div class="section"><div class="eyebrow">Protocolo de treino · ${S.sex==='m'?'Masculino':'Feminino'}</div><h1>${Array.isArray(plan)?`Treino ${S.wk}`:esc(plan.title)}</h1>
    <div class="seg" role="group" aria-label="Modalidade">${mseg}</div><div class="seg" role="group" aria-label="Treino A ou B">${wseg}</div></div>
  <div class="stack">
    <div class="tip">${ic.info}<span>${esc(M.info)}</span></div>
    ${body}
    <div class="card"><div class="row between" style="margin-bottom:12px"><h3>Sua semana</h3><span class="kcal">A/B por dia</span></div>
      <div class="chips" role="group" aria-label="Treinos por semana" style="margin-bottom:12px">${[2,3,4,5,6].map(n=>`<button class="chip" data-act="freq" data-n="${n}" aria-pressed="${n===S.freq}">${n}x</button>`).join('')}</div>
      ${weekGrid()}
      <p class="muted" style="margin:10px 0 0;font-size:12.5px">${S.freq===5||S.freq===3?'Com '+S.freq+'x, a semana termina no Treino A, então a seguinte começa pelo B. O app já alterna sozinho.':'Recomendado começar na segunda-feira.'}</p></div>
  </div>`;
}

function vGuia(){
  const lit=S.weight;
  return `<div class="section"><div class="eyebrow">Antes de começar</div><h1>Guia do protocolo</h1></div>
  <div class="stack">
    <div class="card"><h3>Quanta água por dia</h3>
      <div class="row" style="margin-top:12px"><label for="w-kg" class="muted" style="font-size:13px;white-space:nowrap">Seu peso (kg)</label><input id="w-kg" type="number" min="30" max="250" value="${lit}" data-act="weight" style="max-width:110px"></div>
      <div class="row" style="margin-top:12px;gap:24px"><div><div class="eyebrow">Mínimo · 30 ml/kg</div><div class="mono" style="font-size:22px;font-weight:600">${(lit*0.03).toFixed(1).replace('.',',')} L</div></div><div><div class="eyebrow">Máximo · 50 ml/kg</div><div class="mono" style="font-size:22px;font-weight:600">${(lit*0.05).toFixed(1).replace('.',',')} L</div></div></div></div>
    <div class="card"><h3>Café e adoçante</h3><p style="margin:8px 0 0;font-size:14px">Café liberado a qualquer hora, preto e amargo ou com adoçante. Evite leite e açúcar no café. Todos os adoçantes estão liberados; os mais indicados são sucralose e stevia.</p></div>
    <h2 style="margin-top:6px">Bebidas</h2>
    <div class="bev">
      <div class="col ok"><h3>Tome à vontade</h3><ul><li>Água natural</li><li>Suco Clight</li><li>Chimarrão</li><li>Chás sem açúcar (hibisco, cidreira, camomila, erva-doce, capim-limão, cavalinha, carqueja e outros)</li><li>Chá verde tipo japonês</li><li>Suco de limão natural sem açúcar</li></ul></div>
      <div class="col mod"><h3>Com moderação</h3><ul><li>Água com gás</li><li>Chá industrializado diet ou light</li><li>Energético zero calorias</li><li>Água gaseificada com sabor</li><li>Chá solúvel</li><li>Refrigerante zero, diet ou light</li></ul></div>
      <div class="col no"><h3>Evite</h3><ul><li>Suco natural</li><li>Sucos industrializados</li><li>Água de coco</li><li>Bebidas energéticas e isotônicas</li><li>Suco em pó tipo Tang</li><li>Refrigerante comum</li></ul></div>
    </div>
    <div class="card"><h3>Liberados na fome ou ansiedade</h3><div class="tags" style="margin-top:10px">${['Chiclete sem açúcar','Gelatina diet','Café preto','Chá','Chimarrão','Clight','Limão natural','Folhas verdes','Pepino','Cebola','Tomate'].map(t=>`<span>${t}</span>`).join('')}</div></div>
    <div class="card" id="veg"><h3>Vegetais à vontade no almoço e jantar</h3><div class="tags" style="margin-top:10px">${VEG_F.map(t=>`<span>${t}</span>`).join('')}</div>
      ${S.sex==='m'?'<p class="muted" style="margin:10px 0 0;font-size:12.5px">No masculino, palmito conta 1 pedaço.</p>':''}</div>
    <div class="card"><h3>Como as trocas funcionam</h3><p style="margin:8px 0 0;font-size:14px">Cada substituição usa a mesma quantidade de calorias do alimento original e fica no mesmo grupo (carboidrato por carboidrato, proteína por proteína, fruta por fruta). Os valores são aproximados, com base na tabela TACO, sempre com o alimento já pronto. Se tiver acompanhamento com nutricionista, confirme com ele as trocas que for usar sempre.</p></div>
    <h2 style="margin-top:6px">Para o resultado acontecer</h2>
    <div class="card"><ol class="rules">${RULES.map(r=>`<li><span>${esc(r)}</span></li>`).join('')}</ol></div>
    ${S.sex==='m'?'':''}
  </div>`;
}

/* ---------- SHEETS ---------- */
let sheet=null;
function openSwap(sid,key,q){sheet={type:'swap',sid,key,q:+q};renderLayer()}
function openSettings(){sheet={type:'set'};renderLayer()}
function renderLayer(){
  const L=document.getElementById('layer');
  if(timer){L.innerHTML=timerView();return}
  if(!sheet){L.innerHTML='';return}
  let inner='';
  if(sheet.type==='swap'){
    const {sid,key,q}=sheet,f=F[key],cur=S.swaps[sid];
    const list=subsFor(key).map(k=>({k,q:equiv(key,q,k)}));
    inner=`<div class="eyebrow">${GROUP[f.g[0]]} · mesmas calorias</div><h2 style="margin-top:4px">Trocar ${esc(f.n)}</h2>
      <div class="orig ${!cur?'':''}"><div><b>${esc(f.n)}</b> <span class="muted" style="font-size:12.5px">original</span></div><div class="row"><span class="qty">${fmtQty(key,q)}</span>${cur?`<button class="use" style="padding:8px 12px;border-radius:10px;background:var(--surface);font-weight:700;font-size:13px" data-act="use" data-k="">Voltar</button>`:`<span class="kcal">em uso</span>`}</div></div>
      ${list.map(s=>`<div class="sub ${cur===s.k?'cur':''}"><div class="nm"><b>${esc(F[s.k].n)}</b>${F[s.k].t?`<span>${esc(F[s.k].t)}</span>`:''}</div><span class="qty">${fmtQty(s.k,s.q)}</span><button class="use" data-act="use" data-k="${s.k}">${cur===s.k?'Em uso':'Usar'}</button></div>`).join('')}
      <p class="muted" style="font-size:12px;margin:12px 0 0">Quantidades com o alimento já pronto. A troca fica salva nesta dieta até você voltar ao original.</p>`;
  }else if(sheet.type==='set'){
    inner=`<h2>Ajustes</h2>
      <div class="stack" style="margin-top:14px">
        <div class="card flat"><div class="eyebrow">Cadastro</div><div style="font-weight:700;margin-top:4px">${esc(S.name||'Sem nome')} · Protocolo ${S.sex==='m'?'masculino':'feminino'}</div>
          <button class="btn ghost block" style="margin-top:10px;background:var(--surface)" data-act="redo">Refazer cadastro</button></div>
        <div><label class="eyebrow" for="st-date" style="display:block;margin-bottom:6px">Início dos 15 dias</label><input id="st-date" type="date" value="${S.start}" data-act="start"></div>
        <div><label class="eyebrow" for="st-kg" style="display:block;margin-bottom:6px">Peso (kg)</label><input id="st-kg" type="number" min="30" max="250" value="${S.weight}" data-act="weight"></div>
        <button class="btn ghost block" data-act="reset">Recomeçar hoje e limpar marcações</button>
        <div class="card flat"><div class="eyebrow">Conta</div><div style="font-weight:600;margin-top:4px;word-break:break-all">${esc(USER?USER.email:'')}</div>
          <button class="btn ghost block" style="margin-top:10px;background:var(--surface)" data-act="logout">Sair da conta</button></div>
        <button class="btn block" data-act="close">Pronto</button>
      </div>`;
  }
  L.innerHTML=`<div class="scrim" data-act="close"><div class="sheet" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="grab"></div>${inner}</div></div>`;
}

/* ---------- TIMER ---------- */
let timer=null,tick=null,actx=null,restLive=0,restInt=null,wake=null;
function beep(f=880,d=.12){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=f;o.connect(g);g.connect(actx.destination);g.gain.setValueAtTime(.25,actx.currentTime);g.gain.exponentialRampToValueAtTime(.001,actx.currentTime+d);o.start();o.stop(actx.currentTime+d)}catch(e){}}
function buildPhases(kind,ds){
  const P=[{k:'prep',l:'Prepare-se',s:10,sub:''}];
  if(kind==='hiit'||kind==='mini'){
    const L=kind==='mini'?{rounds:+ds.r,work:+ds.w,rest:+ds.rs}:W[S.sex][S.mod].A.lv[S.lvl];
    for(let i=1;i<=L.rounds;i++){P.push({k:'work',l:'Corrida intensa',s:L.work,sub:`Tiro ${i} de ${L.rounds}`});if(i<L.rounds)P.push({k:'rest',l:'Descanso',s:L.rest,sub:`Próximo: tiro ${i+1}`})}
  }else{
    const seq=W[S.sex][S.mod].B.seq;
    for(let c=1;c<=5;c++)seq.forEach((n,i)=>{P.push({k:'work',l:n,s:20,sub:`Rodada ${c} de 5 · exercício ${i+1} de 8`});const last=c===5&&i===seq.length-1;if(!last)P.push({k:'rest',l:'Descanso',s:10,sub:`Próximo: ${seq[(i+1)%seq.length]}`})});
  }
  return P;
}
function startTimer(kind,ds){timer={P:buildPhases(kind,ds),i:0,left:10,run:false};try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>wake=w).catch(()=>{})}catch(e){}renderLayer()}
function timerView(){
  const T=timer,p=T.P[T.i]||{k:'end',l:'Treino concluído',s:1,sub:'Faça o pós treino e alongue.'};
  const done=T.i>=T.P.length,frac=done?1:1-T.left/p.s,C=2*Math.PI*46;
  const total=T.P.reduce((a,x)=>a+x.s,0),elapsed=T.P.slice(0,T.i).reduce((a,x)=>a+x.s,0)+(done?0:p.s-T.left);
  return `<div class="timer ${p.k==='work'&&!done?'work':''}" role="dialog" aria-modal="true" aria-label="Timer">
    <div style="width:100%;max-width:420px" class="stack"><div class="row between"><span class="eyebrow muted">${esc(p.sub||'')}</span><span class="mono muted" style="font-size:13px">${fmtT(total-elapsed)} restantes</span></div><div class="bar"><i style="width:${(elapsed/total*100).toFixed(1)}%"></i></div></div>
    <div class="phase">${esc(p.l)}</div>
    <div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-opacity=".12" stroke-width="5"/><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${(C*(1-frac)).toFixed(2)}"/></svg>
      <div class="t"><div class="sec">${done?'✓':T.left}</div></div></div>
    <div class="ctl">${done?`<button class="btn block" data-act="tclose">Fechar</button>`:`<button class="btn ghost" data-act="tclose">Sair</button><button class="btn ghost" data-act="tskip">Pular</button><button class="btn" data-act="ttoggle">${T.run?'Pausar':'Iniciar'}</button>`}</div>
  </div>`;
}
const fmtT=s=>`${Math.floor(s/60)}:${pad(s%60)}`;
function ttoggle(){if(!timer)return;timer.run=!timer.run;beep(660,.05);clearInterval(tick);if(timer.run)tick=setInterval(step,1000);renderLayer()}
function step(){const T=timer;if(!T)return;T.left--;if(T.left<=3&&T.left>0)beep(700,.08);if(T.left<=0){T.i++;if(T.i>=T.P.length){clearInterval(tick);T.run=false;beep(1040,.5)}else{T.left=T.P[T.i].s;beep(T.P[T.i].k==='work'?1040:520,.3)}}renderLayer()}
function tskip(){if(!timer)return;timer.i++;if(timer.i<timer.P.length)timer.left=timer.P[timer.i].s;else{clearInterval(tick);timer.run=false}renderLayer()}
function tclose(){clearInterval(tick);timer=null;try{wake&&wake.release()}catch(e){}renderLayer()}
function startRest(s){clearInterval(restInt);restLive=s;beep(660,.05);restInt=setInterval(()=>{restLive--;if(restLive<=3&&restLive>0)beep(700,.08);if(restLive<=0){clearInterval(restInt);restLive=0;beep(1040,.4)}render()},1000);render()}

/* ---------- CADASTRO ---------- */
let OB=null;
function obInit(){OB={name:S.name||'',sex:S.onboarded?S.sex:null,weight:S.onboarded?S.weight:'',mod:S.onboarded?S.mod:null,freq:S.freq||5,start:S.onboarded?S.start:TODAY,err:''}}
function vCadastro(){
  if(!OB)obInit();
  const modOpts=OB.sex?Object.keys(W[OB.sex]).map(k=>[k,W[OB.sex][k].label]):[];
  const card=(k,t,d)=>`<button type="button" class="pick ${OB.sex===k?'on':''}" data-act="obsex" data-s="${k}" aria-pressed="${OB.sex===k}"><span class="pk-t">${t}</span><span class="pk-d">${d}</span></button>`;
  return `<div class="section" style="padding-top:18px"><div class="brand" style="font-size:26px">Seca <b>15</b></div>
    <h1 style="margin-top:14px">Vamos montar o seu protocolo</h1>
    <p class="muted" style="margin:0">Leva 30 segundos. A dieta e os treinos mudam conforme o protocolo escolhido.</p></div>
  <form class="stack" id="obform" novalidate>
    <div><label class="eyebrow" for="ob-name" style="display:block;margin-bottom:6px">Seu nome</label><input id="ob-name" type="text" autocomplete="given-name" placeholder="Como quer ser chamado(a)" value="${esc(OB.name)}" data-ob="name"></div>
    <div><div class="eyebrow" style="margin-bottom:8px">Protocolo</div>
      <div class="picks">${card('m','Masculino','Dieta de 1.305 kcal · Treino em casa e aeróbico')}${card('f','Feminino','Dieta de 900 kcal · Academia, casa e aeróbico')}</div></div>
    ${OB.sex?`<div><div class="eyebrow" style="margin-bottom:8px">Onde vai treinar</div><div class="seg" role="group" aria-label="Modalidade">${modOpts.map(([k,l])=>`<button type="button" data-act="obmod" data-m="${k}" aria-pressed="${OB.mod===k}">${l}</button>`).join('')}</div></div>`:''}
    <div><div class="eyebrow" style="margin-bottom:8px">Treinos por semana</div><div class="chips" role="group" aria-label="Treinos por semana">${[2,3,4,5,6].map(n=>`<button type="button" class="chip" data-act="obfreq" data-n="${n}" aria-pressed="${n===OB.freq}">${n}x</button>`).join('')}</div></div>
    <div class="row" style="gap:12px;align-items:flex-start">
      <div style="flex:1;min-width:0"><label class="eyebrow" for="ob-kg" style="display:block;margin-bottom:6px">Peso (kg)</label><input id="ob-kg" type="number" inputmode="decimal" min="30" max="250" placeholder="Ex: 72" value="${OB.weight}" data-ob="weight"></div>
      <div style="flex:1.3;min-width:0"><label class="eyebrow" for="ob-date" style="display:block;margin-bottom:6px">Início dos 15 dias</label><input id="ob-date" type="date" value="${OB.start}" data-ob="start"></div>
    </div>
    ${OB.err?`<div class="tip" style="background:var(--bad-soft)" role="alert"><span>${esc(OB.err)}</span></div>`:''}
    <button type="submit" class="btn block" style="padding:15px">Começar meu protocolo</button>
    ${S.onboarded?`<button type="button" class="btn ghost block" data-act="obcancel">Cancelar</button>`:''}
    <p class="muted" style="font-size:12px;margin:0 0 20px;text-align:center">Seu progresso fica salvo na sua conta e aparece em qualquer aparelho.</p>
  </form>`;
}
function obSubmit(){
  const w=+String(OB.weight).replace(',','.');
  if(!OB.name.trim())OB.err='Digite seu nome.';
  else if(!OB.sex)OB.err='Escolha o protocolo masculino ou feminino.';
  else if(!(w>=30&&w<=250))OB.err='Informe um peso entre 30 e 250 kg.';
  else OB.err='';
  if(OB.err){render();return}
  const changed=S.sex!==OB.sex;
  Object.assign(S,{onboarded:true,name:OB.name.trim(),sex:OB.sex,weight:w,mod:OB.mod||'casa',freq:OB.freq,start:OB.start||TODAY,tab:'hoje',dietDay:null,wk:'A'});
  if(changed){S.swaps={};S.eaten={};S.done={}}
  OB=null;save();render();window.scrollTo(0,0);
}

/* ---------- RENDER ---------- */
function render(){
  const nav=document.querySelector('.nav');
  if(!BOOTED){document.getElementById('app').innerHTML='<div class="section" style="padding-top:40px"><div class="brand" style="font-size:26px">Seca <b>15</b></div><p class="muted">Carregando…</p></div>';nav.hidden=true;return}
  if(!USER||AUTH.mode==='newpass'){document.getElementById('app').innerHTML=vAuth();nav.hidden=true;return}
  if(!S.onboarded||OB){document.getElementById('app').innerHTML=vCadastro();document.querySelector('.nav').hidden=true;return}
  document.querySelector('.nav').hidden=false;
  modOk();
  const views={hoje:vHoje,dieta:vDieta,treino:vTreino,guia:vGuia,alunos:vAlunos};if(S.tab==='alunos'&&!IS_ADMIN)S.tab='hoje';
  const navItems=IS_ADMIN?NAV.concat([ADMIN_NAV]):NAV;document.querySelector('.nav .in').style.gridTemplateColumns=`repeat(${navItems.length},1fr)`;
  const y=window.scrollY;
  document.getElementById('app').innerHTML=`<header class="top"><div class="brand">Seca <b>15</b></div>
    <button class="who" data-act="settings" aria-label="Abrir ajustes"><span class="dot">${esc((S.name||'?').trim().charAt(0).toUpperCase())}</span><span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(S.name.split(' ')[0])}</span> <span class="muted" style="font-weight:500">${S.sex==='m'?'Masc.':'Fem.'}</span> ${ic.gear}</button></header>${views[S.tab]()}`;
  document.getElementById('nav').innerHTML=navItems.map(([k,l,p])=>`<button data-act="tab" data-tab="${k}" ${S.tab===k?'aria-current="page"':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>${l}</button>`).join('');
  window.scrollTo(0,y);
}
function go(tab){S.tab=tab;save();render();window.scrollTo(0,0)}

document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,d=b.dataset;
  if(b.tagName==='INPUT')return;
  switch(a){
    case 'tab':go(d.tab);if(d.tab==='guia'&&b.classList.contains('linkish'))setTimeout(()=>document.getElementById('veg')?.scrollIntoView({block:'start'}),50);break;
    case 'eat':S.eaten[d.id]=!S.eaten[d.id];if(!S.eaten[d.id])delete S.eaten[d.id];save();render();break;
    case 'done':S.done[d.id]=!S.done[d.id];if(!S.done[d.id])delete S.done[d.id];save();render();break;
    case 'swap':openSwap(d.sid,d.key,d.q);break;
    case 'use':if(d.k)S.swaps[sheet.sid]=d.k;else delete S.swaps[sheet.sid];save();render();renderLayer();break;
    case 'clearsw':Object.keys(S.swaps).filter(k=>k.startsWith(`${S.sex}-${d.di}-`)).forEach(k=>delete S.swaps[k]);save();render();break;
    case 'dday':S.dietDay=+d.i;save();render();break;
    case 'mod':S.mod=d.m;save();render();break;
    case 'wk':S.wk=d.wk;save();render();break;
    case 'lvl':S.lvl=d.l;save();render();break;
    case 'freq':S.freq=+d.n;save();render();break;
    case 'openwk':S.wk=d.wk;go('treino');break;
    case 'water':{const c=Math.max(0,(S.water[TODAY]||0)+ +d.d);S.water[TODAY]=c;save();render();break}
    case 'settings':openSettings();break;
    case 'sex':S.sex=d.s;S.dietDay=null;modOk();save();render();renderLayer();break;
    case 'reset':S.start=TODAY;S.eaten={};S.done={};S.water={};S.dietDay=null;save();render();renderLayer();break;
    case 'close':sheet=null;renderLayer();break;
    case 'amode':AUTH.mode=d.m;AUTH.err='';AUTH.msg='';render();break;
    case 'logout':logout();break;
    case 'admreload':ADM.rows=null;render();break;
    case 'timer':startTimer(d.kind,d);break;
    case 'ttoggle':ttoggle();break;
    case 'tskip':tskip();break;
    case 'tclose':tclose();break;
    case 'rest':startRest(+d.s);break;
    case 'obsex':OB.sex=d.s;if(!OB.mod||!W[OB.sex][OB.mod])OB.mod='casa';OB.err='';render();break;
    case 'obmod':OB.mod=d.m;render();break;
    case 'obfreq':OB.freq=+d.n;render();break;
    case 'obcancel':OB=null;render();break;
    case 'redo':sheet=null;renderLayer();obInit();render();window.scrollTo(0,0);break;
    case 'reststop':clearInterval(restInt);restLive=0;render();break;
  }
});
document.addEventListener('change',e=>{
  const t=e.target;if(!t.dataset.act)return;
  if(t.dataset.act==='weight'){const v=+t.value;if(v>=30&&v<=250){S.weight=v;save();render();if(sheet)renderLayer()}}
  if(t.dataset.act==='start'&&t.value){S.start=t.value;S.dietDay=null;save();render()}
});
document.addEventListener('input',e=>{const k=e.target.dataset.ob;if(k&&OB)OB[k]=e.target.value;if(e.target.dataset.adm){ADM.q=e.target.value;const pos=e.target.selectionStart;render();const el=document.getElementById('adm-q');if(el){el.focus();el.setSelectionRange(pos,pos)}}});
document.addEventListener('submit',e=>{if(e.target.id==='obform'){e.preventDefault();obSubmit()}if(e.target.id==='authform'){e.preventDefault();authSubmit(e.target)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(timer)tclose();else if(sheet){sheet=null;renderLayer()}}});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&saveState==='pending'){clearTimeout(saveT);pushState()}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
render();boot();
