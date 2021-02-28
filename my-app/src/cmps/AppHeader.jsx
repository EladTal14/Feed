import React from 'react'
import { Link } from 'react-router-dom'
export function AppHeader() {
  return (
    <header>
      <nav className="nav-app-header flex column">
        <Link to="/"><span role="img" aria-label="logo">🙏</span></Link>
        <Link to="/">Home</Link>
        <Link to="/template">Template</Link>
      </nav>
    </header>
  )
}
