export const falsyString = (value) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.trim() !== '') return value;
  
    return '-';
  };