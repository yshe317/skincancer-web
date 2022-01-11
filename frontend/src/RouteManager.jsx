import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";import Phototake from './pages/Phototake';
import Stack from '@mui/material/Stack';
const RouteManager = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Phototake/>} />
            </Routes>
        </Router>
    )
}
export default RouteManager;