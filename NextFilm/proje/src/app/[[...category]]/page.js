import React from "react"
import HomeContainer from "@/containers/home"
import "@/styles/globals.css"
import "@/styles/reset.css"
import movies from "@/mocks/movies.json"

export default function HomePage({ params }) {
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return <HomeContainer
    selectedCategory={{
      id: params.category?.[0] ?? "",
      movies: selectedCategory ? movies.results.slice(0,7) : [], 
  }}
  />
}
