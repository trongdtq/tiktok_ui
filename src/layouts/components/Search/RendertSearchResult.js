import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function RenderSearchResult({ dataResult, onClick }) {
  if (!dataResult || dataResult.length === 0) {
    return;
  }

  return dataResult.map((result) => <AccountItem key={result.id} data={result} onClick={onClick} />);
}

export default memo(RenderSearchResult);
