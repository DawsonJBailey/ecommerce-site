import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;

// Using this to cache current categories for use 
// in below function so it can know to only run
// if this has changed in state
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

// Memoized version to avoid rerendering
export const selectCategoriesMap = createSelector(
    // Only running stuff below if selectCategories changes
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)