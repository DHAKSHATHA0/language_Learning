import { useState, useEffect } from "react";
import { authAPI } from '../api/client';
import '../styles/global.css';

function Login({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lastAttemptTime, setLastAttemptTime] = useState(null);

  // Clear form errors when user starts typing
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

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

  // Rate limiting to prevent brute force attacks
  const canAttemptLogin = () => {
    const now = Date.now();
    if (loginAttempts >= 5 && lastAttemptTime) {
      const timeDiff = now - lastAttemptTime;
      if (timeDiff < 300000) { // 5 minutes
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check rate limiting
    if (!canAttemptLogin()) {
      setErrors({ general: 'Too many failed attempts. Please wait 5 minutes before trying again.' });
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call the backend API using centralized API client
        const data = await authAPI.login(
          formData.email.trim().toLowerCase(),
          formData.password
        );

        if (data.token && data.user) {
          // Validate token structure before storing
          if (isValidJwtToken(data.token)) {
            // Securely store token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify({
              id: data.user.id,
              email: data.user.email,
              name: data.user.name
            }));
            
            // Success - notify parent component
            onLogin({
              id: data.user.id,
              email: data.user.email,
              name: data.user.name
            });
            
            // Reset login attempts on success
            setLoginAttempts(0);
            
            // Navigate to home with slight delay for better UX
            setTimeout(() => {
              onNavigate('home');
              setIsSubmitting(false);
            }, 300);
          } else {
            throw new Error('Invalid token format received from server');
          }
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        
        let errorMessage = 'An unexpected error occurred. Please try again.';
        
        if (error.message === 'Failed to fetch') {
          errorMessage = 'Unable to connect to server. Please check your connection and try again.';
        } else if (error.status === 400) {
          errorMessage = error.message || 'Invalid email or password. Please try again.';
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        setErrors({ general: errorMessage });
        
        // Update login attempts
        setLoginAttempts(prev => prev + 1);
        setLastAttemptTime(Date.now());
        
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  // Validate JWT token structure
  const isValidJwtToken = (token) => {
    if (!token || typeof token !== 'string') return false;
    
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    try {
      // Check if payload can be decoded
      const payload = parts[1];
      atob(payload); // This will throw if not valid base64
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
    
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[field];
        return newErrors;
      });
    }
    
    // Clear general errors when user starts typing
    if (errors.general) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors['general'];
        return newErrors;
      });
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({ email: '', password: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', width: '100%' }}>
      <div className="animate-in" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card" style={{ width: '100%' }}>
          <h2 style={{ fontSize: '36px', color: '#2f8ab4ff', marginBottom: '10px', textAlign: 'center' }}>
            Welcome Back!👋
          </h2>
          <p style={{ textAlign: 'center', color: '#315054ff', marginBottom: '30px' }}>
            Login to continue your learning journey
          </p>
          
          <form onSubmit={handleSubmit}>
            {/* General error message */}
            {errors.general && (
              <div style={{ 
                padding: '12px', 
                marginBottom: '16px', 
                backgroundColor: '#fee', 
                border: '1px solid #fcc', 
                borderRadius: '8px', 
                color: '#c33' 
              }}>
                {errors.general}
              </div>
            )}
            
            <div>
              <input
                className="input-field"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                disabled={isSubmitting}
                autoComplete="email"
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
                disabled={isSubmitting}
                autoComplete="current-password"
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