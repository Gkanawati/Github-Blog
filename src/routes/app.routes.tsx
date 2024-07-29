import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { IssueDetails } from '../pages/IssueDetails'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/issue/:issueNumber" Component={IssueDetails} />
      <Route path="*" Component={Home} />
    </Routes>
  )
}
