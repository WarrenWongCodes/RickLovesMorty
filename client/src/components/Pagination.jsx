import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import '../styles/pagination.scss';

export default function PaginationLink() {
  return (
    <section id="pagination">
      <Pagination size="large" count={10} shape="rounded" />
    </section>
  );
}
