import React, { useState } from "react";
import axiosWithAuth from './utilis/axiosWithAuth';
//import EditForm from "./editColorForm";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors); // colors object passed in
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from... - colors object
    // where is is saved right now? - updateColors
    axiosWithAuth()
      .put(`colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        //console.log(res)
        const editted = colors.map(color => {
          if (color.id === res.data.id){
            return {
              ...color, 
              color: res.data.color,
              code: res.data.code
            }
          } else {
            return color;
          }
        })
        updateColors(editted);
        setEditing(false)
      })
      .catch(err => {console.error('color-put', err)})
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => {
        //console.log(res)
        const newColors = colors.filter(color => color.id !== res.data);
        updateColors(newColors);
      })
      .catch(err => { console.error('color-delete', err); })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        //<EditForm saveEdit={saveEdit} colorToEdit={colorToEdit} setColorToEdit={setColorToEdit} setEditing={setEditing} />
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
