
import './LoginPage.css';
const userIdNullCheck = (id) => !!id;
const userPwNullCheck = (pw) => !!pw;

function loginTest(){
  const idValue = document.getElementById('id-input').value;
  const pwValue = document.getElementById('pw-input').value;
  
  if(!userIdNullCheck(idValue)){
    alert('혼나기전에 아이디 입력해라')
    return;
  }
  if(!userPwNullCheck(pwValue)){
    alert('혼나기전에 비번 입력해라')
    return;
  }


  const okId = idValue === 'nari0714';
  const okPw = pwValue === '0714';
  const isUser = okId && okPw;
  console.log({idValue,pwValue});
  if(!isUser) {
    alert('유저아님 ㅅㄱ')
    return false; 
  }else{
    alert('유저 확인');
    return true;
  }
}

function LoginPage(){
  return (
    <div className="login-wrapper">
      <div className='login-form'>
        <div className='login-form-title'> 
          <h1>HK Group Login Page</h1>
        </div>
        <div className='login-form-content'> 
          <div className='id-input-wrapper'>
            <label htmlFor="id-input">ID</label>
            <input type='text' id='id-input'></input>
          </div>
          <div className='pw-input-wrapper' >
            <label htmlFor='pw-input'>PW</label>
            <input type='password' autoComplete='false' id='pw-input'></input>
          </div>
        </div>
        <div className='login-form-login-btn'>
          <button onClick={loginTest}>Login</button>
        </div>
      </div>
    </div>
  )
}
export default LoginPage

