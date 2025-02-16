import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { submitLockerRegistration } from '../api/lockerRegistrationAPI';
import { FormInput } from './FormInput';

export default function LockerRegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [lockerNumber, setLockerNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMessage('');

    const formData = {
      fullName,
      email,
      lockerNumber,
      notes,
      submittedAt: new Date().toISOString()
    };

    console.log('Sending locker registration data:', formData);

    try {
      const data = await submitLockerRegistration(formData);
      console.log('Locker registration successful:', data);
      setMessage('Registration successful!');
      setFullName('');
      setEmail('');
      setLockerNumber('');
      setNotes('');
    } catch (error) {
      console.error('Error during locker registration:', error);
      Sentry.captureException(error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Full Name"
        id="fullName"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <FormInput
        label="Email Address"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        label="Locker Number"
        id="lockerNumber"
        value={lockerNumber}
        onChange={(e) => setLockerNumber(e.target.value)}
        required
      />
      <FormInput
        label="Additional Notes"
        id="notes"
        textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      {message && (
        <div className="mb-4 text-center text-sm text-green-600">
          {message}
        </div>
      )}
      <button
        type="submit"
        className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Register Locker'}
      </button>
    </form>
  );
}