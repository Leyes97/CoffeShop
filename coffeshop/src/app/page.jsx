import Button from '@/commons/buttons/Button';
import React from 'react';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      {/* El contenido de tu página */}
      <div className="mt-[10vh]">
        <Button isActive={false}/>
      </div>
    </main>
  );
};

export default Home;
