import { Link } from 'react-router-dom'

export const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    <span className="font-bold text-xl">Your Logo</span>
  </Link>
)
