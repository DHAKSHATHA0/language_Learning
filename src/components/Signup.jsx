import React, { useState, useEffect } from "react";
import { authAPI } from '../api/client';
import '../styles/global.css';

function Signup({ onNavigate, onSignup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupAttempts, setSignupAttempts] = useState(0);
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  // Rate limiting to prevent abuse
  const canAttemptSignup = () => {
    const now = Date.now();
    if (signupAttempts >= 3 && lastAttemptTime) {
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
    if (!canAttemptSignup()) {
      setErrors({ general: 'Too many signup attempts. Please wait 5 minutes before trying again.' });
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call the backend API using centralized API client
        const data = await authAPI.signup(
          formData.name.trim(),
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
            
            // Clear any existing authentication data
            clearAuthDataOnSignup();
            
            // Success - notify parent component
            onSignup({
              id: data.user.id,
              name: data.user.name,
              email: data.user.email
            });
            
            // Reset signup attempts on success
            setSignupAttempts(0);
            
            // Navigate to home with slight delay for better UX
            setTimeout(() => {
              onNavigate('home');
              setIsSubmitting(false);
            }, 300);
          } else {
            throw new Error('Invalid token format received from server');
          }
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        console.error('Signup error:', error);
        
        let errorMessage = 'An unexpected error occurred. Please try again.';
        
        if (error.message === 'Failed to fetch') {
          errorMessage = 'Unable to connect to server. Please check your connection and try again.';
        } else if (error.status === 400) {
          errorMessage = error.message || 'Email already in use or invalid data. Please try again.';
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        setErrors({ general: errorMessage });
        
        // Update signup attempts
        setSignupAttempts(prev => prev + 1);
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

  // Clear any stale authentication data
  const clearAuthDataOnSignup = () => {
    try {
      localStorage.removeItem('registeredCourses');
      // We keep token and user since we just set them
    } catch (e) {
      console.warn('Could not clear auth data:', e);
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
    setFormData({ 
      name: '', 
      email: '', 
      password: '', 
      confirmPassword: '' 
    });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', width: '100%' }}>
      
      <div className="animate-in" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card" style={{ width: '100%' }}>
          <h2 style={{ fontSize: '36px', color: '#2f8ab4ff', marginBottom: '10px', textAlign: 'center' }}>
            Create Your Account
          </h2>
          <p style={{ textAlign: 'center', color: '#315054ff', marginBottom: '30px' }}>
            Join us and start your language journey!
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
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                disabled={isSubmitting}
                autoComplete="name"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            
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
                placeholder="Password (min 6 characters)"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            
            <div>
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
            
            <button 
              type="submit" 
              className="btn btn-success" 
              style={{ width: '100%', marginTop: '10px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#315054ff' }}>
            Already have an account?{' '}
            <span 
              onClick={() => onNavigate('login')} 
              style={{ color: '#2f8ab4ff', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;