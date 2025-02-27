export const updateTaskStatus = async (taskId, status) => {
    await fetch(`/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
  };
  
  export const deleteTask = async (taskId) => {
    await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
  };
  