// src/seeds/userSeeder.ts

import User from '../entities/user.models'; // Import model User
import bcrypt from 'bcrypt'; // Import bcrypt untuk mengenkripsi kata sandi

const seedUsers = async () => {
  try {
    // Data dummy pengguna
    const usersData = [
      {
        nim: 123456,
        email: 'user1@example.com',
        pass: 'password1', // Kata sandi harus dienkripsi sebelum disimpan
        role: 'anggota',
        bio: {
          fullName: 'User One',
          year: 1990,
          birthData: new Date('1990-01-01'),
          gender: 'laki-laki',
          address: 'Jalan Contoh No. 123',
        },
        contact: {
          phoneNumber: '1234567890',
          instagram: 'user1',
          linkdin: 'user1',
          github: 'user1',
        },
        isActive: true,
      },
      {
        nim: 789012,
        email: 'user2@example.com',
        pass: 'password2', // Kata sandi harus dienkripsi sebelum disimpan
        role: 'pengurus',
        bio: {
          fullName: 'User Two',
          year: 1995,
          birthData: new Date('1995-01-01'),
          gender: 'perempuan',
          address: 'Jalan Contoh No. 456',
        },
        contact: {
          phoneNumber: '0987654321',
          instagram: 'user2',
          linkdin: 'user2',
        },
        isActive: true,
      },
      // Tambahkan data pengguna lainnya sesuai kebutuhan
    ];

    // Enkripsi kata sandi untuk setiap pengguna
    const saltRounds = 10;
    for (const userData of usersData) {

        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
          console.log(`User with email ${userData.email} already exists`);
          continue; // Lanjutkan ke pengguna berikutnya jika sudah ada
        }
      const hashedPassword = await bcrypt.hash(userData.pass, saltRounds);
      userData.pass = hashedPassword;
    }

    // Tambahkan pengguna ke dalam basis data
    await User.insertMany(usersData);
    console.log('Seeder: Users seeded successfully');
  } catch (error) {
    console.error('Seeder error:', error);
  }
};

export default seedUsers;
