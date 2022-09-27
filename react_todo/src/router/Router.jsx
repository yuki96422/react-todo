import {Routes,Route} from "react-router-dom"
import TodoList from "../components/pages/TodoList"
import Home from "../components/pages/Home"
import Page404 from "../components/pages/Page404"


const Router = () => {
    return(
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="list" element={<TodoList />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    )
  }

export default Router;