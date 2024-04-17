import './register.css';

const Register = () =>{
  return(
    <div className='register'>
      <div className='okno-reg'>
        
        <div className='regis-text'>
          <h1><b>Регистрация</b></h1>
        </div>

        <div className='phone'>
          <h2>Телефон</h2>
          <input type="text" className='phone-ukaz'/>
        </div>
        
        <div className='FIO'>
          <h2>ФИО</h2>
          <input type="text" className='FIO-ukaz'/>
        </div>

        <div className='city'>
          <h2>Город</h2>
          <input type="text" className='city-ukaz'/>
        </div>

        <div className='password'>
          <h2>Пароль</h2>
          <input type="password" className='password-ukaz'/>
        </div>

        <div className='class123'>
          <div>
            <button type="button" className='reg-button'><h1>Заригестрироваться</h1></button>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Register;
