const STAFF = [
  {name:'Ashley Aichholz', role:'Fourth Grade Teacher', dept:'Elementary'},
  {name:'Jan Allgyre', role:'Elementary Secretary', dept:'Elementary'},
  {name:'Jillian Baker', role:'Technology/STEM', dept:'Elementary'},
  {name:'Alison Basilone', role:'Social Worker', dept:'District'},
  {name:'Mallory Beamer', role:'Third Grade Teacher', dept:'Elementary'},
  {name:'Rebecca Gwirtz', role:'Spanish Teacher', dept:'High School'},
  {name:'Mikayla Bonham', role:'MS Intervention Specialist', dept:'Middle School'},
  {name:'Brittane Bordner', role:'6th Grade Math', dept:'Middle School'},
  {name:'Hollie Borer', role:'District', dept:'District'},
  {name:'Rick Bowerman', role:'District', dept:'District'},
  {name:'Rebecca Bozo', role:'Second Grade', dept:'Elementary'},
  {name:'Shawn Branham', role:'Maintenance Supervisor', dept:'District'},
  {name:'Renee Bridgford', role:'First Grade', dept:'Elementary'},
  {name:'Brian Bumb', role:'Kindergarten', dept:'Elementary'},
  {name:'Haley Carrick', role:'District', dept:'District'},
  {name:'Nicole Chaffee', role:'Second Grade', dept:'Elementary'},
  {name:'Erica Cok', role:'Literacy Specialist', dept:'Elementary'},
  {name:'David Danhoff', role:'District', dept:'District'},
  {name:'Stephanie Dawson', role:'High School Science Teacher', dept:'High School'},
  {name:'Elizabeth Dennings', role:'High School Art', dept:'High School'},
  {name:'Jill Depinet', role:'Special Education Secretary', dept:'Middle School'},
  {name:'Kevin Dick', role:'Middle School Math', dept:'Middle School'},
  {name:'Justin Drennen', role:'HS PE/Health', dept:'High School'},
  {name:'Katlyn Dutko', role:'Speech Pathologist', dept:'District'},
  {name:'Amy Ferres', role:'Nurse', dept:'Middle School'},
  {name:'Dana Foos', role:'Third Grade', dept:'Elementary'},
  {name:'Emily Forehand', role:'High School Math', dept:'High School'},
  {name:'Stephanie Gildenmeister', role:'Kindergarten', dept:'Elementary'},
  {name:'Jenny Goshe', role:'Educational Aide', dept:'Elementary'},
  {name:'Brooke Griffin', role:'High School Science', dept:'High School'},
  {name:'Steve Hall', role:'High School Math', dept:'High School'},
  {name:'Erin Hayes', role:'Elementary/Middle School Counselor', dept:'District'},
  {name:'Steve Heal', role:'High School History', dept:'High School'},
  {name:'Gregory Hendrix', role:'High School History', dept:'High School'},
  {name:'Angie Hillis', role:'Full Time Substitute Teacher', dept:'District'},
  {name:'Falynne Hoyda', role:'Full Time Sub', dept:'Elementary'},
  {name:'Laurie Hunker', role:'District', dept:'District'},
  {name:'Scott Jones', role:'High School Math Teacher', dept:'High School'},
  {name:'Tiffany Kessler', role:'First Grade', dept:'Elementary'},
  {name:'Whitney Kendrick', role:'Elementary Intervention Specialist', dept:'Elementary'},
  {name:'Julia Kidwell', role:'Elementary Learning Resource Center', dept:'Elementary'},
  {name:'Kacie Kihorany', role:'Preschool', dept:'Elementary'},
  {name:'Kaleigh Krupp', role:'Elementary Learning Resource Center', dept:'Elementary'},
  {name:'Anthony Langhurst', role:'Educational Aide', dept:'District'},
  {name:'Martha Laughlin', role:'High School Learning Resource Center', dept:'High School'},
  {name:'Morgan Looney', role:'High School English', dept:'High School'},
  {name:'Kiara Lucius', role:'Middle/High School Secretary', dept:'High School'},
  {name:'Ellen Lynch', role:'Middle School Health/Science', dept:'Middle School'},
  {name:'Melody Margraf', role:'Title 1', dept:'Elementary'},
  {name:'Diane Mason', role:'Physical Education', dept:'Elementary'},
  {name:'Doug Mason', role:'Athletic Director', dept:'High School'},
  {name:'Cody McClain', role:'FFA and Vo-Ag Instructor', dept:'High School'},
  {name:'Kyle McConnell', role:'Staff', dept:'District'},
  {name:'Jennie Meyers', role:'Food Services Director', dept:'District'},
  {name:'Stephanie Miller', role:'Middle School Math', dept:'Middle School'},
  {name:'Amanda Norman', role:'Educational Aide', dept:'Middle School'},
  {name:'Amanda Nowak', role:'School Psychologist', dept:'District'},
  {name:'George Parks', role:'Middle School Social Studies/PE', dept:'Middle School'},
  {name:'Brandon Perkins', role:'Transportation Director', dept:'District'},
  {name:'Emily Perkins', role:'5th Grade', dept:'Elementary'},
  {name:'Ed Phillips', role:'Middle School Science/PE', dept:'Middle School'},
  {name:'Stephanie Powell', role:'Middle School English', dept:'Middle School'},
  {name:'Holly Pozderac', role:'Preschool', dept:'Elementary'},
  {name:'Milan Pozderac', role:'Agriculture', dept:'High School'},
  {name:'Letisha Rathburn', role:'Educational Aide', dept:'Middle School'},
  {name:'Emma Reed', role:'Elementary Intervention Specialist', dept:'Elementary'},
  {name:'Dawn Reichert', role:'Sixth Grade', dept:'Middle School'},
  {name:'Michelle Reiter', role:'Third Grade', dept:'Elementary'},
  {name:'Lindsay Rellinger', role:'District', dept:'District'},
  {name:'Kristin Rickel', role:'Kindergarten', dept:'Elementary'},
  {name:'Cindi Ritzler', role:'Fourth Grade', dept:'Elementary'},
  {name:'Wendy Robinson', role:'Fourth Grade', dept:'Elementary'},
  {name:'Jay Rogier', role:'Middle School English', dept:'Middle School'},
  {name:'Abby Ruffing', role:'Fifth Grade', dept:'Elementary'},
  {name:'Brenda Ruffing', role:'EMIS Coordinator', dept:'District'},
  {name:'Nicole Schiefer', role:'First Grade', dept:'Elementary'},
  {name:'Andrea Schimpf', role:'District Librarian', dept:'District'},
  {name:'Matt Schock', role:'Staff', dept:'District'},
  {name:'Tyler Schultz', role:'Band Director', dept:'District'},
  {name:'Jennifer Scott', role:'District', dept:'District'},
  {name:'Justin Showman', role:'Bus Mechanic', dept:'District'},
  {name:'Krissy Smith', role:'District', dept:'District'},
  {name:'Winnie Snook', role:'Third Grade Teacher', dept:'Elementary'},
  {name:'Christine Spencer', role:'Pre-School Aide', dept:'Elementary'},
  {name:'Kim Spencer', role:'K-12 Music Education', dept:'District'},
  {name:'Courtney Stockmaster', role:'Pre-School Aide', dept:'Elementary'},
  {name:'Heather Stockmaster', role:'9-12 Guidance', dept:'High School'},
  {name:'Robbyne Sturgill', role:'Fifth Grade', dept:'Elementary'},
  {name:'Rebecca Tobolt', role:'Preschool Aide', dept:'Elementary'},
  {name:'Kasi Turek', role:'High School Learning Resource Center', dept:'High School'},
  {name:'Hannah Wagner', role:'Elementary Art', dept:'Elementary'},
  {name:'Austyn Walker', role:'Security Officer', dept:'District'},
  {name:'Tonya Walker', role:'Sixth Grade', dept:'Middle School'},
  {name:'Leslie Watson', role:'Middle School Learning Resource Center', dept:'Middle School'},
  {name:'Bram White', role:'HS English', dept:'High School'},
  {name:'Jenna Yost', role:'Preschool Teacher', dept:'Elementary'},
  {name:'Amanda Zellner', role:'Elementary Librarian', dept:'Elementary'}
];;
const API = "/api";

