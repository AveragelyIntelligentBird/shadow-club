import { Navigate, Route, Routes } from "react-router-dom";
import CabalNavigation from "../Navigation";
import HomeFeed from "../Posts";
import CommunityFeed from "../Circles/CommunityFeed";
import Circles from "../Circles";
import "../styles.css";

export default function Cabal() {
    return (
      <div id="cabal" className="h-100">
        <div className="d-flex h-100">
          <div className="bg-gyellow d-none d-md-block">
            <CabalNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Feed" />} />
              <Route path="/Feed" element={<HomeFeed />} />
              <Route path="/Circles" element={<Circles />} />
              <Route path="/Circles/:id/*" element={<CommunityFeed />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }