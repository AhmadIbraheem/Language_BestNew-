import { signInWithGoogle } from '../../Firebase';

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