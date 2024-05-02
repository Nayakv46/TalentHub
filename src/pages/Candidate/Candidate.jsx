import './candidate.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';

const Candidate = () => {

    const { currentUser, userLoggedIn, userType } = useAuth();

    const navigateTo = useNavigate();

    useEffect(() => {
        if(!userLoggedIn || userType !== 'candidate') {
            navigateTo('/auth/candidate');
            return;
        }
    });

    const [formData, setFormData] = useState({
        selectedValue: '',
        inputValue: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <main className="candidate">

            <div className='candidate__header'>

                <p className='candidate__user'>
                    Hello, {currentUser?.displayName ? currentUser.displayName : currentUser?.email}
                </p>

                <h4 className='candidate__title'>
                    Tell us about yourself
                </h4>
            </div>

            <div className='candidate__form'>
                <div className='form__state-wrapper'>
                    <select name="selectedValue" value={formData.selectValue} onChange={handleInputChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                        <option value="Svelte">Svelte</option>
                    </select>

                    <input type="number" name="inputValue" min="0" max="5" value={formData.inputValue} onChange={handleInputChange} />
                </div>
            </div>

            <p>selectedValue: {formData.selectedValue}</p>
            <p>inputValue: {formData.inputValue}</p>
        </main>
    )
}

export default Candidate