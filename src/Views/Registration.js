import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/css/all.css';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      password2: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        password2: '',
      }
    };
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Lietotājvārdam jābūt vismaz 5 simbolus garam!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'E-pasta adrese ievadīta nepareizi!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Parolei jābūt vismaz 8 simbolus garai!'
            : '';
        break;
      case 'password2': 
        errors.password2 = 
          value.length < 8 
            ? 'Parolei jābūt vismaz 8 simbolus garai, un tai jāsakrīt ar iepriekš ievadīto paroli!'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

render() {
    const {errors} = this.state;
    return (
        <div>
{/* NAVIGATION */}
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Reģistrēšanās</NavLink>
                </li>
            </ul>
{/* REGISTRATION */}
            <div className='wrapper regWrapper conteiner'>
                <div className='form-wrapper'>
                     <h4>Reģistrēšanās</h4>
                     <form onSubmit={this.handleSubmit} noValidate ef={(el) => this.myFormRef = el}>
                        <div className='fullName'>
                            <label htmlFor="fullName">* Lietotājvārds:</label><br/>
                            <input type='text' name='fullName' onChange={this.handleChange} noValidate value={this.state.inputVal_1} />
                            {errors.fullName.length > 0 && 
                                <span className='error'>{errors.fullName}</span>}
                        </div>
                        <div className='email'>
                            <label htmlFor="email">* E-pasta adrese</label><br/>
                            <input type='email' name='email' onChange={this.handleChange} noValidate value={this.state.inputVal_2}/>
                            {errors.email.length > 0 && 
                                <span className='error'>{errors.email}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFfor="password">* Parole:</label><br/>
                            <input type="password" name="password" onChange={this.handleChange} noValidate value={this.state.inputVal_3}/>
                            {errors.password.length > 0 && 
                                <span className='error'>{errors.password}</span>}
                        </div>
                        <div className='password2'>
                            <label htmlFor="password2">* Atkārtota parole:</label><br/>
                            <input  type="password" name="password2" onChange={this.handleChange} noValidate value={this.state.inputVal_4}/>
                            {errors.password2.length > 0 && 
                                <span className='error'>{errors.password2}</span>}
                        </div>
                     <div>
                         <label htmlFor="country">Valsts:</label><br/>
                         <input id="country" type="text" value={this.state.inputVal_5}/>
                     </div>
                     <div>
                         <label htmlFor="abonement">* Abonements:</label><br/>
                         <select id="abonement" name="Abonements">
                             <option value="diena">Dienas abonements</option>
                             <option value="7diena">Septiņu dienu abonements</option>
                             <option value="nefiks">Nefiksēta darba vieta</option>
                             <option value="fiks">Fiksēta darba vieta</option>
                             <option value="rezidents">Rezidents</option>
                         </select>
                     </div>
                     <div>
                         <input className="registrationInput" type="checkbox" id="check-box" value="1" name="check-box"/>
                         <label className="registrationLabel" htmlFor="checkbox">Piekrītu datu apstrādei</label> 
                     </div> 
                     <div>
                          <NavLink exec to="/success"><input type="submit" className="btn btn-info submit" value="Reģistrēties"/></NavLink>
                     </div> 
                 </form>
                </div>
            </div>
        </div>
     )
  }
}
export default Registration;