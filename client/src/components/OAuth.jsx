import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            // Ensure the user data is returned correctly
            if (result.user) {
                const res = await fetch('/api/auth/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL // Send the photo URL for avatar
                    }),
                });

                const data = await res.json();
                if (data.success) {
                    dispatch(signInSuccess(data.user)); // Ensure you're dispatching the correct user data
                    navigate('/'); // Redirect to home page or desired page
                } else {
                    console.error("Error signing in:", data.message);
                }
            }
        } catch (error) {
            console.error('Could not sign in with Google:', error);
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            type="button"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
            Continue with Google
        </button>
    );
}



