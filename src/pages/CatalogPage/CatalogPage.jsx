import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  selectCampers,
  selectCampersLoading,
  selectCampersHasMore,
  selectCampersPage,
} from "../../redux/campersSlice.js";
import Loader from "../../components/Loader/Loader.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel.jsx";
import Css from "./CatalogPage.module.css";

export default function Catalog() {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectCampersLoading);
  const hasMore = useSelector(selectCampersHasMore);
  const page = useSelector(selectCampersPage);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: page + 1, limit: 4 }));
  };

  return (
    <section className={Css.catalog}>
      {isLoading && <Loader />}

      <div className={Css.catalogInner}>
        <div className={Css.catalogLayout}>
          <aside className={Css.catalogFilters}>
            <FiltersPanel />
          </aside>
          <div className={Css.catalogList}>
            {Array.isArray(campers) &&
              campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}

            {hasMore &&
              !isLoading &&
              Array.isArray(campers) &&
              campers.length > 0 && (
                <button
                  className={Css.catalogLoadMore}
                  onClick={handleLoadMore}
                >
                  Load more
                </button>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
