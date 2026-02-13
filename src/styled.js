import styled, { css } from 'styled-components';

// 1. SCSS의 @mixin이랑 똑같은 역할을 하는 놈들이에요 (공통 스타일)
const flex = (direction = 'row', justify = 'start', align = 'stretch', gap = '0', wrap = 'nowrap') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
  flex-wrap: ${wrap};
`;

const font = (size, weight = 400) => css`
  font-size: ${size};
  font-weight: ${weight};
`;

// 2. 변수 정의
const TAG_COLOR = '#d7fa00';
const GRAY = 'rgb(160, 160, 160)';

// 3. 컴포넌트 제작 시작!
export const HeaderContainer = styled.header`
  ${flex('row', 'space-between', 'center')}
  padding: 20px;
  background-color: black;

  ul {
    ${flex('row', 'center', 'center', '20px')}
    list-style: none;
    
    li {
      ${font('16px', 400)}
    }
  }
`;

export const Section = styled.section`
  ${flex('row', 'center', 'center', '20px', 'wrap')}
  padding: 20px 40px;
`;

export const ContentContainer = styled.div`
  ${flex('column', 'start', 'flex-start', '5px')}
  
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${font('12px')}
    color: ${TAG_COLOR};
    border: 1px solid ${TAG_COLOR};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${font('18px', 600)}
  }

  p {
    ${font('12px')}
    color: ${GRAY};
  }
`;