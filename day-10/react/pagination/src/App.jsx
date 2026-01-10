import Pagination from "./components/Pagination";
import InfiniteFeed from "./components/InfiniteFeed";
export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <Pagination />
       <InfiniteFeed />
    </div>
  );
}
