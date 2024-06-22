import React from "react";
import "./style.css";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app')!);
console.log("test");
root.render(<h1>Hello, world</h1>);