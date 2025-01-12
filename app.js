// Email.js 초기화
emailjs.init('n1U2tH-qsH10wjPoz'); // Email.js에서 제공한 User ID 입력

document.getElementById('submitButton').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Email.js를 통해 보낼 데이터 설정
  const templateParams = {
    from_name: name,
    phone: phone,
    message: message,
  };

  // Email.js 이메일 전송
  emailjs
    .send('service_ev61f49', 'service_ev61f49', templateParams)
    .then((response) => {
      alert('상담 예약이 성공적으로 접수되었습니다.');
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
      console.error('FAILED...', error);
    });
});