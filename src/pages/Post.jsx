import React, { useCallback, useEffect, useState } from 'react';
import PostBanner from 'components/post/PostBanner';
import { useParams } from 'react-router-dom';
import { getSubjectById } from '../api';
import Share from 'components/post/Share';
import Button from 'components/common/Button';
import styled from 'styled-components';
import PostCount from 'components/post/PostCount';
import PostList from 'components/post/PostList';
import useBrowserSize from 'hooks/useBrowserSize';
import Modal from 'components/common/Modal';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;

  padding: 2%;
`;

const AddQuestionButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Feed = styled.div`
  border: 1px solid var(--brown30);
  border-radius: 16px;
  background-color: var(--brown10);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 70%;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Post = () => {
  const { postId } = useParams();
  const [userData, setUserData] = useState();
  console.log(userData);
  const [shortButton, setShortButton] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const { windowWidth } = useBrowserSize();

  // 창 크기가 바뀔 때 질문 작성 버튼 문구 변경
  window.onresize = function () {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setShortButton(true);
      return;
    }
    setShortButton(false);
  };

  const handleButtonsize = useCallback(() => {
    if (windowWidth <= 767) {
      setShortButton(true);
      return;
    } else {
      setShortButton(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    getSubjectById(postId).then(setUserData);
  }, [postId]);

  useEffect(() => {
    handleButtonsize();
  }, [handleButtonsize]);

  if (!userData) return <></>;
  return (
    <>
      {isModalOpen && (
        <Modal
          userName={userData.name}
          imageSource={userData.imageSource}
          onClick={() => {
            setModalOpen(false);
          }}
        />
      )}
      <PostBanner
        userProfileImage={userData.imageSource}
        userName={userData.name}
      ></PostBanner>
      <PostContainer>
        <Share />
        <Feed>
          <PostCount questionCount={userData.questionCount} />
          <PostList userData={userData} />
        </Feed>
        <AddQuestionButton>
          <Button
            varient="floating"
            width={208}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {shortButton ? '질문작성' : '질문 작성하기'}
          </Button>
        </AddQuestionButton>
      </PostContainer>
    </>
  );
};

export default Post;
