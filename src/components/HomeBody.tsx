import UserCard from '@/components/UserCard';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { User, FetchUsers } from '@/types/user';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function HomeBody() {

    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ name: '', role: '' });
  
    // Fetch users
    useEffect(() => {
      const loadUsers = async () => {
        try {
          const data = await FetchUsers();
          setUsers(data);
        } catch (error) {
          console.error('Failed to fetch users:', error);
        }
      };
      loadUsers();
    }, []);

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            Home
         </Box>
    );
}