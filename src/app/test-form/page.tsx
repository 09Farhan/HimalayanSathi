import { useState, useEffect } from 'react';
import AdminPackageForm from './src/components/admin/AdminPackageForm';

export default function TestPage() {
  const [editingPackage, setEditingPackage] = useState<any>(null);

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setEditingPackage(data[0]);
      });
  }, []);

  if (!editingPackage) return <div>Loading...</div>;

  return (
    <AdminPackageForm 
      initialData={editingPackage} 
      onSubmit={async () => {}} 
      onCancel={() => {}} 
    />
  );
}
