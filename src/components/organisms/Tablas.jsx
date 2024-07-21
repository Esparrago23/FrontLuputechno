import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icons from "../Atomns/Icons";
import Input from "../Atomns/Input";
import Tablas from "../Atomns/Tablas";

function Tablas() {
  const { state } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const data = state?.data || [];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="flex bg-red-700">
        <div className="flex-1 bg-green-400">
          <Input searchValue={searchValue} setSearchValue={setSearchValue} loading={false} />
        </div>
        <div className="flex-1 bg-orange-600">
          <Icons image={"/Search.png"} />
        </div>
      </div>
      <div>
        {filteredData.length > 0 ? (
          <Tablas data={filteredData} />
        ) : (
          <p>No se encontró la información</p>
        )}
      </div>
    </div>
  );
}

export default Tablas;
