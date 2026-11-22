"use client";
import {useMemo,useState} from "react"; import demo from "@/data/demo.json"; import {adaptWorkout} from "@/lib/adapt";
export default function Home(){
 const [selected,setSelected]=useState<string[]>(["dumbbell","smith","cable","bench"]); const [generated,setGenerated]=useState(false); const [approved,setApproved]=useState<string[]>([]); const [error,setError]=useState("");
 const plan=useMemo(()=>adaptWorkout(selected),[selected]);
 function toggle(id:string){setSelected(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);setGenerated(false);setApproved([]);setError("")}
 function generate(){if(!selected.length){setError("Select at least one piece of equipment before adapting the session.");return}setGenerated(true);setError("")}
 return <main>
  <header><div><p className="eyebrow">TRIPSET / COACH-GUARDED DEMO</p><h1>Keep the program.<br/><em>Change the room.</em></h1><p className="lede">Translate a prescribed strength session into the equipment a traveler actually finds—using explicit substitution rules, not a freshly hallucinated workout.</p></div><aside><span>Tonight</span><strong>{demo.traveler.trip}</strong><small>{demo.traveler.note}</small></aside></header>
  <section className="step"><div className="stepHead"><b>01</b><div><h2>What is in this hotel gym?</h2><p>Photo recognition is simulated. Confirm the detected inventory.</p></div></div><div className="equipment">{demo.equipment.map(e=><button type="button" aria-pressed={selected.includes(e.id)} onClick={()=>toggle(e.id)} key={e.id}><span>{selected.includes(e.id)?"✓":"+"}</span>{e.label}</button>)}</div>{error&&<p role="alert" className="error">{error}</p>}<button className="primary" onClick={generate}>Adapt Tuesday session <span>→</span></button></section>
  <section className="step"><div className="stepHead"><b>02</b><div><h2>Rule-checked travel session</h2><p>{generated?`${plan.filter(x=>x.status==="matched").length} safe matches · ${plan.filter(x=>x.status==="review").length} coach reviews`:`Confirm equipment, then adapt the prescribed session.`}</p></div></div>
  {!generated?<div className="empty"><div>↳</div><p>The original program stays untouched until you generate a travel version.</p></div>:<div className="results">{plan.map((item,i)=><article key={item.id} className={item.status}><div className="num">{String(i+1).padStart(2,"0")}</div><div><small>{item.original}</small><h3>{item.name}</h3><p className="scheme">{item.scheme}</p><p>{item.why}</p></div><button aria-label={`Approve ${item.name}`} disabled={item.status==="review"} className="approve" onClick={()=>setApproved(v=>v.includes(item.id)?v.filter(x=>x!==item.id):[...v,item.id])}>{item.status==="review"?"Needs coach":approved.includes(item.id)?"Approved ✓":"Approve"}</button></article>)}</div>}
  </section>
  <footer><div><p className="eyebrow">SAFETY BOUNDARY</p><strong>No available rule? Stop and ask the coach.</strong></div><p>This prototype does not provide medical advice or autonomous exercise prescription. All people and itinerary details are fictional.</p></footer>
 </main>
}
