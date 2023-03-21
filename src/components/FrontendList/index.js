import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './FrontendList.css';

export default function FrontendList({ frontendList, handleEdit, handleDelete }) {
  return (
    <ul className="frontendList">
      {frontendList.map((frontend, index) => (
        <li key={frontend}>
          {frontend}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

FrontendList.propTypes = {
  frontendList: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
