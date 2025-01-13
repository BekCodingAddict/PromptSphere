"use client";
import Profile from "@components/Profile";
import { useParams, useSearchParams } from "@node_modules/next/navigation";
import { useEffect, useState } from "react";

const UserProfie = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [userPosts, setUserPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();

      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, []);
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and  be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfie;
