import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Job } from './pages/Job';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';
import { Skill } from './pages/Skill';

export const AppRouter  = () =>{

    return <BrowserRouter>
        <Header headerTitle='JobsNow' links={[{to:'/jobs',name:'Home'},{to:'/search',name:'search'},{to:'/history',name:'History'}]}/>
        <Routes>
            <Route path='/jobs/:uuid' element={<Job/>}/>
            <Route path='/skills/:uuid' element={<Skill/>}/>
            <Route path='/jobs' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
}