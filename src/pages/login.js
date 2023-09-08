import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isFormValid, setIsFormValid] = useState(true); // Validasi tambahan

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi apakah kedua bidang telah diisi
    if (!username || !password) {
      setLoginError('Mohon isi semua bidang.');
      setIsFormValid(false);
      return;
    }

    try {
      const response = await axios.post('https://dummyjson.com/docs/auth', {
        username,
        password,
      });

      // Cek status respons
      if (response.status === 200) {
        // Respons berhasil, Anda dapat melakukan tindakan sesuai kebutuhan,
        // seperti mengarahkan pengguna ke halaman selanjutnya atau menyimpan token otentikasi.
        console.log('Login berhasil');
      } else {
        // Respons tidak berhasil
        setLoginError('Login gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('Terjadi kesalahan dalam menghubungi server. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="block">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        {!isFormValid && (
          <div className="text-red-600">Mohon isi semua bidang.</div>
        )}
        {loginError && (
          <div className="text-red-600">{loginError}</div>
        )}
        <div className="flex flex-col">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <Link href="/home">Login</Link>
          </button>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500"
          >
            <Link href="/register">Register</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
