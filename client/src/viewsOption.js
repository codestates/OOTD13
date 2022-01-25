const viewOptions = [
  {
    subject: 'order',
    subjectName: '정렬',
    options: {
      'recent': '최신순', 
      'old': '과거순',
      'popular': '조회순',
      'like': '좋아요순'
    }
  },
  {
    subject: 'sex',
    subjectName: '성별',
    options: {
      1: 'man', 
      2: 'woman',
    }
  },
  {
    subject: 'weather',
    subjectName: '날씨',
    options: {
      1: 'rain', 
      2: 'cloud',
      3: 'snow',
      4: 'sun',
    }
  },
  {
    subject: 'season',
    subjectName: '계절',
    options: {
      1: 'SS', 
      2: 'FW',
    }
  },
  {
    subject: 'style',
    subjectName: '스타일',
    options: {
      1: 'casual', 
      2: 'dandy',
      3: 'street',
      4: 'hiphop',
      5: 'modern',
      6: 'classic'
    }
  }
]

export default viewOptions