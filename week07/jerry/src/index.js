function handleLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessageElement = document.getElementById('error-message');

  // 간단한 유효성 검사
  if (username === '' || password === '') {
      errorMessageElement.textContent = 'Please enter both username and password.';
      return;
  }

  // 실제 로그인 로직 추가
  // 로그인 성공 여부를 확인
  if (username === 'user' && password === 'pass') {
      // 로그인 성공 시, 로그인 후 페이지로 이동 
      window.location.href = 'dashboard.html';
  } else {
      // 로그인 실패 시, 에러 메시지 표시
      errorMessageElement.textContent = 'Invalid username or password.';
  }
}