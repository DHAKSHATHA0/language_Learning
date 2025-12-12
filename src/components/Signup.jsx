import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Success - save user data and navigate
      onSignup({
        name: formData.name,
        email: formData.email
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
            Create Your Account
          </h2>
          <p style={{ textAlign: 'center', color: '#315054ff', marginBottom: '30px' }}>
            Join us and start your language journey!
          </p>
          
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="input-field"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
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