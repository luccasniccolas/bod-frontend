// Home.tsx
import { fetchProducts } from '@/app/libs/data';
import { Product } from '@/app/libs/definitions';
import { useRouter } from 'next/navigation';
import MainViewAdmin from '../ui/MainViewAdmin';
import AdminNavbar from '../ui/AdminNavbar';

const AdminPanel = async () => {
  
  return (
    <div>
        <AdminNavbar />
        <MainViewAdmin />
    </div>
  );
}

export default AdminPanel;
