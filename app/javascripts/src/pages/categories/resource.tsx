import { useEffect, useState, useMemo } from 'react';
import { fetch, bulkDelete } from '@/apis/categoriesApi';
import { DataTable } from "@/components/data-table/data-table"
import { createColumns } from "@/components/data-table/column-def"
import { ResourceSheet } from "./resource-sheet"
import { toast } from "sonner";
import { Loader } from "@/components/common/Loader"
import { useNavigate } from "react-router-dom";
// Define the Resource type
type Resource = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export default function Category() {
  const modelName= 'Category'

  const [resource, setResource] = useState<Resource[]>([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentResource, setCurrentResource] = useState<Resource | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [rowSelection, setRowSelection] = useState({});

  const navigate = useNavigate();
  const selectedRows = useMemo(
    () => resource.filter((_, index) => rowSelection[index]),
    [rowSelection, resource]
  );

  useEffect(() => {
    fetchResource();
  }, []);

  const fetchResource = async () => {
    try {
      const response = await fetch();
      setResource(response.data.categories);
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

  const { can_edit } = permissions;

  const handleNewResource = () => {
    setCurrentResource(null);
    setIsEditing(true);
  };

  const handleEditResource = (resource: Resource) => {
    setCurrentResource(resource);
    setIsEditing(true);
  };

  const handleBulkDelete = async () => {
    if (selectedRows.length > 0) {
      try {
        const response = await bulkDelete({ ids: selectedRows.map(cat => cat.id) });
        await fetchResource();
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

  const handleSaveResource = () => {
    fetchResource();
    setIsEditing(false);
  };

  const ResourceColumns = createColumns<Resource>([
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
            { disabled: !can_edit, label: "Edit", onClick: (row) => handleEditResource(row) },
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
        <DataTable<Resource>
          data={resource}
          columns={ResourceColumns}
          modelName={modelName}
          filterPlaceholder="Search Categories..."
          filterColumns={[
            { name: "name", type: "text" },
          ]}
          disabled={!can_edit}
          selectedRows={selectedRows}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          onDelete={handleBulkDelete}
          onNewItem={handleNewResource}
          isDialogOpen={isDialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}

      <ResourceSheet
        open={isEditing}
        onOpenChange={setIsEditing}
        resource={currentResource}
        modelName={modelName}
        onSave={handleSaveResource}
      />
    </div>
  );
}
