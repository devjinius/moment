const errorMessage = {
  0001: 'todo 목록을 불러올 수 없습니다.',
  0002: 'todo를 조회할 수 없습니다.',
  0003: 'todo를 생성할 수 없습니다.',
  0004: 'todo를 삭제할 수 없습니다.',
  0005: 'todo를 수정할 수 없습니다.',
  0006: '중요도를 조회할 수 없습니다.'
};
module.exports = code => {
  return `${errorMessage[code]}
CODE: ${code}`;
};
