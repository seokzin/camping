import React, { useState } from 'react';
import styled from 'styled-components';

import { Card } from '@/components/';
import youtube from '@/services/youtube';
import { SearchIcon } from '@/assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';

const Search = () => {
  const videos = useSelector((state: RootState) => state.videos.videos);

  const [term, setTerm] = useState('');
  const [data, setData] = useState<any[]>([]);

  const onChange = (e: any) => {
    setTerm(e.target.value);
  };

  const getSearchInfo = async () => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        maxResults: 10,
        regionCode: 'KR',
      },
    });
    return response.data.items;
  };

  const getVideosInfo = async (id: string) => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet, contentDetails',
        id,
      },
    });
    return response.data.items[0];
  };

  const onSubmit = async (e: any) => {
    if (term && (e.type === 'click' || e.key === 'Enter')) {
      const searchData = await getSearchInfo();
      const videosData = await Promise.all(
        searchData.map((item: any) => getVideosInfo(item.id.videoId)),
      );

      const checkedData = videosData.map((item: any) => {
        for (const video of videos) {
          if (video.id === item.id) return { ...item, bookmark: true };
        }

        return { ...item, bookmark: false };
      });

      setData(checkedData);
    }
  };

  return (
    <>
      <Layout>
        <SearchInput
          onChange={onChange}
          onKeyPress={onSubmit}
          value={term}
          placeholder='검색어를 입력해주세요.'
        />
        <SearchIcon width={26} height={26} onClick={onSubmit} />
      </Layout>

      {data?.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  margin-bottom: 1rem;

  border-bottom: 1px solid gray;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.mode.subText};
  }
`;

export default Search;
