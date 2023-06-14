import { ChangeEvent, useCallback, useState } from "react";

import { Product } from "../App";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setSearch(searchValue);
  }, []);

  const searchProduct = (productList: Product[]) => {
    return search.length > 0
      ? productList.filter(({ name }) =>
          name.toLocaleLowerCase().includes(search)
        )
      : productList;
  };

  return {
    search,
    setSearch,
    handleChange,
    searchProduct,
  };
};
