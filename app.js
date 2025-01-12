// Email.js 초기화
emailjs.init('n1U2tH-qsH10wjPoz'); // 올바른 User ID 입력

document.getElementById('submitButton').addEventListener('click', function () {
  const name = document.getElementById('name').value;      // 사용자가 입력한 이름
  const phone = document.getElementById('phone').value;    // 사용자가 입력한 연락처
  const message = document.getElementById('message').value; // 사용자가 입력한 상담 내용

  // Email.js 템플릿 필드와 매핑
  const templateParams = {
    user_name: name,   // 템플릿에서 정의한 {{user_name}}과 매칭
    user_phone: phone, // 템플릿에서 정의한 {{user_phone}}과 매칭
    memo: message      // 템플릿에서 정의한 {{memo}}과 매칭
  };

  // Email.js 이메일 전송
  emailjs
    .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // 실제 Service ID와 Template ID로 대체
    .then((response) => {
      alert('상담 예약이 성공적으로 접수되었습니다.');
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
      console.error('FAILED...', error);
    });
});
