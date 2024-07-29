import { combineSlices } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
export const rootReducer = combineSlices({
  contacts: contactsReducer,
  filters: filtersReducer,
});
