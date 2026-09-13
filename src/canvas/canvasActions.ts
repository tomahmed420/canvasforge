import type { Editor } from 'tldraw'
export type CanvasAction={id:string;label:string;run:(editor:Editor)=>void}
export const createCanvasActions=():CanvasAction[]=>[
{id:'select-all',label:'Select all',run:e=>e.selectAll()},{id:'undo',label:'Undo',run:e=>e.undo()},{id:'redo',label:'Redo',run:e=>e.redo()},{id:'delete',label:'Delete',run:e=>{const ids=e.getSelectedShapeIds();if(ids.length)e.deleteShapes(ids)}},{id:'duplicate',label:'Duplicate',run:e=>{const ids=e.getSelectedShapeIds();if(ids.length)e.duplicateShapes(ids)}},{id:'front',label:'Bring to front',run:e=>{const ids=e.getSelectedShapeIds();if(ids.length)e.bringToFront(ids)}},{id:'back',label:'Send to back',run:e=>{const ids=e.getSelectedShapeIds();if(ids.length)e.sendToBack(ids)}}]
export const isTextEditingTarget=(target:EventTarget|null)=>{const el=target as HTMLElement|null;return !!el&&['INPUT','TEXTAREA'].includes(el.tagName)}
