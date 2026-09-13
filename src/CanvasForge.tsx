import React, { useMemo, useState } from 'react'
import { Tldraw, Editor, createShapeId } from 'tldraw'
import 'tldraw/tldraw.css'

type Board={id:string;name:string;updatedAt:number;favorite?:boolean;trashedAt?:number}
export const BOARD_KEY='canvasforge-boards'
export const TEMPLATE_KEY='canvasforge-templates'
export const loadBoards=():Board[]=>{try{return JSON.parse(localStorage.getItem(BOARD_KEY)||'[]')}catch{return[]}}
export const loadTemplates=():any[]=>{try{return JSON.parse(localStorage.getItem(TEMPLATE_KEY)||'[]')}catch{return[]}}
export const persist=(key:string,value:any)=>localStorage.setItem(key,JSON.stringify(value))
import { useMemo, useState } from 'react'
import { Plus, Search, Grid2X2, Star, Trash2, Settings, LayoutTemplate, Pencil, X, Check, Copy } from 'lucide-react'
import { BoardCanvas } from './canvas/BoardCanvas'
import './styles.css'

