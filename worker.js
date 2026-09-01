// Cloudflare Worker + D1 backend for the Seneca East Aura Board.
// Deploy with: wrangler deploy
// Create D1 database, bind it as DB, then run schema.sql against it.

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

function json(body,status=200){return new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json","cache-control":"no-store"}});}
function clientKey(request){
  const ip=request.headers.get("CF-Connecting-IP")||"unknown";
  // Rate-limit key is stored as a SHA-256 hash, not the raw IP.
  return crypto.subtle.digest("SHA-256",new TextEncoder().encode(ip+"|seneca-east-aura-v1")).then(b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join(""));
}

async function leaderboard(env){
  const dbRows=await env.DB.prepare("SELECT name, votes FROM votes ORDER BY votes DESC, name ASC").all();
  const counts=new Map(dbRows.results.map(r=>[r.name,Number(r.votes)]));
  return STAFF.map((s,i)=>({...s,votes:counts.get(s.name)||0,aura:Math.min(99.99,Math.max(1,72+((s.name.length*17+i*13)%2400)/100+(counts.get(s.name)||0)*0.35))}));
}

export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname.startsWith("/api/leaderboard")) return json(await leaderboard(env));
  if(url.pathname==="/api/vote" && request.method==="POST"){
    let body; try{body=await request.json();}catch{return json({error:"Bad JSON"},400);}
    const staff=STAFF.find(s=>s.name===body.name);
    if(!staff) return json({error:"Unknown staff member"},400);
    const key=await clientKey(request);
    const existing=await env.DB.prepare("SELECT voted_at FROM voter_cooldowns WHERE voter_key=?").bind(key).first();
    if(existing){
      const left=Date.now()-Number(existing.voted_at);
      if(left<6*60*60*1000) return json({error:"COOLDOWN",retryAfter:6*60*60*1000-left},429);
    }
    await env.DB.batch([
      env.DB.prepare("INSERT INTO votes(name,votes) VALUES(?,1) ON CONFLICT(name) DO UPDATE SET votes=votes+1").bind(staff.name),
      env.DB.prepare("INSERT INTO voter_cooldowns(voter_key,voted_at) VALUES(?,?) ON CONFLICT(voter_key) DO UPDATE SET voted_at=excluded.voted_at").bind(key,Date.now())
    ]);
    return json({ok:true,leaderboard:await leaderboard(env)});
  }
  if(url.pathname==="/api/leaderboard") return json(await leaderboard(env));
  return env.ASSETS.fetch(request);
 }
};
