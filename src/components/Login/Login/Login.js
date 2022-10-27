import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {

    const [error, setError] = useState('');
    const {signIn, setLoading, signInWithGoogle, signInWithGithub, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            form.reset();
            
            setError('');
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Your email is not verified, please verify it!')
            }
        })
        .catch( error => {
            console.error(error)
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            
            console.log(user);
        })
        .catch( error => {
            console.error('error', error)
        })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch( error => {
            console.error('error', error)
        })
    }

   

   

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button><br></br>
            <Button onClick={handleGoogleSignIn} className="border border-2 m-2" variant="light" type="submit"><FaGoogle></FaGoogle></Button>
            <Button onClick={handleGithubSignIn} className="border border-2 m-2" variant="light" type="submit"><FaGithub></FaGithub></Button>
            <br></br>
            <Form.Text>Sign in with Google or GitHub</Form.Text>
            <br></br>
            <Form.Text>
                Do you want to create a new accout? Please <Link to="/register">Register</Link>
            </Form.Text>

            <Form.Text className= "text-danger">
                {error}
            </Form.Text>
            
        </Form>
    );
};

export default Login;