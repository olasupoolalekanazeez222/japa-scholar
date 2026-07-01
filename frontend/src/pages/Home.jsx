// ============================================================
// Home Page
// Displays all posts with:
// - Loading simulation
// - Search
// - Country Filter
// - Pathway Filter
// - Pagination
// ============================================================

import { useEffect, useMemo, useState } from "react";

import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Loader from "../components/layout/Loader";

import SearchFilter from "../components/home/SearchFilter";
import PostCard from "../components/home/PostCard";
import Pagination from "../components/home/Pagination";

import { getPosts } from "../data/postStore";

import {
  categories,
  subcategories,
} from "../data/posts";

import "../styles/home.css";

export default function Home() {

  // =====================================
  // Loading
  // =====================================

  const [loading, setLoading] = useState(true);

  // =====================================
  // Search
  // =====================================

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [subcategory, setSubcategory] = useState("");

  // =====================================
  // Pagination
  // =====================================

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  // =====================================
  // Fake backend loading
  // =====================================

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  // =====================================
  // Reset page when filter changes
  // =====================================

  useEffect(() => {

    setCurrentPage(1);

  }, [search, category, subcategory]);

  // =====================================
  // Smart Search
  // =====================================

  const filteredPosts = useMemo(() => {

    const words = search
      .toLowerCase()
      .trim()
      .split(" ")
      .filter(Boolean);

    return getPosts().filter((post) => {

      const text = `
        ${post.title}
        ${post.intro}
        ${post.user}
        ${post.category}
        ${post.subcategory}
      `.toLowerCase();

      const searchMatch =
        words.length === 0 ||
        words.every((word) => text.includes(word));

      const categoryMatch =
        !category ||
        post.category === category;

      const subcategoryMatch =
        !subcategory ||
        post.subcategory === subcategory;

      return (
        searchMatch &&
        categoryMatch &&
        subcategoryMatch
      );

    });

  }, [search, category, subcategory]);

  // =====================================
  // Pagination
  // =====================================

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const start = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    start,
    start + postsPerPage
  );

  // =====================================
  // Loading Screen
  // =====================================

  if (loading) {

    return (
      <>
        <Header />
        <Loader />
        <BottomNavigation />
      </>
    );

  }

  // =====================================
  // Page
  // =====================================

  return (

    <div className="home-page">

      <Header />

      <SearchFilter

        search={search}
        setSearch={setSearch}

        category={category}
        setCategory={setCategory}

        subcategory={subcategory}
        setSubcategory={setSubcategory}

        categories={categories}
        subcategories={subcategories}

      />

      <main className="home-content">

        {
          currentPosts.length === 0 ?

            <div className="empty">

              <h2>No Posts Found</h2>

              <p>

                Try another search.

              </p>

            </div>

          :

          currentPosts.map((post)=>(

            <PostCard

              key={post.id}

              post={post}

            />

          ))

        }

      </main>

      <Pagination

        currentPage={currentPage}

        totalPages={totalPages}

        setCurrentPage={setCurrentPage}

      />

      <BottomNavigation/>

    </div>

  );

}