import {
  CategoriesDropdown,
  Icon,
  SearchBox,
  SearchStyles,
  Searching,
  SearchingResults,
} from "./Search.styles";
import { Search as SearchIcon } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { baseUrl, currencyFormatter, getRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  console.log("search", search);

  const handleSelect = (eventKey) => {
    setCategory(eventKey);
  };

  const fetchItems = async () => {
    try {
      const items = await getRequest(
        `${baseUrl}/item/get?search=${search}&category=${category}`
      );

      return items?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };

  const queryKey = ["items", { category, search }];
  const { data, status, refetch } = useQuery(queryKey, fetchItems);

  useEffect(() => {
    refetch();
  }, [category, search, refetch]);

  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  return (
    <SearchStyles>
      <Searching>
        <SearchBox
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          id="search"
        />
        <CategoriesDropdown>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="classic">Classic</Dropdown.Item>
              <Dropdown.Item eventKey="minimal">Minimal</Dropdown.Item>
              <Dropdown.Item eventKey="advanced">Advanced</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CategoriesDropdown>
        <Icon>
          <SearchIcon />
        </Icon>
      </Searching>
      {search !== "" && (
        <SearchingResults>
          {data?.items?.map((item) => {
            return <SearchItem item={item} />;
          })}
        </SearchingResults>
      )}
    </SearchStyles>
  );
};

export default Search;
