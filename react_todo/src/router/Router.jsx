import {Routes,Route} from "react-router-dom"
import TaskList from "../components/pages/TaskList"
import Home from "../components/pages/Home"
import Page404 from "../components/pages/Page404"

const Router = () => {
  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="list" element={<TaskList />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
  )
}

export default Router;