let data = [];
let cooldownUntil = Number(localStorage.getItem("auraCooldownUntil") || 0);

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function fmt(n){return Number(n||0).toLocaleString();}
function cooldown(){return Math.max(0,cooldownUntil-Date.now());}
function cooldownText(){
  let ms=cooldown(), h=Math.floor(ms/3600000), m=Math.floor((ms%3600000)/60000), s=Math.floor((ms%60000)/1000);
  if(!ms)return "Vote";
  return `${h}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`;
}

async function load(){
  try {
    const r=await fetch(API+"/leaderboard",{cache:"no-store"});
    if(!r.ok) throw new Error("API");
    data=await r.json();
  } catch(e) {
    // First-run fallback: show all public staff until the database is configured.
    data=STAFF.map((s,i)=>({...s,votes:0,aura:(72+((s.name.length*17+i*13)%2400)/100)}));
  }
  render();
}

function render(){
  const q=document.getElementById("search").value.toLowerCase().trim(), dept=document.getElementById("dept").value;
  let rows=data.filter(s=>(!q||`${s.name} ${s.role}`.toLowerCase().includes(q))&&(dept==="all"||s.dept===dept));
  rows.sort((a,b)=>b.votes-a.votes||b.aura-a.aura||a.name.localeCompare(b.name));
  const all=[...data].sort((a,b)=>b.votes-a.votes||b.aura-a.aura);
  const leader=all[0];
  document.getElementById("staffCount").textContent=data.length;
  document.getElementById("totalVotes").textContent=fmt(data.reduce((x,s)=>x+Number(s.votes||0),0));
  document.getElementById("topScore").textContent=leader?.aura?.toFixed(1)||"0";
  document.getElementById("updated").textContent="Live public totals";

  if(leader) document.getElementById("leaderBox").innerHTML=`<div class="leader-main"><div class="trophy">🏆</div><div><div class="leader-name">${esc(leader.name)}</div><div class="leader-role">${esc(leader.role)} • ${esc(leader.dept)}</div></div><div class="leader-score">${Number(leader.aura).toFixed(1)}</div></div>`;

  const max=Math.max(1,...all.map(s=>Number(s.aura||0)));
  document.getElementById("rows").innerHTML=rows.length?rows.map(s=>{
    const rank=all.findIndex(x=>x.name===s.name)+1, cd=cooldown();
    return `<div class="row">
      <div class="rank">#${rank}</div>
      <div><div class="name">${esc(s.name)}</div><div class="role">${esc(s.role)} • ${esc(s.dept)}</div></div>
      <div class="score">${Number(s.aura).toFixed(1)}</div>
      <div><div class="bar"><i style="width:${Math.min(100,Number(s.aura)/max*100)}%"></i></div><div class="vote"><button ${cd?"disabled":""} onclick="castVote('${esc(s.name)}',1)">⬆ Vote</button><span class="status">${cd?cooldownText():"Vote"}</span></div></div>
    </div>`;
  }).join(""):`<div class="empty">No staff members match that search.</div>`;
}

async function castVote(name,amount){
  if(cooldown()) return;
  try {
    const r=await fetch(API+"/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,amount})});
    const body=await r.json();
    if(!r.ok) throw new Error(body.error||"Vote failed");
    cooldownUntil=Date.now()+6*60*60*1000;
    localStorage.setItem("auraCooldownUntil",cooldownUntil);
    data=body.leaderboard;
    render();
  } catch(e) {
    alert(e.message==="COOLDOWN"?"You can vote again in 6 hours.":"The public voting server isn't connected yet.");
  }
}

document.getElementById("search").addEventListener("input",render);
document.getElementById("dept").addEventListener("change",render);
setInterval(render,1000);
load();
