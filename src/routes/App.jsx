import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectTab, setselectTab] = useState("CreatePost");
  return (
    <PostListProvider>
      <div className="Container">
        <Sidebar selectTab={selectTab} setselectTab={setselectTab}></Sidebar>
        <div className="section">
          <Header></Header>
          {selectTab == "Home" ? (
            <CreatePost></CreatePost>
          ) : (
            <PostList></PostList>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
