export const BrandsService = {
    getBrandByBrandId: (brands, brandId) => {
        return brands.find((brand) => brand.id === brandId);
    },
};

export const CategoriesService = {
    getCategoryByCategoryId: (categories, categoryId) => {
        return categories.find((category) => category.id === categoryId);
    },
};
