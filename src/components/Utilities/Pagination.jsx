const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  const handleLastPage = () => {
    {
      page >= lastPage ? null : setPage((prevState) => (prevState = lastPage));
      scrollTop();
    }
  };
  const handleFirstPage = () => {
    setPage((prevState) => prevState - page + 1);
    scrollTop();
  };
  return (
    <div className="flex items-center justify-center px-4 py-10 gap-3">
      {page <= 1 ? (
        <button className="bg-color-secondary px-3 h-8 text-md font-medium text-color-primary rounded-ss-lg dark:text-gray-400 hover:text-color-accent">
          Prev
        </button>
      ) : (
        <button
          onClick={handlePrevPage}
          className="bg-color-secondary px-3 h-8 text-md font-medium text-color-primary rounded-ss-lg dark:text-gray-400 hover:text-color-accent"
        >
          Prev
        </button>
      )}

      <h3 className="text-color-primary">
        {page} of {lastPage}
      </h3>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="bg-color-secondary px-3 h-8 text-md font-medium text-color-primary rounded-ss-lg   dark:bg-gray-800 dark: dark:text-gray-400 hover:text-color-accent"
        >
          Next
        </button>
      )}

      <button
        onClick={handleLastPage}
        className="right-10 underline absolute px-3 h-8 text-sm font-medium text-color-primary rounded-ss-lg   dark:bg-gray-800 dark: dark:text-gray-400 hover:text-color-accent"
      >
        Last
      </button>

      <button
        onClick={handleFirstPage}
        className="left-10 underline absolute px-3 h-8 text-sm font-medium text-color-primary rounded-ss-lg dark:bg-gray-800 dark: dark:text-gray-400 hover:text-color-accent"
      >
        First
      </button>
    </div>
  );
};

export default Pagination;
