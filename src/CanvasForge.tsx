import { useMemo, useState } from 'react'
import { Tldraw } from 'tldraw'
import { Plus, Search, Grid2X2, Star, Trash2, Settings, LayoutTemplate, ArrowLeft, Copy, MoreHorizontal } from 'lucide-react'
import 'tldraw/tldraw.css'

type Board={id:string;name:string;updatedAt:number;favorite?:boolean}
const KEY='canvasforge-boards'
const load=():Board[]=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
const save=(b:Board[])=>localStorage.setItem(KEY,JSON.stringify(b))

export function CanvasForge(){
 const [boards,setBoards]=useState<Board[]>(load); const [active,setActive]=useState<string|null>(null); const [query,setQuery]=useState('')
 const create=()=>{const b={id:crypto.randomUUID(),name:'Untitled board',updatedAt:Date.now()};const next=[b,...boards];setBoards(next);save(next);setActive(b.id)}
 const filtered=useMemo(()=>boards.filter(b=>b.name.toLowerCase().includes(query.toLowerCase())),[boards,query])
 if(active){const b=boards.find(x=>x.id===active);return <div className="board-page"><header className="boardbar"><button className="ghost" onClick={()=>setActive(null)}><ArrowLeft size={18}/></button><strong>{b?.name||'Canvas'}</strong><span className="save-status">Saved locally</span><button className="ghost"><MoreHorizontal size={18}/></button></header><div className="canvas"><Tldraw persistenceKey={'board-'+active}/></div></div>}
 return <div className="dashboard"><aside className="sidebar"><div className="brand">CanvasForge</div><button className="new-board" onClick={create}><Plus size={18}/> New board</button><nav><button className="nav active"><Grid2X2 size={17}/> All boards</button><button className="nav"><Star size={17}/> Favorites</button><button className="nav"><LayoutTemplate size={17}/> Templates</button><button className="nav"><Trash2 size={17}/> Trash</button><button className="nav"><Settings size={17}/> Settings</button></nav><div className="side-note">Private workspace<br/>Unlimited boards</div></aside><main className="content"><div className="dash-head"><div><h1>My boards</h1><p>Your private visual workspace.</p></div><div className="searchbox"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search boards"/></div></div>{filtered.length?<div className="board-grid">{filtered.map(b=><article className="board-card" key={b.id} onClick={()=>setActive(b.id)}><div className="thumb"><div className="shape circle"/><div className="sticky">Start here</div></div><div className="card-row"><div><strong>{b.name}</strong><small>Updated {new Date(b.updatedAt).toLocaleDateString()}</small></div><button className="ghost"><Copy size={15}/></button></div></article>)}</div>:<div className="empty"><h2>{boards.length?'No boards found':'Your canvas is ready'}</h2><p>{boards.length?'Try another search.':'Create your first unlimited workspace.'}</p><button className="new-board" onClick={create}><Plus size={18}/> Create board</button></div>}</main></div>
}