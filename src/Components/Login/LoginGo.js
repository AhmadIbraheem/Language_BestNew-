import { signInWithGoogle } from '../../service/firebase';

const LoginGo = () => {
    return (
        <div>
            <button
                onClick={signInWithGoogle}
            >Sign in With Google</button>
        </div>
    )
}

export default LoginGo;