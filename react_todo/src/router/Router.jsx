import {Routes,Route} from "react-router-dom"
import TaskList from "../components/pages/TaskList"
import AddTask from "../components/pages/AddTask"
import Page404 from "../components/pages/Page404"

const Router = () => {
  return(
    <Routes>
    <Route path="/" element={<TaskList />} />
    <Route path="details" element={<AddTask />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
  )
}

export default Router;