import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Loader from "../components/layout/Loader";

import ProfileCard from "../components/profile/ProfileCard";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePostCard from "../components/profile/ProfilePostCard";

import { getPosts } from "../data/postStore";

import "../styles/profile.css";

export default function Profile() {

  const [loading, setLoading] = useState(true);

  const [tab, setTab] = useState("posts");

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const timer = setTimeout(() => {

      setPosts(getPosts());

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return (
      <>
        <Header />
        <Loader />
        <BottomNavigation />
      </>
    );

  }

  const myPosts = posts.filter(post => post.user === "You");

  const totalViews = myPosts.reduce(
    (sum, post) => sum + post.views,
    0
  );

  const totalComments = myPosts.reduce(
    (sum, post) => sum + post.comments,
    0
  );

  return (

    <>
      <Header />

      <div className="profile-page">

        <ProfileCard />

        <div className="stats">

          <div className="stat-card">

            <h3>{myPosts.length}</h3>

            <p>Posts</p>

          </div>

          <div className="stat-card">

            <h3>{totalComments}</h3>

            <p>Comments</p>

          </div>

          <div className="stat-card">

            <h3>{totalViews}</h3>

            <p>Views</p>

          </div>

        </div>

        <ProfileTabs

          activeTab={tab}

          setActiveTab={setTab}

        />

        {tab === "posts" && (

          <>
            {myPosts.length === 0 ? (

              <div className="empty-card">

                You haven't created any discussions yet.

              </div>

            ) : (

              myPosts.map(post => (

                <ProfilePostCard
                  key={post.id}
                  post={post}
                />

              ))

            )}
          </>

        )}

        {tab === "comments" && (

          <div className="empty-card">

            Your comments will appear here.

          </div>

        )}

        {tab === "settings" && (

          <div className="settings-card">

            <h3>Account Settings</h3>

            <label>Email</label>

            <input
              defaultValue="johnwatson@email.com"
            />

            <label style={{ marginTop: 20 }}>
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
            />

            <button className="save-btn">

              Save Changes

            </button>

          </div>

        )}

      </div>

      <BottomNavigation />

    </>
  );

}