import FeaturedMovie from "@/components/featured-movie/index";
const MovieContainer = ({ movie }) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false} />
  )
}
export default MovieContainer;