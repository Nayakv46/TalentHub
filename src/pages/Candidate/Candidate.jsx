import './candidate.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Candidate = () => {

    const { currentUser, userLoggedIn } = useAuth();

    const navigateTo = useNavigate();

    if(!userLoggedIn) {
        navigateTo('/');
        return;
    } else {

        console.log("here!", currentUser)

        return (
            <div className="candidate">
                Hello {currentUser.email}
            </div>
        )
    }
}

export default Candidate