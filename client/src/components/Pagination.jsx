import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import '../styles/pagination.scss';

export default function PaginationLink({ pagesAvailable, pageChange }) {
  return (
    <section id="pagination">
      <Pagination
        onChange={(e) => pageChange(e)}
        color="primary"
        size="large"
        count={pagesAvailable ? pagesAvailable.pages : 0}
        shape="rounded"
      />
    </section>
  );
}
