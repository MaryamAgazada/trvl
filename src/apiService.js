const servicesData = [
    {
      id: 1,
      name: 'Tatil Turlari',
      description: 'Dünyanin dört bir yanindaki güzel destinasyonlari keşfedin.',
    },
    {
      id: 2,
      name: 'Uçak Bileti Rezervasyonu',
      description: 'Uygun fiyatli uçak biletlerini rezerve edin.',
    },
    // Daha fazla hizmet ekleyebilirsiniz...
  ];
  
  // Sadece verileri döndüren basit bir fonksiyon
  export const getServicesData = () => {
    return servicesData;
  };