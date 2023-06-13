import { ChangeEvent, useState } from "react";
import { Container } from "../globals";
import { IconScan, IconSearch, IconClose } from "../atoms";

export function Search() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setSearch(searchValue);
  };

  return (
    <div className="Search">
      <Container>
        <div className="Search-container">
          <div>
            <IconSearch />
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Buscar producto"
            />
          </div>
          {search.length > 0 ? (
            <button>
              <IconClose />
            </button>
          ) : (
            <IconScan />
          )}
        </div>
      </Container>
    </div>
  );
}
