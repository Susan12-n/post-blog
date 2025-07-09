import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import CreatePost from './pages/createPost';
import PostForm from './pages/postForm';
import CategoryPosts from "./pages/CategoryPosts";


function App() {
  return (
      <>
      <Navbar />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/category/:id" element={<CategoryPosts />} />
           <Route path="/postform" element={<PostForm />} />
        </Routes>

  

     </>
  );
}

export default App;
