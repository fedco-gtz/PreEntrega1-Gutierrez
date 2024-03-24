import React from 'react';
// |-------------| //
// | Estilos CSS | //
// |-------------| //
import '../../styles/SubMenu.css'

const SubMenu = () => {
  return (
    <ul className="submenu">
      <li><a href="/">HOMBRE</a></li>
      <li><a href="/">MUJER</a></li>
      <li><a href="/">NIÑOS</a></li>
    </ul>
  );
}

export default SubMenu;