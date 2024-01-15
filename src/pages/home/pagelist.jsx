import React from 'react';
import { Link } from 'react-router-dom';

const PageList = () => {
  return (
    <div>
      <table>
        <thead>
          <th>페이지명</th>
          <th>내용</th>
        </thead>
        <tbody> 
          <tr>
            <td>main/main</td>
            <td>코레터 메인페이지</td>
          </tr>
          <tr>
            <td>home/pagelist</td>
            <td>각 파일 정의 페이지</td>
          </tr>
          <tr>
            <td>error/error</td>
            <td>에러페이지</td>
          </tr>
          <tr>
            <td>mailbox/mailbox</td>
            <td>내 편지지함</td>
          </tr>
          <tr>
            <td>mailbox/mailboxwrite</td>
            <td>편지지 디자인 선택, 작성 페이지</td>
          </tr>
          <tr>
            <td>letter/letter</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default PageList;
 