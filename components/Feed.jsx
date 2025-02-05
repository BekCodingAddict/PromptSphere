"use client";

import { useEffect, useState } from "react";
import PromptCart from "@components/PromptCart";

function PromptCartList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCart
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      const searchedData = data.filter((prompt) => {
        return (
          prompt.prompt.includes(searchText) || prompt.tag.includes(searchText)
        );
      });

      setPosts(searchedData);
    };

    setTimeout(() => {
      fetchPosts();
    }, 500);
  }, [searchText]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <PromptCartList data={posts} handleTagClick={setSearchText} />
    </section>
  );
};

export default Feed;
