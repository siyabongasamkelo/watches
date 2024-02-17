import { Li, PaginatioButton, Ul } from "./Pagination.styled";

function Pagination({
  totalItems,
  itemsPerPage,
  pageChange,
  currentPage,
  handlePageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers for the pagination component
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Ul className="pagination">
        {currentPage > 1 && (
          <Li>
            <PaginatioButton onClick={() => pageChange("previous")}>
              Previous
            </PaginatioButton>
          </Li>
        )}

        {pageNumbers.map((page) => (
          <Li key={page} className={page === currentPage ? "active" : ""}>
            <PaginatioButton onClick={() => handlePageChange(page)}>
              {page}
            </PaginatioButton>
          </Li>
        ))}

        {currentPage < totalPages && (
          <Li>
            <PaginatioButton onClick={() => pageChange("next")}>
              Next
            </PaginatioButton>
          </Li>
        )}
      </Ul>
    </div>
  );
}

export default Pagination;
