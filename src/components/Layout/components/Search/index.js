import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcccountItem from '~/components/AccountItem';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  // delays searchValue reduce the number of useEffect
  const debounced = useDebounce(searchValue, 700);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    // encodeURIComponent(searchValue): encode special characters into valid characters in the URL
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 400);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        // search result
        <div className={cx('search-result')} tabIndex={'-1'} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>

            {searchResult.map((result) => (
              <AcccountItem key={result.id} data={result} onClick={handleHideResult} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value.trimStart())}
          onFocus={() => {
            if (!searchValue) {
              setSearchResult([]);
            }
            setShowResult(true);
          }}
        />
        {/* btn clear */}
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
        {/* loading */}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        {/* btn search */}
        <button className={cx('search-btn')}>
          <SearchIcon className={cx('search-icon')} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
