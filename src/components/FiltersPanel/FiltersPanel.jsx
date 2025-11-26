import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  setLocation,
  setVehicleType,
  toggleEquipment,
  resetFilters,
} from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/campersSlice";
import { ICONS } from "../Icons/Icons";
import Css from "./FiltersPanel.module.css";

const EQUIPMENT_OPTIONS = [
  { key: "AC", label: "AC" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bathroom", label: "Bathroom" },
  { key: "TV", label: "TV" },
  { key: "radio", label: "Radio" },
  { key: "refrigerator", label: "Refrigerator" },
  { key: "microwave", label: "Microwave" },
  { key: "gas", label: "Gas" },
  { key: "water", label: "Water" },
];

const VEHICLE_TYPES = [
  { value: "panelTruck", label: "Van", iconKey: "van" },
  { value: "fullyIntegrated", label: "Fully Integrated", iconKey: "fully" },
  { value: "alcove", label: "Alcove", iconKey: "alcove" },
];

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleVehicleTypeClick = (value) => {
    if (filters.vehicleType === value) {
      dispatch(setVehicleType(null));
    } else {
      dispatch(setVehicleType(value));
    }
  };

  const handleEquipmentToggle = (key) => {
    dispatch(toggleEquipment(key));
  };

  const handleSearch = () => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  };

  return (
    <div className={Css.panel}>
      {/* Location */}
      <div className={Css.block}>
        <label className={Css.label}>Location</label>
        <input
          type="text"
          value={filters.location}
          onChange={handleLocationChange}
          placeholder="City, Country"
          className={Css.input}
        />
      </div>

      {/* Vehicle type */}
      <div className={Css.block}>
        <div className={Css.label}>Vehicle type</div>
        <div className={Css.types}>
          {VEHICLE_TYPES.map((type) => {
            const active = filters.vehicleType === type.value;
            const Icon = ICONS[type.iconKey];

            return (
              <button
                key={type.value}
                type="button"
                className={`${Css.typeBtn} ${active ? Css.typeBtnActive : ""}`}
                onClick={() => handleVehicleTypeClick(type.value)}
              >
                <span className={Css.iconWrap}>
                  <Icon className={Css.iconSvg} />
                </span>
                <span className={Css.typeLabel}>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Vehicle equipment */}
      <div className={Css.block}>
        <div className={Css.label}>Vehicle equipment</div>
        <div className={Css.equipmentGrid}>
          {EQUIPMENT_OPTIONS.map((item) => {
            const active = filters.equipment.includes(item.key);
            const EqIcon = ICONS[item.key];

            return (
              <button
                key={item.key}
                type="button"
                className={`${Css.equipBtn} ${
                  active ? Css.equipBtnActive : ""
                }`}
                onClick={() => handleEquipmentToggle(item.key)}
              >
                <span className={Css.iconWrap}>
                  <EqIcon className={Css.iconSvg} />
                </span>
                <span className={Css.equipLabel}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className={Css.actions}>
        <button type="button" className={Css.searchBtn} onClick={handleSearch}>
          Search
        </button>
        <button type="button" className={Css.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
