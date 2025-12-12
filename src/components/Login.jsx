import { useState } from "react";
import '../styles/global.css';

function Login({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Success - save user data and navigate
      onLogin({
        email: formData.email,
        name: formData.email.split('@')[0] // Use email username as name
      });
      
      // Small delay for better UX
      setTimeout(() => {
        onNavigate('home');
        setIsSubmitting(false);
      }, 500);
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({...errors, [field]: ''});
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="container animate-in">
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', color: '#2f8ab4ff', marginBottom: '10px', textAlign: 'center' }}>
            Welcome Back!👋
          </h2>
          <p style={{ textAlign: 'center', color: '#315054ff', marginBottom: '30px' }}>
            Login to continue your learning journey
          </p>
          
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="input-field"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            
            <div>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '10px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: '#315054ff', marginBottom: '10px' }}>
              Don't have an account?{' '}
              <span 
                onClick={() => onNavigate('signup')} 
                style={{ color: '#457e93ff', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
              >
                Sign Up here
              </span>
            </p>
            
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#f0f7ff', 
              borderRadius: '10px',
              border: '2px dashed #315054ff'
            }}>
              <p style={{ fontSize: '14px', color: '#2f8ab4ff', fontWeight: 'bold', marginBottom: '5px' }}>
                💡Unrealise Your Language Barrier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;