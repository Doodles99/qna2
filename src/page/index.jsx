import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='status-bar'>
        <div className='iphone-x'>
          <div className='left-side'>
            <div className='time'>
              <div className='colon' />
            </div>
          </div>
          <div className='right-side'>
            <div className='wifi' />
            <div className='battery' />
            <div className='mobile-signal' />
          </div>
        </div>
        <div className='left-side-1'>
          <div className='time-2'>
            <div className='colon-3' />
          </div>
        </div>
        <div className='right-side-4'>
          <div className='wifi-5' />
          <div className='battery-6' />
          <div className='mobile-signal-7' />
        </div>
      </div>
      <div className='flex-row-da'>
        <div className='header'>
          <div className='header-8'>
            <div className='icon-chevron-left'>
              <div className='chevron-left-thin' />
            </div>
            <span className='qna'>QnA</span>
          </div>
          <div className='icon-chevron-left-9'>
            <div className='chevron-left-thin-a' />
          </div>
          <span className='title'>Title</span>
        </div>
        <span className='title-b'>Title</span>
      </div>
      <div className='flex-row'>
        <div className='search'>
          <input className='search-input' />
          <div className='search-c' />
          <span className='label'>Search</span>
        </div>
        <div className='container'>
          <div className='filter'>
            <div className='vector' />
          </div>
        </div>
      </div>
      <div className='flex-row-bac'>
        <span className='text-5'>페이지 번호</span>
        <span className='text-6'>제목</span>
        <span className='text-7'>작성자</span>
      </div>
      <div className='flex-row-d'>
        <div className='more-horizontal'>
          <div className='vector-e' />
          <div className='vector-f' />
        </div>
        <span className='text-8'>1</span>
        <span className='text-9'>적립 관련 오류</span>
        <span className='text-a'>미스터 블루</span>
      </div>
      <div className='task'>
        <span className='span'>2</span>
        <div className='dot'>
          <div className='flex-row-db'>
            <span className='trash-can-inventory'>쓰레기통 재고량</span>
            <span className='cleaning-sound'>청소리</span>
          </div>
          <div className='flex-row-a'>
            <span className='loyalty-points-expiration'>적립금 만료 기한</span>
            <span className='environmental-man'>환경맨</span>
          </div>
        </div>
      </div>
      <div className='task-10'>
        <span className='span-11'>3</span>
        <div className='dot-12'>
          <div className='flex-row-bb'>
            <span className='points-exchange-method'>포인트 교환 방법</span>
            <span className='hot-pants'>화끈한 바지</span>
          </div>
          <div className='flex-row-13'>
            <span className='commission-inquiry'>수수료 문의</span>
            <span className='tomorrow-loyalty-king'>내일은 적립왕</span>
          </div>
        </div>
      </div>
      <div className='flex-row-ea'>
        <div className='task-14'>
          <span className='span-15'>4</span>
          <div className='dot-16' />
        </div>
        <span className='gps-abnormal'>GPS 이상</span>
        <span className='unique-nickname'>신박한 닉네임</span>
      </div>
      <div className='task-17'>
        <span className='number-5'>5</span>
        <div className='dot-18'>
          <span className='guardian'>지킴이</span>
          <span className='qr-not-recognized'>QR 인식 불가</span>
        </div>
      </div>
      <div className='task-19'>
        <span className='number-6'>6</span>
        <div className='dot-1a' />
      </div>
      <div className='task-1b'>
        <span className='number-7'>7</span>
        <div className='dot-1c' />
      </div>
      <div className='flex-row-cbf'>
        <div className='task-1d'>
          <span className='number-8'>8</span>
          <div className='dot-1e' />
        </div>
        <span className='additional-region'>경기 지역 추가 신설</span>
        <span className='environment-minister'>환경부장관</span>
      </div>
      <div className='task-1f'>
        <span className='number-9'>9</span>
        <div className='dot-20'>
          <span className='env'>env999</span>
          <span className='too-dirty'>너무 더러워요</span>
        </div>
      </div>
      <div className='task-21'>
        <span className='span-22'>10</span>
        <div className='dot-23'>
          <span className='span-recy'>recy212</span>
          <span className='span-trash-inquiry'>쓰레기통 고장 문의</span>
        </div>
      </div>
      <div className='task-24'>
        <div className='dot-25'>
          <span className='span-number-1'>1</span>
          <span className='span-number-2'>2</span>
          <span className='span-number-3'>3</span>
          <span className='span-number-4'>4</span>
          <span className='span-number-5'>5</span>
          <span className='span-number-6'>6</span>
          <span className='span-number-7'>7</span>
          <span className='span-next'>다음</span>
          <span className='span-previous'>이전</span>
        </div>
      </div>
      <button className='button'>
        <span className='span-write'>글쓰기</span>
      </button>
      <div className='home-indicator' />
    </div>
  );
}
