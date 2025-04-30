export const saveToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFromLocalStorage = () => {
  const data = localStorage.getItem('favorites');
  try {
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error parsing favorites from localStorage:', error);
    return [];
  }
};