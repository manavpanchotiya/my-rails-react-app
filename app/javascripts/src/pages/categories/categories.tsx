// Categories.tsx
import { useEffect, useState, useMemo } from 'react';
import { fetch, bulkDelete } from '@/apis/categoriesApi';
import { DataTable } from "@/components/data-table/data-table"
import { createColumns } from "@/components/data-table/column-def"
import { CategorySheet } from "./category-sheet"
import { toast } from "sonner";
import { Loader } from "@/components/common/loader"
import { useNavigate } from "react-router-dom";
// Define the Category type
type Category = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [rowSelection, setRowSelection] = useState({});

  const navigate = useNavigate();
  const selectedRows = useMemo(
    () => categories.filter((_, index) => rowSelection[index]),
    [rowSelection, categories]
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch();
      setCategories(response.data.categories);
      setPermissions(response.data.permissions)
    } catch (error) {
      if(error.response?.status === 403){
         navigate("/not-authorized");
      }
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  const { can_view, can_edit } = permissions;

  const handleNewCategory = () => {
    setCurrentCategory(null);
    setIsEditing(true);
  };

  const handleEditCategory = (category: Category) => {
    setCurrentCategory(category);
    setIsEditing(true);
  };

  const handleBulkDelete = async () => {
    if (selectedRows.length > 0) {
      try {
        const response = await bulkDelete({ ids: selectedRows.map(cat => cat.id) });
        await fetchCategories();
        const { notice } = response.data;
        toast.success(notice);
        setRowSelection({});
      } catch (err) {
        const error = err?.response?.data?.error || 'An error occurred';
        toast.error(error);
      } finally {
        setRowSelection({});
        setDialogOpen(false);
      }
    } else {
      toast.error("No rows selected for deletion.");
    }
  };

  const handleSaveCategory = (newCategory: Category) => {
    fetchCategories();
    setIsEditing(false);
  };

  const categoryColumns = createColumns<Category>([
  ...(can_edit
    ? [
        {
          key: "index",
          header: "ID",
          enableSelection: true,
          renderCell: (_value, _row, index) => index + 1,
        },
      ]
    : []),
  {
    key: "name",
    header: "Name",
  },
  {
    key: "created_at",
    header: "Created At",
    renderCell: (value) => new Date(value).toLocaleDateString(),
  },
  {
    key: "updated_at",
    header: "Updated At",
    renderCell: (value) => new Date(value).toLocaleDateString(),
  },
  ...(can_edit
    ? [
        {
          key: "actions",
          dropdownItems: [
            { disabled: !can_edit, label: "Edit", onClick: (row) => handleEditCategory(row) },
          ],
        },
      ]
    : []),
]);


  return (
    <div className="container mx-auto py-10">
      {loading ? (
        <Loader/>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DataTable<Category>
          data={categories}
          columns={categoryColumns}
          modelName="Category"
          filterPlaceholder="Search Categories..."
          filterColumns={[
            { name: "name", type: "text" },
          ]}
          disabled={!can_edit}
          selectedRows={selectedRows}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          onDelete={handleBulkDelete}
          onNewItem={handleNewCategory}
          isDialogOpen={isDialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}

      <CategorySheet
        open={isEditing}
        onOpenChange={setIsEditing}
        category={currentCategory}
        onSave={handleSaveCategory}
      />
    </div>
  );
}
