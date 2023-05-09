import React from 'react'

import CustomizedButton from './CustomizedButton'

const FileChooser = ({ file, setFile, readFile }) => {
  return (
    <div className="filechooser-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filechooser-label">
          Завантажити файл
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "Не вибрано жодного файлу" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomizedButton 
          type="outline"
          title="Лого"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomizedButton 
          type="filled"
          title="Поверхня"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FileChooser