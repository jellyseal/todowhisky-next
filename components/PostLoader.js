import ContentLoader from "react-content-loader"

const PostLoader = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="80" rx="3" ry="3" width="350" height="6" /> 
    <rect x="0" y="100" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="120" rx="3" ry="3" width="201" height="6" /> 
    <rect x="2" y="7" rx="0" ry="0" width="375" height="62" />
  </ContentLoader>
)

export default PostLoader;
